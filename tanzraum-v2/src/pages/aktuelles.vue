<template>
    <v-container class="my-12">
        <h1 class="text-h3 text-center mb-8">Aktuelles</h1>
        <v-row>
            <v-col
                v-for="(item, index) in posts"
                :key="index"
                cols="12"
                md="4"
            >
                <v-card class="mx-auto" max-width="400">
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle>{{ new Date(item.publishedAt).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}</v-card-subtitle>
                    <v-img
                        :src="item.image && item.image.url ? baseUrl + item.image.url : 'https://via.placeholder.com/400x200?text=Kein+Bild'"
                        height="200px"
                    ></v-img>
                    <v-card-text>
                        {{ item.content}}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            v-if="item.link"
                            :href="item.link"
                            target="_blank"
                            rel="noopener"
                            color="primary"
                            text
                        >
                            Mehr erfahren
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useStrapiStore } from '@/stores/useStrapiStore';
import { computed } from 'vue';

const strapiStore = useStrapiStore();
const posts = computed(() => strapiStore.posts?.data || []);
const baseUrl = import.meta.env.VITE_BASE_URL || '';
</script>