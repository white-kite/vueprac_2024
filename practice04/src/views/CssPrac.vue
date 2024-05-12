<template>
    <div class="card">
        <label>REPORTS</label>
        <ul>
            <li><i class="fa-solid fa-clock"></i>Real-Time</li>
            <li><i class="fas fa-user"></i>Audience</li>
            <li><i class="fa-solid fa-flag"></i>Conversions</li>
        </ul>
    </div>
</template>
<script setup>

</script>
<style>
.card{
    border-style: inherit;
    border-radius: 5px; /* 혹시 rem 으로..? */
    padding: 2rem;
    width:300px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}

h4{
    margin-bottom: 15px;
    color:#444444;
}

label {
    display: block; /* label을 블록 레벨 요소로 만들어 margin 적용 가능하게 함 */
    margin-bottom: 15px;
    color: gray;
    font-weight: 400;
}

i{
    padding-right: 20px;
    color:gray;
}

ul {
    padding-left: 0; /* 왼쪽 패딩 제거 */
    list-style-type: none; /* 리스트 스타일 제거 */
}

li {
    margin-bottom: 0.5rem; /* 각 항목 사이의 간격 조정 */
    font-weight: 500;
}

</style>