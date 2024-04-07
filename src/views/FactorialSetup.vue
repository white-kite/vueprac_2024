<!-- FactorialSetup.vue -->
<template>
<div>
    <h1>Factorial Page (script setup 사용)</h1>
    <label>수를 입력하세요 : </label> 
    <input type="number" v-model="number" @keyup.enter="calculateFactorial" /> 
    <button @click="calculateFactorial">계산</button> <br/>
    <label>답은? </label> <span class="answer"> {{ answer }}</span>
</div>
</template>
<script setup>
import { ref } from 'vue';

const number = ref('');
const answer = ref('');

function calculateFactorial() {
    const num = parseInt(number.value);
    if (isNaN(num)){
        answer.value = '값을 넣어주세요.'
        return;
    }
    if (num < 0){
        answer.value = '음수에 대한 팩토리얼은 정의되지 않습니다.'
        return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++){
        result *= i;
    }
    answer.value = result.toString();
}
</script>