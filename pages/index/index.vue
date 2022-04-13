<template>
	<view class="content">
		<view v-show="!isLoading" class="header">
			<nav-bar></nav-bar>
			<tab :tabList="tabList" :subTabList="subTabList" @setContentId="getContentId"></tab>
		</view>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="video-list" :style="{'margin-top': tabId ? '124px' : '90px'}">
					<!-- <view class="video-item">
						<view class="video-item-content">
							<image src="@/static/pic.png" mode=""></image>
							<view class="video-item-count">
								<view class="play">
									<text class="iconfont icon-shipinbofangliang"></text>
									<span>12312</span>
								</view>
								<view class="barrage">
									<text class="iconfont icon-danmushu"></text>
									<span>1112</span>
								</view>
							</view>
						</view>
						<view class="video-item-title">你好，旧时光</view>
					</view> -->
					<view class="video-item" v-for="(item, index) in topicContent" :key="index">
						<view class="video-item-content">
							<img :src="item.pic" mode="" />
							<view class="video-item-count">
								<view class="play">
									<text class="iconfont icon-shipinbofangliang"></text>
									<span>{{ item.play | formatCount }}</span>
								</view>
								<view class="barrage">
									<text class="iconfont icon-danmushu"></text>
									<span>{{ item.video_review | formatCount }}</span>
								</view>
							</view>
						</view>
						<view class="video-item-title">{{ item.title }}</view>
					</view>
				</view>
				<view class="footer" v-show="!isLoading">
					<view>信息网络传播视听节目许可证：0910417</view>
					<view>网络文化经营许可证 沪网文【2019】3804-274号</view>
					<view>广播电视节目制作经营许可证：（沪）字第01248号</view>
					<view>增值电信业务经营许可证 沪B2-20100043</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { indexDetail, tabTitleList } from '../../common/api.js';
export default {
	data() {
		return {
			tabList: [],
			subTabList: [],
			topicContent: [],
			isLoading: true,
			tabId: 0,
		};
	},
	onLoad() {
		// topicList().then(res => {
		// 	console.log('topicList', res[1].data.list);
		// 	this.topicList = res[1].data.data;
		// });
		tabTitleList().then(res => {
			console.log("主题接口已调用",res[1].data)
			const arr = res[1].data
			for(let i=0; i<arr.length; i++){
				let tabItem = {}
				let subTabItem = {}
				console.log(i)				
				tabItem.tabId = arr[i].tabId;
				// console.log('arr[i].tabId;',arr[i].tabId);	
				tabItem.tabTitle = arr[i].tabTitle;
				// console.log('arr[i].tabTitle;',arr[i].tabTitle)
				this.tabList.push(tabItem)
				subTabItem = arr[i].subTabList;
				this.subTabList.push(subTabItem);
				// console.log('this.subTabList',this.subTabList)
				// console.log('this.tabList',this.tabList)
			}
			
		})
		indexDetail().then(res => {
			setTimeout(() => {
				// console.log('indexDetail', res[1].data.data);
				this.topicContent = res[1].data.data;
				this.isLoading = false;
			}, 1000)
		});
	},
	methods: {
		getContentId(val) {
			console.log("tab组件传回来的contentId收到了",val)
			this.tabId = val.tabId;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	.header {
		position: fixed;
		width: 100%;
		z-index: 100;
		background-color: #fff;
		top: 0;
	}
	.video-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-bottom: 20px;
		.video-item {
			width: 45%;
			height: 140px;
			font-size: 12px;
			padding: 8px 5px;
			.video-item-content {
				position: relative;
				img {
					width: 100%;
					height: 110px;
				}
				.video-item-count {
					color: #ffffff;
					display: flex;
					position: absolute;
					padding-left: 6px;
					bottom: 5px;
					text {
						margin-right: 5px;
					}
					.play {
						display: flex;
						justify-content: center;
						margin-right: 40px;
					}
					.barrage {
						display: flex;
						justify-content: center;
					}
				}
			}
			.video-item-title {
				height: 33px;
				font-size: 3.2vw;
				color: #212121;
				margin-top: 6px;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f4f4f4;
		padding: 12px 5px;
		view {
			color: #999;
			font-size: 12px;
			line-height: 24px;
			
		}
	}
}
</style>
