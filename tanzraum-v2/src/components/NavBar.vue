<template>
  <v-app-bar
    app
    color="background"
    flat
    height="48"
    class="navbar-container"
  >
    <!-- Logo -->
    <div class="logo-container">
      <v-toolbar-title class="logo-text">
        Tanzraum Jever
      </v-toolbar-title>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="nav-center">
      <div class="hidden-md-and-down">
        <v-btn
          v-for="item in navItems"
          :key="item.href"
          text
          class="nav-btn"
          @click="scrollToSection(item.href)"
        >
          {{ item.label }}
        </v-btn>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu-btn hidden-lg-and-up">
      <v-btn
        icon
        @click="drawer = !drawer"
        class="menu-icon"
        :class="{ 'menu-rotated': drawer }"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="mobile-drawer"
  >
    <div class="drawer-content">
      <v-list class="flex-grow-1">
        <v-list-item
          v-for="(item, index) in navItems"
          :key="item.href"
          class="nav-item"
          @click="() => { scrollToSection(item.href); drawer = false }"
        >
          <template v-slot:prepend>
            <v-icon :icon="getIcon(index)" color="primary"></v-icon>
          </template>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
      <div class="drawer-footer">
        <v-divider></v-divider>
        <div class="pa-4">
          <v-list-item-subtitle>
            Tanzraum Jever
          </v-list-item-subtitle>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter ? useRouter() : null


const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#team', label: 'Team' },
  { href: '#angebot', label: 'Angebot' },
  { href: '#kursplan', label: 'Kursplan' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '/aktuelles', label: 'Aktuelles' },
]

function scrollToSection(href: string) {
  if (href.startsWith('#')) {
    const isIndex = window.location.pathname === '/' || window.location.pathname === '/index.html';
    if (!isIndex) {
      if (router) {
        router.push({ path: '/', hash: href });
      } else {
        window.location.href = '/' + href;
      }
      return;
    }
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -48;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  } else {
    // fallback: go to home or external page
    window.location.href = href;
  }
}

const getIcon = (index: number) => {
  const icons = [
    'mdi-home-outline',
    'mdi-account-group',
    'mdi-human-female-dance',
    'mdi-calendar-month-outline',
    'mdi-card-account-phone-outline',
    'mdi-newspaper-variant-multiple-outline'
  ]
  return icons[index]
}
</script>

<style scoped>
.navbar-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 1000 !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgb(var(--v-theme-primary));
  border-bottom-right-radius: 20px;
  padding-right: 20px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  width: auto;
  min-width: fit-content;
}

.logo-text {
  color: white !important;
  font-size: 1rem !important;
  white-space: nowrap;
}



.nav-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn {
  margin: 0 8px;
  transition: background-color 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

.mobile-menu-btn {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.menu-icon {
  transition: transform 0.3s ease;
}

.menu-rotated {
  transform: rotate(-90deg);
}

.mobile-drawer {
  background-color: #f5f5f5;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
}

.drawer-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav-item {
  padding: 12px 8px;
  margin: 4px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

.drawer-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
