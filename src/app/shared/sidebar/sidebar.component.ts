import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DataService } from '../services/data.service';

declare var $: any;
@Component({
  // moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  name: any;
  sideBarRoute = [
    {
      module_name:'Membership',
      subModule:[{
        module:'Membership',
        route:'/meta-field'
      }]
    }
  ];
  fetchModule: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.menuList();
  }

  async menuList() {
    this.fetchModule=this.sideBarRoute
    // this.name = JSON.parse(localStorage.getItem('user')!);
    // if (localStorage.getItem('activeModule') == null) {
    // let observablesArr: any = [];
    // observablesArr.push(this.dataService.getAclById(this.name[0].role));
    // let body = {
    //   limit: 50,
    //   offset: 0,
    // };
    // observablesArr.push(this.dataService.getModuleList(body));

    // try {
    //   const response = await forkJoin(...observablesArr).toPromise();
    //   response[0].data.forEach((d: any) => {
    //     this.sideBarRoute.map((e: any) => {
    //       if (e.module == d.module_name) {
    //         e.module_id = d.module_id;
    //         e.module_access = d.module_access;
    //         e.list = d.list;
    //         e.add = d.add;
    //         e.edit = d.edit;
    //         e.update_status = d.update_status;
    //         e.delete = d.delete;
    //         e.import = d.import;
    //         e.export = d.export;
    //         e.parent_module_id = d.parent_module_id;
    //       } else {
    //         return;
    //       }
    //     });
    //   });
    //   const parentModule = response[1].data.result.filter((x: any) => {
    //     return x.parent_module_id === 0;
    //   });
    //   parentModule.forEach((d: any) => {
    //     this.fetchModule.push({
    //       module_name: d.module_name,
    //       subModule: this.sideBarRoute.filter(
    //         (i: any) =>
    //           d.module_id == i.parent_module_id && i.module_access == true
    //       ),
    //     });
    //   });
    //   localStorage.setItem('activeModule', JSON.stringify(this.fetchModule));
    // } catch (error) {
    //   console.log(error);
    // }
    // } else {
    //   this.fetchModule = JSON.parse(localStorage.getItem('activeModule')!);
    // }
  }
  OnClickType(type: any) {
    localStorage.setItem('orderType', type);
  }
}
