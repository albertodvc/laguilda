const webpack = require('webpack');
const path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
	title: 'Off Limits | laGuildaobscenica',
	meta: [
	  { charset: 'utf-8' },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'OffLimits, la guilda obscenica, la guildaobscenica, laguildaobscenica, teatro, danza, musica, flamenco' },
		{ property: 'og:title', content: 'OffLimits' },
		{ property: 'og:description', content: 'OffLimits es un primer acercamiento escénico al intercambio epistolar entre el filósofo Günther Anders y Claude Eatherly a propósito de la Bomba, es decir, a propósito de la primera bomba atómica de la Historia.' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'http://laguildaobscenica.net' },
		{ property: 'og:image', content: 'http://laguildaobscenica.net/img/preview.jpg' },
	],
	link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  generate: {
		dir: 'tmp'
  },
  build: {
	/*
	** Run ESLint on save
	*/
		extend (config, { isDev, isClient }) {
			const vueLoader = config.module.rules.find(
				({loader}) => loader === 'vue-loader')
			const { options: {loaders} } = vueLoader || { options: {} }
			if (loaders) {
				for (const loader of Object.values(loaders)) {
					changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
				}
			}
			config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
			console.log('my config', config.module.rules[4].use[3].options)
  	}
	}
}

function changeLoaderOptions(loaders) {
	if (loaders) {
		for (const loader of loaders) {
			if (loader.loader === 'sass-loader') {
				Object.assign(loader.options, {
					includePaths: [
						path.join(process.cwd(), 'node_modules', 'compass-mixins', 'lib'),
						path.join(process.cwd(), "styles")
					]
				})
			}
		}
	}
}
