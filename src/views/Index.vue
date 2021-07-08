<template>
  <m-header></m-header>
  <router-view class="main"></router-view>
</template>

<script>
import MHeader from "./../common/MHeader.vue";
export default {
  components: {
    MHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>