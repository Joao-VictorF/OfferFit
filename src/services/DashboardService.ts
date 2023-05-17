import http from "@/http-client";
import { ChartCLVData } from "@/Types";
import { ref } from 'vue';
class DashboardService {
  getKPIs() {
    const kpisData = ref<Record<string, Number>>({});
    const loading = ref<boolean>(true);
    
    http.get('/dashboard/widgets')
      .then(response => {
        kpisData.value = response.data;
        // This is not needed, but the loading was not being showed because the request is too fast
        // So I put this just for exemplify the time to receive a req response.
        setTimeout(() => {
          loading.value = false
        }, 500);
      })
      .catch(error => {
        // @TODO: add error notification
        console.log(error);
      });
    
    return { kpisData, loading };
  }

  getChartData() {
    const chartData = ref<Array<ChartCLVData>>([]);
    const loading = ref<boolean>(true);
    
    http.get('/dashboard/chart')
      .then(response => {
        chartData.value = response.data;
        // This is not needed, but the loading was not being showed because the request is too fast
        // So I put this just for exemplify the time to receive a req response.
        setTimeout(() => {
          loading.value = false
        }, 500);
      })
      .catch(error => {
        // @TODO: add error notification
        console.log(error);
      });
    
    return { chartData, loading };
  }
}

export default new DashboardService();
