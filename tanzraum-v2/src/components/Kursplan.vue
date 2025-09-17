<template>
    <div ref="swipeTarget" class="mx-auto">
        <div v-if="!isDesktop" class="day-selector flex justify-center">
            <button
                v-for="day in days"
                :key="day"
                :class="['day-btn', { selected: selectedDay === day }]"
                @click="setDay(day)"
            >
                {{ day }}
            </button>
        </div>
        <div v-if="!isDesktop" class="course-list">
            <div v-for="course in filteredCourses" :key="course.id" class="course-box">
                <div class="course-header">
                    <span class="course-time">{{ course.starttime }} - {{ course.endtime }}</span>
                    <span class="course-trainer">{{ course.trainer }}</span>
                </div>
                <div class="course-title">{{ course.title }}</div>
                <div class="course-level">{{ course.level }}</div>
            </div>
        </div>
        <div v-else class="desktop-course-lists">
            <div v-for="day in days" :key="day" class="desktop-course-list">
                <div class="desktop-day-label">{{ day }}</div>
                <div class="course-list">
                    <div v-for="course in coursesByDay(day)" :key="course.id" class="course-box">
                        <div class="course-header">
                            <span class="course-time">{{ course.starttime }} - {{ course.endtime }}</span>
                            <span class="course-trainer">{{ course.trainer }}</span>
                        </div>
                        <div class="course-title">{{ course.title }}</div>
                        <div class="course-level">{{ course.level }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useStrapiStore } from '@/stores/useStrapiStore';
import { computed, ref, watch } from 'vue';
import { set, useSwipe } from '@vueuse/core';

const strapiStore = useStrapiStore();
const courses = computed(() => strapiStore.courses?.data || []);

const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
const selectedDay = ref('Montag');


const filteredCourses = computed(() =>
    courses.value.filter((c: any) => c.day?.toLowerCase() === selectedDay.value.toLowerCase())
);

function coursesByDay(day: string) {
    return courses.value.filter((c: any) => c.day?.toLowerCase() === day.toLowerCase());
}

const isDesktop = ref(false);
if (typeof window !== 'undefined') {
    const checkDesktop = () => {
        isDesktop.value = window.innerWidth >= 1600;
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
}

const swipeTarget = ref<HTMLElement | null>(null);
const { direction, isSwiping } = useSwipe(swipeTarget);

function setDay(day: string) {
  if (days.includes(day)) {
    selectedDay.value = day;
  }
}

watch(isSwiping, (swiping) => {
  if (swiping) return;

  const currentIdx = days.indexOf(selectedDay.value);
  if (direction.value === 'left' && currentIdx < days.length - 1) {
    setDay(days[currentIdx + 1]);
  } else if (direction.value === 'right' && currentIdx > 0) {
    setDay(days[currentIdx - 1]);
  }
});
</script>

<style scoped>
.course-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.desktop-course-lists {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}
.desktop-course-list {
    min-width: 300px;
    max-width: 320px;
    flex: 1 1 0;
}
.desktop-day-label {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #83154f;
}
.course-box {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 
                0 -2px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 1.5rem;
    max-width: 360px;
    width: 100%;
}
.course-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem 0.5rem 0.75rem;
    color: #83154f;
    background: #fff;
    font-weight: 500;
}
.course-title {
    background: #83154f;
    color: #fff;
    padding: 1rem 1rem 0.5rem 1rem;
    font-size: large;
    font-weight: 400;
}
.course-level {
    background: #83154f;
    color: #fff;
    font-size: medium;
    padding: 0 1rem 1rem 1rem;
}
.day-selector {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}
.day-btn {
    background: #fff;
    color: #83154f;
    border: 1px solid #83154f;
    border-radius: 8px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.day-btn.selected {
    background: #83154f;
    color: #fff;
}

</style>

