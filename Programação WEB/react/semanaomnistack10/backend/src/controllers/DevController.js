const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')
// o Controller deve ter no máximo 5 funções: index, show, store, update e destroy
// index: quando queremos mostrar uma lista deste recurso (No caso, de Devs)
// show: quando queremos mostrar um registro único
// store: quando queremos criar
// update: alterar
// destroy: deletar

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body; // informações vindas do corpo da requisição

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;
            console.log(name, avatar_url, bio, github_username); // dados vindos da resposta

            const techsArray = parseStringAsArray(techs);
            // trim remove espaçamentos antes e depois de uma string

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }



        return response.json(dev);
    }
}