<template>
  <select
    class="border border-gray-400 rounded-md"
    name="record-type"
    id="record-type"
    :value="props.modelValue"
    @change="onChange"
  >
    <slot></slot>
  </select>
</template>

<script setup lang="ts">
import { RecordType, type RecordTypeValue } from '../types/record.type';

const props = defineProps<{ modelValue: RecordTypeValue }>();
const emit = defineEmits<(e: 'update:modelValue', value: RecordTypeValue) => void>();

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  if (target.value && (target.value === RecordType.ldap || target.value === RecordType.local)) {
    emit('update:modelValue', target.value);
  }
}
</script>
