<template>
    <q-header elevated class="text-white q-pa-x" style="background-color: #0d3122; height: 150px;">
      <q-toolbar class="column full-width q-pa-md">
  
        <!-- Primera fila -->
        <div class="row full-width items-center">
          <!-- Logo ocupa más ancho -->
          <div class="col">
            <client-only>
              <img src="../public/tree2.png" style="max-width: 280px; height: auto;" alt="Logo" class="q-ml-md" />
            </client-only>
          </div>
  
          <!-- Sección derecha (Contact us y English) -->
          <div class="col-auto flex items-center q-gutter-sm">
            <q-btn flat style="color: white" label="Contact us" />
            <RouterLink to="/">
                <q-btn flat class="bg-l-button" label="Login"/>
            </RouterLink>
          </div>
        </div>
  
        <div class="row full-width justify-center q-mt-md">
          <q-btn flat style="color: white" label="ABOUT FORESTIFFY" />
          <q-btn flat style="color: white" label="PRODUCTS" />
          <q-btn flat style="color: white" label="OBJETIVES" />
          <q-btn flat style="color: white" label="EUDR" />
          <q-btn flat style="color: white" label="DUE DILIGENCE" />
          <q-btn flat style="color: white" label="ANNUAL RISK ASSESSMENT" />
          <q-btn flat style="color: white" label="FAQS" />
          <q-btn flat style="color: white" label="ENGLISH" />
        </div>
  
      </q-toolbar>
    </q-header>
</template>
  
<style>
    .bg-l-button{
        background-color: #80bb39;
        color: white
    }
</style>