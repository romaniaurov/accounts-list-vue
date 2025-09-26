<template>
  <header class="header">
    <div class="head py-2">
      <h1 class="font-semibold text-xl inline-block">Учетные записи</h1>
      <button class="inline-block border border-gray-400 px-2 aspect-square text-3xl font-thin ml-2 rounded-md leading-none" @click="addRecord">+</button>
    </div>
    <div class="tip bg-gray-100 px-2 rounded-sm">
      <span>
        <v-icon name="bi-question-circle" />
      </span>
      <span class="text-sm">
        Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
function addRecord() {
  return;
}
</script>

<style lang="scss"></style>