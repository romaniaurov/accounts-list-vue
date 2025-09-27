import { defineStore } from 'pinia';
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import { RecordType, type Record } from '../shared/types/record.type';

export const useRecordsStore = defineStore('records', () => {
  const records = ref<Record[]>([]);

  function addNewRecord(): void {
    const newRecord: Record = {
      id: nanoid(),
      marks: [{ text: 'Значение' }],
      type: RecordType.local,
      login: 'Значение',
      password: 'Пароль',
    };

    records.value.push(newRecord);
  }

  function removeRecord(id: string): void {
    records.value = records.value.filter(record => record.id !== id);
  };

  return { records, addNewRecord, removeRecord };
}, {
  persist: true,
});
