<script setup lang="ts">
import LoadingCardSkeleton from '@/components/LoadingCardSkeleton.vue';
import { ref, onMounted } from 'vue'

interface KPI {
  name: String
  value: String
}

const loading = ref<boolean>(true)
const kpisData = ref<Array<KPI>>([])

function getKPIs() {
  kpisData.value = []
}

onMounted(() => getKPIs())
</script>

<template>
  <div
    v-if="loading"
    class="flex flex-wrap"
  >
    <div
      v-for="i in 4"
      :key="i"
      class="w-full md:w-1/2 lg:w-1/4 p-4"
    >
      <LoadingCardSkeleton banner-height="h-32" />
    </div>
  </div>
  <div
    v-else
  >
    KPIs
  </div>
</template>