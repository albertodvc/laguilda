<template>
    <ul class="quotes">
        <li v-for="(quote, index) in quotes" :key="quote.autor">
            <quote :quote="quote" :idx="index"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

	@import 'variables';
	@import 'helpers';

	.quotes {
		margin: 0;
		padding: 0;
		background: $dimed-black-0;
		list-style: none;

		@include breakpoint(1080px) {
			display: flex;
			padding: $fluid-margin;
		}

		li {
			@include breakpoint(1080px) {
				border: none;
			}
		}
	}

</style>

<script>

import Data from '~/db/off-limits'
import Quote from './Quote'

export default {
	components: {
		Quote
	},
	data: function () {
		return {
			quotes: Data.quotes
		}
	}
}
</script>
