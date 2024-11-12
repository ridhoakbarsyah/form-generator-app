<script setup lang="ts">
import { ref, watch } from "vue";
import FormStep from "./FormStep.vue";
import PreviewCard from "../components/card/Preview.vue";

import type { Form } from "../types/form";

const props = defineProps<{
  stepForm: Form;
}>();

const currentStep = ref<number>(1);
const formData = ref<Record<string, any>>({});
const showPreview = ref<boolean>(false);
const isCurrentStepValid = ref<boolean>(false);

watch(isCurrentStepValid, (newValue) => {
  console.log(newValue);
});

const handleValidation = (isValid: boolean) => {
  isCurrentStepValid.value = isValid;
};

const nextStep = () => {
  if (isCurrentStepValid.value && currentStep.value < props.stepForm.length) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const handleSubmit = () => {
  if (isCurrentStepValid.value) {
    console.log("Form Data:", formData.value);
    showPreview.value = true;
  }
};

const handleClosePreview = () => {
  showPreview.value = false;
  formData.value = {};
  currentStep.value = 1;
};
</script>

<template>
  <div class="w-[90vw] lg:w-[50vw] mx-auto mt-10">
    <form
      v-if="!showPreview"
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-y-4"
    >
      <div class="flex items-center gap-x-2 justify-center mb-8">
        <div
          v-for="(item, index) in props.stepForm"
          :key="index"
          class="flex items-center gap-x-2"
        >
          <div
            v-if="index === 0"
            class="w-16 md:w-28 h-[2px] bg-yellow-700"
          ></div>
          <div
            :class="{
              'rounded-full w-16 h-16 text-xl font-bold text-center pt-4 cursor-pointer': true,
              'bg-yellow-600 text-white': currentStep >= item.step,
              'bg-gray-200': currentStep < item.step,
            }"
          >
            <span>{{ item.step }}</span>
          </div>
          <div
            v-if="index !== props.stepForm.length - 1"
            :class="{
              'w-24 md:w-36 h-[2px]': true,
              'bg-yellow-700': currentStep >= item.step,
              'bg-gray-300': currentStep < item.step,
            }"
          ></div>
          <div
            v-if="index === props.stepForm.length - 1"
            :class="{
              'w-16 md:w-28 h-[2px]': true,
              'bg-yellow-700': currentStep >= item.step,
              'bg-gray-300': currentStep < item.step,
            }"
          ></div>
        </div>
      </div>

      <h1 class="text-xl font-bold">
        {{ props.stepForm[currentStep - 1].title }}
      </h1>
      <p>{{ props.stepForm[currentStep - 1].description }}</p>

      <FormStep
        :key="currentStep"
        :fields="props.stepForm[currentStep - 1].fields"
        :modelValue="formData.value"
        @update:modelValue="(newData) => (formData.value = newData)"
        @validation="handleValidation"
      />

      <div class="flex justify-between mt-8">
        <button
          type="button"
          @click="prevStep"
          :disabled="currentStep === 1"
          class="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          v-if="currentStep !== props.stepForm.length"
          type="button"
          @click="nextStep"
          :disabled="!isCurrentStepValid"
          class="bg-yellow-600 text-white px-4 py-2 rounded"
          :class="{
            'opacity-50 cursor-not-allowed': !isCurrentStepValid,
          }"
        >
          Next
        </button>
        <button
          v-if="currentStep === props.stepForm.length"
          type="submit"
          :disabled="!isCurrentStepValid"
          class="bg-yellow-600 text-white px-4 py-2 rounded"
          :class="{
            'opacity-50 cursor-not-allowed': !isCurrentStepValid,
          }"
        >
          Submit
        </button>
      </div>
    </form>

    <PreviewCard
      v-if="showPreview"
      :formData="formData"
      @close="handleClosePreview"
    />

    <!-- Footer Section -->
    <footer class="mt-10 text-center text-black">
      <p>&copy; 2024 Ridho Akbarsyah.</p>
      <p>Develop with Vue.js</p>
    </footer>
  </div>
</template>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
