<template>
	<ul class="credits">
		<li class="credit" v-for="credit in credits" :key="credit.key">
			<span class="key">{{ credit.key }}</span>
			<span class="value">{{ credit.value }}</span>
		</li>
	</ul>
</template>

<script>

	import Credits from '~/db/credits'

	export default {
		data: function () {
			return {
				credits: Credits
			}
		}
	}
</script>
