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
	<nav>
		<div role="button" class="navigator-toggle" v-on:click="navExpanded = !navExpanded">
			<toggle :expanded="navExpanded"/>
		</div>
		<ul class="navigator" :class="{'is-open': navExpanded}">
			<li v-for="page in pages" :key="page.link">
				<nuxt-link :to="page.link">{{ page.label }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>

	// @import "~compass/css3";
	// @import "~compass/utilities";
	@import "helpers";

	$top-bar-height: 50px;
	$side-menu-width: 200px;
	$top-bar-bg: green;
	$menu-animation-time: 1s;

	nav {
		display: block;
	}

	.navigator-toggle {
		background: red;
		display: inline-block;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 101;
		// .toggle {
		// 	transform: scale(0.5);
		// }

	}


	.navigator {

		position: fixed;
		top: $top-bar-height;
		bottom: 0;
		right: -$side-menu-width;
		background-color: $top-bar-bg;
		margin: 0;
		padding-top: 20px;
		width: $side-menu-width;
		z-index: 100;
		transition: all $menu-animation-time ease-in-out;
		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.7);

		&.is-open {
			right: 0;
		}

		@include breakpoint(958px) {
			background: none;
			position: static;
			margin: inherit;
			float: right;
			padding: 0 10px;
			width: auto;
			box-shadow: none;
		}
		li {
			padding: 0;
			@include breakpoint(958px) {
				display: inline-block;
			}
			a {
				text-decoration: none;
				color: white;
				display: block;
				padding: 20px 37px;
				@include breakpoint(958px) {
					padding: 32px 12px 0px 12px;
					text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
					margin: 0;

				}
				&:focus {
					outline : none;
				}
			}
			&:last-child {
				a {
					padding-right: 0;
				}
			}
		}
	}
</style>


