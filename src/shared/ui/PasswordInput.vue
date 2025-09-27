<template>
  <label class="relative">
    <BaseInput
      :modelValue="props.modelValue"
      @update:modelValue="emitValue"
      :type="inputType"
      className="w-full"
    />
    <button class="absolute top-0 right-0 h-full aspect-square" @click="changePasswordVisibility">
      <v-icon scale="1.15" :name="iconName" />
    </button>
  </label>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseInput from './BaseInput.vue';

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

const isPasswordVisible = ref<boolean>(false);

const inputType = computed(() =>
  isPasswordVisible.value ? 'text' : 'password'
);

const iconName = computed(() => 
  isPasswordVisible.value ? 'bi-eye' : 'bi-eye-slash'
);

function changePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
};

function emitValue(v: string) {
  emit('update:modelValue', v);
}
</script>
