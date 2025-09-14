<template>
    <v-container class="mx-auto">
        <v-row @click="toggleOpen" style="cursor:pointer;">
            <v-icon color="white" large class="mr-4 align-self-center my-2">
                {{ isOpen ? 'mdi-minus' : 'mdi-plus' }}
            </v-icon>
            <h3 class="my-2"> {{ title }}</h3>
        </v-row>
        <v-row v-if="isOpen" @click="toggleOpen" style="cursor:pointer;">
            <p class="text-body-1 text-white mx-4 mb-4"> {{ description }}</p>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    title: string;
    description: string;
}>();

const isOpen = ref(false);
function toggleOpen() {
    isOpen.value = !isOpen.value;
}
</script>