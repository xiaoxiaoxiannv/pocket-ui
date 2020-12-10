<demo>
    不同尺寸
</demo>
<template>
    <div>
        <div>
            <Button size="big">大默认按钮</Button>
            <Button>普通默认按钮</Button>
            <Button size="small">小默认按钮</Button>
        </div>
        <div>
            <Button theme="link" size="big">大链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button size="small" theme="link">小链接按钮</Button>
        </div>
        <div>
            <Button size="big" theme="text">大文本按钮</Button>
            <Button theme="text">普通文本按钮</Button>
            <Button size="small" theme="text">小文本按钮</Button>
        </div>
    </div>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";
  export default {
    components: {
      Button
    }
  }
</script>