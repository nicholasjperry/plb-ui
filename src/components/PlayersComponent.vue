<template lang="pug">
    VContainer.v-container
        VRow
            VCol
                h1.component-header Players
        VRow.justify-space-between
            VCol(cols="3" v-for="player in players" :key="player.name")
                VCard.pa-3.v-card(color="#545353")
                    .d-flex.flex-column.align-center
                        VCardTitle.v-card-title {{ player.name }}
                        img(:src="player.avatar" height="200" width="200")
</template>

<script setup lang="ts">
import { ref } from 'vue';
// TODO: get player data into db

const players = ref([
    {
        name: '2Frames',
        avatar: '/src/assets/2Frames.png',
    },
    {
        name: 'Giblits',
        avatar: '/src/assets/Giblits.png',
    },
    {
        name: 'Hubriz',
        avatar: '/src/assets/Hubriz.png',
    },
    {
        name: 'Maxis',
        avatar: '/src/assets/Maxis.png',
    },
    {
        name: 'Meadmaker',
        avatar: '/src/assets/Meadmaker.png',
    },
    {
        name: 'Notorious',
        avatar: '/src/assets/Notorious.png',
    },
    {
        name: 'Phyllis',
        avatar: '/src/assets/Phyllis.png',
    },
    {
        name: 'Verified',
        avatar: '/src/assets/Verified.png',
    },
]);
</script>

<style scoped lang="css">
.v-card:hover {
    cursor: pointer;
    transform: scale(1.02);
}
</style>