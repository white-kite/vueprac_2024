<template>
    <button @click="showCard" class="toggleBtn">toggle</button>
    <div :class="{ 'backdrop': isShown }">
        <div class="card" v-if="isShown">
            <label>REPORTS</label>
            <ul>
                <li>
                    <span class="icon"><i class="fa-solid fa-clock"></i></span>
                    Real-Time
                </li>
                <li>
                    <span class="icon"><i class="fas fa-user"></i></span>
                    Audience
                </li>
                <li>
                    <span class="icon"><i class="fa-solid fa-flag"></i></span>
                        Conversions
                    </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const isShown = ref(false);

const showCard = () => isShown.value = !isShown.value;

</script>
<style>
.toggleBtn{
    position: relative;
    padding: 10px;
    border: 1px solid;
    border-radius: 5px;
    z-index: 30; /* 가장 위에 위치 */
    background: white;
}

.backdrop {
    position: fixed; /* 화면 전체에 고정 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명 회색 */
    z-index: 10; /* 다른 요소들 위에 위치 */
}

.card {
    /* position: relative; */
    width: 300px;
    padding: 15px 0 10px;
    margin: 150px auto;
    border: 1px solid gainsboro;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    background: white; /* 카드 배경색 설정 */
    z-index: 20; /* backdrop 위에 위치 */
}

.card > label {
    display: block; /* label을 블록 레벨 요소로 만들어 margin 적용 가능하게 함 */
    margin-bottom: 10px;
    padding: 0 20px;
    color: gray;
    font-weight: 400;
    text-align: left;
}

.card > ul {
    padding-left: 0; /* 왼쪽 패딩 제거 */
    list-style-type: none; /* 리스트 스타일 제거 */
    text-align: left;
}

.card > ul > li {
    padding: 0.25rem 20px; /* 각 항목 사이의 간격 조정 */
    font-weight: 500;
    cursor: pointer;
}

.card > ul > li:hover {
    background-color: #f0f0f0;
}

.card > ul > li > .icon {
    display: inline-block;
    width: 34px;
}

.card > ul > li > .icon > i{
    color:gray;
}

</style>