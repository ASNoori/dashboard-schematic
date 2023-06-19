import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  OrdersTableDataSource,
  OrdersTableItem,
} from './orders-table-datasource';
import { OrderServiceService } from 'services/order-service.service';
export interface order {
  id:number,
 date:Date,
 name:string,
 status:string,
 orderTotal:number,
 paymentMode:string,
}
const ELEMENT_DATA: order[] = [
  { "id":34,
  "date":new Date('12.06.2021'),
  "name":"noori",
  "status":'delivered',
  "orderTotal":5472,
  "paymentMode":'paypal'},
  { "id":34,
  "date":new Date('12.06.2021'),
  "name":"noori",
  "status":'shipped',
  "orderTotal":5472,
  "paymentMode":'paypal'},
  { "id":34,
  "date":new Date('12.06.2021'),
  "name":"noori",
  "status":'delivered',
  "orderTotal":5472,
  "paymentMode":'paypal'}

];

// import { Order } from './order';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
})
export class OrdersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<OrdersTableItem>;
  // dataSource: OrdersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'date',
    'name',
    'status',
    'orderTotal',
    'paymentMode',
  ];
dataSource = ELEMENT_DATA;
  // constructor(private orderService: OrderServiceService) {
  //   this.dataSource = new OrdersTableDataSource();
  // }
  // ngOnInit() {
    // this.dataSource = new OrdersTableDataSource(this.orderService);
    // this.orderService.getOrderCount().subscribe({
    //   next: (orderCount: any) => {
    //     this.dataLength = orderCount;
    //   },
    // });
  // }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
