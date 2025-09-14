<template>
    <h2 class="text-h2 mb-8 text-center">Unser Angebot</h2>
    <v-container class="d-flex flex-wrap justify-center" max-width="1200">
        <v-col class="justify-center" cols="12" md="8">
            <h3 class="text-h4 text-center text-white mt-4 mb-4">Bettinas Kurse</h3>
            <template v-for="(value, idx) in bettinaAngebote" :key="value.id">
                <v-row>
                    <AngebotItem :title="value.title" :description="value.description" />
                </v-row>
                <v-divider v-if="idx < bettinaAngebote.length - 1" class="my-2 white-divider" />
            </template>
            <h3 class="text-h4 text-center text-white mt-8 mb-4">Susannes Kurse</h3>
            <template v-for="(value, idx) in susanneAngebote" :key="value.id">
                <v-row>
                    <AngebotItem :title="value.title" :description="value.description" />
                </v-row>
                <v-divider v-if="idx < susanneAngebote.length - 1" class="my-2 white-divider" />
            </template>
        </v-col>
    </v-container>

</template>

<style scoped>
.white-divider {
    border-color: #fff !important;
    opacity: 1 !important;
}
</style>


<script lang="ts" setup>
import { useStrapiStore } from '@/stores/useStrapiStore';
import { computed } from 'vue';

const strapiStore = useStrapiStore();

const bettinaAngebote = computed(() =>
    (strapiStore.services?.data || []).filter((a: any) => a.trainer?.toLowerCase() === 'bettina')
);
const susanneAngebote = computed(() =>
    (strapiStore.services?.data || []).filter((a: any) => a.trainer?.toLowerCase() === 'susanne')
);
</script>