import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PoTooltipModule } from '../../directives/po-tooltip/po-tooltip.module';

import { PoChartComponent } from './po-chart.component';
import { PoChartDonutComponent } from './po-chart-types/po-chart-donut/po-chart-donut.component';
import { PoChartGaugeComponent } from './po-chart-types/po-chart-gauge/po-chart-gauge.component';
import { PoChartGaugeTextContentComponent } from './po-chart-types/po-chart-gauge/po-chart-gauge-text-content/po-chart-gauge-text-content.component';
import { PoChartLegendComponent } from './po-chart-legend/po-chart-legend.component';
import { PoChartPieComponent } from './po-chart-types/po-chart-pie/po-chart-pie.component';
import { PoChartContainerComponent } from './po-chart-container/po-chart-container.component';
import { ChartLineComponent } from './po-chart-container/chart-line/chart-line.component';
import { ChartAxisComponent } from './po-chart-container/chart-axis/chart-axis.component';

/**
 * @description
 *
 * Módulo do componente `po-chart`.
 */
@NgModule({
  imports: [CommonModule, PoTooltipModule],
  declarations: [
    PoChartComponent,
    PoChartDonutComponent,
    PoChartGaugeComponent,
    PoChartGaugeTextContentComponent,
    PoChartPieComponent,
    PoChartLegendComponent,
    PoChartContainerComponent,
    ChartLineComponent,
    ChartAxisComponent
  ],
  exports: [PoChartComponent]
})
export class PoChartModule {}
