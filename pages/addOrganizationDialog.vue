<template>
    <q-card style="width: 500px">
      <q-card-section>
        <div class="text-h5"><b>Add New Organization</b></div>
      </q-card-section>
  
      <q-separator />
  
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <!-- Paso 1: Información Básica -->
        <q-step :name="1" title="Basic Info" icon="info" :done="step > 1">
          <q-input v-model="formData.name" label="Name" filled class="q-mb-md" />
          <q-input v-model="formData.email" label="Email" type="email" filled class="q-mb-md" />
          <q-input v-model="formData.phone" label="Phone" type="tel" filled class="q-mb-md" />
          <q-btn label="Next" color="primary" @click="nextStep" />
        </q-step>
  
        <!-- Paso 2: Información Adicional -->
        <q-step :name="2" title="Additional Info" icon="assignment" :done="step > 2">
          <q-input v-model="formData.website" label="Website" filled class="q-mb-md" />
          <q-input v-model="formData.tax_id" label="Tax ID" filled class="q-mb-md" />
          <q-btn label="Back" flat @click="prevStep" class="q-mr-sm" />
          <q-btn label="Next" color="primary" @click="nextStep" />
        </q-step>
  
        <!-- Paso 3: Confirmación -->
        <q-step :name="3" title="Confirm" icon="check" :done="step > 3">
          <div class="q-mb-md">
            <p><strong>Name:</strong> {{ formData.name }}</p>
            <p><strong>Email:</strong> {{ formData.email }}</p>
            <p><strong>Phone:</strong> {{ formData.phone }}</p>
            <p><strong>Website:</strong> {{ formData.website }}</p>
            <p><strong>Tax ID:</strong> {{ formData.tax_id }}</p>
          </div>
          <q-btn label="Back" flat @click="prevStep" class="q-mr-sm" />
          <q-btn label="Submit" color="positive" @click="saveData" />
        </q-step>
      </q-stepper>
  
      <q-card-actions >
        <q-btn label="Close" color="negative" flat @click="closeDialog" />
      </q-card-actions>
    </q-card>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['close', 'save']);

const step = ref(1);
const formData = ref({
    name: '',
    email: '',
    phone: '',
    website: '',
    tax_id: '',
});

const nextStep = () => {
    if (step.value < 3) step.value++;
};

const prevStep = () => {
    if (step.value > 1) step.value--;
};

const saveData = () => {
    emit('save', formData.value);
    closeDialog();
};

const closeDialog = () => {
    emit('close');
};
</script>
  