<template>
  <header>
    <div class="header max-width">2020 開票地圖</div>
  </header>
  <main>
    <div class="main-wrap max-width">
      <div class="title">
        <span>第15任 總統副總統大選</span>
        <span>第10任 立法委員選舉</span>
      </div>
      <Search @commit-currentCity="commitCurrentCity"></Search>
      <Overview></Overview>
      <Map></Map>
      <Information></Information>
    </div>
  </main>
</template>

<script setup>
const currentCity = ref(null);
const commitCurrentCity = (val)=>{
  currentCity.value = val;
}

provide('currentCity', computed(()=>currentCity.value));




</script>

<style lang="scss" scoped>
@import '@/assets/scss/_var.scss';

header {
  background-color: $color-primary;

  .header {
    height: 72px;
    line-height: 72px;
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    padding-left: 48px;

    @include s {
      font-size: 16px;
      font-weight: 700;
      height: 64px;
      line-height: 64px;
    }
  }
}

main {
  background-color: #eee;
}

.main-wrap {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 48px;

  @include s {
    padding: 32px 24px;
  }

  .title {
    width: 100%;
    margin-bottom: 20px;
  }

  .search {
    width: 100%;
    display: flex;
    margin-bottom: 40px;
  }

  .overview {
    width: 270px;

    @include xl {
      width: 100%;
    }
  }

  .map {
    width: calc(100% - 270px - 262px);

    @include xl {
      width: 100%;
    }
  }

  .information {
    width: 262px;

    @include xl {
      width: 100%;
      overflow: auto;
    }
  }
}

.main-wrap>.title {
  span:first-child {
    display: inline-block;
    @include fontSizeLarge;

    @include s {
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
    }

    border-bottom: 4px solid $color-primary;
    padding-bottom: 12px;
    margin-right: 20px;
  }

  span:nth-child(2) {
    @include fontSizeLarge;
    font-weight: 400;
    color: #BFBFBF;

    @include s {
      font-size: 16px;
      line-height: 19px;
    }
  }
}</style>