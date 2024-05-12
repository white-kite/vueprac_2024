<template>
  <div :style="{backgroundColor}">
    <v-col class="text-center align-center">
      <v-row class="text-center align-center">
        <h1>7초를 맞추세요.</h1>
      </v-row>
      <v-row>
        <label>spacebar로 조작하세요!</label>
      </v-row>
      <v-row>
        <span class="text-h1">{{ timer }}</span>
      </v-row>
    </v-col>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

let intervalRef = null;

const time = ref(0);
const backgroundColor = ref('');

const timer = computed(() => time.value?.toFixed(1)); // toFixed(n) 소수점 n자리까지 표시

const handleSpacebar = (event) => {
  if (event.code === 'Space') {
    if (intervalRef) {
      stopTimer(); // 멈춤
    } else {
      startTimer(); // 시작
    }
  }
};

// 시작
const startTimer = () => {
  intervalRef = setInterval(() => {
    time.value += 0.1; // 소수점 첫째 자리부터 증가
    if (time.value >= 10) {
      time.value = 0; // 최대 15까지 증가
      stopTimer();
    }
  }, 100); // 0.1초마다 증가
};

// 멈춤
const stopTimer = () => {
  if (intervalRef) {
    clearInterval(intervalRef); // 타이머 정지
    intervalRef = null;
    
    if (time.value > 0) {
      backgroundColor.value = Math.abs(time.value - 7) < 0.1 ? 'green' : 'red';
    }
  }
};

onMounted(() => {
  console.log("onMounted????");
  window.addEventListener('keydown', handleSpacebar);
});

// 메모리 누수 및 예기치 않은 동작 방지 및 리소스 정리
onUnmounted(() => {
  console.log("onUnmounted!!!!");
  window.removeEventListener('keydown', handleSpacebar); // 컴포넌트 해제 시 리스너 제거
});
</script>
