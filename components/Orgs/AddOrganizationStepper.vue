<template>
    
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits()

const step = ref(1)
const name = ref(null)
const country = ref(null)
const tax = ref(null)
const website = ref(null)
const phone = ref(null)
const model = ref(null)

const onSubmit = () => {
  const organizationData = {
    name: name.value,
    country: country.value,
    tax: tax.value,
    phone: phone.value,
    website: website.value,
    type: model.value
  }

  console.log("Saving organization:", organizationData)
  emit('close-dialog')
  emit('add-organization', organizationData)
}

  const options = ['Producer', 'Exporter (Packhouse)', 'Exporter (Trader)', 'Importer']
  const countries = ['Mexico', 'USA', 'Canada']
  const taxes = ['1', '2']
</script>

<style scoped>
  .bg-custom {
    background-color: #0d3122;
    color: white;
  }

  .text-custom {
    color: #0d3122; /* Color verde para el texto */
  }
</style>
