<template lang="pug">
    VContainer.v-container
        VRow
            VCol
                h1 Premier League: Brawl!
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
    border: 2px solid #1d264b;
    box-shadow: 0px 5px 5px black;
    margin-top: 8px;
}
</style>