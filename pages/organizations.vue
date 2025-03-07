<template>
  <div class="q-pa-md">
    <div class="row justify-end" @click="showAddOrganization">
      <q-btn 
        style="background: #0d3122" 
        text-color="white" 
        label="Add new organization" 
        class="q-mt-md"
      />
    </div>
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="q-mt-md full-width"
    />

    <!-- Modal -->
    <q-dialog v-model="dialogOpen">
      <q-card style="width: 400px;">
        <q-card-section>
          <div class="text-h5"><b>Add new organization</b></div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="saveData">
            <q-input filled v-model="formData.name" label="Name" />
            <q-input filled v-model="formData.email" label="Email" type="email" />
            <q-input filled v-model="formData.phone" label="Phone" type="tel" />
            <q-btn label="Save" style="background: #0d3122; color: white" type="submit" class="full-width" />
          </q-form>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Close" color="primary" flat @click="dialogOpen = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  import { ref } from 'vue'

  const dialogOpen = ref(false); 
  const formData = ref({
    name: '',
    email: '',
    phone: ''
  });

  const columns = ref([
    { name: 'Organization type', align: 'left', label: 'Organization type', field: 'organization_type', sortable: true, headerStyle: "font-weight: bold; font-size: 15px;" },
    { name: 'Name', align: 'center', label: 'Name', field: 'name', sortable: true, headerStyle: "font-weight: bold; font-size: 15px;" },
    { name: 'Tax ID', align: 'center', label: 'Tax', field: 'tax_id', sortable: true, headerStyle: "font-weight: bold; font-size: 15px;" },
    { name: 'Website', align: 'center', label: 'Website', field: 'website', sortable: true, headerStyle: "font-weight: bold; font-size: 15px;" },
    { name: 'Phone', align: 'center', label: 'Phone', field: 'phone', sortable: true, headerStyle: "font-weight: bold; font-size: 15px;" },
    { name: 'Actions', align: 'center', label: 'Actions', field: 'actions', sortable: true, headerStyle: "font-weight: bold; font-size: 15px;" },
  ]);

  const rows = ref([
    {
      name: 'organization1', 
      organization_type: '2', 
      tax_id: 1, 
      website: 'www.org1_example.com', 
      phone: '+52 443 543 4365',
      actions: '<button>press<button/>',
    },
  ]);

  const openDialog = () => {
    dialogOpen.value = true;
  };

  const saveData = () => {
    // Agregar los datos del formulario a la tabla
    const newRow = {
      name: formData.value.name,
      organization_type: '2',  
      tax_id: 12345,           
      website: 'www.org2.com', 
      phone: formData.value.phone,
      actions: '<button>press<button/>',
    };

    rows.value.push(newRow); 
    formData.value = { name: '', email: '', phone: '' }; 
    dialogOpen.value = false;  
  };

  const showAddOrganization = () => {
    dialogOpen.value = true;
  };

  export default {
    setup() {
      return {
        columns,
        rows,
        dialogOpen,
        formData,
        saveData,
        openDialog,
        showAddOrganization,
      };
    },
  };
</script>
