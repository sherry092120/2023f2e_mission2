<template>
    <div class="overview">
        <div class="overview-box">
            <div class="overview-title">
                <span>投票概況</span>
                <span v-if="switchBtn == true" @click="clickSwitchBtn" style="cursor: : pointer;">&gt;</span>
            </div>
            <div class="pie-charts pie-charts1" :class="{ 'm-none': mNone == true }">
                <div ref="pie1" class="pie1"></div>
                <div class="text">
                    <div>{{ overview.ticket_percent }}%</div>
                    <div>投票率</div>
                </div>
            </div>
            <div class="text-wrap" :class="{ 'm-none': mNone == true }">
                <div class="text">投票數 <span>{{ overview.ticket_num }} 票</span></div>
                <div class="text">無效票數 <span>{{ overview.invalid }} 票</span></div>
                <div class="text">有效票數 <span>{{ overview.valid }} 票</span></div>
            </div>
            <div class="pie-charts pie-charts2" :class="{ 'm-none': mNone == true }">
                <div ref="pie2" class="pie2"></div>
            </div>
            <div class="cards-wrap" :class="{ 'm-none': mNone == true }">
                <div class="ranking-card" v-for="(party, index) in countryData">
                    <div class="number" :style="{backgroundColor: partyColor[party.party_name].primary}">{{ party.cand_no }}</div>
                    <div class="text">
                        <span>{{ party.party_name }}</span>
                        <span>{{ party.cand_name[0] }}｜{{ party.cand_name[1] }}</span>
                        <div class="straight-line"></div>
                    </div>
                    <div class="statistics">
                        <span>{{ party.ticket_percent }}%</span>
                        <span>{{ party.ticket_num }} 票</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import usePie from '../usePie.js';
import { countryData, partyColor, overview } from '../data.js';
const switchBtn = ref(false);
const mNone = ref(false);
const pie1 = ref(null);
const pie2 = ref(null);
function createPie(element, data) {
    const { setOption, resize } = usePie(element);
    setOption(data)
    const resizeEvent = function () {
        if (process.client) {
            resize();
        }
    }
    window.addEventListener('resize', resizeEvent);
}
const resize1 = function () {
    if (process.client) {
        if (window.innerWidth <= 1199) {
            if (switchBtn.value == false) {
                switchBtn.value = true;
                mNone.value = true;
            }

        } else {
            if (switchBtn.value == true) {
                switchBtn.value = false;
                mNone.value = false;
            }
        }
    }
}

const clickSwitchBtn = () => {
    mNone.value = !mNone.value
}

onMounted(() => {
    createPie(pie2.value, {
        color: [
            partyColor[countryData[0].party_name].primary,
            partyColor[countryData[1].party_name].primary,
            partyColor[countryData[2].party_name].primary,
        ],
        value: [
            { value: countryData[0].ticket_percent / 100, name: countryData[0].party_name },
            { value: countryData[1].ticket_percent / 100, name: countryData[1].party_name },
            { value: countryData[2].ticket_percent / 100, name: countryData[2].party_name },
        ]
    });
    createPie(pie1.value, {
        color: ['#262E49', '#CCCCCC'],
        value: [
            { value: overview.ticket_percent / 100 , name: '有效票數' },
            { value: (100 - overview.ticket_percent) / 100, name: '無效票數' },
        ]
    });
    window.addEventListener('resize', resize1);
    resize1();
})
</script>
  
<style scoped lang="scss">
@import '@/assets/scss/_var.scss';

.overview .overview-box {
    border-radius: $border-radius-base;
    background-color: #fff;
    padding: 20px 20px 8px;

    @include xl {
        display: flex;
        flex-wrap: wrap;
    }

    @include s {
        padding: 12px 20px 0;
    }

    .overview-title {
        width: 100%;
        @include fontSizeLarge;
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;

        @include s {
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 12px;
        }
    }

    .pie-charts {
        width: 100%;
        height: 132px; // 圓餅圖僅90% 故+12px = 132px
        margin-bottom: 14px;

        @include s {
            height: 79.2px; // 圓餅圖僅90% 故+7.2px = 79.2px
        }
    }

    .pie-charts1 {
        display: flex;
        align-items: center;

        @include xl {
            width: 240px;
        }

        @include s {
            width: 135px;
            margin: 8px 0 20px;
        }

        .pie1 {
            width: 132px; // 圓餅圖僅90% 故+12px = 132px
            height: 100%;

            // background-color: #eee;
            @include s {
                width: 79.2px; // 圓餅圖僅90% 故+7.2px = 79.2px
            }
        }

        .text {
            margin-left: 20px;
            text-align: center;
            display: block;

            @include s {
                margin-left: 9.5px;
            }

            div:first-child {
                @include fontSizeLarge;

                @include s {
                    font-size: 16px;
                    line-height: 19px;
                    font-weight: 700;
                }
            }

            div:nth-child(2) {
                @include fontSizeMedium;

                @include s {
                    font-size: 12px;
                    line-height: 14px;
                    font-weight: 400;
                }
            }
        }
    }

    .pie-charts2 {
        margin-top: 40px;

        @include xl {
            width: 140px;
            margin-top: 20px;
        }

        @include s {
            width: 79.2px;
            margin-bottom: 12px;
            margin-top: 0px;
        }

        .pie2 {
            width: 132px; // 圓餅圖僅90% 故+12px = 132px
            height: 100%;

            // background-color: #eee;
            @include s {
                width: 79.2px; // 圓餅圖僅90% 故+7.2px = 79.2px
            }
        }
    }

    .text-wrap {
        width: 100%;

        @include xl {
            width: calc(100% - 240px);
            display: flex;
            flex-wrap: wrap;
            align-content: center;
        }

        @include s {
            width: calc(100% - 147px);
            margin: 8px 0 20px 12px;
        }

        .text {
            width: 100%;
            @include fontSizeMedium;
            font-weight: 400;
            margin-bottom: 8px;
            display: flex;
            align-items: center;

            span {
                @include fontSizeSmall;
                font-weight: 600;
                margin-left: 8px;
            }
        }
    }

    .cards-wrap {
        width: 100%;

        @include xl {
            width: calc(100% - 140px);
            display: flex;
            flex-wrap: wrap;
            align-content: center;
        }

        @include s {
            width: calc(100% - 91.2px);
            margin: 0 0 12px 12px;
        }

        .ranking-card {
            margin-top: 6px;
            margin-bottom: 6px;
        }
    }

    .m-none {
        @include xl {
            display: none;
        }
    }
}</style>
  