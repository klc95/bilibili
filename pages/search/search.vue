<template>
	<view class="search">
		<view class="search-bar">
			<view class="search-search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" maxlength="20" v-model="searchWord" :placeholder="recommendInfo" @confirm="handleToSearch(searchWord)" @input="handleToSuggest" />
				<text class="iconfont icon-chahao" v-show="searchType != 1" @tap="handleToClose"></text>
			</view>
			<view class="cancel" @click="handleToIndex">取消</view>
		</view>
		<view class="container">
			<scroll-view scroll-y="true">
				<block v-if="searchType == 1">
					<view class="search-area">
						<view class="search-hot">
							<view class="search-hot-head">大家都在搜</view>
							<view class="search-hot-list">
								<!-- <view class="search-hot-item">王小波</view> -->
								<view class="search-hot-item" v-for="(item, index) in searchHot" :key="index" @tap="handleToWord(item.keyword)">{{ item.keyword }}</view>
							</view>
						</view>
						<view class="search-history">
							<view class="search-history-head">历史搜索</view>
							<view class="search-history-list">
								<!-- <view class="search-history-item">
								<text class="iconfont icon-lishijilu_o"></text>
								<view class="item-content">晴天</view>
							</view> -->
								<view class="search-history-item" v-for="(item, index) in searchHistory" :key="index" @tap="handleToWord(item)">
									<text class="iconfont icon-lishijilu"></text>
									<view class="item-content">{{ item }}</view>
								</view>
								<view class="clear-search-history" @tap="handleClearHistory" v-show="searchHistory.length">清除历史记录</view>
							</view>
						</view>
					</view>
				</block>
				<block v-if="searchType == 2">
					<view class="search-suggest">
						<view class="search-suggest-item" v-for="i in 10">
							item
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { searchHot } from '../../common/api.js';
export default {
	data() {
		return {
			searchWord: '',
			searchType: 1,
			recommendInfo: '市场蔬菜价格普涨',
			searchHot: [],
			searchHistory: []
		};
	},
	onLoad() {
		uni.getStorage({
			key: 'searchHistory',
			success: res => {
				this.searchHistory = res.data;
			}
		}),
			searchHot().then(res => {
				if (res[1].data.code == 200) {
					this.searchHot = res[1].data.list;
					console.log(this.searchHot);
				}
			});
	},
	methods: {
		// 回到首页
		handleToIndex() {
			uni.navigateTo({
				url: '/pages/index/index'
			});
		},
		// 搜索关键词，推荐词条
		handleToSuggest(ev) {
			let value = ev.target.value;
			// console.log('e.target.value',value);
			if (!value) {
				this.searchType = 1;
				return;
			}
			// 这里需要一个接口返回推荐词条列表的接口
			console.log("推荐词条")
			this.searchType = 2;
		},
		// 清除搜索框
		handleToClose() {
			this.searchWord = '';
			this.searchType = 1;
		},
		// 获取搜索词
		handleToWord(word) {
			this.searchWord = word;
			this.handleToSearch(word);
		},
		// 添加搜索历史记录并发起搜索请求
		handleToSearch(word) {
			this.searchHistory.unshift(word);
			this.searchHistory = [...new Set(this.searchHistory)];
			if (this.searchHistory.length > 10) {
				this.searchHistory.length = 10;
			}
			uni.setStorage({
				key: 'searchHistory',
				data: this.searchHistory
			});
			// 这里需要一个接口进行搜索
		},
		// 清除历史缓存
		handleClearHistory() {
			uni.removeStorage({
				key: 'searchHistory',
				success: res => {
					this.searchHistory = [];
				}
			});
		}
	}
};
</script>

<style lang="scss">
.search {
	.search-bar {
		display: flex;
		justify-content: space-between;
		padding: 0 12px;
		height: 44px;
		.search-search {
			display: flex;
			align-items: center;
			width: 280px;
			margin-top: 7px;
			height: 30px;
			line-height: 30px;
			padding: 0 12px;
			background: #f4f4f4;
			border-radius: 2px;
			input {
				font-size: 13px;
				width: 230px;
				height: 15px;
				min-height: 15px;
			}
			text {
				margin-right: 7px;
			}
		}
		.cancel {
			font-size: 15px;
			color: #fb7299;
			float: right;
			line-height: 44px;
		}
	}
	.search-area {
		.search-hot {
			margin-top: 14px;
			margin-bottom: 25px;
			padding: 0 12px 0;
			.search-hot-head {
				font-size: 14px;
				margin-bottom: 18px;
				color: #999999;
			}
			.search-hot-list {
				font-size: 12px;
				display: flex;
				flex-wrap: wrap;
				view {
					padding: 10px 20px;
					color: #505050;
					border: 1px solid #ccc;
					border-radius: 25px;
					margin-right: 15px;
					margin-bottom: 10px;
				}
			}
		}
		.search-history {
			font-size: 14px;
			padding-left: 12px;
			border-top: 10px solid #f4f4f4;
			.search-history-head {
				height: 46px;
				line-height: 46px;
				color: #999999;
			}
			.search-history-list {
				.search-history-item {
					color: #505050;
					height: 44px;
					line-height: 44px;
					display: flex;
					border-bottom: 1px solid #ccc;
					text {
						margin-right: 8px;
					}
				}
				.clear-search-history {
					height: 46px;
					color: #999999;
					font-size: 14px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
	.search-suggest {
		background: #f4f4f4;
		padding-left: 12px;
		height: calc(100vh - 44px);
		.search-suggest-item {
			height: 44px;
			line-height: 44px;
			border-bottom: 1px solid #ccc;
			color: #212121;
			font-size: 13px;
		}
	}
}
</style>
