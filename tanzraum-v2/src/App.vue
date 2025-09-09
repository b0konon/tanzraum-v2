<template>
  <v-app>
    <NavBar />
    <v-main class="pa-0">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { onMounted } from 'vue';
import { useStrapiStore } from '@/stores/useStrapiStore';

const strapiStore = useStrapiStore();

onMounted(() => {
  strapiStore.fetchAll();
});
</script>
