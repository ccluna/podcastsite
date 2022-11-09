/* eslint-disable no-unused-vars */

import { name } from 'ejs';
import express, { response } from 'express';
import { request } from 'http';
import * as EpisodeService from './EpisodeService.js';
import minify from 'express-minify';
import compression from 'compression';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join('./public')));
app.use(minify());
app.use(compression());

app.set('view engine', 'ejs'); //resposável por resderizar os arquivos HTML
app.set('views', './views');

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
	const episodes = EpisodeService.getEpisodes();
	response.render('pages/home', { title: 'Admirável Cristão Novo', episodes }); // o render é o parâmetro que lerá os arquivos ejs
});

app.get('/about', (request, response) => {
	response.render('pages/about', { title: 'Sobre'}); // o render é o parâmetro que lerá os arquivos ejs
});

app.get('/episodes/:episodeId', (request, response) => {
	const episodeId = request.params.episodeId;
	const episode = EpisodeService.getEpisodesById(episodeId);
	const title = (episode) ? episode.title : 'Hummm... Parece que esse episódio não foi ao ar ainda...';
	response.render('pages/episodes', { title, episode,});
});





