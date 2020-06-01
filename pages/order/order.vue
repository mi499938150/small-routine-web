<template>
	<view> 
	 <van-tabs :active="active"  @click="onChange">
	  <van-tab title="待消费" >
		   <div class="tab_contents">
			   <order-content></order-content>
			   <!-- <order-point></order-point> -->
		   </div>
	   </van-tab>
	   <van-tab title="已完成">
		   <div class="tab_contents">
		   			   当前没有已支付的订单
		   </div>
	   </van-tab>
	   <van-tab title="已取消">
		   <div class="tab_contents">
		   			   当前没有已取消的订单
		   </div>
	   </van-tab>
	 </van-tabs>
    </view>
</template>

<script>
import OrderContent from '@/components/order/OrderContent'
import OrderPoint from '@/components/order/OrderPoint'
export default {
	components:{
		OrderContent,
		OrderPoint
	},
		data() {
			return { 
			  active: 0
			}
		},
		onLoad() {
             this.showToast();
             setTimeout(() =>{
             	
             },50); 
		},		
		methods: {
		 onChange(e) {
			 console.log(e.detail.index)
		  },
		  showToast(){
		  	uni.showToast({
		  		title:"加载中...",
		  		icon:"loading",
		  		mask:true,
		  		duration:100
		  	});
		  }
	},
}
</script>

<style lang="scss">
	
page{
	background-color: #E8E7E6;
}	
</style>
