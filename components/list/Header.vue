<template>
   <view> 	
	<view class="sticky-box">
		<view class="list-header-before">
			前一天
		</view>
		<view class="list-header-date">
			04月05 星期天
		</view>
		<view class="list-header-after">
			后一天
		</view>
	</view>
	<view>
		<text style="line-height: 90px;" class="textcenter">
			1
			2
			3
			4
			5
			6
			7
			8
			9
			10
		</text>
	</view>
	</view>
 
</template>

<script>
	export default {
		components:{
		},
			data() {
				return { 
					 
				}
			},
			onLoad() {
				let that = this;
				//  高度自适应
				uni.getSystemInfo({
					success: function(res) {
						let calc = res.windowHeight;
						that.winHeight = calc;
						console.log(that.winHeight)
					}
				});
			},
			methods: {
				upper: function(e) {
				    console.log(e)
				},
				lower: function(e) {
				    // console.log(e)
				},
				scroll: function(e) {
				    // console.log(e)
				    this.old.scrollTop = e.detail.scrollTop
				},
				goTop: function(e) {
				    this.scrollTop = this.old.scrollTop
				    this.$nextTick(function() {
				        this.scrollTop = 0
				    });
				    uni.showToast({
				        icon:"none",
				        title:"纵向滚动 scrollTop 值已被修改为 0"
				    })
				}
	
			}
		}
</script>

<style lang="scss">
.sticky-box{
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
/* #ifndef APP-PLUS-NVUE */
	display: flex;
	position: -webkit-sticky;
	/* #endif */
	position: sticky;
	top: var(--window-top);
	z-index: 99;
	flex-direction: row;
	text-align: center;
	background-color: #FFFFFF;
	
	.list-header-before{
		width: 20%;
		height: 100rpx;
		// background-color: #007AFF;
	}
	.list-header-date{
		width: 60%;
		height: 100rpx;
		// background-color: #1AAD19;
	}
	.list-header-after{
		width: 20%;
		height: 100rpx;
		// background-color: #8A6DE9;
	}
	
}	

.textcenter{
	text-align: center;
	font-size: 18px;
}
</style>
