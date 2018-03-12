<template>
	<div>
		<header>
			<h2>El espectaculo</h2>
		</header>
		<show/>
		<credits/>
	</div>
</template>

<script>

	import Show from '~/components/Show/Show.vue'
	import Credits from '~/components/Credits/Credits'

	export default {
		components: {
			Show,
			Credits
		}
	}
</script>
