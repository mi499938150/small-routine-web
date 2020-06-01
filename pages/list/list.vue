<template>
	<view class="wrapper-list">
		<view class="sticky-box">
			<view class="list-header-before" @click="beforeDate">
				前一天
			</view>
			<view class="list-header-date">
			  <view class="list-header-date-center">
				<view class="list-header-date-left">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="">{{date}}</view>
					</picker>
					<!-- {{selDateTimes}} -->
				</view>
				<view class="list-header-date-right">
					{{dateWeek}}
				</view>
			  </view>
			</view>	
			<view class="list-header-after" @click="afterDate">
				后一天
			</view>
		</view>
		
	<view class="wrapper-list-items">
		<scroll-view    :scroll-top="scrollTop" show-scrollbar="true"   scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		@scroll="scroll">
		<view class="list-items">
			<view class="items">
				<view class="items-first">
					<text class="first-time">
						{{serviceTime}}
					</text>
					<view class="first-icon">
						&#xe62a;
					</view>
				</view>
				<view class="items-second">
					<text class="second-time">
						{{serviceName}} ￥{{servicePrice}}
					</text>	 
					<view class="second-icon">
						<text class="icon-h">
							&#xe60f;
						</text>
					</view>
				</view>
				<view class="items-three">
					<view class="items-three-text">
						<text class="three-icon">
							&#xe638;
						</text>
						<text class="three-text">
							1222
						</text>
					</view>
					<view class="items-three-button">
					<van-button type="danger" size="small" @click="toDetail">去剪发</van-button>
					</view>
				</view>
			</view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		<view class="list-items">
			<view class="items"></view>
		</view>
		</scroll-view>
	</view>
	</view> 
</template>

<script>
// import ListHeader from '../../components/list/Header'
// import ListContent from '../../components/list/Listcontent'
export default {
	components:{
		
	},
		data() {
			const currentDate = this.getDate({
			    format: true
			})
			return { 
			scrollTop: 0,
			old: {
			    scrollTop: 0
			 },
			selDateTimes:"",
			date:"",
			dateWeek:'',
			serviceTime:'9:00',
			serviceName:'洗剪吹',
			servicePrice:'38'
			}
		},
		onLoad(option) {
			console.log("serviceValue:",option.service);
			this.date = option.date;		
			if(this.date != null){
				this.dateWeek = this.isWeek(this.date);
				console.log(this.dateWeek)
			}
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
		computed:{
			startDate() {
			    return this.getDate('start');
			},
			endDate() {
			    return this.getDate('end');
			}
		},
		methods: {
			/**
			 *
			serviceTime:'9:00',
			serviceName:'洗剪吹',
			servicePrice:'38'
			 */
			toDetail(){
				console.log("跳转订单详情");
				uni.navigateTo({
					url:'../order/downorder?serviceTime='+this.serviceTime+'&serviceName='+this.serviceName+'&servicePrice='+this.servicePrice+'&date='+this.date,
				})
			},
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
			},
			beforeDate(){
			  console.log("前一天",this.date);
			  let odata = new Date(new Date(this.date).getTime() - 24 * 60 * 60 * 1000); //计算当前日期 -1
			  this.date = this.convertToDate(odata); //格式化日期并赋值
			  this.dateWeek = this.isWeek(this.date);
			},
			afterDate(){
				console.log("后一天");
				 //后一天
				let odata = new Date(
				new Date(this.date).getTime() + 24 * 60 * 60 * 1000
				); //计算当前日期 +1
				this.date = this.convertToDate(odata); //格式化日期并赋值
				this.dateWeek = this.isWeek(this.date);
				
			},
			 convertToDate(date) {
				      var date = new Date(date);
				      var y = date.getFullYear();
				      var m = date.getMonth() + 1;
				      var d = date.getDate();
					  let isDate = date.getFullYear()+'-'+m+'-'+d;
				      m = m < 10 ? "0" + m : m; //月小于10，加0
				      d = d < 10 ? "0" + d : d; //day小于10，加0
				      return y + "-" + m + "-" + d;
				    },
			isWeek(date){
				
				var dateObject = new Date(date);
				var day = dateObject.getDay();
				var convertToDate = new Date();
				var isDate = this.convertToDate(convertToDate)
				console.log("isDate",isDate);
				console.log("date",this.date)
				if(isDate == this.date){
					return "今天";
				}
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
			},
		bindPickerChange: function(e) {
		    console.log('picker发送选择改变，携带值为', e.target.value)
		    this.index = e.target.value
			console.log("bindPickerChange",this.index)
		},
		bindDateChange: function(e) {
		    this.date = e.target.value
			this.dateWeek = this.isWeek(this.date);
			console.log("bindDateChange",this.date)
		},
		bindTimeChange: function(e) {
		    this.time = e.target.value
			console.log("bindTimeChange",this.time)
			
		},
		getDate(type) {
		    const date = new Date();
		    let year = date.getFullYear();
		    let month = date.getMonth() + 1;
		    let day = date.getDate();
		    if (type === 'start') {
		        year = year - 60;
		    } else if (type === 'end') {
		        year = year + 2;
		    }
		    month = month > 9 ? month : '0' + month;;
		    day = day > 9 ? day : '0' + day;
		    return `${year}-${month}-${day}`;
		}		
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('//at.alicdn.com/t/font_1737346_75j7erjt42p.ttf') format('truetype');
	}

page{
	background-color: #E8E7E6;
}
.wrapper-list{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: auto;
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
			display: flex;
			flex-direction: row;
			justify-content: center;
			// background-color: #1AAD19;
			.list-header-date-center{
				width: 80%; 
				height: 100rpx;
				// background-color: #000000;
				display: flex;
				flex-direction: row;
				.list-header-date-left{
					width: 65%;
					height: 100rpx;
					// background-color: #000000;
				}
				.list-header-date-right{
					width: 35%;
					height: 100rpx;
					// background-color: #333333;
				}
			}
		}
		.list-header-after{
			width: 20%;
			height: 100rpx;
			// background-color: #8A6DE9; 
		}		
	}	
	.wrapper-list-items{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
		justify-content: space-around;
		background-color: #FFFFFF;	
		.list-items{
			width: 100%;
			height: 250rpx;
			// background-color: #007AFF;
			display: flex;
			flex-direction: row;
			justify-content: center;
			border-bottom-width: 20rpx;
			border-bottom-style: inset;
			border-bottom-style:  #CCCCCC #EFEFF4;
			// background-color: #333333;
			.items{
				width: 95%;
				height: 250rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				// justify-content: space-around;
				.items-first{
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					display: flex;
					flex-direction: row;
					// background-color: #000000;
					.first-time{
						width: 140rpx;
						height: 80rpx;
						font-size: 50rpx;
						color: #1989FA;
						// background-color: #007AFF;
					}
					.first-icon{
						width: 100rpx;
						height: 80rpx;
						font-size: 50rpx;
						font-family: texticons;
						// background-color: #333333;
					}
				}
				.items-second{
					width: 100%;
					height: 60rpx;
					display: flex;
					flex-direction: row;
					// background-color: #007AFF;
					.second-time{
						height: 60rpx;
						line-height: 60rpx;
						font-size: 26rpx;
						// background-color: #007AFF;
					}
					.second-icon{
						width: 60rpx;
						height: 60rpx;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						line-height: 60rpx;
						// background-color: #000000;
						.icon-h{
							width: 50rpx;
							height: 50rpx;
							line-height: 50rpx;
							color: #13227a;
							font-family: texticons;
							// background-color: #1989FA;
						}
					}
				}
				.items-three{
					width: 100%;
					height: 80rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					// background-color: #1AAD19;
					.items-three-text{
						width: 80%;
						height: 80rpx;
						line-height: 80rpx;
						// background-color: #FFB400;
						.three-icon{
							width: 40rpx;
							height: 80rpx;
							color: #d81e06;
							font-family: texticons;
							// background-color: #000000;
							} 
						.three-text{
						   width: 200rpx;
						   height: 80rpx;
						   font-size: 26rpx;
						   // background-color: #4CD964;	 
						}
					}
					.items-three-button{
						width: 20%;
						height: 80rpx;
						// background-color: #929292;
					}
				}
			}
		}
	}
	
	.textcenter{
		text-align: center;
		font-size: 18px;
	}
}


</style>
