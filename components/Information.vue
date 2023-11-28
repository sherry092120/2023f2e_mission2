<template>
    <div class="information">
        <div class="info-wrap" 
            :style="{
                backgroundColor: partyColor[Object.keys(cityData()[currentCity])[0]].third, 
                borderColor: partyColor[Object.keys(cityData()[currentCity])[0]].second 
            }">
            <div class="city">{{ currentCity }}</div>
            <div class="ranking-card" v-for="(party, key, index) in cityData()[currentCity]">
                <div class="number" :style="{backgroundColor: partyColor[key].primary}">{{ cand[key].cand_no }}</div>
                <div class="text">
                    <span>{{ key }}</span>
                    <span>{{ cand[key].cand_name[0] }}｜{{ cand[key].cand_name[1] }}</span>
                    <div class="straight-line"></div>
                </div>
                <div class="statistics">
                    <span>{{ party.ticket_percent }}%</span>
                    <span>{{ party.ticket_num }} 票</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { cand, partyColor } from '../data.js';
import cityData from '../data_city.js';
const currentCity = inject("currentCity");


</script>
  
<style scoped lang="scss">
@import '@/assets/scss/_var.scss';

.information .info-wrap {
    border: 2px solid #84CB98;
    border-radius: $border-radius-base;
    background-color: #EDF7F0;
    padding: 10px 18px 0;

    @include xl {
        width: 262px;
    }

    .city {
        @include fontSizeLarge;
        margin-bottom: 12px;
    }
}
</style>
  