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
      <Search></Search>
      <Overview></Overview>
      <Map></Map>
      <Information></Information>
    </div>
  </main>
</template>

<script setup>

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
  }
}

main {
  background-color: #eee;
}

.main-wrap {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 48px;

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
    width: calc(100% - 270px - 260px);

    @include xl {
      width: 100%;
    }
  }

  .information {
    width: 260px;

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
    border-bottom: 4px solid $color-primary;
    padding-bottom: 12px;
    margin-right: 20px;
  }

  span:nth-child(2) {
    @include fontSizeLarge;
    font-weight: 400;
    color: #BFBFBF;
  }
}
</style>