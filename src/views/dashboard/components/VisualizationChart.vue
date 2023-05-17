<script setup lang="ts">
import { VueEcharts } from 'vue3-echarts';
import { ref, watch, computed } from 'vue'

import DropdownSelect from '@/components/DropdownSelect.vue';
import LoadingCardSkeleton from '@/components/LoadingCardSkeleton.vue';
import DashboardService from '@/services/DashboardService';

import { getMonthName, getMonthNames, formatDate } from '@/helpers/useDateHelpers';
import { ChartCLVData } from "@/Types";


const { chartData, loading } = DashboardService.getChartData();

const chart = ref()
const monthsNames = ref<Array<string>>([])
const selectedMonth = ref<string>('March')

const chartDataByMonth = computed(() => {
  const data: Array<ChartCLVData> = chartData.value.filter((item) => {
    const monthName = getMonthName(item.label);
    return monthName === selectedMonth.value;
  })

  return data
})

const chartFilteredData = computed(() => {
  const props = {
    color: ['#9e9e9e', '#15cf97'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Experimental Group', 'Control Group']
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: false
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#333333'
        }
      },
      axisPointer: {
        label: {
          formatter: (params: any) => formatDate(params.value)
        }
      },
      data: chartDataByMonth.value?.map((obj) => formatDate(obj.label))
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Experimental Group',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: chartDataByMonth.value?.map((obj) => obj.expSum),
      },
      {
        name: 'Control Group',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: chartDataByMonth.value?.map((obj) => obj.ctrlSum),
      },
    ]
  }

  return props
})

watch(chartData, (data) => {
  if (data) {
    monthsNames.value = getMonthNames(data)
    selectedMonth.value = monthsNames.value[0]
  }
})
</script>

<template>
  <div class="flex flex-col flex-1 items-start justify-start w-full gap-y-4 pb-10">
    <div class="w-full h-full">
      <LoadingCardSkeleton
        v-if="loading"
        container-height="h-full"
        banner-height="h-full"
      />
      <div 
        v-else
        class="flex flex-col gap-y-4 bg-white pa-4 rounded-lg"
      >
        <div class="mt-5 h-10 flex items-center justify-between w-full">
          <span class="text-2xl text-left leading-6 font-medium text-gray-900 ml-5">
            Daily CLV Chart
          </span>
          <DropdownSelect
            :selected-item="selectedMonth"
            :items="monthsNames"
            label-prefix="Month"
            class="mr-5"
            @update-model-value="(value) => selectedMonth = value"
          />
        </div>
        <VueEcharts
          ref="chart"
          class="chart"
          :option="(chartFilteredData as EChartsOption)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.chart {
  min-height: 500px;
  padding: 20px 15px 15px 15px;
}
</style>