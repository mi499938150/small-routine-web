import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//定义跳转传递参数
Vue.prototype.serviceSelect=function(key){
		var serviceInfo = uni.getStorageSync("serviceValues");
	if (serviceInfo != null && serviceInfo != "" && serviceInfo != undefined) {
		return serviceInfo;
	}else{
		return "点击选择服务";
	}
}


const app = new Vue({
    ...App
})
app.$mount()
