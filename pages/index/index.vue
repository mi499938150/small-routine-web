<template>
	 <view class="flex"  >
		 <scroll-view   :style="{height:winHeight+'px'}"  :scroll-top="scrollTop" show-scrollbar="true"   scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		 @scroll="scroll">
		 <home-header></home-header>
		 <home-swiper></home-swiper>
		 <HomeDescribe :serviceValue="serviceValue"></HomeDescribe>
		 </scroll-view>
	 </view>
</template> 

<script>
 import HomeHeader from '@/components/home/Header'
 import HomeSwiper from '@/components/home/Swiper'
 import HomeDescribe from '@/components/home/Describe'
export default {
	components:{
		HomeHeader,
		HomeSwiper,
		HomeDescribe
	},
		data() {
			return { 
				 scrollTop: 0,
				 old: {
				     scrollTop: 0
				 },
				 winHeight: "", //窗口高度
				 serviceValue:""
			}
		},
		onLoad(option) {
			this.showToast();
			setTimeout(() =>{
				
			},50);
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
		onReady() {
			   // // 计算屏幕剩余高度  填补剩余高度
			   //      let _this = this;
			   //      uni.getSystemInfo({
			   //          success(res) {
							
			   //              _this.phoneHeight = res.windowHeight;
			   //              console.log("windowHeight"+res.windowHeight);
			   //              // 计算组件的高度
			   //              let view = uni.createSelectorQuery().select('.flex');
			   //              view.boundingClientRect(data => {
			   //                  _this.navHeight = data.height;
			   //                  console.log("navHeight"+_this.navHeight);
			   //                  _this.scrollviewHigh = _this.phoneHeight - _this.navHeight;
			   //              }).exec();
			   //          }
			   //      });
			   //      console.log('w' + this.scrollviewHigh);
		},
		onShow() {
			 var value = this.serviceSelect("serviceSelect");
			 // if(value == null && value == "" && value == undefined){
				//  this.serviceValue = "点击选择服务"; 
			 // }else{
				//  this.serviceValue = value;
			 // }
			 this.serviceValue = value;
			 console.log("serviceValue:",this.serviceValue);	 
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
			},
			showToast(){
				uni.showToast({
					title:"加载中...",
					icon:"loading",
					mask:true,
					duration:100
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #E8E7E6;
}
.flex{
	// width: 100%;
	// height: 100%;
	display: flex;
	flex-direction: column;
}
// .flex{
// 	display: flex;
// 	&.column{
// 		flex-direction: column;
// 	}
// 	&.start{
 
// 	}
// } 
</style>
