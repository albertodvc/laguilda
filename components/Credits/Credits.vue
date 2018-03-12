<template>
	<ul class="credits">
		<li class="credit" v-for="credit in credits" :key="credit.value">
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
				credtis: Credits
			}
		}
	}
</script>
