<template>
    <v-card>
      <v-layout>
        <v-app-bar color="primary" prominent>
          <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
          <v-toolbar-title>My files</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>
          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <v-list :items="items"></v-list>
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
  import { ref, watch } from 'vue';
  
  const drawer = ref(false); // 반응형 데이터
  const items = [
    { title: 'Foo', value: 'foo' },
    { title: 'Bar', value: 'bar' },
    { title: 'Fizz', value: 'fizz' },
    { title: 'Buzz', value: 'buzz' },
  ]; // 목록 항목 정의
  
  const group = ref(null); // 그룹 데이터
  
  const toggleDrawer = () => {
    drawer.value = !drawer.value; // 드로어 토글
  };
  
  watch(group, () => {
    drawer.value = false; // 그룹 변경 시 드로어 닫기
  });
  </script>
  