<template>
  <div class="awake-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AwakeRadioGroup",
  provide() {
    return {
      RadioGroup: this
    };
  },
  props: {
    // 触发当前组件的input事件,provide与inject
    value: null
  }
};
</script>

<style lang="scss">
</style>