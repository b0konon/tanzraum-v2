<template>
    <v-form v-model="valid">
        <v-container color="white" class="form-container" fluid>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="firstname"
                    :counter="30"
                    :rules="nameRules"
                    label="Name"
                    variant="solo"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    variant="solo"
                    required
                ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-textarea
                    v-model="message"
                    :counter="500"
                    :rules="nameRules"
                    label="Nachricht"
                    variant="solo"
                    required
                    auto-grow
                    rows="3"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-btn
                    class="elevation-4 rounded-xl mt-4 text-white" 
                    color="primary"
                    size="large"
                    :disabled="!valid"
                >
                    Senden
                </v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 30) return true

          return 'Name must be less than 30 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is required.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>

<style scoped>
.form-container {
    max-width: 800px;
    margin: auto;
}
</style>