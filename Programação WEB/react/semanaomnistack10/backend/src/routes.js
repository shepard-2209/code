const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body; // informações vindas do corpo da requisição

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;
    console.log(name, avatar_url, bio, github_username); // dados vindos da resposta

    const techsArray = techs.split(',').map(tech => tech.trim());
    // trim remove espaçamentos antes e depois de uma string

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    })

    return response.json(dev);
});

module.exports = routes;
