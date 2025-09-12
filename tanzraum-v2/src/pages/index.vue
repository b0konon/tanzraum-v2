<template>
  <HeroSection id="home" />
  <v-container id="team" class="my-12" max-width="100vw">
    <TeamSection />
  </v-container>
  <v-container id="angebot" class="my-12 bg-primary" max-width="100vw">
    <h2 class="text-h2 mb-8 text-center">Unser Angebot</h2>
  </v-container>
  <v-container id="kursplan" class="my-12">
    <h2 class="text-h2 mb-8 text-center">Kursplan</h2>
  </v-container>
  <v-container id="kontakt" class="my-12 background-primary" max-width="100vw">
    <ContactSection />
  </v-container>
  <v-container id="footer" class="my-12">
    <FooterSection />
  </v-container>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/HeroSection.vue';
import { useStrapiStore } from '@/stores/useStrapiStore';
import { computed } from 'vue';

const strapiStore = useStrapiStore();
const baseUrl = computed(() => import.meta.env.VITE_BASE_URL || '');
</script>

<style scoped>
.background-primary {
  background-color: #83154f;
}
</style>
