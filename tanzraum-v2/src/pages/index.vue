<template>
  <HeroSection id="home" class="shadow"/>
  <v-container id="team" class="my-12" max-width="100vw">
    <TeamSection />
  </v-container>
  <v-container id="angebot" class="my-12 bg-primary shadow" max-width="100vw">
    <AngebotSection />
  </v-container>
  <v-container id="kursplan" class="my-12">
    <KursplanSection />
  </v-container>
  <v-container id="kontakt" class="my-12 background-primary shadow" max-width="100vw">
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

.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5),   /* bottom shadow */
              0 -4px 8px rgba(0, 0, 0, 0.5);  /* top shadow */
}
</style>
