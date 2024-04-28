<!-- FactorialSetup.vue -->
<template>
<div>
    <h1>Factorial Page (script setup 사용)</h1>
    <label>수를 입력하세요 : </label> 
    <form @submit.prevent="calculateResult($event)">
      <!-- <input type="number" name="result" /> -->
      <v-text-field type="number" name="result" />
      <button type="submit">계산</button> <br />
    </form>
    <span class="answer number" v-if="result !== null"> {{ result }}</span>
    <span class="answer" v-else>계산할 수 없는 값입니다.</span>
</div>
</template>

<script setup>
import { ref } from 'vue';
import * as Calculate from "../util/Calculate";

const result = ref(0);
function calculateResult(event) {
    result.value = Calculate.factorial(event.target[0].value)
}
</script>

<style scoped>
.answer.number {
  font-size: 100px;
}
</style>