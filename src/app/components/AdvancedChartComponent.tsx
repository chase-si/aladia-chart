'use client';

import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

interface ChartSeries {
  name: string;
  data: number[];
  type?: 'line' | 'bar' | 'area';
  lineStyle?: {
    width?: number;
    type?: 'solid' | 'dashed' | 'dotted';
  };
  itemStyle?: {
    color?: string;
  };
  areaStyle?: {
    color?: string;
    opacity?: number;
  };
}

interface ChartComponentProps {
  title: string;
  legend: string[];
  xAxisData: string[];
  yAxisName: string;
  series: ChartSeries[];
  height?: string;
  className?: string;
  chartType?: 'line' | 'bar' | 'area';
  showToolbox?: boolean;
  showLegend?: boolean;
  gridConfig?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
}

export default function AdvancedChartComponent({
  title,
  legend,
  xAxisData,
  yAxisName,
  series,
  height = 'h-96',
  className = '',
  chartType = 'line',
  showToolbox = true,
  showLegend = true,
  gridConfig = {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '35%'
  }
}: ChartComponentProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let chart: echarts.ECharts | null = null;
    let handleResize: (() => void) | null = null;

    if (chartRef.current) {
      chart = echarts.init(chartRef.current);
      
      const option = {
        title: {
          text: title,
          left: 'center',
          textStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(params: Array<{axisValue: string; marker: string; seriesName: string; value: number}>) {
            let result = params[0].axisValue + '<br/>';
            params.forEach((param) => {
              result += param.marker + param.seriesName + ': ' + param.value + '<br/>';
            });
            return result;
          }
        },
        legend: showLegend ? {
          data: legend,
          top: 45
        } : undefined,
        grid: {
          left: gridConfig.left,
          right: gridConfig.right,
          bottom: gridConfig.bottom,
          top: gridConfig.top,
          containLabel: true
        },
        toolbox: showToolbox ? {
          feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {}
          }
        } : undefined,
        xAxis: {
          type: 'category',
          boundaryGap: chartType === 'line' ? false : true,
          data: xAxisData
        },
        yAxis: {
          type: 'value',
          name: yAxisName
        },
        series: series.map(seriesItem => {
          const baseSeries = {
            name: seriesItem.name,
            type: seriesItem.type || chartType,
            data: seriesItem.data,
            lineStyle: seriesItem.lineStyle,
            itemStyle: seriesItem.itemStyle
          };

          if (chartType === 'area' || seriesItem.type === 'area') {
            return {
              ...baseSeries,
              type: 'line',
              areaStyle: seriesItem.areaStyle || {
                color: seriesItem.itemStyle?.color,
                opacity: 0.3
              }
            };
          }

          return baseSeries;
        })
      };
      
      chart.setOption(option);
      setIsLoading(false);

      // 响应式处理
      handleResize = () => {
        chart?.resize();
      };

      window.addEventListener('resize', handleResize);
    }

    // 清理函数
    return () => {
      if (handleResize) {
        window.removeEventListener('resize', handleResize);
      }
      if (chart) {
        chart.dispose();
      }
    };
  }, [title, legend, xAxisData, yAxisName, series, chartType, showToolbox, showLegend, gridConfig]);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {isLoading && (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      <div 
        ref={chartRef} 
        className={`w-full ${height} ${isLoading ? 'hidden' : ''}`}
      />
    </div>
  );
} 