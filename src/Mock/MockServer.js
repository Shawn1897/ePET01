import Mock from 'mockjs'
import data from './data.json'


//像外提供homepage数据
Mock.mock('/msite',{code:0,data:data.homepage})

//向外提供brand数据
Mock.mock('/brand',{code:0,data:data.brand})

//向外提供category数据
Mock.mock('/category',{code:0,data:data.category})

//不需要export default
