<template>
    <h1>Dialog 对话框</h1>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
</template>
<script lang="ts">
  import Demo from './Demo.vue';
  import Dialog1Demo from './Dialog1.demo.vue';
  import Dialog2Demo from './Dialog2.demo.vue';

  export default {
    components: {Demo},
    setup() {
      return {Dialog1Demo, Dialog2Demo};
    }
  };
</script>
