<template>
	<view class="order-point-warpper">
		<view class="order-point">
			<text>
				当前没有待消费的订单
			</text>
		</view>
	</view>
	
</template>

<script> 

</script>

<style lang="scss">
	.order-point-warpper{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 900rpx;
		.order-point{
			width: 60%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			// background-color: #000000;
		}
	}
</style>
