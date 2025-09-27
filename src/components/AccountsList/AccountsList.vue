<template>
  <div class="accounts-list">
    <div class="accounts-list__header grid grid-cols-[minmax(0,1fr)_minmax(0,0.84fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.16fr)] gap-x-2 mb-2 text-sm text-gray-400">
      <span>Метки</span>
      <span>Тип записи</span>
      <span>Логин</span>
      <span class="col-span-2">Пароль</span>
    </div>
    <div class="accounts-list__items">
      <AccountForm
        className="accounts-list__item grid grid-cols-[minmax(0,1fr)_minmax(0,0.84fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.16fr)] gap-x-2 mb-2"
        v-for="(record, idx) in recordsStore.records"
        :key="record.id"
        :model-value="record"
        @update:model-value="val => recordsStore.records[idx] = val"
        @removeRecord="recordsStore.removeRecord"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountForm from '../AccountForm/AccountForm.vue';
import { useRecordsStore } from '../../core/store';

const recordsStore = useRecordsStore();
</script>
