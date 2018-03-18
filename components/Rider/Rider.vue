<template>
	<ul class="rider">
		<li class="section" v-for="section in rider" :key="section.name" v-once>
			<h3 v-once>{{ section.name }}</h3>
			<p class="content" v-if="section.content" v-once>{{ section.content }}</p>
			<ul class="contents" v-if="section.contents" v-once>
				<li class="item" v-for="(item, index) in section.contents" :key="index" v-once>
					<span :class="key" v-if="!item.contents" v-for="(value, key) in item" :key="key">{{ value }}</span>
					<h4 v-if="item.contents && item.name" v-once> {{ item.name }}</h4>
					<ul v-if="item.contents" v-once>
						<li class="item" v-for="(item, index) in item.contents" :key="index" v-once>
							<span :class="key" v-if="!item.contents" v-for="(value, key) in item" :key="key">{{ value }}</span>
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
		margin: 0;
		padding: 0;
	}

	.item {

		.quantity {
			order: 1;
		}

		.name {
			order: 2;
			font-weight: bold;
		}

		.spec {
			order: 3;
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
