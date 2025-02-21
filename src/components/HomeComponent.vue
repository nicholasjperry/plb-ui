<template lang="pug">
    VContainer
        VRow
            VCol
                h1(style="color: #fff; font-size: 3rem; text-align: center;") Premier League: Brawl!
        VRow
            VCol(cols="6")
                VCard.v-card(
                    color="#375062"
                )
                    VCardTitle(style="text-align: center") League Description
                        VCardText(style="color: #fff")
            VCol(cols="6")
                VCard.v-card(
                    color="#375062"
                )
                    VCardTitle(style="text-align: center") Sign-Up
                        VCardText(style="color: #fff")
</template>

<script setup lang="ts">
// TODO: Pallette - #557C99, #9DB5C9, #3389CC, #375062

</script>

<style lang="css">
.v-card {
    border: 2px solid transparent;
    box-shadow: 0px 5px 5px black;
    margin-top: 8px;
}
</style>