import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAxisComponent } from './po-chart-axis.component';

describe('ChartAxisComponent', () => {
  let component: PoChartAxisComponent;
  let fixture: ComponentFixture<PoChartAxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoChartAxisComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoChartAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
