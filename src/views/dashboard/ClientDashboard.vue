<script setup lang="ts">
import KPIs from './components/KPIs.vue';
import VisualizationChart from './components/VisualizationChart.vue'
</script>

<template>
  <div class="h-screen flex flex-col gap-y-4 my-8 sm:mx-6 lg:mx-8 py-2">
    <KPIs />
    <VisualizationChart />
  </div>
</template>