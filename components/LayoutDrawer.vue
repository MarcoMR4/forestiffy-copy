<template>
    <q-drawer
      :model-value="drawerOpen"
      @update:model-value="$emit('update:drawerOpen', $event)"
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
  
        <q-item to="/personalDataForm" clickable v-ripple>
          <q-item-section>My account</q-item-section>
        </q-item>
        <q-item to="/organizations" clickable>
          <q-item-section>My organizations</q-item-section>
        </q-item>
        <q-item to="/about" clickable>
          <q-item-section>About</q-item-section>
        </q-item>
        <hr>
        <q-item to="/welcome">
          <q-item-section><p>Log out</p></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </template>
  
  <script setup>
  defineProps({
    drawerOpen: Boolean
  });
  
  defineEmits(['update:drawerOpen']);
  </script>
  