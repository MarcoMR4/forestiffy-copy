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
       class="q-mt-md"
    >
    <template v-slot:body-cell-actions="{ row }">
      <q-td class="q-pa-none flex justify-center items-center q-mt-none">
        <OrgsActions :row="row" />
      </q-td>
    </template>
    </q-table>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar} from 'quasar';
import OrgsCustomDialogAdd from '~/components/Orgs/CustomDialogAdd.vue';

const $q = useQuasar(); 

const columns = ref([
  { name: 'organization_type', label: 'Organization Type', align: 'left', field: 'organization_type', sortable: true },
  { name: 'name', label: 'Name', align: 'center', field: 'name', sortable: true },
  { name: 'tax_id', label: 'Tax ID', align: 'center', field: 'tax_id', sortable: true },
  { name: 'website', label: 'Website', align: 'center', field: 'website', sortable: true },
  { name: 'phone', label: 'Phone', align: 'center', field: 'phone', sortable: true },
  { name: 'actions', label: 'Actions', align: 'center', field: 'actions', class: 'bold-column' },
]);

const rows = ref([
  {
    name: 'organization1',
    organization_type: '2',
    tax_id: 1,
    website: 'www.org1_example.com',
    phone: '+52 443 543 4365',
  },
  {
    name: 'organization2',
    organization_type: '2',
    tax_id: 3,
    website: 'www.org2_example.com',
    phone: '+52 443 565 4335',
  }
]);

const showAddOrganization = () => {
  $q.dialog({
    component: OrgsCustomDialogAdd,
    componentProps: {
      message: 'This is for adding... (needs to be reapired....)'
    }
  }).onOk((organizationData) => {
    rows.value.push(organizationData)
    console.log("New organization added:", organizationData)
  }).onCancel(() => {
    console.log('Cancel');
  }).onDismiss(() => {
    console.log('Called on OK or Cancel');
  });
};

</script>

<style scoped>
  .bold_column {
    font-weight: bold;
  }
  .text-custom {
    color: #0d3122;
  }
  .bg-custom {
    background-color: #0d3122;
  }
</style>
