<template>
    <v-card class="mx-auto content-box" :class="{ open: isOpen }">
        <v-card-title class="text-h5 text-primary">{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ new Date(item.publishedAt).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}</v-card-subtitle>
        <v-img
            v-if="item.image && item.image.url"
            :src="baseUrl + item.image.url"
            height="200px"
            class="clickable-img my-2"
            @click="dialog = true"
        ></v-img>
        <v-dialog v-model="dialog" max-width="700px">
            <v-card>
                <v-img :src="baseUrl + item.image.url" height="auto" max-height="80vh" contain></v-img>
            </v-card>
        </v-dialog>
        <v-card-text class="text-body-1 card-text" :class="{ 'truncated': !isOpen }">
            {{ item.content }}
        </v-card-text>
        <v-card-actions class="justify-end">
            <v-btn
                color="primary"
                text
                @click="isOpen = !isOpen"
            >
                {{ isOpen ? 'Schließen' : 'Mehr erfahren' }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const props = defineProps<{
  item: {
    title: string;
    publishedAt: string;
    image: {
      url: string;
    };
    content: string;
  };
}>();

const baseUrl = import.meta.env.VITE_BASE_URL || '';
const dialog = ref(false);
const isOpen = ref(false);
</script>
<style scoped>
.content-box {
    padding: 8px;
    border-radius: 16px;
    margin-bottom: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    max-width: 800px;
    max-height: 560px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: max-height 0.3s cubic-bezier(.4,0,.2,1);
}
.content-box.open {
    max-height: 2000px;
    overflow: visible;
}
.v-card-title {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
}
.card-text.truncated {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 5.5em;
    line-clamp: 5;
    position: relative;
}
.card-text.truncated::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2.5em;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.95) 90%);
    pointer-events: none;
}
.clickable-img {
    cursor: pointer;
}
</style>