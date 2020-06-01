<template>
	
	<view class="cancel-order-warpper">
		<view class="cancel-order-list">
			<van-radio-group v-model="radio"  @change="onChange">
			  <van-cell-group>
			    <van-cell
			      title="单选框 1"
			      clickable
			      data-name="1"
			      @click="onClick"
			    >
			      <van-radio slot="right-icon" name="1" />
			    </van-cell>
			    <van-cell
			      title="单选框 2"
			      clickable
			      data-name="2"
			      @click="onClick"
			    >
			      <van-radio slot="right-icon" name="2" />
			    </van-cell>
				<van-cell
				  title="单选框 3"
				  clickable
				  data-name="3"
				  @click="onClick"
				>
				  <van-radio slot="right-icon" name="3" />
				</van-cell>
			  </van-cell-group>
			</van-radio-group>
		</view>
		<view class="cancel-order-button">
			<view class="order-button">
				<button type="warn">提交</button>	
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
			  radio:'1'
			}
		},
		onLoad() {
              
		},
		
		methods: {
			onChange(event) {
			    var name  = event.currentTarget.dataset.name;
				this.radio = name;
			  },
			  onClick(event) {
			    var name  = event.currentTarget.dataset.name;
				this.radio = name;
			  }
	}
}		
</script>

<style lang="scss">
page{
	background-color: #E8E7E6;
}		
.cancel-order-warpper{
	display: flex; 
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	margin-top: 30rpx;
	background-color: #FFFFFF;
	.cancel-order-list{
		width: 95%;
		height: auto;
		display: flex;
		flex-direction: column;
		// background-color: #000000;
		.cancel-order-list-cloumn{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			// background-color: #1989FA;
		}
	}
	.cancel-order-button{
		width: 95%;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// background-color: #007AFF;
		.order-button{
			width: 95%;
			height: 100rpx;
			// background-color: #888888;
		}
	}
}

</style>
