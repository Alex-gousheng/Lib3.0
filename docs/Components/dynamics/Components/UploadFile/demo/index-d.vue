<template>
  <div class="demo">
    <UploadFile :files="files" id="d" url="https://jsonplaceholder.typicode.com/posts/" v-if="show || files.length" />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import UploadFile from '../index.vue';

const files = ref([]);
const show = ref(false);

/* 模拟异步请求图片，isShow 是为了避免无图片导致隐藏，无法添加图片 */
setTimeout(() => {
  files.value = [
    {
      fileName: '图片1',
      src: 'https://img.yipic.cn/thumb/42da8c3a/02394bd8/5769f7e1/6d185ec9/big_42da8c3a02394bd85769f7e16d185ec9.png',
    },
    {
      fileName: '图片2',
      src: 'https://img.yipic.cn/thumb/42da8c3a/02394bd8/5769f7e1/6d185ec9/big_42da8c3a02394bd85769f7e16d185ec9.png',
    },
    {
      fileName: '图片3',
      src: 'https://img.yipic.cn/thumb/42da8c3a/02394bd8/5769f7e1/6d185ec9/big_42da8c3a02394bd85769f7e16d185ec9.png',
    },
  ];
  show.value = true; //请求成功后赋值
}, 1000);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
