<template>
	<view class="wrapper">
		<view class="wrapper-swiper">
	 	<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content" >
	 		<swiper class="swiper-box" @change="change"  autoplay="true" style="height: 410rpx;">
	 			<swiper-item v-for="(item, index) in info" :key="index">
	 				<view :class="item.colorClass" class="swiper-item">
	 					<image class="image" :src="item.url" mode="aspectFill" />
	 				</view>
	 			</swiper-item>
	 		</swiper>
	 	</uni-swiper-dot>
	 </view>
	</view>
</template>

<script>
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot"
export default {
	components:{
		uniSwiperDot
	},
	data() {
		return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'http://pic1.win4000.com/wallpaper/0/57bfef8adcdaa.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'http://pic1.win4000.com/wallpaper/8/57bfe9ea257ac.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'http://pic1.win4000.com/wallpaper/8/57bfe9ebaa8d3.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				current: 0,
				mode: 'indexes',
				dotsStyles: {},
		}
	},
	onLoad() {

	},
	methods: {
		 change(e) {
		            this.current = e.detail.current;
		        }
	}
}	
</script>

<style lang="scss">
.wrapper{
	width: 100%;
	height: 420rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	// background-color: #6D6D72;
	.wrapper-swiper{
		width: 100%;
		height: 420rpx;
	}
}
.image{
	width: 100%;
}
</style>
