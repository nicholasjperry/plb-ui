<template lang="pug">
    VApp(id="app")
        VAppBar.v-app-bar(:elevation="3")
            VSpacer
            .d-flex.flex-row
                a.nav-item(v-for="item in menuItems" :key="item.name")
                    span {{ item.name }}
        HomeComponent
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeComponent from './components/HomeComponent.vue';
// TODO: Pallette - #557C99, #9DB5C9, #3389CC, #375062

const menuItems = ref([
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Players',
        href: '#',
    },
    {
        name: 'Results',
        href: '#',
    },
    {
        name: 'Rules',
        href: '#',
    },
    {
        name: 'Blog',
        href: '#',
    },
]);
</script>

<style lang="css">
#app {
    background-color: #242424;
    margin: 0 auto;
    padding: 2rem;
}

.v-app-bar {
    background-image: linear-gradient(to right, #9DB5C9, #557C99) !important;
}

.nav-item {
    color: #fff;
    cursor: pointer;
    font-family: Inter, system-ui;
    font-weight: 500;
    margin-inline-end: 20px;
    :hover {
        color: #000;
    }
}
</style>
