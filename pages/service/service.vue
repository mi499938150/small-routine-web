<template>
	<view class="service-warpper">
		<view class="service-header">
			<view class="header">
				<view class="header-left">
					<view class="header-left-center">
					<image class="icon-i" src="../../static/icons/icon-i-1.png"></image>
				    </view>
				</view>				
				<view class="header-right">
					<text>
						请选择
					</text>
				</view>
			</view>
		</view>
		<view class="service-select-warpper">
			<view class="service-select" @click="selectServiceValues">
			  <view class="select" >
				<view class="select-left">
					   <text>
						   {{serviceValues}}
					   </text>
				</view>
				<view class="select-right">
					<image class="icon-hot" src="../../static/icons/icon-hot-5.png">
					</image>
				</view>
			</view>
			</view>
			<view class="service-select">
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
				 serviceValues:"洗剪吹"
			}
		},
		onLoad() {
		},
		methods: {
			//选择服务项目并跳转主页
			selectServiceValues(){
				var selectValues = this.serviceValues;
				uni.setStorageSync("serviceValues",selectValues);
				// console.log("跳转主页");
				this.showToast();
				setTimeout(() =>{
					uni.switchTab({
						url:'../index/index'
					})
				},400)

			},
			showToast(){
				uni.showToast({
					title:"加载中...",
					icon:"loading",
					mask:true,
					duration:500
				});
			}
		}
	}	
</script>

<style lang="scss">
.service-warpper{
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.service-header{
		width: 100%;
		height: 120rpx;
		display: flex; 
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom-width: 20rpx;
		border-bottom-style: inset;
		border-bottom-style:  #CCCCCC #EFEFF4;
		// background-color: #000000;
		.header{
			width: 100%;
			height: 120rpx;
			line-height: 120rpx;
			// background-color: #007AFF;
			display: flex;
			flex-direction: row;
			.header-left{
				width: 60rpx;
				height: 120rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				background-color: #000000;
				.header-left-center{
					width: 60rpx;
					height: 80rpx;
				background-color: #000000;
				.icon-i{
					width: 60rpx;
					height: 70rpx; 
				 }
			   }
			}
			.header-right{
				width: 400rpx;
				height: 120rpx;
				// background-color: #1AAD19;
			}
		}
	}
	.service-select-warpper{
		width: 100%;
		height: auto;
		display: flex; 
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		// background-color: #000000;
		.service-select{
			width: 100%;
			height: 120rpx;
			line-height: 120rpx;
			// background-color: #007AFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-bottom-width: 5rpx;
			border-bottom-style: inset;
			border-bottom-style:  #CCCCCC #EFEFF4;
			.select{
			width: 90%;
			height: 120rpx;
			line-height: 120rpx;
			// background-color: #007AFF;
			display: flex;
			flex-direction: row;
			.select-left{
				width: 80%;
				height: 120rpx;
				// background-color: #666666;
			}
			.select-right{
				width: 20%;
				height: 120rpx;
				// background-color: #DD524D;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				.icon-hot{
					width: 60rpx;
					height: 60rpx;
					// background-color: #007AFF;
				}			
			}
		}
	}
}
}
</style>
