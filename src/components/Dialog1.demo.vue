<demo>
    基础用法
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <strong>这是一段加粗信息</strong>
                <div>这是一段信息</div>
            </template>
            <template v-slot:title>
                <strong>提示</strong>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {
    ref
  } from 'vue';
  import {
    openDialog
  } from '../lib/openDialog';

  export default {
    components: {
      Dialog,
      Button
    },
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      const f1 = () => {
        return false;
      };
      const f2 = () => {};
      return {
        x,
        toggle,
        f1,
        f2
      };
    }
  };
</script>
