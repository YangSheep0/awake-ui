<template>
  <!-- self只有点击自己才触发 -->
  <transition name="dialog-fade">
    <div class="awake-dialog_wrapper" v-show="visible" @click.self="handleClose()">
      <div class="awake-dialog" :style="{width,marginTop:top}">
        <div class="awake-dialog_header">
          <!-- 标题的具名插槽 -->
          <slot name="title">
            <span class="awake-dialog_title">{{title}}</span>
          </slot>
          <button
            type="button"
            aria-label="Close"
            class="awake-dialog_headerbtn"
            @click="handleClose()"
          >
            <i class="awake-icon-close"></i>
          </button>
        </div>
        <div class="awake-dialog_body">
          <!-- 内容默认插槽 -->
          <slot></slot>
        </div>
        <div class="awake-dialog_footer" v-if="$slots.footer">
          <!-- 具名插槽 -->
          <slot name="footer"></slot>
          <!-- <span class="dialog-footer">
          <awake-button type="button" class="awake-button awake-button-default">
            <span>取 消</span>
          </awake-button>
          <awake-button type="button" class="awake-button awake-button-primary">
            <span>确 定</span>
          </awake-button>
          </span>-->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AwakeDialog",
  props: {
    // 标题
    title: {
      type: String,
      default: "提示"
    },
    // 控制宽度
    width: {
      type: String,
      default: "50%"
    },
    //顶部信息
    top: {
      type: String,
      default: "15vh"
    },
    //控制显示和隐藏
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
// scoped会给当前的组件的模板中的元素添加一个随机的属性
// scoped会给当前的组件所有样式,添加一个对应的属性选择器
.awake-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .awake-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .awake-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .awake-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .awake-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .awake-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>