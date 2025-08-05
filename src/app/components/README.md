# 图表组件使用说明

本项目提供了多个可复用的图表组件，用于展示数据趋势分析。

## 组件列表

### 1. ChartComponent (基础图表组件)
最基础的图表组件，支持基本的折线图展示。

**Props:**
- `title`: 图表标题
- `legend`: 图例数组
- `xAxisData`: X轴数据
- `yAxisName`: Y轴名称
- `series`: 数据系列
- `height`: 图表高度 (默认: 'h-96')
- `className`: 自定义CSS类名

**使用示例:**
```tsx
import ChartComponent from './components/ChartComponent';

<ChartComponent
  title="数据趋势"
  legend={['系列1', '系列2']}
  xAxisData={['1月', '2月', '3月']}
  yAxisName="数量"
  series={[
    {
      name: '系列1',
      data: [10, 20, 30],
      lineStyle: { width: 3 },
      itemStyle: { color: '#5470c6' }
    }
  ]}
/>
```

### 2. AdvancedChartComponent (高级图表组件)
支持更多自定义选项的图表组件。

**额外Props:**
- `chartType`: 图表类型 ('line' | 'bar' | 'area')
- `showToolbox`: 是否显示工具箱
- `showLegend`: 是否显示图例
- `gridConfig`: 网格配置

**使用示例:**
```tsx
import AdvancedChartComponent from './components/AdvancedChartComponent';

<AdvancedChartComponent
  title="高级图表"
  legend={['系列1', '系列2']}
  xAxisData={['1月', '2月', '3月']}
  yAxisName="数量"
  series={[
    {
      name: '系列1',
      data: [10, 20, 30],
      type: 'area',
      areaStyle: { opacity: 0.3 }
    }
  ]}
  chartType="area"
  showToolbox={true}
  showLegend={true}
/>
```

### 3. ChartControlPanel (图表控制面板)
用于动态控制图表显示的控制面板组件。

**Props:**
- `chartType`: 当前图表类型
- `showToolbox`: 是否显示工具箱
- `showLegend`: 是否显示图例
- `height`: 图表高度
- `onChartTypeChange`: 图表类型改变回调
- `onShowToolboxChange`: 工具箱显示状态改变回调
- `onShowLegendChange`: 图例显示状态改变回调
- `onHeightChange`: 高度改变回调

### 4. ChartContainer (图表容器)
用于展示多个图表的容器组件。

**Props:**
- `configs`: 图表配置数组
- `title`: 页面标题
- `className`: 自定义CSS类名

### 5. EnhancedChartContainer (增强图表容器)
集成控制面板的增强版图表容器。

**Props:**
- `configs`: 图表配置数组
- `title`: 页面标题
- `className`: 自定义CSS类名
- `showControlPanel`: 是否显示控制面板

## 配置文件

### chartConfigs.ts
包含所有图表的配置数据，定义了不同图表的标题、图例和数据系列。

**主要配置:**
- `mainChartConfig`: 主图表配置
- `googleAdsComparisonConfig`: Google Ads 对比图表
- `metaComparisonConfig`: Meta 对比图表
- `xComparisonConfig`: X 对比图表
- `linkedInComparisonConfig`: LinkedIn 对比图表
- `allChartConfigs`: 所有图表配置的数组

## 数据格式

### ChartSeries 接口
```typescript
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
```

### ChartConfig 接口
```typescript
interface ChartConfig {
  title: string;
  legend: string[];
  series: ChartSeries[];
}
```

## 使用建议

1. **基础使用**: 如果只需要简单的折线图，使用 `ChartComponent`
2. **高级功能**: 如果需要更多自定义选项，使用 `AdvancedChartComponent`
3. **多图表展示**: 使用 `ChartContainer` 或 `EnhancedChartContainer`
4. **交互控制**: 如果需要用户控制图表显示，使用 `EnhancedChartContainer`

## 样式定制

所有组件都支持通过 `className` 属性进行样式定制，并且使用了 Tailwind CSS 类名。

## 响应式设计

所有图表组件都支持响应式设计，会自动适应容器大小变化。 