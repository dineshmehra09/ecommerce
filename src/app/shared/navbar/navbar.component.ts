import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgStorage } from 'ng-storage-local';
import { DataService } from '../services/data.service';
import * as _moment from 'moment';
import { AuthService } from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit,AfterContentInit {
  user_id: any;
  allNotification:any = []; // for alert notification
  tenNotifications:any = [];
  desNotification:any = []; // for desktop notification
  userData: any;
  reqPermission: any = '';
  notiLoading:boolean = false;
  constructor(
    private storage: NgStorage,
    private router: Router,
    private dataService: DataService,
    private authSerice: AuthService,
  ) {
    // this.getAllNotification();

  }
  ngAfterContentInit(): void {
    $('.topbar #sidebarToggleTop, #sidebarToggle').click(function (e:any){
      e.preventDefault();
      $('.sidebar').toggleClass('open');
      $('.sidebar').removeClass('toggled');
  })
  $('.navbar-nav').click(function (e:any){
    e.preventDefault();
    $('.sidebar').removeClass('open');
    // $('.sidebar').removeClass('toggled');
})
  }
  ngOnInit(): void {
    // this._permissionForNotification();
    // let date = new Date().toString();
    // localStorage.setItem('notifyDate', date);
    // this.user_id = JSON.parse(localStorage.getItem('user')!)[0].admin_id;
    // this.getUserData(this.user_id);
    // setInterval(() => {
    //   if(this.authSerice.isAuthenticated()){
    //     this.getDesktopNotification();
    //     this.getAllNotification();
    //   }
    // }, 60000);

  }

  _permissionForNotification() {
    Notification.requestPermission((permission) => {
      this.reqPermission = permission;
    });
  }

  _checkNotification() {
    // let date = localStorage.getItem('notifyDate')!;
    if (this.desNotification) {
      this.desNotification.map((res: any) => {
        // if (new Date(res.order_dt) >= new Date(date)) {
          this._showNotification(res.comment);
          // return;
        // }
      });
    }
    let newdate = new Date().toString();
    localStorage.setItem('notifyDate', newdate);
  }

  // getUserData(id: any) {
  //   this.dataService.getUserById(id).subscribe((res: any) => {
  //     this.userData = res.data;
  //   });
  // }

  onLogout() {
    // if (confirm('Do you want to logout?')) {
    //   this.dataService.logOutUser({admin_id:this.user_id}).subscribe((res)=>{
    //     this.storage.clearAllLocalStorage().then((res) => {
    //       this.router.navigate(['/login']);
    //     });
    // });
    // }
  }
  // getAllNotification(){

  //   let payload ={
  //     fromDate:"",
  //     toDate:""
  //   }
  //   this.notiLoading = true;
  //   this.dataService.getNotification(payload).subscribe(
  //     (res:any)=>{
  //       res.data.result.map((e: any) => {
  //           e.order_id = this.convertOrderId(e.order_id);
  //       });
  //       this.allNotification = res.data.result;
  //       for(let i=0;i<10;i++)
  //       {
  //         this.tenNotifications[i] = this.allNotification[i];
  //       }
  //       this.notiLoading = false;
  //     },
  //     (error:any)=>{
  //       console.log(error.message);
  //       this.notiLoading = false;
  //     }
  //   )
  // }
  //open on click
  openNotification(orderId:any,order_type:any){
      if(!orderId)
        return
      if(order_type == 'picopay'){
        this.router.navigate(['/orders/picopay-list'])
      }
      if(order_type == 'picomoney') {
        this.router.navigate(['/orders/picomoney-list'])
      }
  }

  // getDesktopNotification() {
  //   if(this.reqPermission!='denied') {
  //     let payload = {
  //       fromDate: this.getUTCDate(new Date(localStorage.getItem('notifyDate')!)),
  //       toDate: this.getUTCDate(new Date()),
  //     };
  //     this.dataService.getNotification(payload).subscribe((res: any) => {
  //       this.desNotification = res.data.result;
  //       this._checkNotification();
  //     });
  //   }else{
  //     return;
  //   }
  // }

  _showNotification(comment:any) {
    if (this.reqPermission == 'granted') {
      var notification = new Notification('Picopay', {
        body: comment,
        icon: '../../../assets/img/pico-pay-logo.png?s=40&g=1',
        dir: 'auto',
      });
      notification.onclick = function (event) {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.open('/orders/picopay-list', '_blank');
      };
    //   setTimeout(function(){
    //     notification.close();
    // },5000);
    }
  }

  convertOrderId(id: any) {
    let result = id?.toString().padStart(7, '0');
    return result;
  }
  getUTCDate(date: any) {
    const moment = _moment;
    const utcDate = moment.utc(date);
    return utcDate.format();
  }
}
