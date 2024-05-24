<template>
    <button @click="toggleCard" class="toggleBtn">toggle</button>
    <!-- <div :class="{ 'backdrop': isShown }"> vue 동적 클래스 바인딩을 안쓰고 -->
    <div class="backdrop" @click="toggleCard" :style="{ display: isShown? 'flex' : 'none' }">
        <div class="card" @click.stop="preventClose">
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

const toggleCard = () => {
    isShown.value = !isShown.value;
}

const preventClose = (event) => {
    event.stopPropagation();  // 이벤트 버블링을 막아 card 클릭 시 닫히지 않도록 함
}

</script>
<style>
.toggleBtn{
    padding: 10px;
    border: 1px solid;
    border-radius: 5px;
    background: white;
}

.backdrop {
    display: none; /* vue 동적 클래스 바인딩 안 쓸 시 추가 */
    position: fixed; /* 화면 전체에 고정 */
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명 회색 */
    align-items: center;
    justify-content: center;
}

.card {
    /* position: relative; */
    z-index: 20; /* backdrop 위에 위치 */
    width: 300px;
    padding: 15px 0 10px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    background: white; /* 카드 배경색 설정 */
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