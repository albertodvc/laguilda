module.exports = {
	extends: [
	  // add more generic rulesets here, such as:
	  // 'eslint:recommended',
	  'plugin:vue/recommended'
	],
	rules: {
	  // override/add rules settings here, such as:
	  // 'vue/no-unused-vars': 'error'
		//'vue/require-v-for-key': 1
		"vue/require-v-for-key": "off"
	}
}
