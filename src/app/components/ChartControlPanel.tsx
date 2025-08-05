'use client';

import { useState } from 'react';

interface ChartControlPanelProps {
  onChartTypeChange: (type: 'line' | 'bar' | 'area') => void;
  onShowToolboxChange: (show: boolean) => void;
  onShowLegendChange: (show: boolean) => void;
  onHeightChange: (height: string) => void;
  chartType: 'line' | 'bar' | 'area';
  showToolbox: boolean;
  showLegend: boolean;
  height: string;
}

export default function ChartControlPanel({
  onChartTypeChange,
  onShowToolboxChange,
  onShowLegendChange,
  onHeightChange,
  chartType,
  showToolbox,
  showLegend,
  height
}: ChartControlPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Setting</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-4">
          {/* 图表类型选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chart Type
            </label>
            <div className="flex space-x-4">
              {(['line', 'bar', 'area'] as const).map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="chartType"
                    value={type}
                    checked={chartType === type}
                    onChange={() => onChartTypeChange(type)}
                    className="mr-2"
                  />
                  <span className="text-sm capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 高度设置 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chart Height
            </label>
            <select
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="h-64">Small (h-64)</option>
              <option value="h-80">Medium (h-80)</option>
              <option value="h-96">Large (h-96)</option>
              <option value="h-112">Extra Large (h-112)</option>
            </select>
          </div>

          {/* 功能开关 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showToolbox}
                  onChange={(e) => onShowToolboxChange(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">Show Toolbox</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showLegend}
                  onChange={(e) => onShowLegendChange(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">Show Legend</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 