import { Component, OnInit } from '@angular/core';
import {NzUploadFile} from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  params: {};
  expandSet = new Set<number>();
  fileList: NzUploadFile[] = [];
  listOfData = [
    {
      id: 1,
      name: 'Renan Oliveira',
      admissionDate: '25/04/2021',
      cpf: '705.019.654.26',
      active: true
    },
    {
      id: 2,
      name: 'Thiago  Oliveira',
      admissionDate: '25/05/2021',
      cpf: '005.049.624.66',
      active: true
    }
  ];
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
