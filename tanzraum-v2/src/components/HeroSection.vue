<template>
  <v-parallax 
    src="../assets/hero-bg.jpg"
    height="calc(100vh - 48px)"
    cover
    class="hero-section"
  >
    <v-container class="fill-height">
      <v-row
        class="justify-center align-center fill-height flex-column-reverse flex-md-row"
        no-gutters
      >
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <div class="text-center text-md-left">
            <h1 class="text-h1 mb-8 text-primary">Tanzraum Jever</h1>
            <h3 class="text-h3 mb-8 font-weight-thin text-white">Die Schule für künstlerischen Tanz und Bewegung</h3>
            <v-btn 
              class="elevation-4 rounded-xl mb-4 mr-4" 
              color="primary"
              size="large"
              @click="scrollToSection('#kontakt')"
            >
              Kontaktiere uns
            </v-btn>
            <v-btn 
              class="elevation-4 rounded-xl mb-4 text-primary" 
              color="white"
              text-color="primary"
              size="large"
              @click="scrollToSection('#angebot')"
            >
              Unser Angebot
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts" setup>
function scrollToSection(href: string) {
  if (href.startsWith('#')) {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -48;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  } else {
    // fallback: go to home
    window.location.href = href
  }
}
</script>

<style scoped>
.v-parallax :deep(.v-parallax__content) {
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0));
}

.v-parallax :deep(.v-img__img) {
  filter: grayscale(100%);
}
</style>