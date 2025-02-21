<template lang="pug">
    VContainer.v-container
        VRow(style="align-items: center; justify-content: center")
            h1.me-4 Premier League: Brawl
            img(src="../assets/logo.webp" height="80" width="80")
        VRow
            VCol(cols="6")
                VCard.v-card(
                    color="#ff7405"
                )
                    VCardTitle(style="text-align: center") League Description
                        VCardText(style="color: #fff")
            VCol(cols="6")
                VCard.v-card(
                    color="#ff7405"
                )
                    VCardTitle(style="text-align: center") Sign-Up
                        VCardText(style="color: #fff")
</template>

<script setup lang="ts">
</script>

<style lang="css">
.v-card {
    border: 4px outset #f0a855;
    box-shadow: 0px 5px 5px black;
    margin-top: 8px;
}
</style>