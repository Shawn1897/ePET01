//vuex的actions模块
import {reqCateGory,reqBrand,reqHomePage} from '../api'
import {RECEIVE_CATEGORY,RECEIVE_BRAND,RECEIVE_HOMEPAGE} from './mutation-type'

export default {

  //异步获取第二页分类商品数据
  async getCategory ({commit}){
    const result = await reqCateGory()
    commit(RECEIVE_CATEGORY,{category:result.data})
  },

  //异步获取第二页品牌数据
  async getBrand ({commit}){
    const result = await reqBrand()
    commit(RECEIVE_BRAND,{brand:result.data})
  },

  //异步获取首页数据
  async getHomepage({commit},callback){
    const result = await reqHomePage()
    if(result.code===0){
      commit(RECEIVE_HOMEPAGE,{homepage:result.data})
      callback && callback()
      // alert(result.data)
    }


  }
}
