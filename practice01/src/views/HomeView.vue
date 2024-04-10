<!-- HomeView.vue -->
<template>
    <div>
      <h1>Home Page</h1>
    </div>

  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  </template>
  
  <script>
  import HelloWorld from '../components/HelloWorld.vue'

  // script setup이 아닐때는 필요
  export default {
    name: 'HomeView',
    components: {
    HelloWorld
  }
  };
  </script>
  