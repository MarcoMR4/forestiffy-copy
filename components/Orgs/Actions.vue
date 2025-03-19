<template>
    <div class="q-gutter-sm  q-col-gutter-none">
        <q-btn
            icon="visibility"
            icon-color="#0d3122"
            @click="viewOrganization(props.row)"
            flat
            round
            dense
            size="md"
            class="q-mb-xs q-mr-xs q-mt-xs text-custom"
        >
        </q-btn>

        <q-btn
            icon="edit"
            icon-color="#0d3122"
            @click="editOrganization(props.row)"
            flat
            round
            dense
            size="md"
            class="q-mb-xs q-mr-xs q-mt-xs text-custom"
        >
        </q-btn>

        <q-btn
            icon="delete_forever"
            color="negative"
            @click="deleteOrganization(props.row)"
            flat
            round
            dense
            size="md"
            class="q-mb-xs q-mr-xs q-mt-xs"
        >
        </q-btn>
    </div>  
</template>

<script setup>
import { useQuasar} from 'quasar';
const $q = useQuasar(); 
import CustomComponent from '../CustomComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
  row: {
    type: Object,
    required: true
  }
})

const viewOrganization = (row) => {
    console.log(row)
  $q.dialog({
    component: CustomComponent,
    componentProps: {
        rowData: row,
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

</script>

<style>
  .text-custom {
    color: #0d3122;
  }
  .bg-custom {
    background-color: #0d3122;
  }
</style>