<template>
  <HeroSection />
  <v-container class="my-12">
    <h2 class="text-h2 mb-8 text-center">Unser Team</h2>
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
              :src="employee.Avatar.url"
            />
        </v-avatar>
        <h3 class="text-h4 mb-2">{{ employee.Name }}</h3>
        <p class="text-subtitle-1 text-center px-4">{{ employee.Title }}</p>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="my-12">
    <ContactForm />
  </v-container>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/HeroSection.vue';
import { useStrapiStore } from '@/stores/useStrapiStore';

const strapiStore = useStrapiStore();
</script>
