<template>
    <q-header elevated class="text-white q-pa-x" style="background-color: #0d3122; height: 91px;">
      <q-toolbar>

        <q-btn flat round dense icon="menu" class="q-mr-sm" @click="toggleDrawer" />
  
        <div>
          <client-only>
            <NuxtLink to="/">
              <img 
                src="/tree2.png" 
                style="max-width: 35%; height: auto;" 
                alt="Logo" 
                class="q-mr-md" 
              />
            </NuxtLink>
          </client-only>
        </div>
  
        <q-space />

        <div class="q-mr-md q-text-subtitle-2">English</div>
  
      </q-toolbar>
    </q-header>
  </template>
  

<script setup>
    defineProps({
        toggleDrawer: Function,
    });
</script>
