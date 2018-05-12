<script>

	import Toggle from './Hamburglar/Hamburglar.vue'

	export default {
		components: {
			Toggle
		},
		data: function () {
			return {
				navExpanded: false,
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
						link: '/lacompania',
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

<template>
	<nav class="navigator">
		<div role="button" class="menu-toggle-btn" v-on:click="navExpanded = !navExpanded">
			<toggle :expanded="navExpanded"/>
		</div>
		<ul class="menu" :class="{'is-open': navExpanded}">
			<li class="item" v-for="page in pages" :key="page.link" v-on:click="navExpanded = false">
				<nuxt-link :to="page.link">{{ page.label }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>

	// @import "~compass/css3";
	// @import "~compass/utilities";
	@import "variables";
	@import "helpers";

	$side-menu-width: 100%;
	$nav-bg: rgba($black, 0.9);
	$menu-animation-time: .2s;
	$navigator-font-family: Helvetica, Arial, sanserif;

	.navigator {
		display: flex;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 101;
		justify-content: flex-end;
		padding: 0 5px;
		height: $navigator-height;

		@media (min-width: 768px) {
			padding: $global-spacing $global-spacing * 3;
			width: 100%;
			background: $nav-bg;
		}

		.menu-toggle-btn {
			padding: 9px 5px;
			mix-blend-mode: exclusion;
			border-radius: 50%;
			background: $nav-bg;
			position: absolute;
			z-index: 101;

			@media (min-width: 768px) {
				display: none;
			}
		}

		.menu {
			position: fixed;
			top: 0;
			bottom: 0;
			right: calc(-#{$side-menu-width} - 4px);
			background: $nav-bg;
			margin: 0;
			padding: 40% 0 ;
			width: $side-menu-width;
			z-index: 100;
			transition: all $menu-animation-time ease-in-out;
			box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.7);
			color: $white;
			list-style: none;
			display: flex;
			justify-content: center;
			flex-direction: column;
			font-family: $navigator-font-family;

			a,
			a:visited,
			a:focus {
				color: $white;
				text-decoration: none;
			}

			&.is-open {
				right: 0;
			}

			.item {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			@media (min-width: 768px) {
				position: static;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
				padding: 0;
				background: none;
				box-shadow: none;

				.item {
					color: green;
				}
			}
		}
	}


</style>


