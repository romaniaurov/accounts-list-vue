<template>
  <input
    :type="props.type"
    :class="baseInputClasses"
    :value="props.modelValue"
    @input="onInput"
    :placeholder="placeholderValue"
    @blur="emit('blur')"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: string;
  type?: 'text' | 'password';
  className?: string;
  placeholder?: string;
  invalid?: boolean;
}

const props = withDefaults(defineProps<Props>(), { type: 'text' });
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
  (e: 'blur'): void,
}>();

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

const baseInputClasses = computed(() => [
  'border rounded-md py-1 px-1',
  props.invalid ? 'border-red-700 outline-2 outline-red-300' : 'border-gray-400',
  props.className,
]);

const placeholderValue = computed(() =>
  props.placeholder ? props.placeholder : undefined
);
</script>
