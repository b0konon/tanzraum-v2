<template>
  <v-parallax 
    src="../assets/hero-bg.jpg"
    height="calc(100vh - 48px)"
    cover
    class="hero-section"
  >
    <v-container class="fill-height">
      <v-row
        class="justify-center align-center fill-height flex-column-reverse flex-md-row r"
        no-gutters
      >
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <div class="text-center text-md-left">
            <h1 class="text-h1 mb-8 text-primary">Tanzraum Jever</h1>
            <h3 class="text-h3 mb-8 font-weight-thin text-white text-glow">Die Schule für künstlerischen Tanz und Bewegung</h3>
            <div class= "hero-buttons d-flex align-center justify-center justify-md-start">
              <v-btn 
                  class="elevation-4 rounded-xl mb-4" 
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
  filter: blur(4px) grayscale(100%);
}

.text-glow {
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

@media (max-width: 600px) {
  .text-h1 {
    font-size: 5rem !important;
    line-height: 5rem !important;
  }
  .text-h3 {
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }
  .hero-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 601px) {
  .hero-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }
}

</style>