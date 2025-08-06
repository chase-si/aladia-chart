import { CHART_DATA } from '../constant';

// 图表配置类型
export interface ChartConfig {
  title: string;
  legend: string[];
  series: Array<{
    name: string;
    data: number[];
    lineStyle?: {
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
    itemStyle?: {
      color?: string;
    };
  }>;
}

// 主图表配置
export const mainChartConfig: ChartConfig = {
  title: CHART_DATA.title,
  legend: CHART_DATA.legend,
  series: [
    {
      name: 'GA-Google Ads',
      data: CHART_DATA.series[0].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#5470c6' }
    },
    {
      name: 'GA-Meta',
      data: CHART_DATA.series[1].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#91cc75' }
    },
    {
      name: 'GA-X',
      data: CHART_DATA.series[2].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#fac858' }
    },
    {
      name: 'GA-LinkedIn',
      data: CHART_DATA.series[3].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#ee6666' }
    },
    {
      name: 'GA-NoAds',
      data: CHART_DATA.series[10].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#9a60b4' }
    },
    {
      name: 'GA-Sum',
      data: CHART_DATA.series[4].data,
      lineStyle: { width: 4, type: 'dashed' },
      itemStyle: { color: '#73c0de' }
    },
    {
      name: 'Prod DB',
      data: CHART_DATA.series[5].data,
      lineStyle: { width: 4, type: 'solid' },
      itemStyle: { color: '#3ba272' }
    },
    
  ]
};

// Google Ads 对比图表配置
export const googleAdsComparisonConfig: ChartConfig = {
  title: 'Self-Platform vs GA ---- Google Ads',
  legend: ['Self-Platform-Google-Ads', 'GA-Google Ads'],
  series: [
    {
      name: 'Self-Platform-Google-Ads',
      data: CHART_DATA.series[6].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#ff6b6b' }
    },
    {
      name: 'GA-Google Ads',
      data: CHART_DATA.series[0].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#4ecdc4' }
    }
  ]
};

// Meta 对比图表配置
export const metaComparisonConfig: ChartConfig = {
  title: 'Self-Platform vs GA ---- Meta',
  legend: ['Self-Platform-Meta', 'GA-Meta'],
  series: [
    {
      name: 'Self-Platform-Meta',
      data: CHART_DATA.series[7].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#ff9ff3' }
    },
    {
      name: 'GA-Meta',
      data: CHART_DATA.series[1].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#54a0ff' }
    }
  ]
};

// X 对比图表配置
export const xComparisonConfig: ChartConfig = {
  title: 'Self-Platform vs GA ---- X',
  legend: ['Self-Platform-X', 'GA-X'],
  series: [
    {
      name: 'Self-Platform-X',
      data: CHART_DATA.series[8].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#feca57' }
    },
    {
      name: 'GA-X',
      data: CHART_DATA.series[2].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#ff9ff3' }
    }
  ]
};

// LinkedIn 对比图表配置
export const linkedInComparisonConfig: ChartConfig = {
  title: 'Self-Platform vs GA ---- LinkedIn',
  legend: ['Self-Platform-LinkedIn', 'GA-LinkedIn'],
  series: [
    {
      name: 'Self-Platform-LinkedIn',
      data: CHART_DATA.series[9].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#48dbfb' }
    },
    {
      name: 'GA-LinkedIn',
      data: CHART_DATA.series[3].data,
      lineStyle: { width: 3 },
      itemStyle: { color: '#0abde3' }
    }
  ]
};

// 所有图表配置
export const allChartConfigs = [
  mainChartConfig,
  googleAdsComparisonConfig,
  metaComparisonConfig,
  xComparisonConfig,
  linkedInComparisonConfig
]; 