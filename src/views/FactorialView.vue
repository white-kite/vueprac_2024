<!-- FactorialView.vue -->
<template>
  <div>
    <h1>Factorial Page(script 사용)</h1>
    <label>수를 입력하세요 : </label> 
    <input type="number" v-model="number" @keyup.enter="calculateFactorial" /> 
    <button @click="calculateFactorial">계산</button> <br/>
    <label>답은? </label> <span class="answer"> {{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: 'FactorialView',
  data(){
    return {
      number : '',
      answer: '',
    };
  },
  methods : {
    calculateFactorial(){
      const num = parseInt(this.number);
      
      // NaN 체크로 빈 값 검사(빈 문자열을 parseInt로 변환하면 NaN)
      if (isNaN(num)) {
        this.answer = '값을 넣어주세요.';
        return;
      }

      // 유효성 검사
      if (num < 0) {
        this.answer = '음수에 대한 팩토리얼은 정의되지 않습니다';
        return;
      }
      
      let result = 1;
      for (let i = 1; i <=num; i++){
        result *= i;
      }
      this.answer = result.toString();
    }
  }
};
</script>
