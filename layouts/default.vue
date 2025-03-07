<template>
    <q-layout view="hHh lpR fFf">
  
      <q-drawer 
        v-model="drawerOpen" 
        side="left" 
        overlay 
        class="text-white" 
        :breakpoint="500" 
        :width="250"
        show-if-above 
        elevated
      >
        <q-list style="background-color: #0d3122; height: 100%;">
          <q-item style="background-image: url('/assets/bg_perfil.jpg');">
            <q-item-section avatar class="q-flex flex-row">
              <q-avatar style="width: 70px; height: auto;">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <br>
              <p>Username</p>
              <p>email@mail.com</p>
            </q-item-section>  
          </q-item>
          
          <!-- <q-item><q-item-section>Select organization</q-item-section></q-item> -->
            <q-item to="/personalDataForm" clickable v-ripple>
                <q-item-section>
                    My account
                </q-item-section>
            </q-item>
            <q-item to="/organizations" clickable>
                <q-item-section>
                    My organizations
                </q-item-section>
            </q-item>
            <q-item to="/about" clickable>
                <q-item-section>
                    About
                </q-item-section>
            </q-item>
          <hr>
          <q-item><q-item-section><p>Log out</p></q-item-section></q-item>
        </q-list>
      </q-drawer>
  
      <q-header elevated class="text-white q-pa-x" style="background-color: #0d3122; height: 91px;">
        <q-toolbar class="q-flex flex-row">
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="toggleDrawer" />
            <div class="q-ml-none q-mb-none flex-column">
                <client-only>
                    <img src="/tree2.png" style="max-width: 35%; height: auto;" alt="Logo" class="q-mr-md" />
                </client-only>
            </div>
            <div class="q-ml-none q-mb-none flex-column col-4">
            </div>
          <div class="q-mr-md q-text-subtitle-2 flex column">English</div>
        </q-toolbar>
      </q-header>
  
      <q-page-container :class="{ 'drawer-open': drawerOpen }">
        <q-page class="q-pa-md">
          <nuxtPage />
        </q-page>
      </q-page-container>
  
    </q-layout>
</template>
  
<script setup>
  import { ref } from 'vue'
  
  const drawerOpen = ref(false)
  
  const toggleDrawer = () => {
    drawerOpen.value = !drawerOpen.value
  }

</script>

<style scoped>
/* 🔹 Si el drawer está abierto, movemos el contenido */
.drawer-open {
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;
}
</style>
  