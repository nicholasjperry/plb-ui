<template lang="pug">     
    VContainer.v-container
        VRow(style="align-items: center; justify-content: center")
            h1.ms-8.me-4.component-header Premier League: Brawl
            img(src="../assets/logo.webp" height="80" width="80")
        VRow
            VCol
                VCard.v-card(color="#d24700")
                    VCardTitle.v-card-title League Description 
                    VCardText.v-card-text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ad beatae doloremque. Provident quas modi nesciunt est dignissimos fugiat explicabo ad inventore qui, neque amet eligendi praesentium officia possimus reiciendis incidunt odio ea quia rem. Maxime, nemo magnam. Ipsum, libero suscipit explicabo et tempora totam, ducimus dolores sit dolore vero provident enim necessitatibus ipsa eveniet repellendus porro cum, iure culpa consectetur eligendi fugit quas incidunt rem! Iste laudantium error possimus eum magni assumenda mollitia vitae corporis sequi nam explicabo impedit dolor maiores, dolorem nobis dolores quisquam, officiis a quo cumque unde eius voluptas. Doloribus consequatur a, quisquam non odit animi!
        VRow
            VCol(cols="6")
                VCard.v-card(color="#545353")
                    VCardTitle.v-card-title Recent Match Highlights
                    VCardText.v-card-text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus corporis, quae possimus animi fuga error vel, inventore numquam libero tenetur enim aspernatur architecto accusantium suscipit quis dolorum autem ipsam, quidem recusandae officia! Ipsam molestias sint ad eaque eligendi sit, fugiat commodi quam officia vero ipsa optio error accusamus odit eum voluptate quaerat modi tempore ipsum? At neque ut natus nobis labore iure. Voluptates, voluptatibus sint. Mollitia veniam eius odio molestiae voluptatum nam ut dolorem nisi quisquam praesentium, aliquid ipsa sunt atque quaerat ipsam nesciunt? Deserunt tempora natus obcaecati dolore optio exercitationem iste facere, quia dolorum porro! Quidem quod corrupti delectus.
            VCol(cols="6")
                VCard.v-card(color="#545353")
                    VCardTitle.v-card-title Sign-Up
                    VCardText.v-card-text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus corporis, quae possimus animi fuga error vel, inventore numquam libero tenetur enim aspernatur architecto accusantium suscipit quis dolorum autem ipsam, quidem recusandae officia! Ipsam molestias sint ad eaque eligendi sit, fugiat commodi quam officia vero ipsa optio error accusamus odit eum voluptate quaerat modi tempore ipsum? At neque ut natus nobis labore iure. Voluptates, voluptatibus sint. Mollitia veniam eius odio molestiae voluptatum nam ut dolorem nisi quisquam praesentium, aliquid ipsa sunt atque quaerat ipsam nesciunt? Deserunt tempora natus obcaecati dolore optio exercitationem iste facere, quia dolorum porro! Quidem quod corrupti delectus.
</template>

<script setup lang="ts">
</script>

<style lang="css">
.v-card {
    border: 3px outset #f0a855;
    box-shadow: 0px 5px 5px black;
    margin-top: 8px;
}
</style>