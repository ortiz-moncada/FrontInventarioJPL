<template>
  <q-layout view="hhh LpR fFf">

    <q-header id="header-main" v-show="$route.name !== 'Login' && $route.name !== '/'">
      <q-toolbar>
        
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-left"> 
        </q-toolbar-title>
        <q-space />
        <q-btn dense flat round icon="logout" @click="logout" />
      </q-toolbar>
    </q-header>

   
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <img src="https://cdn-icons-png.flaticon.com/128/10112/10112441.png" alt="">
      <q-list>
        <q-item clickable to="/movimientos">
          <q-item-section>
            <q-item-label>Movimientos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/articulos">
          <q-item-section>
            <q-item-label>Artículos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/categorias">
          <q-item-section>
            <q-item-label>Categorias</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/terceros/clientes">
          <q-item-section>
            <q-item-label>Clientes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/terceros/proveedores">
          <q-item-section>
            <q-item-label>Proveedores</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

   
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
<<<<<<< HEAD
          
          <div class="text-footer">INVENTARIO - 2024 © Todos los derechos reservados  </div>
=======
          <div class="text-footer">INVENTARIO JPL - 2024 © Todos los derechos reservados</div>
>>>>>>> 5af11863646bd045d56191c4947d2b912d0560d8
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './store/useAuth.js'

const router = useRouter()


const leftDrawerOpen = ref(false)



function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function logout() {
  router.replace('/login')
}


</script>

<style>
#header-main {
  background-color: rgb(2, 21, 38);
  color: white;
}

.logo {
  width: 50px;
}

.text-footer {
  font-size: 12px;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.material-symbols-outlined {
  font-size: 18px;
  vertical-align: middle;
}
</style>
