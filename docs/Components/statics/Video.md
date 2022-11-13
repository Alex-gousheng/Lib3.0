<script setup>
  import LibVideo from './Components/Video/demo/index.vue'
</script>

# Video

<ContainerBox title="介绍">
<template #desc>
一个轻巧的视频播放器
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<LibVideo />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <LibVideo url="https://www.runoob.com/try/demo_source/movie.mp4" />
</template>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数 | 说明                                          | 类型 | 默认值 |
| ---- | --------------------------------------------- | ---- | ------ |
| url  | 视频地址，引入本地视频请使用`require('路径')` | 未知 | -      |

</template>
</ContainerBox>
