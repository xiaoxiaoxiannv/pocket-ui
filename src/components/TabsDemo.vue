<template>
    <h1>Tabs 标签页</h1>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>
    <Demo :component="Tabs1Demo" />
</template>
<script lang="ts">
  import Demo from './Demo.vue'
  import Tabs1Demo from './Tabs1.demo.vue'
  export default {
    components: {Demo},
    setup() {
      return {Tabs1Demo};
    }
  };
</script>
<style lang="scss" scoped>
    p{
        color: #5e6d82;
        margin-bottom: 50px;
    }
</style>