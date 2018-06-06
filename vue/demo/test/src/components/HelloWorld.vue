<template>
  <div class="page">
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank"> vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <p>-----------------------------------------</p>
    <ul>
      <li>
        <router-link :to="{path:'/one/choice'}" tag="a">答题选项（A,B,C,D）</router-link>
      </li>
    </ul>
    <router-view/>   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome"
    };
  }
};
</script>

<!-- 添加“scoped”属性来限制CSS到这个组件 -->
<style scoped>
h1,h2 {font-weight: normal;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {color: #42b983;}
</style>
