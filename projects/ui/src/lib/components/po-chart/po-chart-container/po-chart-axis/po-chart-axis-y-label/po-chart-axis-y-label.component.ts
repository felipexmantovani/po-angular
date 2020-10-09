import { Component, Input, OnInit } from '@angular/core';

import { PADDING } from '../../../helpers/default-values';

@Component({
  selector: '[po-chart-axis-y-label]',
  templateUrl: './po-chart-axis-y-label.component.svg'
})
export class PoChartAxisYLabelComponent implements OnInit {
  @Input('p-axis-y-label-points') axisYLabelPoints: Array<any>;

  constructor() {}

  ngOnInit(): void {}
}
