<template lang="pug">
    VApp(id="app")
        VAppBar.v-app-bar
            RouterLink(to="/" active-class="home-router-link-active")
                img(src="/images/logo.webp" height="50" width="50")
            VSpacer
            RouterLink.route(to="/" active-class="home-router-link-active") Home
            RouterLink.route(to="/players") Players
            RouterLink.route(to="/standings") Standings
            RouterLink.route(to="/rules") Rules
            RouterLink.route(to="/blog") Blog
            VBtn.me-2(
                v-if="!validSession"
                color="primary"
                variant="flat"
                @click="handleRegister"
            ) Register
            VBtn(
                v-if="!validSession"
                color="#545353"
                variant="flat"
                @click="handleLogin"
            ) Login
        RouterView
</template>

<script setup lang="ts">
const validSession = ref(false);

function handleLogin() {
    console.log('Login clicked');
}

function handleRegister() {
    console.log('Register clicked');
}
import { ref } from 'vue';
// Color Palette:
// #1d264b Blue - main bg/accent
// #f72707 Red - use for highlights, buttons, emphasis
// #ff7405 / #d24700 Orange - secondary accent or call-to-action like sign up
// #f0a855 Gold - borders, dividers, special messages
// #545353 Gray - neutral bg color
// #fff White - white text will most likely be the winner
import { RouterView } from 'vue-router';
</script>

<style lang="css">
</style>
