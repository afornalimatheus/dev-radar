const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy = metodos existentes dentro de uma controller (GERALMENTE)

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async update(request, response) {
        const { github_username, name, bio } = request.body;

        let dev = await Dev.findOneAndUpdate({ github_username }, {name, bio});
        
        const returnUpdate = await Dev.findOne({ github_username });

        if(returnUpdate != null) {
            return response.json(returnUpdate);

        } else { 
            return response.json({ message: "Erro for update dev or dev not found." });
        }
    },

    async destroy(request, response) {
        const { github_username } = request.body;

        const returnFindDev = await Dev.findOne({ github_username });

        console.log(returnFindDev);
        return;
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username: github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
    
        return response.json(dev);
    }
}