import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
 
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  )
  

  miniCardData = [
    {
      icon: 'payments',
      title: 'Gesamt Umsatz',
      value: 5432,
      color: 'primary',
      isIncrease: true,
      isCurrency: true,
      duration: 'seit letztem Monat',
      percentValue: 0.5,
    },
    // tslint:disable-next-line: max-line-length
    {
      icon: 'euro_symbol',
      title: 'Durchschnittlicher',
      value: 128,
      color: 'accent',
      isIncrease: false,
      isCurrency: true,
      duration: 'seit letztem Monat',
      percentValue: 0.28,
    },
    // tslint:disable-next-line: max-line-length
    {
      icon: 'shopping_cart',
      title: 'Gesamt Bes',
      value: 56,
      color: 'warn',
      isIncrease: true,
      isCurrency: false,
      duration: 'seit letztem Monat',
      percentValue: 0.35,
    },
    // tslint:disable-next-line: max-line-length
    {
      icon: 'account_box',
      title: 'Neue Kunden',
      value: 23,
      color: 'primary',
      isIncrease: false,
      isCurrency: false,
      duration: 'seit letztem Monat',
      percentValue: 0.09,
    },
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}
}
