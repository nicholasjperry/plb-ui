<template lang="pug">
    VApp(id="app")
        VAppBar.v-app-bar(:elevation="3")
            VSpacer
            RouterLink.route(to="/" active-class="home-router-link-active") Home
            RouterLink.route(to="/players") Players
            RouterLink.route(to="/results") Results
            RouterLink.route(to="/rules") Rules
            RouterLink.route(to="/blog") Blog
        RouterView
</template>

<script setup lang="ts">
// Color Palette:
// #1d264b Blue
// #f72707 Red
// #ff7405 Orange
// #f0a855 Gold, #545353 Gray
import { RouterView } from 'vue-router';
</script>

<style lang="css">
#app {
    background-color: #242424;
    padding-top: 2rem;
}

.v-app-bar {
    background-image: linear-gradient(to right, #545353, #1d264b) !important;
}

.route {
    color: #fff;
    cursor: pointer;
    font-family: Inter, system-ui;
    font-weight: 500;
    margin-inline-end: 20px;
    text-decoration: none;
    &:hover {
        opacity: 85%;
    }
}

.router-link-active {
    color: #f72707;
    text-decoration: underline;
}

.home-router-link-active {
    color: #fff;
    text-decoration: none;
}

.v-container {
    max-width: 100%;
}

h1 {
    color: #fff;
    font-size: 3rem;
    text-align: center;
}
</style>
