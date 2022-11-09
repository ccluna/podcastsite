
const episodes = [
	{
		id: 1,
		chapter: 'Capítulo 1:',
		title: 'O Cristão e o Among Us',
		posted: '25/11/2020',
		transcribed: 'Nanana',
		img: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_episode400/10549364/10549364-1606168304625-4ae21070e8aa3.jpg',
		caption: 'Imagem amarelada do quadro "A Última Ceia", de Leonardo da Vinci, escrito "Há um impostor entre nós". Sobre a imagem, os dizeres "#01 - amongueiros mentirosos" e a marca do podcast em preto e branco e baixa opacidade.',
		audio: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2020-10-23/131390783-22050-1-7809ed33fe0a5.m4a',
		description: 'Salve agraciados do mundo inteiro e de outros mundo também! Sejam muito bem-vindos ao primeiríssimo episódio do Admirável Cristão Novo! No episódio de hoje, me junto com meu firemigo Raafa Beringui, do podcast Conversa na Calçada, para debatermos o jogo do momento: Among Us. O que a dinâmica desse jogo, baseado em mentiras e enganações, pode acarretar na vida de um xovem cristão? Será que realmente podemos jogar esse joguinho? E as outras mentirinhas que dizemos no nosso dia a dia? Será que nos serão imputadas no Grande Dia do Senhor? Confira isso e muito mais apertando esse play abençoado aí! Graça e Paz!!',
		transcript: '/transcript/1.ejs'

	},

	{
		id: 2,
		chapter: 'Capítulo 2: ',
		title: 'Quando a Zoeira Não Tem Fim... Mas Deveria',
		description: 'Salve agraciados do mundo inteiro e de outros mundo também! Sejam muito bem-vindos ao pior podcast cristão da podosfera cristã intergalática! No episódio de hoje, as primas Claudia Luna e Yasmin Luna, se unem para conversar sobre os crentes zoeiros que vemos por aí e sobre os crentes que respondem as zoeiras dos outros. Há como diferenciar piadas inofensivas de ofensas? Zoeiras gospels são apenas zoeiras ou são blasfêmias? Confira isso e muito mais apertando esse play abençoado aí! Graça e Paz!!',
		transcript: '/public/transcript/episode_2.txt',
	},

	{
		id: 3,
		title: 'Capítulo 3: A Sociedade Secreta do Jejum',
		description: 'Salve agraciados do mundo inteiro e de outros mundo também! Sejam muito bem-vindos ao pior podcast cristão da podosfera cristã intergalática. Hoje, Claudia Luna e a estagiária do podcast, Evelyn Olinda, desvendarão os segredos da sociedade secreta do jejum e conversarão sobre o clubinho secreto da vacina e sua influência na sociedade. Aperta o play abençoado aí, e vem com a gente! Graça e Paz!!',
	},

	{
		id: 4,
		title: 'Capítulo 4: Testando um Teste',
		description: 'Salve agraciados do mundo inteiro e de outros mundo também! Sejam muito bem-vindos ao pior podcast cristão da podosfera cristã intergalática. Hoje, Claudia Luna e a estagiária do podcast, Evelyn Olinda, desvendarão os segredos da sociedade secreta do jejum e conversarão sobre o clubinho secreto da vacina e sua influência na sociedade. Aperta o play abençoado aí, e vem com a gente! Graça e Paz!!',
	},
];

function getEpisodes() {
	return episodes;
}

function getEpisodesById(episodeId) {
	return episodes.find(episode => {
		return episode.id === Number(episodeId);
	});
}


export { getEpisodes, getEpisodesById };