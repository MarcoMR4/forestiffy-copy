<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pa-md">
      <q-card-section>
        <div class="text-h6">Organization details</div>
      </q-card-section>

      <q-card-section>
        <p>{{ message }}</p>
        <p><strong>Name:</strong> {{ rowData?.name }}</p>
        <p>Website: {{ rowData?.website }}</p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="onOKClick" />
        <q-btn flat label="Cancelar" color="primary" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  rowData: {
    type: Object,
    required: false
  }
})

const dialogRef = ref(null)

const onDialogHide = () => {
  console.log('El diálogo se ha cerrado')
}

const onOKClick = () => {
  if (dialogRef.value) {
    dialogRef.value.hide()  
  }
}

const onCancelClick = () => {
  if (dialogRef.value) {
    dialogRef.value.hide()  
  }
}

</script>
