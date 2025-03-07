<template>
  <div class="q-pa-md">
    <q-card bordered>
      <q-card-section class="q-pa-sm">
        <div class="text-h6">My Account</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-form class="q-gutter-md" autocomplete="off">
          <div class="row q-mb-md">
            <div class="col-6">
              <q-input filled v-model="data.firstName" label="First Name(s)" />
            </div>
            <div class="col-6">
              <q-input filled v-model="data.lastName" label="Last Name(s)" />
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <q-select
                filled
                v-model="data.country"
                :options="countries"
                label="Country"
              />
            </div>
            <div class="col-6">
              <q-input filled v-model="data.phone" label="Phone" />
            </div>
          </div>
          
          <q-btn 
            style="background: #0d3122" 
            text-color="white" 
            label="Save" 
            class="q-mt-xl"
            @click="save"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Datos iniciales
    const data = ref({
      firstName: 'Marco',
      lastName: 'Mercado',
      country: 'Mexico',
      phone: '4432868808',
    });

    // Opciones de países
    const countries = ref(['Mexico', 'USA', 'Canada']);

    // Función para guardar
    const save = () => {
      console.log('Form saved', {
        firstName: data.value.firstName,
        lastName: data.value.lastName,
        country: data.value.country,
        phone: data.value.phone,
      });
      
      // Aquí puedes realizar alguna acción para persistir los datos si lo deseas
    };

    return {
      data,
      countries,
      save
    };
  }
};
</script>
