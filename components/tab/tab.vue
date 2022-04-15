<template>
	<view class="tab-wrap">
		<view class="tabs">
			<view class="tab" v-for="item in tabList" :key="item.tabId" @tap="changeActiveIndex(item)" :class="activeIndex === item.tabId ? 'activated' : 'unactivated'">
				{{ item.tabTitle }}
			</view>
		</view>
		<view class="sub-tabs">
			<view class="sub-tab" v-for="(item, index) in subTabList" :key="index" v-if="activeIndex === item.showId">
				<view v-for="childItem in item.list" :key="childItem.typeId" @tap="changeActiveId(childItem)" :class="activeId === childItem.typeId ? 'activated' : 'unactivated'">
					{{ childItem.subTitle }}
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>

export default {
	name: 'tab',
	props: ['tabList', 'subTabList'],
	data() {
		return {
			activeIndex: 0,
			activeId: 0,
			contentId:{"typeId": 0}, //设置传回主页
				
			// 模拟数据
			// tabList: [
			// 	{
			// 		tabId: 0,
			// 		tabTitle: '首页'
			// 	},
			// 	{
			// 		tabId: 1,
			// 		tabTitle: '番剧'
					
			// 	}
			// ],
			// "subTabList": [
			// 	{},
			// 	{
			// 		"list": [
			// 			{
			// 				"typeId": 0,
			// 				"subTitle": '推荐'
			// 			},
			// 			{
			// 				"typeId": 1,
			// 				"subTitle": '连载动画'
			// 			},
			// 			{
			// 				"typeId": 2,
			// 				"subTitle": '完结动画'
			// 			},
			// 			{
			// 				"typeId": 3,
			// 				"subTitle": '资讯'
			// 			}
			// 		],
			// 		"showId": 1
			// 	}
			// ]		
		};
	},
	methods: {
		changeActiveIndex(item) {
			this.activeIndex = item.tabId;
			this.contentId.tabId = item.tabId;
			this.$emit('setContentId',this.contentId)
		},
		changeActiveId(childItem) {
			this.activeId = childItem.typeId;
			this.contentId.typeId = childItem.typeId;
			this.$emit('setContentId',this.contentId)
		}
	}
};
</script>

<style lang="less" scoped>
.tab-wrap {
	font-size: 14px;
	height: 40px;
	color: #505050;
	.activated {
		color: #fb7299;
		border-bottom: 2px solid #fb7299;
	}
	.unactivated {
		color: #505050;
	}
	.tabs {
		display: flex;
		justify-content: space-around;
		transform: translateX(0px);
		transition-duration: 300ms;
		margin-bottom: 10px;
		.tab {
			height: 40px;
			line-height: 40px;
			transition: border-bottom 500ms;
			transform: translateX(0px);
		}
	}
	.sub-tab {
		display: flex;
		justify-content: space-around;
	}
}
</style>
