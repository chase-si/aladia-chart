'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface ChartSeries {
  name: string;
  data: number[];
  lineStyle?: {
    width?: number;
    type?: 'solid' | 'dashed' | 'dotted';
  };
  itemStyle?: {
    color?: string;
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
}

export default function ChartComponent({
  title,
  legend,
  xAxisData,
  yAxisName,
  series,
  height = 'h-96',
  className = ''
}: ChartComponentProps) {
  const chartRef = useRef<HTMLDivElement>(null);

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
        legend: {
          data: legend,
          top: 45
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '35%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: {
          type: 'value',
          name: yAxisName
        },
        series: series.map(seriesItem => ({
          name: seriesItem.name,
          type: 'line',
          data: seriesItem.data,
          lineStyle: {
            width: seriesItem.lineStyle?.width || 3,
            type: seriesItem.lineStyle?.type || 'solid'
          },
          itemStyle: {
            color: seriesItem.itemStyle?.color
          }
        }))
      };
      
      chart.setOption(option);

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
  }, [title, legend, xAxisData, yAxisName, series]);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div 
        ref={chartRef} 
        className={`w-full ${height}`}
      />
    </div>
  );
} 