<template>
  <div>
    <ul>
      <li v-for="(good, index) in goods">
       {{index}}: {{good.text}} | {{good.price}}
        <el-button type="text" @click="addCart(index)">添加购物车</el-button>
      </li>
    </ul>
   
    <Cart :data="cart" @add='onAdd' @reduce="onReduce"></Cart>
  </div>
</template>

<script>
import Cart from './components/Cart'
export default {
  components:{
     Cart
  },
  data() {
    return{
      goods:[
        {text: '前端', price: 1000},
        {text: 'java', price: 10},
        {text: 'ui', price: 100},
      ],
      cart: []
    }
  },
  methods:{
    addCart(i){
      let item  = this.goods[i]     
      let good = this.cart.find(v=>v.text==item.text)    
      if(good) {
        good.count += 1
      }else{
        this.cart.push({...item, count:1})        
      }
      
    },
    onAdd(arg) {
      let {index} = arg
      this.cart[index].count +=1
    },
    onReduce(arg){
      let {index} =arg
      if(this.cart[index] > 1) {
      this.cart[index].count -=1
      }
    }
  }
}
</script>

<style>

</style>