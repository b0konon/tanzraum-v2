<template>
  <HeroSection id="home" />
  <v-container id="team" class="my-12">
    <h1 class="text-h2 mb-8 text-center">Unser Team</h1>
    <div v-if="strapiStore.loading" class="text-center my-8">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <div v-else-if="strapiStore.error" class="text-center my-8 text-error">
      Fehler beim Laden
    </div>
    <v-row
      v-else
      class="justify-center"
      no-gutters
    >
      <v-col
        v-for="(employee, i) in strapiStore.employees?.data || []"
        :key="employee.id"
        cols="12"
        md="4"
        class="d-flex flex-column align-center"
      >
        <v-avatar size="200" class="mb-4">
            <v-img
              v-if="employee.Avatar && employee.Avatar.url"
              :src="`${baseUrl}${employee.Avatar.url}`"
            />
        </v-avatar>
        <h3 class="text-h4 mb-2">{{ employee.Name }}</h3>
        <p class="text-subtitle-1 text-center px-4">{{ employee.Title }}</p>
      </v-col>
    </v-row>
  </v-container>
  <v-container id="angebot" class="my-12 bg-primary" max-width="100vw">
    <h2 class="text-h2 mb-8 text-center">Unser Angebot</h2>
  </v-container>
  <v-container id="kursplan" class="my-12">
    <h2 class="text-h2 mb-8 text-center">Kursplan</h2>
  </v-container>
  <v-container id="kontakt" class="my-12 bg-primary" max-width="100vw">
    <ContactForm />
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
