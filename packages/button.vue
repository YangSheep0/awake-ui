<template>
  <button
    class="awake-button"
    :class="[`awake-button-${type}`,{
   'is-plain':plain,
   'is-round':round,
   'is-circle':circle,
   'is-disabled':disabled
  }]"
    :disabled="disabled"
    @click="fn"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 没有传入任何内容时 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "AwakeButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    fn(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss">
.awake-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
// type属性其实就是根据父组件传过来的type,起到改变元素style的作用
.awake-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.awake-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.awake-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }
}
.awake-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
}
.awake-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// plain朴素按钮 plain其实也是根据父组件传来的plain的值,判断是否加上plain类,改变style
.awake-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.awake-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.awake-button-success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.awake-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.awake-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.awake-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round圆角按钮 加类就改变style就好了,也是根据父组件传过来的值进行判断的
.awake-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
//circle圆形按钮
.awake-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 带icon的button
// icon配套样式
.awake-button [class*=awake-icon-] + span {
  margin-left: 5px;
}
// disabled属性
.awake-button.is-disabled {
  cursor: no-drop;
}
</style>