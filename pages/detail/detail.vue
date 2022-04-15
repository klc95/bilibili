<template>
	<view class="detail">
		<view class="detail-header">
			<nav-bar></nav-bar>
			<view class="video-player">
				<view class="play-before-cover" v-show="!isplay">
					<image src="../../static/pic.png" mode=""></image>
					<view class="play-btn" @tap="isplay = !isplay"><text class="iconfont icon-bofangqi"></text></view>
					<view class="play-video-tips">
						<view class="vedio-data">
							<view class="viewed-count">69.4万观看</view>
							<view class="barrage-count">4500弹幕</view>
							<view class="video-pubdate">2小时前</view>			
						</view>
						<view class="play-duration">03:33</view>
					</view>
				</view>
				<view  class="playing-cover" v-show="isplay">
					<video webkit-playsinline="" playsinline="" preload="metadata" crossorigin="anonymous" src="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/45/32/575153245/575153245-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&amp;uipk=5&amp;nbs=1&amp;deadline=1650029967&amp;gen=playurlv2&amp;os=cosbv&amp;oi=1879738136&amp;trid=2dcbf09a6951484a92a1c42f30e1a1c7h&amp;platform=html5&amp;upsig=6653dd91d7aaca4621901d2313b7e531&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&amp;mid=252426761&amp;bvc=vod&amp;nettype=0&amp;bw=52834&amp;logo=80000000" poster="//i2.hdslb.com/bfs/archive/e25eca83cca00922fb21e0dec82e6c0f8bad2609.png@480w_270h_1c" style="opacity: 1"></video>
				</view>
			</view>
		</view>
		<view class="detail-body">
			<scroll-view scroll-y="true">
				<view class="video-info-title">
					<view class="title-left">
						<view class="label"><text class="iconfont icon-hot">热门</text></view>
						<view class="title">勇敢者的游戏</view>
					</view>
					<view class="title-right">
						<view @click="isFolder = !isFolder"><text class="iconfont" :class="isFolder ? 'icon-xiajiantou' : 'icon-shangjiantou'"></text></view>
					</view>
				</view>
				<view class="video-info-content">
					<view class="video-toolbar" v-show="isFolder">
						<view class="toolbar-left">
							<view class="avatar"><image src="../../static/pic.png" mode=""></image></view>
							<view class="user-nickname">艾薇儿</view>
						</view>
						<view class="toolbar-right">
							<view class="viewed-count">100万观看</view>
							<view class="thumbs-up-count">
								<text class="iconfont icon-thumbup-fill"></text>
								<view>3.5万</view>
							</view>
							<view class="collected-count">
								<text class="iconfont icon-shoucang-fill"></text>
								<view>1500</view>
							</view>
						</view>
					</view>
					<view class="video-folder" v-show="!isFolder">
						<view class="folder-header">
							<view class="header-left">
								<view class="avatar"><image src="../../static/pic.png" mode=""></view>
								<view class="user-info">
									<view class="user-nickname">艾薇儿</view>
									<view class="fans">999.5万粉丝</view>
								</view>
							</view>
							<view class="header-right"><view class="follow-btn">+ 关注</view></view>
						</view>
						<view class="folder-data">
							<view class="viewed-count">100万观看</view>
							<view class="barrage-count">498弹幕数</view>
							<view class="date">04-12</view>
							<view class="bvid">BV1c5411S7QF</view>
						</view>
						<view class="forbidden">
							<text class="iconfont icon-jinzhi"></text>
							<view>未经作者授权禁止转载</view>
						</view>
						<view class="desc">xxxxxxxxxx xxxxxxxxx xxxx xxxxxx</view>
						<view class="folder-footer">
							<view class="thumbs-up-count">
								<text class="iconfont icon-thumbup-fill"></text>
								<view>3.5万</view>
							</view>
							<view class="collected-count">
								<text class="iconfont icon-shoucang-fill"></text>
								<view>1500</view>
							</view>
							<view class="cache">
								<text class="iconfont icon-huancun"></text>
								<view>缓存</view>
							</view>
						</view>
					</view>
				</view>
				<view class="switcher-wrap">
					<view class="switcher-tab">
						<view class="recommend-tab">相关推荐</view>
						<view class="comment-tab">评论</view>
					</view>
					<view class="detail-comment">
						<view class="detail-comment-title">最新评论</view>
						<view class="detail-comment-item">
							<view class="detail-comment-img"><image src="../../static/pic.png" mode=""></image></view>
							<view class="detail-comment-content">
								<view class="detail-comment-head">
									<view class="detail-comment-name">
										<view>马飞飞</view>
										<view>2021-1-9</view>
									</view>
									<view class="detail-comment-like">
										1700
										<text class="iconfont icon-thumbup-fill"></text>
									</view>
								</view>
								<view class="detail-comment-text">天气转阴qq</view>
							</view>
						</view>
						<view class="detail-comment-item">
							<view class="detail-comment-img"><image src="../../static/pic.png" mode=""></image></view>
							<view class="detail-comment-content">
								<view class="detail-comment-head">
									<view class="detail-comment-name">
										<view>马飞飞</view>
										<view>2021-1-9</view>
									</view>
									<view class="detail-comment-like">
										1700
										<text class="iconfont icon-thumbup-fill"></text>
									</view>
								</view>
								<view class="detail-comment-text">诗和远方</view>
							</view>
						</view>
					</view>
				</view>
				<view class="footer">
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
export default {
	data() {
		return {
			isplay: false,
			isFolder: true
		};
	}
};
</script>

<style lang="less">
.detail {
	.detail-header {
		position: fixed;
		width: 100%;
		z-index: 100;
		background-color: #fff;
		top: 0;
		.video-player {
			width: 100%;
			height: 210px;
			position: relative;
			.play-before-cover {
				font-size: 15px;
				color: black;
				// width: 100%;
				// height: 210px;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				image {
					width: 100%;
					height: 100%;
					position: absolute;
					z-index: -100;
				}
				.play-btn {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					text {
						font-size: 50px;
						color: #fefefe;
					}
				}
				.play-video-tips {
					position: absolute;
					bottom: 0;
					padding: 0 12px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 93%;
					height: 30px;
					z-index: 100;
					font-size: 12px;
					color: #FFFFFF;	
					.vedio-data {
						display: flex;
						justify-content: space-around;
						align-items: center;
						view {
							margin-right: 12px;
						}
					}
					.play-duration {
						background-color: rgba(0,0,0,.3);
						border-radius: 4px;
						padding-left: 8px;
						padding-right: 8px;
						height: 22px;
						line-height: 22px;
					}
				}
			}
			.playing-cover {
				width: 100%;
				height: 210px;
				video {
					width: 100%;
					height: 100%;
				}
			}
		}
	
	}
	.detail-body {
		margin-top: 258px;
		width: 100%;
		scroll-view {
			height: 100%;
			.video-info-title {
				display: flex;
				justify-content: space-between;
				margin-top: 1.86667vw;
				padding: 0 3.2vw;
				.title-left {
					display: flex;
					font-size: 16px;
					font-weight: 400;
					color: #212121;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 86.66667vw;
					height: 6.4vw;
					line-height: 6.4vw;
					.label {
						padding: 0 1.6vw;
						height: 5.33333vw;
						line-height: 5.33333vw;
						color: #fb7299;
						background: #f4f4f4;
						border-radius: 3.2vw;
						vertical-align: middle;
						margin-top: 0.53333vw;
						text {
							font-size: 10px;
						}
					}
					.title {
						padding-left: 12px;
					}
				}
				.title-right {
				}
			}
			.video-info-content {
				padding: 2.93333vw 3.2vw;
				.video-toolbar {
					font-size: 12px;
					color: #999;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.toolbar-left {
						display: flex;
						color: #212121;
						.avatar {
							width: 5.33333vw;
							height: 5.33333vw;
							border-radius: 50%;
							overflow: hidden;
							margin: 0 9px;
							image {
								width: 100%;
								height: 100%;
							}
						}
						.user-nickname {
							line-height: 5.33333vw;
						}
					}
					.toolbar-right {
						display: flex;
						color: #999999;
						.thumbs-up-count,
						.collected-count {
							display: flex;
							margin-left: 25px;
							text {
								margin-right: 5px;
							}
						}
					}
				}
				.video-folder {
					// margin-top: 2.93333vw;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					.folder-header {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.header-left {
							display: flex;
							// justify-content: flex-start;
							.avatar {
								display: flex;
								align-items: center;
								width: 9.6vw;
								height: 9.6vw;
								border-radius: 50%;
								overflow: hidden;
								margin-right: 9px;
								image {
									width: 100%;
									height: 100%;
								}
							}
							.user-info {
								display: flex;
								flex-direction: column;
								justify-content: flex-start;
								.user-nickname {
									font-size: 14px;
								}
								.fans {
									font-size: 12px;
									color: #999999;
								}
							}
						}
						.header-right {
							display: flex;
							align-items: center;
							justify-content: center;
							.follow-btn {
								text-align: center;
								width: 17.6vw;
								height: 6.4vw;
								border: 1px solid #fb7299;
								color: #fb7299;
								border-radius: 1.06667vw;
								line-height: 6.4vw;
								font-size: 3.46667vw;
							}
						}
					}
					.folder-data {
						display: flex;
						// justify-content: space-around;
						font-size: 12px;
						color: #999999;
						margin-top: 2.66667vw;
						view:not(:last-of-type) {
							margin-right: 2.13333vw;
						}
					}
					.forbidden {
						display: flex;
						font-size: 3.2vw;
						color: #999;
						line-height: 4.8vw;
						margin-top: 2.13333vw;
						text {
							font-size: 3.73333vw;
							color: #fb7299;
							vertical-align: middle;
							margin-right: 0.8vw;
						}
					}
					.desc {
						font-size: 3.2vw;
						line-height: 4.8vw;
						color: #999;
						padding-top: 1.33333vw;
						white-space: pre-wrap;
					}
					.folder-footer {
						display: flex;
						padding: 2.93333vw  0 ;
						color: #999;
						font-size: 0;
						justify-content: flex-start;
						.thumbs-up-count,
						.collected-count,
						.cache {
							display: flex;
							font-size: 12px;
							justify-content: flex-start;
							margin-right: 12px;
							text {
								// font-size: 15px;
								height: 15px;
								margin-right: 1.33333vw;
							}
						}
					}
				}
			}
			.switcher-wrap {
				.switcher-tab {
					display: flex;
					flex-direction: row;
					justify-content: space-evenly !important;
					align-items: center;
					padding: 0 4.26667vw;
					border-top: 1px solid #e7e7e7;
					height: 8.53333vw;
					font-size: 14px;
					color: #505050;
					.activated {
						color: #fb7299;
						border-bottom: 2px solid #fb7299;
					}
					.unactivated {
						color: #505050;
					}
				}

				.detail-comment {
					.detail-comment-title {
						font-size: 12px;
						color: #999999;
						margin: 0 15px;
					}
					.detail-comment-item {
						display: flex;
						margin-bottom: 28rpx;
						padding: 12px 12px 10px 4px;
						.detail-comment-img {
							width: 33px;
							height: 33px;
							border-radius: 50%;
							overflow: hidden;
							margin: 0 9px;
							image {
								width: 100%;
								height: 100%;
							}
						}
						.detail-comment-content {
							flex: 1;
							color: #cac9cd;
							.detail-comment-head {
								display: flex;
								justify-content: space-between;
								.detail-comment-name {
									view:nth-child(1) {
										font-size: 12px;
									}
									view:nth-child(2) {
										font-size: 10px;
									}
								}
								.detail-comment-like {
									font-size: 30rpx;
								}
							}
							.detail-comment-text {
								line-height: 20px;
								color: black;
								font-size: 28rpx;
								margin-top: 8px;
								border-bottom: 1px #f4f5f7 solid;
								padding-bottom: 20px;
							}
						}
					}
				}
			}
			.footer {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 12px 5px;
				view {
					color: #999;
					font-size: 12px;
					line-height: 24px;
				}
			}
		}
	}
}
</style>
