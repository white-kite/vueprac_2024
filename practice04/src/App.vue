<!-- vuecli -->
<template>
  <!-- 최상위 태그 -->
  <v-app>
    <v-layout>
        <v-app-bar color="primary" prominent>
          <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
          <v-toolbar-title>vuePrac's applying vuecli</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- 반응형 -->
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>
          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list>
            <!-- 각 항목에 router-link를 사용하여 라우팅 -->
            <v-list-item v-for="(item, index) in items" :key="item.title" :to="item.path">
              <v-list-item-title>{{ `${index+1}.${item.title}` }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <!-- 컨텐츠 영역 -->
        <v-main>
          <v-card flat class="pa-5">
            <router-view/>
          </v-card>
        </v-main>
      </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'; // Vue에서 필요한 모듈 가져오기

const drawer = ref(false);
const items = [ // 라우팅 경로 설정
  { title: 'Home', path: '/' },
  { title: 'FactorialSetup', path: '/factorialSetup' },
  { title: 'Search', path: '/search' },
  { title: 'TimeGame', path: '/timeGame' }, 
];

// 드로어 토글
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
<style>
#v-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; 
}
</style>