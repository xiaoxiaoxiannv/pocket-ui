<template>
    <button class="pocket-switch" @click="toggle" :class="{'pocket-checked':value,'pocket-disabled': disabled}">
        <span></span>
    </button>
</template>
<script lang="ts">
  import {ref} from 'vue';

  export default {
    props: {
      value: {
        type:Boolean
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const toggle = () => {
        if(props.disabled) return
        context.emit('update:value', !props.value);
      };
      return {toggle};
    }
  };
</script>
<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    .pocket-switch {
        height: $h;
        width: $h*2;
        border: none;
        background: #bfbfbf;
        border-radius: $h/2;
        position: relative;


        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: all 250ms;
        }

        &.pocket-checked {
            background: #1890ff;

            > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }

        &:focus {
            outline: none;
        }

        &:active {
            > span {
                width: $h2 + 4px
            }
        }

        &.pocket-checked:active {
            > span {
                width: $h2 + 4px;
                margin-left: -4px
            }
        }
        &.pocket-disabled{
            cursor: not-allowed;
            opacity: 6;
            background: #e8e8e8;
        }

    }
</style>