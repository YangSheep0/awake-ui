<template>
  <span
    class="awake-tag awake-tag-light"
    :style="{backgroundColor:color}"
    :class="[`awake-tag--${type}`,`awake-tag--${size}`,`awake-tag--${effect}`,{
        'is-hit':hit
    }]"
    @click="handleClick($event)"
  >
    <slot></slot>
    <i class="awake-tag__close awake-icon-close" v-if="closable" @click="handleClose($event)"></i>
  </span>
</template>

<script>
export default {
  name: "AwakeTag",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    closable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    effect: {
      type: String,
      default: "light",
      validator(val) {
        return ["dark", "light", "plain"].indexOf(val) !== -1;
      }
    },
    color: {
      type: String,
      default: ""
    },
    hit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose(e) {
      this.$emit("close", e);
    },
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss">
.awake-tag {
  background-color: #ecf5ff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
.awake-tag + .awake-tag {
  margin-left: 10px;
}
.awake-tag.awake-tag--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}
.awake-tag.awake-tag--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}
.awake-tag.awake-tag--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}
.awake-tag.awake-tag--danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}

.awake-tag .awake-icon-close {
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
}
.awake-tag .awake-tag__close {
  color: #409eff;
}
.awake-tag.awake-tag--success .awake-tag__close {
  color: #67c23a;
}
.awake-tag.awake-tag--info .awake-tag__close {
  color: #909399;
}

.awake-tag.awake-tag--warning .awake-tag__close {
  color: #e6a23c;
}

.awake-tag.awake-tag--danger .awake-tag__close {
  color: #f56c6c;
}
.awake-tag .awake-tag__close:hover {
  color: #fff;
  background-color: #409eff;
}
.awake-tag.awake-tag--success .awake-tag__close:hover {
  color: #fff;
  background-color: #67c23a;
}
.awake-tag.awake-tag--info .awake-tag__close:hover {
  color: #fff;
  background-color: #909399;
}
.awake-tag.awake-tag--warning .awake-tag__close:hover {
  color: #fff;
  background-color: #e6a23c;
}
.awake-tag.awake-tag--danger .awake-tag__close:hover {
  color: #fff;
  background-color: #f56c6c;
}
.awake-tag--medium {
  height: 28px;
  line-height: 26px;
}
.awake-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
}
.awake-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
}
.awake-tag--dark {
  background-color: #409eff;
  color: #fff;
}
.awake-tag--dark.awake-tag--success {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.awake-tag--dark.awake-tag--info {
  background-color: #909399;
  border-color: #909399;
  color: #fff;
}
.awake-tag--dark.awake-tag--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.awake-tag--dark.awake-tag--warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.awake-tag--plain {
  background-color: #fff;
  border-color: #b3d8ff;
  color: #409eff;
}
.awake-tag--plain.awake-tag--success {
  background-color: #fff;
  border-color: #c2e7b0;
  color: #67c23a;
}
.awake-tag--plain.awake-tag--info {
  background-color: #fff;
  border-color: #d3d4d6;
  color: #909399;
}
.awake-tag--plain.awake-tag--danger {
  background-color: #fff;
  border-color: #fbc4c4;
  color: #f56c6c;
}
.awake-tag--plain.awake-tag--warning {
  background-color: #fff;
  border-color: #f5dab1;
  color: #e6a23c;
}
.awake-tag.is-hit {
  border-color: #409eff;
}
.awake-tag.awake-tag--success.is-hit {
    border-color: #67C23A;
}
.awake-tag.awake-tag--info.is-hit {
    border-color: #909399;
}
.awake-tag.awake-tag--danger.is-hit {
    border-color: #F56C6C;
}
.awake-tag.awake-tag--warning.is-hit {
    border-color: #E6A23C;
}
</style>