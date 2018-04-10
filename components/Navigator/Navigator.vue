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
		<div role="button" class="navigator-toggle-btn" v-on:click="navExpanded = !navExpanded">
			<toggle :expanded="navExpanded"/>
		</div>
		<ul class="navigator" :class="{'is-open': navExpanded}">
			<li v-for="page in pages" :key="page.link" v-on:click="navExpanded = false">
				<nuxt-link :to="page.link">{{ page.label }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>

	// @import "~compass/css3";
	// @import "~compass/utilities";
	@import "helpers";

	$side-menu-width: 100%;
	$nav-bg: rgba(0, 0, 0, 0.9);
	$menu-animation-time: .2s;

	nav {
		display: flex;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 101;
		justify-content: flex-end;
		padding: 5px;
	}

	.navigator-toggle-btn {
		padding: 9px 5px;
		mix-blend-mode: exclusion;
		border-radius: 50%;
		background: $nav-bg;
		position: absolute;
		z-index: 101;
	}


	.navigator {
		position: fixed;
		top: 0;
		bottom: 0;
		right: calc(-#{$side-menu-width} - 4px);
		background-color: $nav-bg;
		margin: 0;
		padding: 40% 0 ;
		width: $side-menu-width;
		z-index: 100;
		transition: all $menu-animation-time ease-in-out;
		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.7);
		color: white;
		list-style: none;
		display: flex;
		justify-content: center;
		flex-direction: column;

		a,
		a:visited,
		a:focus {
			color: white;
			text-decoration: none;
		}

		&.is-open {
			right: 0;
		}

		li {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}



		// @include breakpoint(958px) {
		// 	background: none;
		// 	position: static;
		// 	margin: inherit;
		// 	float: right;
		// 	padding: 0 10px;
		// 	width: auto;
		// 	box-shadow: none;
		// }
		// li {
		// 	padding: 0;
		// 	@include breakpoint(958px) {
		// 		display: inline-block;
		// 	}
		// 	a {
		// 		text-decoration: none;
		// 		color: white;
		// 		display: block;
		// 		padding: 20px 37px;
		// 		@include breakpoint(958px) {
		// 			padding: 32px 12px 0px 12px;
		// 			text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
		// 			margin: 0;

		// 		}
		// 		&:focus {
		// 			outline : none;
		// 		}
		// 	}
		// 	&:last-child {
		// 		a {
		// 			padding-right: 0;
		// 		}
		// 	}
		// }
	}
</style>


