// 图表数据
export const CHART_DATA = {
  title: 'Google Analytics & Prod DB',
  legend: ['GA-Google Ads', 'GA-Meta', 'GA-X', 'GA-LinkedIn', 'GA-Sum', 'Prod DB'],
  xAxisData: ['07-29', '07-30', '07-31', '08-01', '08-02', '08-03', '08-04'],
  yAxisName: '注册数量',
  series: [
    {
      name: 'GA-Google Ads',
      data: [82, 333, 8, 54, 52, 77, 56]
    },
    {
      name: 'GA-Meta',
      data: [0, 3, 11, 0, 0, 0, 0]
    },
    {
      name: 'GA-X',
      data: [0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'GA-LinkedIn',
      data: [0, 0, 3, 2, 1, 0, 1]
    },
    {
      name: 'GA-Sum',
      data: [82, 336, 22, 56, 53, 77, 57]
    },
    {
      name: 'Prod DB',
      data: [155, 494, 26, 120, 77, 126 ,107]
    },
    // self platform
    {
      name: 'Self-Platform-Google-Ads',
      data: [7, 299, 6, 54.5, 52, 83.5 ,59]
    },
    {
      name: 'Self-Platform-Meta',
      data: [0, 1, 1, 1, 0, 0, 0]
    },
    {
      name: 'Self-Platform-X',
      data: [0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Self-Platform-LinkedIn',
      data: [0, 0, 0, 2, 0, 0, 0]
    },
  ]
};

// 页面数据
export const PAGE_DATA = {
  title: 'Registration Data Trend Analysis',
  timeRange: 'July 29, 2024 - August 4, 2024',
  dataSources: [
    'GA-Google Ads: Tracking from Google Analytics for Google Ads',
    'GA-Meta: Tracking from Google Analytics for Meta Ads',
    'GA-X: Tracking from Google Analytics for X Ads',
    'GA-LinkedIn: Tracking from Google Analytics for LinkedIn Ads',
    'GA-Sum: Sum of all channels from Google Analytics',
    'Prod DB: Actual registration count from production database',
    'Self-Platform-Google-Ads: Self-platform tracking for Google Ads'
  ]
};
