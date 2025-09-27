<template>
  <header class="header mb-5">
    <div class="head py-3">
      <h1 class="font-semibold text-xl inline-block">Учетные записи</h1>
      <button
        class="inline-block border border-gray-400 px-2 aspect-square text-3xl font-thin ml-2 rounded-md leading-none"
        @click="addNewRecord"
      >
        +
      </button>
    </div>
    <div class="tip bg-gray-100 px-2 rounded-sm">
      <span>
        <v-icon name="bi-question-circle" />
      </span>
      <span class="text-sm">
        Для указания нескольких меток для одной пары логин/пароль используйте
        разделитель ;
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRecordsStore } from '../core/store';

const { addNewRecord } = useRecordsStore();
</script>
