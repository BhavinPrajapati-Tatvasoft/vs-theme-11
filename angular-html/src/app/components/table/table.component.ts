import {
  FullscreenOverlayContainer,
  OverlayConfig,
  OverlayContainer,
} from '@angular/cdk/overlay';
import { Component, Injectable, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorSelectConfig,
} from '@angular/material/paginator';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

export interface UserData {
  name: string;
  email: string;
  address: string;
  contactNo: string;
  status: string;
}

const table_data: UserData[] = [
  {
    name: 'Courtney Henry',
    email: 'tim.jennings@example.com',
    address: '8080 Railroad St.',
    contactNo: '+62 831 12322387',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    email: 'dolores.chambers@example.com',
    address: '775 Rolling Green Rd.',
    contactNo: '+62 899 00192732',
    status: 'Active',
  },
  {
    name: 'Arlene McCoy',
    email: 'debbie.baker@example.com',
    address: '3890 Poplar Dr.',
    contactNo: '+62 878 66253820',
    status: 'Inactive',
  },
  {
    name: 'Darrell Steward',
    email: 'bill.sanders@example.com',
    address: '3605 Parker Rd.',
    contactNo: '+62 821 42358990',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    email: 'tanya.hill@example.com',
    address: '8558 Green Rd.',
    contactNo: '+62 811 09998263',
    status: 'Active',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Courtney Henry',
    email: 'tim.jennings@example.com',
    address: '8080 Railroad St.',
    contactNo: '+62 831 12322387',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    email: 'dolores.chambers@example.com',
    address: '775 Rolling Green Rd.',
    contactNo: '+62 899 00192732',
    status: 'Active',
  },
  {
    name: 'Arlene McCoy',
    email: 'debbie.baker@example.com',
    address: '3890 Poplar Dr.',
    contactNo: '+62 878 66253820',
    status: 'Inactive',
  },
  {
    name: 'Darrell Steward',
    email: 'bill.sanders@example.com',
    address: '3605 Parker Rd.',
    contactNo: '+62 821 42358990',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    email: 'tanya.hill@example.com',
    address: '8558 Green Rd.',
    contactNo: '+62 811 09998263',
    status: 'Active',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Courtney Henry',
    email: 'tim.jennings@example.com',
    address: '8080 Railroad St.',
    contactNo: '+62 831 12322387',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    email: 'dolores.chambers@example.com',
    address: '775 Rolling Green Rd.',
    contactNo: '+62 899 00192732',
    status: 'Active',
  },
  {
    name: 'Arlene McCoy',
    email: 'debbie.baker@example.com',
    address: '3890 Poplar Dr.',
    contactNo: '+62 878 66253820',
    status: 'Inactive',
  },
  {
    name: 'Darrell Steward',
    email: 'bill.sanders@example.com',
    address: '3605 Parker Rd.',
    contactNo: '+62 821 42358990',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    email: 'tanya.hill@example.com',
    address: '8558 Green Rd.',
    contactNo: '+62 811 09998263',
    status: 'Active',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
  {
    name: 'Dianne Russell',
    email: 'nathan.roberts@example.com',
    address: '7529 E. Pecan St.',
    contactNo: '+62 812 66889253',
    status: 'Inactive',
  },
];

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Rows per page: `;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `1-10 of 100`;
    }
    return `${page + 1}-${pageSize} of ${length}`;
  }
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayClass: 'customClass' },
    },
  ],
})
export class TableComponent {
  displayedColumns: string[] = [
    'name',
    'email',
    'address',
    'contactNo',
    'status',
    'action',
  ];
  dataSource: MatTableDataSource<UserData>;
  paginationSelectConfig: MatPaginatorSelectConfig = {
    panelClass: 'pagination-menu',
  };

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null =
    null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(table_data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
