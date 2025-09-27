<template>
  <div :class="accountFormClasses">
    <BaseInput v-model="formMarksModel" />
    <SelectInput
      v-model="formTypeModel"
    >
      <option :value="RecordType.local">Локальная</option>
      <option :value="RecordType.ldap">LDAP</option>
    </SelectInput>
    <BaseInput v-model="modelValue.login" :className="loginClasses" />
    <PasswordInput v-if="isPasswordExists" v-model="modelValue.password!" />
    <button class="w-full h-full" @click="emit('removeRecord', props.modelValue.id)">
      <v-icon scale="1.15" name="bi-trash3" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseInput from '../../shared/ui/BaseInput.vue';
import PasswordInput from '../../shared/ui/PasswordInput.vue';
import SelectInput from '../../shared/ui/SelectInput.vue';
import type { Record, RecordTypeValue } from '../../shared/types/record.type';
import { RecordType } from '../../shared/types/record.type';
import { marksToString } from '../../shared/utils/marks-to-string.util';
import { stringToMarks } from '../../shared/utils/string-to-marks.util';

interface Props {
  modelValue: Record;
  className?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'removeRecord', value: string): void,
  (e: 'update:modelValue', value: Record): void,
}>();

const accountFormClasses = computed(() => [props.className, 'account-form']);
const isPasswordExists = computed(
  () => props.modelValue.type === RecordType.local
);
const loginClasses = computed(() =>
  props.modelValue.type === RecordType.ldap ? 'col-span-2' : ''
);

const formMarksModel = computed({
  get: () => marksToString(props.modelValue.marks),
  set: (v: string) => emit('update:modelValue', {
    ...props.modelValue,
    marks: stringToMarks(v),
  })
})

const formTypeModel = computed({
  get: () => props.modelValue.type,
  set: (v: RecordTypeValue) => {
    if (v === RecordType.ldap) {
      emit('update:modelValue', {
        ...props.modelValue,
        type: RecordType.ldap,
        password: null,
      });
    } else {
      emit('update:modelValue', {
        ...props.modelValue,
        type: RecordType.local,
        password: 'Пароль',
      });
    }
  }
});
</script>
