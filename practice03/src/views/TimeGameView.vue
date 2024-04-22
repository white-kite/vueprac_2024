<template>
  <div :class="background">
    <h1>7초를 맞추세요.</h1>
    <label>spacebar로 조작하세요!</label><br/>
    <span class="time number">{{ timer }}</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const time = ref(0);
let timeStatus = null;
const background = ref('');


// 시작
const startTimer = () => {
  timeStatus = setInterval(() => {
    time.value += 0.1; // 소수점 첫째 자리부터 증가
    if (time.value >= 15) {
      time.value = 0; // 최대 15까지 증가
    }
  }, 100); // 0.1초마다 증가
};

// 멈춤
const stopTimer = () => {
  if (timeStatus) {
    clearInterval(timeStatus); // 타이머 정지
    timeStatus = null;

    setTimeout(() => {
      if (Math.abs(time.value - 7) < 0.1) {
        background.value = 'green-background'; // 7초 맞춤
      } else {
        background.value = 'red-background'; // 7초 못 맞춤
      }
    }, 0);
  }
};


// 타이머 시작 멈춤 함수
const toggleTimer = () => {
  if (timeStatus) {
    stopTimer(); // 멈춤
  } else {
    startTimer(); // 시작
  }
};

const timer = computed(() => {
  return time.value.toFixed(1); // toFixed(n) 소수점 n자리까지 표시
});

const handleSpacebar = (event) => {
  if (event.code === 'Space') {
    toggleTimer(); // 스페이스바 누를 때 타이머 시작/멈춤
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

<style scoped>
.green-background {
  background-color: green; /* 7초 맞췄을 때*/
}

.red-background {
  background-color: red; /* 7초 맞추지 못했을 때*/
}

.time.number {
  font-size: 100px;
}
</style>