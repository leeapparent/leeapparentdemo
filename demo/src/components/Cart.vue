<template>
  <div>
      <h2>购物车</h2>
       <table border="1">
      <tr>
        <td>商品</td>
        <td>单价</td>
        <td>价格</td>
        <td>总量</td>
        <td>操作</td>
      </tr>
      <tr v-for="(c,index) in data">
        <td>{{c.text}}</td>
        <td>{{c.price}}</td>
        <td>{{c.price * c.count}}</td>
        <td>{{c.count}}</td>
        <tb>
            <button @click="reduces(index)">-</button>
            <button @click="add(index)">+</button>
        </tb>
      </tr>
      <p>
          总价{{total}}元 
      </p>
    </table>
  </div>
</template>

<script>
export default {
    props:['data'],
    computed:{
        total(){
            return this.data.reduce((sum,v)=>{
                return sum+ v.price*v.count
            }, 0)
        }
    },
    methods:{
        add(i) {
            this.$emit('add',{index:i})
        },
        reduces(i){
          this.$emit('reduce',{index:i})        }
    }
}
</script>

<style>

</style>