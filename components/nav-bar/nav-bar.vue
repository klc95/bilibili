<template>
	<view class="nav-bar">
			<view>
				<image src="@/static/logo.png" mode="" @tap="handleToIndex"></image>
			</view>
			<view class="nav-bar-icon">
				<text class="iconfont icon-sousuo" @tap="handleToSearch"></text>
			</view>
			<view class="nav-bar-tip">下载App</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nav-bar",
		data() {
			return {
				
			};
		},
		methods: {
			handleToIndex() {
				uni.navigateTo({
					url: "/pages/index/index"
				});
			},
			handleToSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>	
	.nav-bar {
		height: 48px; 
		display: flex;
		align-items: center;
		padding: 0 12px 0 18px;
		position: relative;
		image {
			width: 80px;
			height: 43px;
		}
		.nav-bar-icon {
			position: absolute;
			line-height: 48px;
			right: 120px;
		}
		.nav-bar-tip {
			font-size: 12px;
			color: #FFFFFF;
			width: 60px;
			height: 24px;
			text-align: center;
			line-height: 24px;
			position: absolute;
			right: 12px;
			border-radius: 10px;
			background-color: #ea7a99;
		}
	}
</style>
