<!-- FactorialView.vue -->
<template>
  <div>
    <h1>Factorial Page(script 사용)</h1>
    <label>수를 입력하세요 : </label>
    <form @submit.prevent="calculateResult($event)">
      <input type="number" name="result" />
      <button type="submit">계산</button> <br />
    </form>
    <span class="answer number" v-if="result !== null"> {{ result }}</span>
    <span class="answer" v-else>계산할 수 없는 값입니다.</span>
  </div>
</template>

<script>
import * as Calculate from "../util/Calculate";
export default {
  name: 'FactorialView',
  data() {
    return {
      result: 0
    };
  },
  methods: {
    calculateResult(event) {
      this.result = Calculate.factorial(event.target[0].value)
    }
  }
};
</script>

<style scoped>
.answer.number {
  font-size: 100px;
}
</style>