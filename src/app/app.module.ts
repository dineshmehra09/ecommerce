import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule } from 'angular-notifier';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPrintModule } from 'ngx-print';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgSelectModule } from '@ng-select/ng-select';
import { MetaFieldListComponent } from './layouts/meta-field/meta-field-list/meta-field-list.component';
import { MetaFieldAddComponent } from './layouts/meta-field/meta-field-add/meta-field-add.component';
import { MetaFieldUpdateComponent } from './layouts/meta-field/meta-field-update/meta-field-update.component';
import { MetaFieldViewComponent } from './layouts/meta-field/meta-field-view/meta-field-view.component';
import { NgOtpInputModule } from 'ng-otp-input';
@NgModule({
  declarations: [
    AppComponent,
    MetaFieldAddComponent,
    MetaFieldUpdateComponent,
    MetaFieldViewComponent,
    MetaFieldListComponent,
    DashboardComponent,
  ],
  imports: [
    NgApexchartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    NgxPrintModule,
    NgxBarcodeModule,
    NgSelectModule,
    NgOtpInputModule,
    NgxDaterangepickerMd.forRoot(),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
        },
      },
    }),
    AngularEditorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
