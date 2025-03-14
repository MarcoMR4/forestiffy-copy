<template>
  <q-layout view="hHh lpR fFf">
    <LayoutDrawer v-model:drawerOpen="drawerStore.drawerOpen" />
    <LayoutHeader :toggleDrawer="drawerStore.toggleDrawer" />

    <q-page-container :class="{ 'drawer-open': drawerStore.drawerOpen }">
      <q-page class="q-pa-md">
        <nuxtPage />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import LayoutDrawer from '~/components/LayoutDrawer.vue';
  import LayoutHeader from '~/components/LayoutHeader.vue';
  import { useDrawerStore } from '@/stores/drawer';
  
  const drawerStore = useDrawerStore();

</script>

<style scoped>
.drawer-open {
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;
}
</style>
