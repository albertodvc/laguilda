<template>
	<blockquote class="quote">
		<span class="content">{{ quote.content }}</span>
		<span class="name">{{ quote.autor }}</span>
	</blockquote>
</template>

<style lang="scss" scoped>

	@import 'variables';
	@import 'helpers';

	$quote--padding: $fluid-margin;
	$quote--color: $dimed-white-3;
	$quote__autor--color: $dimed-white-0;

	.quote {
		margin: 0;
		padding: $quote--padding;
		color: $quote--color;

		.content {
			font-weight: 200;
			font-style: italic;
			line-height: $body-line-height;

			&:before {
				content: '“';
				font-size: 120px;
				line-height: 1px;
				position: relative;
				top: 50px;
				left: -12px;
				color: $white;
			}
		}

		.name {
			display: block;
			text-align: right;
			font-weight: bold;
			color: $quote__autor--color;
			margin-top: 20px;
		}
	}

</style>

<script>

	export default {
		props: ['quote', 'idx'],
	}

</script>
