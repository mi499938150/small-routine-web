<template>
	<view class="describe-wrapper">
		<view class="wrapper-center">
			<view class="wrapper-texts">
				<view class="text-first">
					请选择预约日期
				</view>
				<view class="text-second">
				 <view class="text-icon">
				   <view class="icon">
					   &#xe61a;
				   </view>
				 </view>
				</view>
				<view class="text-three">					
<!-- 					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="">{{date}}</view>
					</picker>
					<text>
					星期三		
					</text> -->
					<view class="text-three-left">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="">{{date}}</view>
						</picker>
					</view>
					<view class="text-three-right">
						{{dateWeek}}
					</view>
				</view>
			</view> 
			<view class="wrapper-texts">
				<view class="text-first">
					请选择服务类型
				</view>
				<view class="text-second">
					<view class="text-icon">
					  <view class="icon">
						  &#xea30;
					  </view>
					</view>
				</view>
				<view class="text-three" @click="toService">	
					<text >
						{{serviceValue}}
					</text> 
				</view>
			</view>
			<view class="wrapper-button">
				<view class="button-stryle">
					   <button type="warn" @click="toList">查询服务</button>	
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
export default {
//接受父组件传递的参数，index
	props:{
		serviceValue:{
			type: String
		}
	},
	components:{
	},
		data() {
			const currentDate = this.getDate({
			    format: true
			})
			return { 
				 date: currentDate,
				 dateWeek:'',
				 //选择服务的默认值点击选择服务
				 selectValues:'点击选择服务'
			}
		},
		computed:{
			startDate() {
			    return this.getDate('start');
			},
			endDate() {
			    return this.getDate('end');
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			//跳转服务列表
			toService(){
				console.log("跳转详情页面...")
				uni.navigateTo({
					url:'../../pages/service/service'
				})
			},
			//跳转下单列表
			toList(){ 
				console.log("跳转列表");
				console.log("service:",this.serviceValue);
				
				if(this.serviceValue == "点击选择服务"){
					uni.showToast({
						title:"请选择服务名称",
						image:'../../static/icons/altert.png'
					});
					return;
				}
				this.showToast();
				setTimeout(() =>{
					uni.navigateTo({
						url:'../../pages/list/list?date='+this.date+'&service='+this.serviceValue,
					});
				},400)

			},
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.index = e.target.value
				console.log("bindPickerChange",this.index) 
			},
			bindDateChange: function(e) {
				this.showToast();
				setTimeout(() =>{
					this.date = e.target.value
					console.log("bindDateChange",this.date)
					var dateObject = new Date(this.date);
					var day = dateObject.getDay();
					console.log("getdat",dateObject.getDay())
					if(day == 1){
						this.dateWeek = "星期一";
					}
					if(day == 2){
						this.dateWeek = "星期二";
					}
					if(day == 3){
						this.dateWeek = "星期三";
					}
					if(day == 4){
						this.dateWeek = "星期四";
					}
					if(day == 5){
						this.dateWeek = "星期五";
					}
					if(day == 6){
						this.dateWeek = "星期六";
					}
					if(day == 0){
						this.dateWeek = "星期天";
					}
				},50)
			},
			bindTimeChange: function(e) {
			    this.time = e.target.value
				console.log("bindTimeChange",this.time)
			},
			getDate(type) {
				this.showToast();
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
				let isDay = day
				let isWeek =  year+'-'+month+'-'+day;
				// console.log("isWeek",isWeek)
				// console.log(isDay)
			    if (type === 'start') {
			        year = year - 60;
					console.log(year)
			    } else if (type === 'end') {
			        year = year + 2;
			    }

			    month = month > 9 ? month : '0' + month;;
			    day = day > 9 ? day : '0' + day;
				let isDate = date.getFullYear()+'-'+month+'-'+day;
				// console.log("isDate",isDate)
				// console.log("date",this.date)
				if(isDate == this.date) {
					this.dateWeek = '今天';
				}
			    return `${year}-${month}-${day}`;
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
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('//at.alicdn.com/t/font_1737346_n8x8nwdg6sp.ttf') format('truetype');
	}

.describe-wrapper{
	width: 100%;
	height: auto;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: row;
	justify-content: center;
	.wrapper-center{
		width: 90%;
		height: 440rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		// background-color: #333333;
		.wrapper-texts{
			width: 100%;
			height: 120rpx;
			// background-color: #DD524D;
			line-height: 120rpx;
			border-bottom-width: 5rpx;
			border-bottom-style: inset;
			border-bottom-style:  #CCCCCC #EFEFF4;
			display: flex; 
			// text-align: center;
			font-size: 34rpx;
			flex-direction: row;
			.text-first{
				width: 40%;
				height: 120rpx;
				text-align: center;
				// background-color: #007AFF;
			}
			.text-second{
				width: 15%;
				height: 120rpx;
				// text-align: center;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				// align-items: flex-end;
				align-items: center;
				// text-align: right;
				// background-color: #09BB07;
			    .text-icon{
					width: 50%;
					height: 50rpx;
					line-height: 50rpx;
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					align-items: flex-end;
					// line-height: 60px;
					// background-color: #8A6DE9;
					.icon{
						// font-weight: bold;
						font-family: texticons;
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.text-three{
			width: 45%;
			height: 120rpx;
			// color: #8a8a8a;
			display: flex;
			flex-direction: row;
			// background-color: #0A98D5;	
			.text-three-left{
				width: 65%;
				height: 120rpx;
				font-size: 35rpx;
				// background-color: #09BB07;
			}
			.text-three-right{
			    width: 35%;
				height: 120rpx;
				font-size: 28rpx;
				// background-color: #2C405A;
		    	}
			}
		}
		.wrapper-button{
			width: 100%;
			height: 160rpx;
			// background-color: #FF3333;
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			justify-content: center;
			.button-stryle{
				width: 100%;
				height: 120rpx;
				// background-color: #000000;
			}
		}
	}
	
}
</style>
