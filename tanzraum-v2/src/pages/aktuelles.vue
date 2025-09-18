<template>
    <v-container class="mx-auto bg-primary shadow" max-width="100vw">
        <h1 class="text-h3 text-center mb-8">Aktuelles</h1>
        <v-row
            v-for="(item, index) in posts"
            :key="index"
            cols="12"
            md="4"
            class="mx-auto"
        >
            <AktuellesPost :item="item" />
        </v-row>
    </v-container>
      <v-container id="footer" class="my-12">
    <FooterSection />
  </v-container>
</template>

<script lang="ts" setup>
import AktuellesPost from '@/components/AktuellesPost.vue';
import { useStrapiStore } from '@/stores/useStrapiStore';
import { computed } from 'vue';

const strapiStore = useStrapiStore();
const posts = computed(() => {
  const arr = strapiStore.posts?.data || [];
  return [...arr].sort((a, b) => (b.id || 0) - (a.id || 0));
});
const baseUrl = import.meta.env.VITE_BASE_URL || '';
</script>

<style scoped>
.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
</style> */