//vuex的mutations模块
import {RECEIVE_CATEGORY,
  RECEIVE_BRAND,
  RECEIVE_HOMEPAGE
} from './mutation-type'

export default {
  [RECEIVE_CATEGORY](state,{category}){
    state.category = category
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_HOMEPAGE](state,{homepage}){
    state.homepage = homepage
  }

}
