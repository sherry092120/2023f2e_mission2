<template>
    <div class="search">
        <div class="select-group">
            <select v-model="currentCity" @change="changeCity">
                <option v-for="(data, key, index) in cityData()" :key="'city'+index">{{ key }}</option>
            </select>
            <!-- <select>
                <option>大安區</option>
            </select> -->
            <!-- <select>
                <option>朝陽里</option>
            </select> -->
        </div>
        <!-- <div class="blue-btn">清除</div> -->
    </div>
</template>
  
<script setup>
import cityData from '../data_city.js';
const emit = defineEmits();
const currentCity = ref(Object.keys(cityData())[0]);
emit("commitCurrentCity",currentCity.value);

const changeCity = ()=>{
    emit("commitCurrentCity",currentCity.value);
}
</script>
  
<style scoped lang="scss">
@import '@/assets/scss/_var.scss';
.search {
    @include xl {
        display: flex;
    }

    .select-group {
        @include xl {
            width: calc(100% - 36px);
            display: flex;
            flex-wrap: wrap;

            select:first-child {
                width: 100%;
                margin-bottom: 12px;
            }

            select:nth-child(2),
            select:nth-child(3) {
                width: calc(50% - 8px);
            }
        }
    }

    .blue-btn {
        @include xl {
            width: 36px;
            height: 100%;
        }
    }
}
</style>
  