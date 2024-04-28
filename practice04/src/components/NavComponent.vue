<template>
    <v-card>
      <v-layout>
        <v-app-bar color="primary" prominent>
          <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
          <v-toolbar-title>vuePrac's applying vuecli</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>
          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>
  
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list>
            <!-- 각 항목에 router-link를 사용하여 라우팅 -->
            <v-list-item v-for="item in items" :key="item.title" @click="navigate(item.value)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 500px;">
          <v-card-text>
            The navigation drawer will appear from the bottom on smaller size screens.
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'; // Vue에서 필요한 모듈 가져오기
  import { useRouter } from 'vue-router'; // Vue Router 인스턴스 가져오기
  
  const router = useRouter(); // 라우터 인스턴스 생성
  const drawer = ref(false); // 반응형 데이터
  const items = [
    { title: 'TimeGame', value: '/timeGame' }, // 라우팅 경로 설정
    { title: 'Search', value: '/search' },
    { title: 'FactorialSetup', value: '/factorialSetup' },
    { title: 'Home', value: '/' },
  ]; // 목록 항목 정의
  
  // 드로어 토글
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  
  // 라우터로 지정된 경로로 이동
  const navigate = (route) => {
    router.push(route); // 지정된 경로로 라우팅
    drawer.value = false; // 드로어 닫기
  };
  </script>
  