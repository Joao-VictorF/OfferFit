import { ChartCLVData } from "@/Types";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getMonthName(date: string): string {
  const monthNumber = new Date(date).getMonth();
  return monthNames[monthNumber];
}


function getMonthNames(chartData: Array<ChartCLVData>): Array<string> {
  const dates = chartData.map((item) => item.label)
  const months: Array<string> = [];

  dates.forEach(date => {
    const month = new Date(date + "T00:00:00").getMonth();
    if (!months.includes(monthNames[month])) {
      months.push(monthNames[month]);
    }
  });
  
  return months;
}

function formatDate(value: string) {
  const date = new Date(value)
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export {
  getMonthName,
  getMonthNames,
  formatDate
}
  