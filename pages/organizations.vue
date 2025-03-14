<template>
  <div class="q-pa-md">
    <div class="row justify-end" @click="showAddOrganization">
      <q-btn
        text-color="white"
        label="Add new organization"
        class="q-mt-md bg-custom"
      />
    </div>
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="q-mt-md full-width"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div class="q-gutter-sm q-mt-xs q-mb-xs q-mr-xs q-ml-xs q-col-gutter-none">

            <q-btn
              :icon="'visibility'"
              icon-color="#0d3122"
              @click="viewOrganization(props.row)"
              flat
              size="md"
              class="q-mb-xs q-mr-xs q-mt-xs text-custom"
            />

            <q-btn
              :icon="'edit'"
              icon-color="#0d3122"
              @click="editOrganization(props.row)"
              flat
              size="md"
              class="q-mb-xs q-mr-xs q-mt-xs text-custom"
            />

            <q-btn
              :icon="'delete_forever'"
              color="negative"
              @click="deleteOrganization(props.row)"
              flat
              size="md"
              class="q-mb-xs q-mr-xs q-mt-xs"
            />
          </div>
        </q-td>
      </template>
  </q-table>

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
            <q-btn
              label="Save"
              style="background: #0d3122; color: white"
              type="submit"
              class="full-width"
            />
          </q-form>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Close" color="primary" flat @click="dialogOpen = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar} from 'quasar';
import CustomComponent from './CustomComponent.vue';


const $q = useQuasar(); 
const step = ref(1);
const dialogOpen = ref(false);
const formData = ref({
  name: '',
  email: '',
  phone: '',
});

const columns = ref([
  { name: 'organization_type', label: 'Organization Type', align: 'left', field: 'organization_type', sortable: true },
  { name: 'name', label: 'Name', align: 'center', field: 'name', sortable: true },
  { name: 'tax_id', label: 'Tax ID', align: 'center', field: 'tax_id', sortable: true },
  { name: 'website', label: 'Website', align: 'center', field: 'website', sortable: true },
  { name: 'phone', label: 'Phone', align: 'center', field: 'phone', sortable: true },
  { name: 'actions', label: 'Actions', align: 'center', field: 'actions' },
]);

const rows = ref([
  {
    name: 'organization1',
    organization_type: '2',
    tax_id: 1,
    website: 'www.org1_example.com',
    phone: '+52 443 543 4365',
  },
]);

const viewOrganization = () => {
  $q.dialog({
    component: CustomComponent,
    componentProps: {
      message: 'This is for showing details...'
    }
  }).onOk(() => {
    console.log('OK');
  }).onCancel(() => {
    console.log('Cancel');
  }).onDismiss(() => {
    console.log('Called on OK or Cancel');
  });
};

const editOrganization = () => {
  $q.dialog({
    component: CustomComponent,
    componentProps: {
      message: 'This is for editing organization...'
    }
  }).onOk(() => {
    console.log('OK');
  }).onCancel(() => {
    console.log('Cancel');
  }).onDismiss(() => {
    console.log('Called on OK or Cancel');
  });
};

const deleteOrganization = () => {
  $q.dialog({
    component: CustomComponent,
    componentProps: {
      message: 'This is for deleting organization...'
    }
  }).onOk(() => {
    console.log('OK');
  }).onCancel(() => {
    console.log('Cancel');
  }).onDismiss(() => {
    console.log('Called on OK or Cancel');
  });
};


const showAddOrganization = () => {
  $q.dialog({
    component: CustomComponent,
    componentProps: {
      message: 'This is for adding... (needs to be reapired....)'
    }
  }).onOk(() => {
    console.log('OK');
  }).onCancel(() => {
    console.log('Cancel');
  }).onDismiss(() => {
    console.log('Called on OK or Cancel');
  });
};

const saveData = () => {
  rows.value.push({
    name: formData.value.name,
    organization_type: '2',
    tax_id: 12345,
    website: 'www.org2.com',
    phone: formData.value.phone,
  });

  formData.value = { name: '', email: '', phone: '' };
  dialogOpen.value = false;
};
</script>

<style>
  .text-custom {
    color: #0d3122;
  }
  .bg-custom {
    background-color: #0d3122;
  }
</style>
