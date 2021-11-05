import { Component, OnInit } from '@angular/core';
import {NzUploadFile} from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }


  expandSet = new Set<number>();
  fileList: NzUploadFile[] = [];
  listOfData = [
    {
      key: 1,
      number: '3345',
      serie: 32,
      importationDate: '25/04/2015',
      totalPrice: 'R$ 25.030,00'
    },
    {
      key: 2,
      number: '3345',
      serie: 32,
      importationDate: '25/04/2015',
      totalPrice: 'R$ 25.030,00'
    },
    {
      key: 3,
      number: '3345',
      serie: 32,
      importationDate: '25/04/2015',
      totalPrice: 'R$ 25.030,00'
    },
  ];
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  ngOnInit(): void {
  }

}
