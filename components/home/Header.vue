<template>
	<view class=" header uni-bg-red">
		<view class="header-noticebar ">
			<uni-notice-bar  :scrollable="true" :single="true" :show-icon="true" text="好消息,好消息,本店优惠多多~~~" /> 		 
		</view>
	</view>
</template>

<script>
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
export default {
	components:{
		uniNoticeBar
	},
	data() {
		return {
			 
		}
	},
	onLoad() {

	},
	methods: {

	}
}	
</script>

<style  lang="scss">
.header{
    display: flex;
	flex-direction: row;
	justify-content: center;
	// align-items: flex-start;
	width: 100%; 
	// height: 80rpx;	
	// line-height: 80rpx;
	.header-noticebar{
		width: 100%;
		// height: 80rpx;
		// line-height: 80rpx;
		// background-color: #09BB07;
		// .laba-icon{
		// 	width: 0rpx;
		// 	height: 80rpx;
		// 	display: flex;
		// 	flex-direction: column;
		// 	justify-content: center;
		// 	background-color: #0A98D5;
		// 	.icon{
		// 		width: 50rpx;
		// 		height: 50rpx;
		// 		background-color: #808080;
		// 	}
		// }
	}
	// .header-right{
	// 	width: 90%;
	// 	height: 80rpx;
	// 	background-color: #1AAD19;
	// 	.header-font{
	// 		font-size: 30rpx;
	// 	}
	// }
}
	 
 

</style>
