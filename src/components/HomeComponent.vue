<template lang="pug">     
    VContainer.v-container
        VRow(style="align-items: center; justify-content: center")
            h1.ms-8.me-4.component-header Premier League: Brawl
            img(src="../assets/logo.webp" height="80" width="80")
        VRow
            VCol
                VCard.v-card(color="#d24700")
                    VCardTitle.v-card-title League Description 
                    VCardText.v-card-text 
                        | Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ad beatae doloremque.
                        | Provident quas modi nesciunt est dignissimos fugiat explicabo ad inventore qui, neque amet
                        | eligendi praesentium officia possimus reiciendis incidunt odio ea quia rem. Maxime, nemo magnam.
                        | Ipsum, libero suscipit explicabo et tempora totam, ducimus dolores sit dolore vero provident enim
                        | necessitatibus ipsa eveniet repellendus porro cum, iure culpa consectetur eligendi fugit quas incidunt
                        | rem! Iste laudantium error possimus eum magni assumenda mollitia vitae corporis sequi nam explicabo impedit
                        | dolor maiores, dolorem nobis dolores quisquam, officiis a quo cumque unde eius voluptas. Doloribus consequatur a, quisquam non odit animi!
        VRow
            VCol(cols="6")
                VCard.v-card(color="#545353")
                    VCardTitle.v-card-title Recent Match Highlights
                    VCardText.v-card-text 
                        | Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus corporis, quae possimus animi fuga error vel,
                        | inventore numquam libero tenetur enim aspernatur architecto accusantium suscipit quis dolorum autem ipsam, quidem
                        | recusandae officia! Ipsam molestias sint ad eaque eligendi sit, fugiat commodi quam officia vero ipsa optio error 
                        | accusamus odit eum voluptate quaerat modi tempore ipsum? At neque ut natus nobis labore iure. Voluptates, voluptatibus
                        | sint. Mollitia veniam eius odio molestiae voluptatum nam ut dolorem nisi quisquam praesentium, aliquid ipsa sunt atque
                        | quaerat ipsam nesciunt? Deserunt tempora natus obcaecati dolore optio exercitationem iste facere, quia dolorum porro! Quidem quod corrupti delectus.
            VCol(cols="6")
                VCard.v-card(color="#545353")
                    VCardTitle.v-card-title Sign-Up
                    VTabs.mx-4(
                        v-model="tab"
                        bg-color="#1d264b"
                    )
                        VTab(value="today") Today
                        VTab(value="tomorrow") Tomorrow
                        VTab(value="dayAfterTomorrow") Next Day
                    VCardText.v-card-text
                        VTabsWindow(v-model="tab")
                            VTabsWindowItem(value="today")
                                .d-flex.flex-column
                                    h2.mb-2 {{ getToday() }}
                                    .d.flex.flex-row
                                        VBtn.me-2(
                                            v-for="availableTime in availableTimes"
                                            color="#f72707"
                                            :disabled="availableTime.disabled"
                                            :key="availableTime.hour"
                                            @click="disableTime(availableTime.hour)"
                                        ) {{ availableTime.hour }}
                        VTabsWindow(v-model="tab")
                            VTabsWindowItem(value="tomorrow")
                                .d-flex.flex-column
                                    h2.mb-2 {{ getTomorrow() }}
                                    .d.flex.flex-row
                                        //- VBtn.me-2(
                                        //-     v-for="availableTime in availableTimes"
                                        //-     color="#f72707"
                                        //-     :disabled="availableTime.disabled"
                                        //-     :key="availableTime.hour"
                                        //-     @click="disableTime(availableTime.hour)"
                                        //- ) {{ availableTime.hour }}
                        VTabsWindow(v-model="tab")
                            VTabsWindowItem(value="dayAfterTomorrow") 
                                .d-flex.flex-column
                                    h2.mb-2 {{ getDayAfterTomorrow() }}
                                    .d.flex.flex-row
                                        //- VBtn.me-2(
                                        //-     v-for="availableTime in availableTimes"
                                        //-     color="#f72707"
                                        //-     :disabled="availableTime.disabled"
                                        //-     :key="availableTime.hour"
                                        //-     @click="disableTime(availableTime.hour)"
                                        //- ) {{ availableTime.hour }}
</template>

<script setup lang="ts">
import{ DateTime } from 'luxon';
import { ref } from 'vue';
import { VTabsWindow, VTabsWindowItem } from 'vuetify/lib/components/index.mjs';
function getToday() {
    const today = DateTime.now();
    return today.toFormat('EEE MM/dd/yyyy')
}

function getTomorrow() {
    const today = DateTime.now();
    const tomorrow = today.plus({ days: 1 }).toFormat('EEE MM/dd/yyyy');
    return tomorrow;
}

function getDayAfterTomorrow() {
    const today = DateTime.now();
    const tomorrow = today.plus({ days: 2 }).toFormat('EEE MM/dd/yyyy');
    return tomorrow;
}
const tab = ref(null);

const availableTimes = ref([
    // TODO: derive from db vs. just perform getToday, getTomorrow, etc. logic (?)
    {
        hour: '9:00 PM',
        disabled: false,
    },
    {
        hour: '10:00 PM',
        disabled: false,
    },
    {
        hour: '11:00 PM',
        disabled: false,
    }
]);

function disableTime(availableTime: string) {
    const timeFound = availableTimes.value.find((t) => t.hour === availableTime);
    // TODO: Show dialog
    // Confirm time
    // Disable time
    if (timeFound)
        timeFound.disabled = true;
}
</script>

<style lang="css">
</style>