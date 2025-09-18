<template>
    <v-container id="team" class="mb-12">
        <h1 class="text-h2 mb-8 text-center text-primary">Unser Team</h1>
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
            <TeamMemberItem
                :avatar="baseUrl + employee.Avatar.url"
                :name="employee.Name"
                :title="employee.Title"
                :description="employee.description"
                class="mb-8"
            />
        </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useStrapiStore } from '@/stores/useStrapiStore';
import { computed } from 'vue';
import TeamMemberItem from './TeamMemberItem.vue';

const strapiStore = useStrapiStore();
const baseUrl = computed(() => import.meta.env.VITE_BASE_URL || '');
</script>
