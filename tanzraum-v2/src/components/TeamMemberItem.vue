<template>
    <div class="container" color="white">
        <img class="avatar" :src="avatar" />
        <h3 class="text-h4 mt-2 text-primary px-2">
            {{ name }}
        </h3>
        <div class="mb-4">{{ title }}</div>
        <div v-if="isOpen" class="px-4 mb-4 text-block text-body-2">
            <p>{{ description }}</p>
        </div>
            <v-btn 
                class="elevation-4 rounded-xl mb-4 text-white"
                color="primary"
                text-color="white"
                size="small"
                @click="toggleOpen"
            >
                {{ isOpen ? 'Schließen' : 'Mehr' }}
            </v-btn>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const props = defineProps<{
    avatar: string;
    name: string;
    title: string;
    description: string;
}>();

const isOpen = ref(false);
function toggleOpen() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.container {
    width: 300px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.avatar {
    width: 100%;
    height: 240px;
    object-fit: cover;
    overflow: hidden;
}
</style>
