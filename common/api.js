import { baseUrl } from "./config.js"

// 主题分类数据	
export function tabTitleList() {
	return uni.request({
		url: `${baseUrl}/tab/title/list`,
		method: 'GET'
	});
}

// 主页数据
// https://www.fastmock.site/mock/bd725f8a6131d8bf36e6cfb950286243/bilibili/topic/detail?uid=1
export function indexDetail() {
	return uni.request({
		url: `${baseUrl}/index/detail`,
		method: 'GET'
	});
}

// 其他主题页数据 
// https://www.fastmock.site/mock/bd725f8a6131d8bf36e6cfb950286243/bilibili/topic/detail?uid=2&id=1
export function otherDetail(uid, id){ // 歌曲的详情信息
	return uni.request({
		url : `${baseUrl}/other/detail?uid=${uid}&id=${id}`,
		method : 'GET'
	})
}


// 热搜
export function searchHot() {
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET',
		data: {},
	});
}

