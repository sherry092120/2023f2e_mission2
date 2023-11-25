<template>
    <div class="overview">
        <div class="overview-box">
            <div class="overview-title">投票概況</div>
            <div class="pie-charts pie-charts1">
                <div ref="pie1" class="pie1"></div>
                <div class="text">
                    <div>80.58%</div>
                    <div>投票率</div>
                </div>
            </div>
            <div class="text-wrap">
                <div class="text">投票數 <span>1,000,000 票</span></div>
                <div class="text">無效票數 <span>990,000 票</span></div>
                <div class="text">有效票數 <span>10,000 票</span></div>
            </div>
            <div class="pie-charts pie-charts2">
                <div ref="pie2" class="pie2"></div>
            </div>
            <div class="cards-wrap">
                <div class="ranking-card">
                    <div class="number">1</div>
                    <div class="text">
                        <span>民主進步黨</span>
                        <span>蔡英文｜賴清德</span>
                        <div class="straight-line"></div>
                    </div>
                    <div class="statistics">
                        <span>58%</span>
                        <span>875,000 票</span>
                    </div>
                </div>
                <div class="ranking-card">
                    <div class="number">1</div>
                    <div class="text">
                        <span>民主進步黨</span>
                        <span>蔡英文｜賴清德</span>
                        <div class="straight-line"></div>
                    </div>
                    <div class="statistics">
                        <span>58%</span>
                        <span>875,000 票</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import usePie from '../usePie.js';
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

onMounted(() => {
    createPie(pie2.value, {
        color: ['#84CB98', '#8894D8', '#DFA175'],
        value: [
            { value: 0.57, name: 'Name A' },
            { value: 0.4, name: 'Name B' },
            { value: 0.03, name: 'Name C' },
        ]
    });
    createPie(pie1.value, {
        color: ['#262E49', '#CCCCCC'],
        value: [
            { value: 0.749, name: '有效票數' },
            { value: 0.251, name: '無效票數' },
        ]
    });
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

    .overview-title {
        width: 100%;
        @include fontSizeLarge;
        margin-bottom: 14px;
    }

    .pie-charts {
        width: 100%;
        height: 132px; // 圓餅圖僅90% 故+12px = 132px
        margin-bottom: 14px;
    }

    .pie-charts1 {
        display: flex;
        align-items: center;

        @include xl {
            width: 240px;
        }

        .pie1 {
            width: 132px; // 圓餅圖僅90% 故+12px = 132px
            height: 100%;
            // background-color: #eee;
        }

        .text {
            margin-left: 20px;
            text-align: center;
            display: block;

            div:first-child {
                @include fontSizeLarge;
            }

            div:nth-child(2) {
                @include fontSizeMedium;
            }
        }
    }

    .pie-charts2 {
        margin-top: 40px;

        @include xl {
            width: 140px;
            margin-top: 20px;
        }

        .pie2 {
            width: 132px; // 圓餅圖僅90% 故+12px = 132px
            height: 100%;
            // background-color: #eee;
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

        .ranking-card {
            margin-top: 6px;
            margin-bottom: 6px;
        }
    }
}
</style>
  