<template>
  <div class="demo">
    <UploadFile :files="files" id="c" readOnly v-if="files.length" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import UploadFile from '../index.vue';

const files = ref([]);

/* 模拟异步请求图片进行预览 */
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
}, 1000);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
