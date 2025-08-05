'use client';

import EnhancedChartContainer from './components/EnhancedChartContainer';
import { allChartConfigs } from './config/chartConfigs';

export default function Home() {
  return (
    <EnhancedChartContainer 
      configs={allChartConfigs}
      showControlPanel={true}
    />
  );
}
