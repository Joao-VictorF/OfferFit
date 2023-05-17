<script setup lang="ts">
import LoadingCardSkeleton from '@/components/LoadingCardSkeleton.vue';
import { ref, onMounted } from 'vue'

interface ChartData {
  name: String
  value: String
}

const loading = ref<boolean>(true)
const chartData = ref<Array<ChartData>>([])

function getChartData() {
  chartData.value = []
}

onMounted(() => getChartData())
</script>

<template>
  <div class="flex flex-col flex-1 items-start justify-start w-full gap-y-4">
    <div class="h-10 flex items-center justify-center w-full bg-green-300">
      filters
    </div>

    <div class="w-full h-full">
      <LoadingCardSkeleton
        v-if="loading"
        container-height="h-full"
        banner-height="h-full"
      />
      <div v-else>
        Data
      </div>
    </div>
  </div>
</template>