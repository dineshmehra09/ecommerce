import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta-field-view',
  templateUrl: './meta-field-view.component.html',
  styleUrls: ['./meta-field-view.component.scss']
})
export class MetaFieldViewComponent implements OnInit {

  metaData: any;
  loading = false;
  constructor() {}

  ngOnInit(): void {
    /// fetching faqs list
    this.metaData = history.state.Meta;

    if (!this.metaData) {
      this.metaData = this.getcurrentMeta();
    } else {
      this.setcurrentMeta();
    }
  }
  // Get branch from local storage
  getcurrentMeta() {
    let currentFee: any = localStorage.getItem('Meta');
    return JSON.parse(currentFee);
  }

  // set branch in local storage
  setcurrentMeta() {
    localStorage.setItem('Meta', JSON.stringify(this.metaData));
  }

}
