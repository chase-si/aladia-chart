'use client';

import { useState } from 'react';
import AdvancedChartComponent from './AdvancedChartComponent';
import ChartControlPanel from './ChartControlPanel';
import { ChartConfig } from '../config/chartConfigs';
import { CHART_DATA } from '../constant';

interface EnhancedChartContainerProps {
  configs: ChartConfig[];
  title?: string;
  className?: string;
  showControlPanel?: boolean;
}

export default function EnhancedChartContainer({ 
  configs, 
  title = 'Registration Data Trend Analysis',
  className = '',
  showControlPanel = true
}: EnhancedChartContainerProps) {
  const [chartType, setChartType] = useState<'line' | 'bar' | 'area'>('line');
  const [showToolbox, setShowToolbox] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [chartHeight, setChartHeight] = useState('h-96');

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {title}
        </h1>
        
        {showControlPanel && (
          <ChartControlPanel
            chartType={chartType}
            showToolbox={showToolbox}
            showLegend={showLegend}
            height={chartHeight}
            onChartTypeChange={setChartType}
            onShowToolboxChange={setShowToolbox}
            onShowLegendChange={setShowLegend}
            onHeightChange={setChartHeight}
          />
        )}
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          {configs.map((config, index) => (
            <AdvancedChartComponent
              key={index}
              title={config.title}
              legend={config.legend}
              xAxisData={CHART_DATA.xAxisData}
              yAxisName={CHART_DATA.yAxisName}
              series={config.series}
              height={chartHeight}
              chartType={chartType}
              showToolbox={showToolbox}
              showLegend={showLegend}
            />
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Description</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold mb-2">Data Sources:</h3>
              <ul className="space-y-1">
                <li>• GA-Google Ads: Google Analytics 中的 Google Ads 追踪数据</li>
                <li>• GA-Meta: Google Analytics 中的 Meta Ads 追踪数据</li>
                <li>• GA-X: Google Analytics 中的 X Ads 追踪数据</li>
                <li>• GA-LinkedIn: Google Analytics 中的 LinkedIn Ads 追踪数据</li>
                <li>• GA-Sum: Google Analytics 中所有渠道的总和</li>
                <li>• Prod DB: 生产数据库中的实际注册数量</li>
                <li>• Self-Platform-Google-Ads: 自平台 Google Ads 追踪数据</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Time Range:</h3>
              <p>2024-07-29 - 2024-08-04</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 