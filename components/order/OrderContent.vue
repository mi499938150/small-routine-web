<template>
	<view> 
	<view class="order-content-wrapper">
		<view class="order-content">
			<view class="content-header border-bottom">
				<view class="header">
					<view class="header-middle">
						<view class="middle-first">
							星期天
						</view>
						<view class="middle-second">
							日期/礼拜
						</view>
					</view>
				</view>
				<view class="header ">
					<view class="header-middle">
						<view class="middle-first">
							09:00
						</view>
						<view class="middle-second">
							时间
						</view>
					</view>
				</view>
				<view class="header">
					<view class="header-middle">
						<view class="middle-first">
							04月12日
						</view>
						<view class="middle-second">
							2020年
						</view>
					</view>
				</view>
			</view>
		<view class="content-wapper border-bottom">	
			<view class="content-info ">
				<view class="info-column">
					<view class="column-first letter-space-one">
						服务项目
					</view>
					<view class="column-second"></view>
					<view class="column-three">洗剪吹</view>
				</view> 
				<view class="info-column">
					<view class="column-first letter-space-two">
						总计
					</view>
					<view class="column-second"></view>
					<view class="column-three">￥38</view>
				</view>
				<view class="info-column">
					<view class="column-first letter-space-three">
						订单号
					</view>
					<view class="column-second"></view>
					<view class="column-three">1233243546</view>
				</view>
				<view class="info-column">
					<view class="column-first letter-space-one ">
						下单时间
					</view>
					<view class="column-second"></view>
					<view class="column-three">2020年04-13 12:43:00</view>
				</view>
			</view>
		</view>	
			<view class="content-button">
				<view class="button-center justify">
					<view class="button-size">
                       					
					 </view>
					 <view class="button-size">
					    					
					  </view>
					<view class="button-size">
					   <navigator url="../../pages/order/cancelorder">	
						<van-button type="info" size="small">取消预约</van-button>
					   </navigator>
					</view>
					<view class="button-size">
					  <navigator url="../../pages/order/successorder">
						<van-button type="danger" size="small">等待消费</van-button>
					  </navigator>	
					</view>
				</view>
			</view>
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
			  active: 0
			}
		},
		onLoad() {
              
		},
		
		methods: {
		 onChange(e) {
			 console.log(e.detail.index)
		  }
	},
}
</script>

<style lang="scss">
.order-content-wrapper{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 750rpx;
	.order-content{
		width: 95%;
		height: 700rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #FFFFFF;
		.content-header{
			width: 100%;
			height: 250rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			// background-color: #07C160;
			.header{
				width: 33%;
				height: 250rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				// background-color: #000000;
				.header-middle{
					width: 100%;
					height:150rpx;
					display: flex;
					flex-direction: column;
					// background-color: #007AFF;
				.middle-first{
					width: 100%;
					height: 90rpx;
					line-height: 90rpx;
					font-size: 45rpx;
					// background-color: #1AAD19;
				}
				.middle-second{
				    width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 30rpx;
					color: #8E8E8E;
					// background-color: #BEBEBE;
				 }				
				}				
			}
		}
	.content-wapper{
		width: 100%;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// background-color: #000000;
		.content-info{
			width: 90%;
			height: 240rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// background-color: #8A6DE9;
			.info-column{
				width: 100%;
				height: 60rpx;
				line-height: 60rpx; 
				// text-align: center;
				display: flex;
				flex-direction: row;
				// background-color: #09BB07;
				.column-first{
					width: 30%;
					height: 60rpx;
					font-size: 28rpx;
					color: #8E8E8E;
					// background-color: #007AFF;
				}
				.column-second{
					width: 20%;
					height: 60rpx;
					// background-color: #2C405A;
				}
				.column-three{
					width: 50%;
					height: 60rpx;
					font-size: 28rpx;
					text-align: right;
					// background-color: #8A6DE9;
				}
			}
		}
	}
		.content-button{
			width: 100%;
			height: 150rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			// align-items: center;
			// background-color: #B2B2B2;
			.button-center{
				width: 100%;
				height: 70rpx;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				&.justify{
					justify-content: space-around;
				}
				// background-color: #1989FA;
				.button-size{
					width: 25%;
					height: 70rpx;
					line-height: 70rpx;
					// background-color: #1AAD19;
				}
			}
		}
	}
}
.border-bottom {
	border-bottom-width: 1rpx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
	}
//间距
.letter-space-one{
	letter-spacing: 5rpx; 
}
.letter-space-two{
	letter-spacing: 70rpx;
}
.letter-space-three{
	letter-spacing: 20rpx;
}
</style>
