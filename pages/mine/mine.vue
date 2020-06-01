<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{login ? uerInfo.name : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe60e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item" @click="goOrder">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">我的订单</text>
				<text class="navigat-arrow">&#xe60e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe62c;</text>
				<text class="list-text">我的积分</text>
				<text class="navigat-arrow">&#xe60e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe738;</text>
				<text class="list-text">帮助与反馈</text>
				<text class="navigat-arrow">&#xe60e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: false,
				avatarUrl: "../../static/icons/logo.png",
				uerInfo: {}
			}
		},
		onLoad() {
			this.showToast();
			setTimeout(() =>{
				
			},50);
		},
		methods: {
			goLogin() {
				if (!this.login) {
					console.log("点击前往登录")
				}
			},
			goOrder(){
				console.log("前往order");
				uni.switchTab({
					url:'../order/order'
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

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('//at.alicdn.com/t/font_1737346_lwfgcjdu6s.ttf') format('truetype');
	}

	page,
	view {
		display: flex;
	}

	page {
		background-color: #E8E7E6;
	}

	.center {
		flex-direction: column;
	}

	.logo {
		width: 750rpx;
		height: 240rpx;
		padding: 20rpx;
		box-sizing: border-box;
		/* background-color: #4cd964; */
		flex-direction: row;
		align-items: center;
	}
 
	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
	}

	.logo-title {
		height: 150rpx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20rpx;
	}

	.uer-name {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 38rpx;
		/* color: #FFFFFF; */
	}

	.go-login.navigat-arrow {
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150rpx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20rpx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		width: 750rpx;
		flex-direction: column;
	}

	.center-list-item {
		height: 100rpx;
		width: 750rpx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0rpx 20rpx;
	}

	.border-bottom {
		border-bottom-width: 1rpx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 45rpx;
		color: #d81e06;
		text-align: center;
		font-family: texticons;
		margin-right: 20rpx;
	}

	.list-text {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 34rpx;
		color: #555;
		flex: 1;
		text-align: left;
	}

	.navigat-arrow {
		height: 100rpx;
		width: 40rpx;
		line-height: 100rpx;
		font-size: 34rpx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
</style>