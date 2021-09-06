<template>
  <b-button class="button" v-ripple variant="primary">{{ text }}</b-button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
}
</style>
