<template>
  <LibUploadImg url="/upload" v-model="img_url" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LibUploadImg from '../index.vue';

const img_url = ref('https://img.yipic.cn/thumb/42da8c3a/02394bd8/5769f7e1/6d185ec9/big_42da8c3a02394bd85769f7e16d185ec9.png');
</script>
