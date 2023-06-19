import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSaleChartComponent } from './annual-sale-chart.component';

describe('AnnualSaleChartComponent', () => {
  let component: AnnualSaleChartComponent;
  let fixture: ComponentFixture<AnnualSaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualSaleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualSaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
