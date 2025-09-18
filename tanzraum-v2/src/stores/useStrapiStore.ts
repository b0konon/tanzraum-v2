import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_STRAPI_URL;
const API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

export const useStrapiStore = defineStore('strapi', {
  state: () => ({
    employees: null as any,
    posts: null as any,
    courses: null as any,
    services: null as any,
    loading: false,
    error: null as null | unknown,
  }),
  actions: {
    async fetchEmployees() {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get(`${API_URL}employees?populate=*`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        this.employees = res.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get(`${API_URL}posts?populate=*`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        this.posts = res.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async fetchCourses() {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get(`${API_URL}courses`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        this.courses = res.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async fetchServices() {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get(`${API_URL}services`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        this.services = res.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async fetchAll() {
      this.loading = true;
      this.error = null;
      try {
        await Promise.all([
          this.fetchEmployees(),
          this.fetchPosts(),
          this.fetchCourses(),
          this.fetchServices(),
        ]);
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
});