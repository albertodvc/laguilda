<template>
	<ul class="rider">
		<li class="section" v-for="section in rider" :key="section.name" v-once>
			<h3 v-once>{{ section.name }}</h3>
			<p class="content" v-if="section.content" v-once>{{ section.content }}</p>
			<ul class="contents" v-if="section.contents" v-once>
				<li class="item" v-for="item in section.contents">
					<span :class="key" v-if="!item.contents" v-for="(value, key) in item" :key="key">{{ value }}</span>
					<h4 v-if="item.contents && item.name"> {{ item.name }}></h4>
					<ul v-if="item.contents">
						<li class="item" v-for="item in item.contents">
							<span :class="key" v-if="!item.contents" v-for="(value, key) in item" :key="key">{{ value }}</span>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
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
