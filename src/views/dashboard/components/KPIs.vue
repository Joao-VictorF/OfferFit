<script setup lang="ts">
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'
import LoadingCardSkeleton from '@/components/LoadingCardSkeleton.vue';
import DashboardService from '@/services/DashboardService';
import { ref } from 'vue'

const { kpisData, loading } = DashboardService.getKPIs();

interface Stat {
  name: String
  stat: String
  change: String
  changeType: 'increase' | 'decrease',
  formatMoney?: boolean
}

const stats = ref<Array<Stat>>([
  {
    name: 'Total Offers',
    stat: 'totalOffers',
    change: '2574',
    changeType: 'increase'
  },
  {
    name: 'Total Repeaters Experimental Group',
    stat: 'totalRepeatersExp',
    change: '981',
    changeType: 'increase'
  },
  {
    name: 'Total Repeaters Control Group',
    stat: 'totalRepeatersCtrl',
    change: '134',
    changeType: 'decrease'
  },
  {
    name: 'Total CLV Experimental Group',
    stat: 'totalCLVExp',
    change: '15%',
    changeType: 'increase',
    formatMoney: true
  },
  {
    name: 'Total CLV Control Group',
    stat: 'totalCLVCtrl',
    change: '39%',
    changeType: 'decrease',
    formatMoney: true
  },
])

function getStatText(item: Stat) {
  const value: Number = kpisData.value[item.stat as string]
  if (item.formatMoney)
    return `$ ${value.toLocaleString('en-US')}`

  return value
}
</script>

<template>
  <div
    v-if="loading"
    class="flex flex-wrap"
  >
    <div class="text-2xl text-left leading-6 font-medium text-gray-900 w-full">
      Last 30 days
    </div>
    <div
      v-for="i in 5"
      :key="i"
      class="w-full md:w-1/2 p-4"
      :class="[i > 3 ? 'lg:w-1/2' : 'lg:w-1/3', i === 5 ? 'flex-1 md:w-full-important lg:w-1/2-important' : '']"
    >
      <LoadingCardSkeleton banner-height="h-32" />
    </div>
  </div>
  <div
    v-else
    class="flex flex-wrap gap-4 mx-4 sm:mx-0"
  >
    <div class="text-2xl text-left leading-6 font-medium text-gray-900 w-full">
      Last 30 days
    </div>

    <div
      v-for="(item, index) in stats"
      :key="`stat-${index}`"
      class="flex flex-col flex-shrink-0 justify-center items-start bg-white shadow rounded-lg h-32 w-full md:w-calc-1/2-1rem p-4"
      :class="[index > 2 ? 'lg:w-calc-1/2-1rem' : 'lg:w-calc-1/3-1rem', index === 4 ? 'flex-1 md:w-full-important lg:w-calc-1/2-1rem-important' : '']"
    >
      <p class="text-md font-medium text-gray-500 truncate">
        {{ item.name }}
      </p>
      
      <div class="flex gap-x-4">
        <p class="text-3xl font-semibold text-gray-900">
          {{ getStatText(item) }}
        </p>
        <p :class="[item.changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-center text-sm font-semibold']">
          <ArrowSmUpIcon
            v-if="item.changeType === 'increase'"
            class="self-center flex-shrink-0 h-5 w-5 text-green-500"
            aria-hidden="true"
          />
          <ArrowSmDownIcon
            v-else
            class="self-center flex-shrink-0 h-5 w-5 text-red-500"
            aria-hidden="true"
          />
          <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
          {{ item.change }}
        </p>
      </div>
    </div>
  </div>
</template>
