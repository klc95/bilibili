<script>
	import "./static/iconfont/iconfont.css"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: calc(100vh - 90px);
	}	
	.container scroll-view {
		height: 100%;
	}
</style>
