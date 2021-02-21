import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { services } from '../services'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

tableList:any;

  constructor(private serv: services) { }

  ngOnInit(): void {
  this.getTableData();
  }

  getTableData(){

    console.log("hiii");
    this.serv.getTable().subscribe(response => {
      console.log(response); 
      this.tableList = response; 
      

      //  me response eka thami api eke response eka
    }, error => {
      console.log("error");
    });
  }


  }

