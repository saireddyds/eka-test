import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-table-test';

  // columnDefs = [ this is for local data.json
  //   {headerName: 'Id', field: 'id', sortable: true, filter: true},
  //   {headerName: 'Name', field: 'name', sortable: true, filter: true},
  //   {headerName: 'Email', field: 'email', sortable: true, filter: true}
  // ];

  // sorting works on click of column
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  rowData: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
    // this.rowData = this.http.get('../data.json'); this is for local data.json
  }
}
