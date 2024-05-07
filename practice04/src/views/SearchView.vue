<template>
    <div>
        <h1>Search Page (script setup 사용)</h1>
        <!-- <input type="text" v-model="searchQuery" name="searchInput" /> -->
        <v-text-field type="text" v-model="searchQuery" name="searchInput" placeholder="스펠링을 입력하세요" class="w-25 mx-auto" />
        <v-card flat class="pa-5">
            <div class="memo mx-auto w-50" v-html="highlightedText"></div>
        </v-card>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const originalText = "In the heart of an ancient forest, where sunlight filters through the dense canopy to dance upon the mossy floor, there exists a tranquil clearing. This magical glen, untouched by time and hidden from the eyes of the modern world, is home to creatures of myth and legend. Whispering winds carry tales of yore, as the forest's inhabitants move in harmony with the rhythm of nature. Here, the boundary between the realms of fantasy and reality blurs, inviting the curious and the brave to explore its mysteries. The ancient trees, standing as silent witnesses to centuries past, guard the secrets of the clearing, promising adventure and enchantment to those who dare to venture into their domain.";

// 계산된 속성을 사용하여 입력된 검색 쿼리에 따라 텍스트를 강조 표시
const highlightedText = computed(() => {
    if (!searchQuery.value) {
        return originalText;
    }
    const regex = new RegExp(`(${searchQuery.value})`, 'gi');
    return originalText.replace(regex, '<b>$1</b>');
});
</script>
