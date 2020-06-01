<template>
	<view class="wapper"> 
	<view class="order-content-wrapper">
		<view class="order-content">
			<view class="content-header border-bottom">
				<view class="header">
					<view class="header-middle">
						<view class="middle-first">
							{{showDate}}
						</view>
						<view class="middle-second">
							日期/礼拜
						</view>
					</view>
				</view>
				<view class="header">
					<view class="header-middle">
						<view class="middle-first">
							{{serviceTime}}
						</view>
						<view class="middle-second">
							时间
						</view>
					</view>
				</view>
				<view class="header">
					<view class="header-middle">
						<view class="middle-first">
							{{date}}
						</view>
						<view class="middle-second">
							月/日
						</view>
					</view>
				</view>
			</view>
			<view class="content-info border-bottom">
				<view class="info-column border-bottom">
					<view class="column-left">
						{{serviceName}} ￥{{servicePrice}}
					</view>
					<view class="column-middle"></view>
					<view class="column-right">
						服务项目
					</view>
				</view>
				<view class="info-image">
					<view class="image">
						
					</view>
				</view>
			</view> 
			<view class="content-rule border-bottom">
				<view class="content-center">
					<view class="content-column">
						<view class="column">
							下单规则
						</view>
					</view>
					<view class="content-column">
						<view class="column">
							1.XXXXXXX
						</view>
					</view>
					<view class="content-column">
						<view class="column">
							2.XXXXXXXXX
						</view>
					</view>
					<view class="content-column">
						<view class="column">
							3.XXXXXXXX
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="button-wrapper">
			<view class="button-end">
<!-- 				<view class="button-left">
					<view class="button-text"></view>
				</view>
				<view class="button-right">
					<button class="button-css">
						按钮
					</button>
				</view> -->
			 <van-button type="danger" block>确定下单</van-button>
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
			  active: 0,
			  date:'',
			  serviceName:'',
			  servicePrice:'',
			  serviceTime:'',
			  //传过来的参数，来判断是否当前日期
			  passDate:'',
			  //显示日期
			  showDate:''
			}
		},
		onLoad(option) {
			this.serviceName = option.serviceName;
			this.servicePrice = option.servicePrice;
			this.serviceTime = option.serviceTime;
			this.date = this.changeDate(option.date);
			this.passDate = option.date;
			this.showDate = this.showWeek(option.date);
			console.log("show",this.showDate);
			console.log("date",this.date);
			
			// console.log(option.date);
			// console.log(option.serviceName); 
			// console.log(option.servicePrice); 
			// console.log(option.serviceTime); 
		},
		
		methods: {
		 onChange(e) {
			 console.log(e.detail.index)
		  },
		  changeDate(date){
			  let isDate = new Date(date);
			  console.log(isDate);
			  let month = isDate.getMonth()+1;
			  let day = isDate.getDate();
			  month = month > 9 ? month : '0' + month;;
			  day = day > 9 ? day : '0' + day;
			return `${month}月${day}日`;
		  },
		  getNowDate() {
			  var date = new Date();
			  var y = date.getFullYear();
			  var m = date.getMonth() + 1;
			  var d = date.getDate();
			  let isDate = date.getFullYear()+'-'+m+'-'+d;
			  m = m < 10 ? "0" + m : m; //月小于10，加0
			  d = d < 10 ? "0" + d : d; //day小于10，加0
			  return y + "-" + m + "-" + d;
		  	},
		  showWeek(date){
			  var nowDate = this.getNowDate();
			  console.log("nowDate",nowDate)
			  if(date == nowDate){
				  return "今天";
			  }
			  var dateObject = new Date(date);
			  var day = dateObject.getDay();
			  if(day == 1){
			  	return "星期一";
			  }
			  if(day == 2){
			  	return "星期二";
			  }
			  if(day == 3){
			  	return "星期三";
			  }
			  if(day == 4){
			  	return "星期四";
			  }
			  if(day == 5){
			  	return "星期五";
			  }
			  if(day == 6){
			  	return "星期六";
			  }
			  if(day == 0){
			  	return "星期天";
			  }
		  }
	},
}
</script>

<style lang="scss">
page{
	background-color: #E8E7E6;
}	
.wapper{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	margin-top: 20rpx;
.order-content-wrapper{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 95%;
	height: 1030rpx;
	background-color: #FFFFFF;
	.order-content{
		width: 100%;
		height: 880rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		// background-color: #007AFF;
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
				text-align: center;
				flex-direction: column;
				justify-content: center;
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
		.content-info{
			width: 100%;
			// height: 300rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// background-color: #8A6DE9;
			.info-column{
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				display: flex;
				flex-direction: row;
				text-align: center;
				// background-color: #09BB07;
				.column-left{
					width: 40%;
					height: 100rpx;
					// background-color: #E80080;
				}
				.column-middle{
					width: 30%;
					height: 100rpx;
					// background-color: #000000;
				}
				.column-right{
					width: 30%;
					height: 100rpx;
					color: #8E8E8E;
					// background-color: #1989FA;
				}
			}
			.info-image{
				width: 100%;
				height: 250rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// background-color: #C0C0C0;
			.image{
				width: 90%;
				height: 200rpx;
				// background-color: #1989FA;
			  }
			}
		}
		.content-rule{
			width: 100%;
			height: 350rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			// align-items: center;
			// background-color: #B2B2B2;
			.content-center{
				width: 100%;
				height: 280rpx;
				display: flex;
				flex-direction: column;
				font-size: 28rpx;
				// background-color: #1989FA;
				.content-column{
					width: 100%;
					height: 70rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					// background-color: #DD524D;
					.column{
						width: 90%;
						height: 70rpx;
						line-height: 70rpx;
						// background-color: #007AFF;
					}
				}
			}
		}
	}
  }
  .button-wrapper{
	  width: 100%;
	  height: 220rpx;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  // background-color: #000000;
	  .button-end{
		  width: 90%;
		  height: 90rpx;
		  line-height: 90rpx;
		  // display: flex; 
		  // flex-direction: row;
		  background-color: #09BB07;
		  // .button-left{
			 //  width: 75%;
			 //  height: 90rpx;
			 //  display: flex;
			 //  justify-content: center;
			 //  flex-direction: row;
			 //  align-items: center;
			 //  // background-color: #8A6DE9;
			 //  .button-text{
				//   width: 100%;
				//   height: 60rpx;
				//   // background-color: #007AFF;
			 //  }
		  // }
		 //  .button-right{
			//   width: 25%;
			//   height: 90rpx;
			//   // background-color: #000000;
			// .button-css{	
			// 	height: 90rpx;
			// 	line-height: 90rpx;
			// 	-webkit-transition-duration: 0.4s;
			// 	transition-duration: 0.4s;
			//     border: 4rpx solid #d81e06;
			// 	border-radius:5rpx;
			// 	background-color: #d81e06;
			// 	color: white;
			// }
		 //  }
	  }
  }
}
.border-bottom {
	border-bottom-width: 1rpx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
	}
</style>
