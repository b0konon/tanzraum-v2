<template>
    <v-container class="footer-section" fluid>
        <v-row justify="center">
            <v-col cols="12" md="8" class="text-center py-6">
                <div class="footer-links">
                    <a href="/datenschutz" class="footer-link" target="_blank" rel="noopener">Datenschutz</a>
                    <span class="footer-separator">|</span>
                    <a href="/impressum" class="footer-link" target="_blank" rel="noopener">Impressum</a>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.footer-section {
    color: #fff;
    font-size: 1rem;
}
.footer-links {
    margin-bottom: 0.5rem;
}
.footer-link {
    color: #90caf9;
    text-decoration: underline;
    margin: 0 0.5rem;
    transition: color 0.2s;
}
.footer-link:hover {
    color: #42a5f5;
}
.footer-separator {
    color: #fff;
    margin: 0 0.5rem;
}
.footer-description {
    font-size: 0.95rem;
    color: #ccc;
}
@media (max-width: 600px) {
    .footer-section {
        font-size: 0.9rem;
    }
    .footer-description {
        font-size: 0.85rem;
    }
}
</style>
