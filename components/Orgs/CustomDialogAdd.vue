<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin custom-dialog">
      <div class="row items-center justify-between q-pa-md">
        <div class="text-h6" style="font-weight: bold;">Add new organization</div>
        <q-btn 
          icon="close" 
          flat 
          dense 
          class="close-button"
          @click="onDialogHide"
        />
      </div>
      
      <q-separator />
      <q-card-section>

        <div class="q-pa-md">
          <q-stepper v-model="step" vertical color="primary" animated>
            <!-- Paso 1: Organization Type -->
            <q-step :name="1" title="Organization type" icon="settings" :done="step > 1">
              <p class="text-custom">
                Select the type of organization you wish to add.
                The organization type should align with the activity you want to perform on the platform.
              </p>

              <q-select v-model="type" :options="options" label="Select organization type" />

              <q-stepper-navigation>
                <q-btn @click="step = 2" class="bg-custom" label="Continue" />
              </q-stepper-navigation>
            </q-step>

            <!-- Paso 2: Organization Data -->
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
                  :rules="[val => !!val || 'Phone number is required', val => /^[0-9]{10}$/.test(val) || 'Enter a valid 10-digit phone number']"
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

      </q-card-section>
    </q-card>
  </q-dialog>
  
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useDialogPluginComponent } from 'quasar';

const step = ref(1)
const name = ref(null)
const country = ref(null)
const tax = ref(null)
const website = ref(null)
const phone = ref(null)
const type = ref(null)
const model = ref(null)

const props = defineProps({
  message: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['close-dialog', 'add-organization']);

const { dialogRef } = useDialogPluginComponent();

// const onOKClick = () => {
//   dialogRef.value?.hide(); 
//   emit('add-organization', organizationData);
// };

const onDialogHide = () => {
  emit('close-dialog');
  const organizationData = {
    name: name.value,
    country: country.value,
    tax_id: tax.value,
    phone: phone.value,
    website: website.value,
    organization_type: type.value
  }
  emit('add-organization', organizationData);  // Emitir el evento con los datos
};

const onSubmit = () => {
  const organizationData = {
    name: name.value,
    country: country.value,
    tax_id: tax.value,
    phone: phone.value,
    website: website.value,
    organization_type: type.value
  }

  console.log("Saving organization:", organizationData)
  emit('ok', organizationData);
  dialogRef.value?.hide(); 
}

  const options = ['Producer', 'Exporter (Packhouse)', 'Exporter (Trader)', 'Importer']
  const countries = ['Mexico', 'USA', 'Canada']
  const taxes = ['1', '2']

</script>

<style scoped>
  .custom-dialog {
    width: 90%;
    min-width: 65vw;
  }

  .bg-custom {
      background-color: #0d3122;
      color: white;
  }

  .text-custom {
    color: #0d3122; /* Color verde para el texto */
  }
</style>
