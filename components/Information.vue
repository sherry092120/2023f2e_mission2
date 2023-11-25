<template>
    <div class="information">
        <div class="info-wrap">
            <div class="city">台北市</div>
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
</template>
  
<script>
export default {
    name: "information",

};
</script>
  
<style scoped lang="scss">
@import '@/assets/scss/_var.scss';

.information .info-wrap {
    border: 2px solid #84CB98;
    border-radius: $border-radius-base;
    background-color: #EDF7F0;
    padding: 10px 18px 0;

    @include xl {
        width: 260px;
    }

    .city {
        @include fontSizeLarge;
        margin-bottom: 12px;
    }
}
</style>
  