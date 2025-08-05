'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function Home() {
  const chartRef1 = useRef<HTMLDivElement>(null);
  const chartRef2 = useRef<HTMLDivElement>(null);
  const chartRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 第一个图表：混合图表（柱状图 + 折线图）
    if (chartRef1.current) {
      const chart1 = echarts.init(chartRef1.current);
      
      const option1 = {
        title: {
          text: '销售数据混合图表',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销售额', '利润'],
          top: 30
        },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销售额',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110],
            itemStyle: {
              color: '#5470c6'
            }
          },
          {
            name: '利润',
            type: 'line',
            data: [20, 40, 30, 15, 25, 35],
            itemStyle: {
              color: '#91cc75'
            }
          }
        ]
      };

      chart1.setOption(option1);

      // 响应式处理
      const handleResize1 = () => {
        chart1.resize();
      };

      window.addEventListener('resize', handleResize1);

      return () => {
        window.removeEventListener('resize', handleResize1);
        chart1.dispose();
      };
    }
  }, []);

  useEffect(() => {
    // 第二个图表：饼图
    if (chartRef2.current) {
      const chart2 = echarts.init(chartRef2.current);
      
      const option2 = {
        title: {
          text: '产品销量分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 30
        },
        series: [
          {
            name: '销量',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '产品A' },
              { value: 735, name: '产品B' },
              { value: 580, name: '产品C' },
              { value: 484, name: '产品D' },
              { value: 300, name: '产品E' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      chart2.setOption(option2);

      const handleResize2 = () => {
        chart2.resize();
      };

      window.addEventListener('resize', handleResize2);

      return () => {
        window.removeEventListener('resize', handleResize2);
        chart2.dispose();
      };
    }
  }, []);

  useEffect(() => {
    // 第三个图表：散点图
    if (chartRef3.current) {
      const chart3 = echarts.init(chartRef3.current);
      
      const option3 = {
        title: {
          text: '用户行为分析',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        xAxis: {
          type: 'value',
          name: '使用时长（小时）'
        },
        yAxis: {
          type: 'value',
          name: '消费金额（元）'
        },
        series: [
          {
            name: '用户',
            type: 'scatter',
            data: [
              [2, 50], [4, 80], [6, 120], [8, 150], [10, 200],
              [3, 60], [5, 100], [7, 140], [9, 180], [11, 220],
              [1, 30], [3.5, 70], [5.5, 110], [7.5, 160], [9.5, 190]
            ],
            itemStyle: {
              color: '#ff6b6b'
            }
          }
        ]
      };

      chart3.setOption(option3);

      const handleResize3 = () => {
        chart3.resize();
      };

      window.addEventListener('resize', handleResize3);

      return () => {
        window.removeEventListener('resize', handleResize3);
        chart3.dispose();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Aladia Chart - ECharts 演示
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* 第一个图表 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div 
              ref={chartRef1} 
              className="w-full h-80"
            />
          </div>
          
          {/* 第二个图表 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div 
              ref={chartRef2} 
              className="w-full h-80"
            />
          </div>
        </div>
        
        {/* 第三个图表 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div 
            ref={chartRef3} 
            className="w-full h-80"
          />
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p className="text-lg">这是一个使用 ECharts 创建的多种图表类型演示，包含混合图表、饼图和散点图</p>
          <p className="text-sm mt-2">所有图表都支持响应式布局和交互功能</p>
        </div>
      </div>
    </div>
  );
}
