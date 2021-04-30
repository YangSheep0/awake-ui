<template>
  <div class="awake-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'AwakeCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>