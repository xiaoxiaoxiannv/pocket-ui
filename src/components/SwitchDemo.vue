<template>
    <div>
        <h1>Switch 开关</h1>
        <p class="switch-description">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        <Demo :component="Switch1Demo" />
        <Demo :component="Switch2Demo" />
    </div>
</template>
<script lang="ts">
  import Switch1Demo from './Switch1.demo.vue';
  import Switch2Demo from './Switch2.demo.vue';
  import Demo from './Demo.vue'
  import {ref} from 'vue';

  export default {
    components: {Demo},
    setup() {
      return {Switch1Demo, Switch2Demo};
    }
  };
</script>
<style lang="scss" scoped>
    $border-color: #d9d9d9;
    p{
        color: #5e6d82;
        margin-bottom: 50px;
    }
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;


        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>