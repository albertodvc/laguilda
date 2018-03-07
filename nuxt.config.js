const webpack = require('webpack');
const path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
	title: 'Off Limits',
	meta: [
	  { charset: 'utf-8' },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  { hid: 'description', name: 'description', content: 'Off Limits' }
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
		dir: 'docs'
  },
//   router: {
// 	base: '/off-limits/'
//   },
  build: {
	/*
	** Run ESLint on save
	*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				const vueLoader = config.module.rules.find(
					({loader}) => loader === 'vue-loader')
				const { options: {loaders} } = vueLoader || { options: {} }
				if (loaders) {
					for (const loader of Object.values(loaders)) {
						changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
					}
				}
				config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
			}
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