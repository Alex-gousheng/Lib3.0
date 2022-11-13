<script setup>
  import UploadImg from './Components/UploadImg/demo/index.vue'
</script>

# UploadImg

<ContainerBox title="介绍">
<template #desc>
一般用于修改头像
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<UploadImg />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <LibUploadImg url="/upload" v-model="img_url" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const img_url = ref('https://img.yipic.cn/thumb/42da8c3a/02394bd8/5769f7e1/6d185ec9/big_42da8c3a02394bd85769f7e16d185ec9.png');
</script>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 图片链接 | String | -      |
| url   | 接口地址 | String | -      |

</template>
</ContainerBox>
