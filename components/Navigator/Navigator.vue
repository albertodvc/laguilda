<template>
	<nav class="navigator">
		<ul>
			<li v-for="page in pages" :key="page.link">
				<nuxt-link :to="page.link">{{ page.label }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
	.navigator {
		background: black;
		color: white;

		ul {
			list-style: none;
		}

		a,
		a:visited {
			color: white;
		}
	}
</style>

<script>

export default {
	data: function () {
		return {
			pages: [
				{
					link: '/',
					label: 'Inicio'
				},
				{
					link: '/elespectaculo',
					label: 'El espectaculo'
				},
				{
					link: '/lacompañia',
					label: 'La compañia'
				},
				{
					link: '/fichatecnica',
					label: 'Ficha técnica'
				}
			]
		}
	}
}
</script>
