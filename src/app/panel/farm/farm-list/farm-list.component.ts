import { Component, OnInit } from '@angular/core';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {


  params: {};
  expandSet = new Set<number>();
  fileList: NzUploadFile[] = [];
  listOfData = [
    {
      id: 1,
      name: 'Fazenda 1',
      region: 'Mogi Mirim',
      cnpj: '64.386.095/0001-06',
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



  constructor(private activatedRoute: ActivatedRoute) {
    this.params = {...this.params, id: +activatedRoute.snapshot.paramMap.get('id')};
    this.params = {...this.params, mode: activatedRoute.snapshot.paramMap.get('mode')};
  }


  ngOnInit(): void {
  }

}
