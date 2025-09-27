<template>
  <input
    :type="props.type"
    :class="baseInputClasses"
    :value="props.modelValue"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: string;
  type?: 'text' | 'password';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), { type: 'text' });
const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

const baseInputClasses = computed(() => [
  'border border-gray-400 rounded-md py-1 px-1',
  props.className,
]);
</script>
