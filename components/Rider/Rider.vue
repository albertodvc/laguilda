<template>
	<ul class="rider">
		<li class="section" v-for="section in rider" :key="section.name" v-once>
			<h3 v-once>{{ section.name }}</h3>
			<p class="content" v-if="section.content" v-once>{{ section.content }}</p>
			<ul class="contents" v-if="section.contents" v-once>
				<li class="item"
					v-for="(item, index) in section.contents"
					:key="index"
					:class="{'with-childs': item.contents}"
					v-once>
					<span :class="[key, {'with-quantity': item.quantity}]" v-if="!item.contents" v-for="(value, key) in item" :key="key">{{ value }}</span>
					<h4 v-if="item.contents && item.name" v-once> {{ item.name }}</h4>
					<ul v-if="item.contents" v-once>
						<li class="item" v-for="(item, index) in item.contents" :key="index" v-once>
							<span :class="[key, {'with-quantity': item.quantity}]" v-if="!item.contents" v-for="(value, key) in item" :key="key">{{ value }}</span>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</template>

<style lang="scss" scoped>

	@import "variables";
	@import "helpers";

	.rider {
		list-style: none;
		background: $white;
		margin-bottom: 0;
		padding: 20px $fluid-margin;

		ul {
			padding-left: 0;
			margin-left: 0;
			list-style: none;
			padding-left: $fluid-margin;
		}

		.section > ul {
			padding-left: $fluid-margin;
		}
	}

	.item:not(.with-childs) {

		display: flex;
		flex-wrap: wrap;
		align-items: baseline;

		.quantity {
			order: 1;
			@extend %heading;
			margin-right: 5px;
			width: 40px;
			text-align: right;

			&:after {
				content: 'x';
				font-weight: 200;
				font-size: 22px;
			}
		}

		.name {
			order: 2;
			font-weight: bold;
			&:not(.with-quantity) {
				padding-left: 45px;
				position: relative;

				&:before {
					content: '';
					@extend %heading;
				}

				// &:after {
				// 	content: '';
				// 	position: absolute;
				// 	width: 10px;
				// 	height: 10px;
				// 	border-radius: 5px;
				// 	background: $black;
				// 	left: 20px;
				// 	top: calc(50% + 1px);
				// }
			}
		}


		.spec {
			order: 3;
			font-family: "Courier New", Courier, monospace;
			margin-left: 7px;
		}
	}
</style>

<script>

import RiderData from '~/db/rider'

export default {
	data: function () {
		return {
			rider: RiderData.rider,
			description: RiderData.description
		}
	}
}
</script>
