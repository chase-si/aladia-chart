'use client';

import ChartComponent from './ChartComponent';
import { ChartConfig } from '../config/chartConfigs';
import { CHART_DATA } from '../constant';

interface ChartContainerProps {
  configs: ChartConfig[];
  title?: string;
  className?: string;
}

export default function ChartContainer({ 
  configs, 
  title = 'Registration Data Trend Analysis',
  className = '' 
}: ChartContainerProps) {
  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {title}
        </h1>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          {configs.map((config, index) => (
            <ChartComponent
              key={index}
              title={config.title}
              legend={config.legend}
              xAxisData={CHART_DATA.xAxisData}
              yAxisName={CHART_DATA.yAxisName}
              series={config.series}
            />
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Description</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold mb-2">Data Sources:</h3>
              <ul className="space-y-1">
                <li>• GA-Google Ads: Tracking from Google Analytics for Google Ads</li>
                <li>• GA-Meta: Tracking from Google Analytics for Meta Ads</li>
                <li>• GA-X: Tracking from Google Analytics for X Ads</li>
                <li>• GA-LinkedIn: Tracking from Google Analytics for LinkedIn Ads</li>
                <li>• GA-Sum: Sum of all channels from Google Analytics</li>
                <li>• Prod DB: Actual registration count from production database</li>
                <li>• Self-Platform-Google-Ads: Self-platform tracking for Google Ads</li>
                <li>• GA-NoAds: No Ads tracking from Google Analytics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Time Range:</h3>
              <p>July 29, 2024 - August 4, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 