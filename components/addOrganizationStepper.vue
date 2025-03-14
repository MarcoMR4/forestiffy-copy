<template>
    <div class="q-pa-md">
      <q-stepper v-model="step" vertical color="primary" animated>
        <q-step :name="1" title="Organization type" icon="settings" :done="step > 1">
          <p>
            Select the type of organization you wish to add.
            The organization type should align with the activity you want to perform on the platform.
          </p>
  
          <q-select v-model="model" :options="options" label="Select organization type" />
  
          <q-stepper-navigation>
            <q-btn @click="step = 2" class="bg-custom" label="Continue" />
          </q-stepper-navigation>
        </q-step>
  
        <q-step :name="2" title="Organization data" caption="Optional" icon="create_new_folder" :done="step > 2">
          <q-form @submit.prevent="onSubmit" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"
            />
  
            <q-select v-model="country" :options="countries" label="Select country" />
            <q-select v-model="tax" :options="taxes" label="Select Tax" />
  
            <q-input
              filled
              v-model="phone"
              label="Phone number *"
              hint="Enter a valid phone number"
              lazy-rules
              :rules="[
                val => !!val || 'Phone number is required',
                val => /^[0-9]{10}$/.test(val) || 'Enter a valid 10-digit phone number'
              ]"
            />
  
            <q-input
              filled
              v-model="website"
              label="Your website *"
              lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
  
          <q-stepper-navigation>
            <q-btn @click="onSubmit" class="bg-custom" label="Add" />
            <q-btn flat @click="step = 1" label="Back" class="q-ml-sm bg-custom" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { defineEmits } from 'vue';

  const emit = defineEmits(["close-dialog"]);
  
  export default {
    emits: ['close'], // Permite que el componente padre cierre el diálogo
    setup(props, { emit }) {
      const step = ref(1);
      const name = ref(null);
      const country = ref(null);
      const tax = ref(null);
      const website = ref(null);
      const phone = ref(null);
      const model = ref(null);
  
      const onSubmit = () => {
        console.log("Saving organization:", {
          name: name.value,
          country: country.value,
          tax: tax.value,
          phone: phone.value,
          website: website.value,
          type: model.value
        });
  
        // datos a un backend si es necesario
  
        emit("close-dialog"); 
      };
  
      return {
        step,
        name,
        country,
        tax,
        website,
        phone,
        model,
        onSubmit,
        options: ['Producer', 'Exporter (Packhouse)', 'Exporter (Trader)', 'Importer'],
        countries: ['Mex', 'USA', 'Canada'],
        taxes: ['1', '2']
      };
    }
  }
  </script>
  
  

<style>
  .bg-custom {
    background-color: #0d3122;
    color: white;
  }
</style>