<template>
    <h2 class="text-h2 mb-8 text-center text-white">Kontakt</h2>
    <v-row justify="center" class="mb-8 d-flex justify-center">
    <v-col cols="12" md="4" class="flex-column justify-center contact-box">
        <h3 class="mb-2">Tanzraum Jever</h3>
        <div><v-icon color="primary">mdi-map-marker</v-icon> Am Kirchplatz 15 | 26441 Jever</div>
      </v-col>
      <v-col cols="12" md="4" class="mx-8 flex-column justify-center contact-box">
        <h3 class="mb-2">Bettina Ludwig</h3>
        <div><v-icon color="primary">mdi-phone</v-icon> 04461/73852</div>
        <div><v-icon color="primary">mdi-email</v-icon> <a href="mailto:bettina.tanzraum@gmx.de" class="contact-link">bettina.tanzraum@gmx.de</a></div>
      </v-col>
      <v-col cols="12" md="4" class="flex-column justify-center contact-box">
        <h3 class="mb-2">Susanne Köhn</h3>
        <div><v-icon color="primary">mdi-phone</v-icon> 04426/2555005</div>
        <div><v-icon color="primary">mdi-email</v-icon> <a href="mailto:tanzraum-wangerland@gmx.de" class="contact-link">tanzraum-wangerland@gmx.de</a></div>
      </v-col>
    </v-row>
    <h4 class="text-h5 mb-8 text-center text-white">Oder schreib uns direkt!</h4>
    <ContactForm />
</template>

<style scoped>
.contact-box {
  background: #f3f3f3;
  border-radius: 10px;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  min-height: 140px;
  margin-bottom: 1.5rem;
}
.contact-link {
  color: #83154f;
  text-decoration: none;
}
.contact-link:hover {
  text-decoration: underline;
}
</style>