'use client';

import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function Chart() {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout
    }));

    const series = chart.series.push(am5percent.PieSeries.new(root, {
      valueField: 'value',
      categoryField: 'category',
    }));

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
      category: 'High',
      value: 501.9
    }, {
      category: 'Medium',
      value: 301.9
    }, {
      category: 'Low',
      value: 165.8
    }]);

    const legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15
    }));

    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: 400, height: 400, padding: 20 }}></div>
  );
}
export default Chart;