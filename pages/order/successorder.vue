<template>

	<view class="success-order-wrapper">
		<view class="success-order">
			<view class="success-order-first">
				<text>
					恭喜您！预约下单成功
				</text>
			</view>
			<view class="success-order-second">
				<button type="warn" @click="toOrder">点击前往查看</button>	
			</view>
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
              
		},
		
		methods: {
			toOrder(){
				console.log("前往Order");
				uni.switchTab({
					url: './order'
				})
			}
	},
}	
</script>

<style lang="scss">
page{
	background-color: #E8E7E6;
}	
.success-order-wrapper{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 900rpx;
	.success-order{
		width: 90%;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		// background-color: #000000;
		.success-order-first{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			// background-color: #007AFF;
		}
		.success-order-second{
			width: 100%;
			height: 100rpx;
			// background-color: #07C160;
		}
	}
}
</style>
