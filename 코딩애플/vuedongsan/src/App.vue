<template>

<Discount/>
  

  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <p>{{원룸들[누른거].price}}원</p>
      <button @click="모달창열렸니=false">닫기</button>
      
    </div>
  </div>





  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">
      {{ a }}
    </a>
  </div>




  
  
 




  
  <!-- <div v-for="(a,i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p >50만원</p>
  </div>  반복문을 활용한 매물표현-->
  <div v-for="a,i in 원룸들" :key="i">
    <img :src="원룸들[i].image" class="room-img">
    <h4 @click="모달창열렸니=true; 누른거 = i">{{ 원룸들[i].title }}</h4>
    <p>{{ 원룸들[i].price }}원</p>
    <a>{{ 원룸들[i].content }}</a>
  </div>

  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>60만원</p>
    <button @click="신고수[1]+=1">허위매물신고</button> <span>신고수 : {{ 신고수[1] }}</span> 
  </div>

  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>70만원</p> 
    <button @click="신고수[2]+=1">허위매물신고</button> <span>신고수 : {{ 신고수[2] }}</span>
  </div>
</template>






<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';


export default {
  name: 'App',
  data(){
    return {
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['home','shop','about'],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    }
  },
  methods: {
//     increase0(){
//       this.신고수[0] += 1;
// },
//     increase1(){
//       this.신고수[1] += 1;
// },  
//     increase2(){
//       this.신고수[2] += 1;
// },  
 



  components: {
    discount : TheDiscount,
  },
}}
</script>








<style>
body{
  margin : 0
}

div{
  box-sizing: border-box;
}

.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg{
  width:100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}















.room-img {
  width: 100%;
  margin-top: 40px;
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.menu{
  background: darkslateblue;
  padding: 10px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}






</style>
