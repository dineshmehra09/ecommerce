import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-meta-field-update',
  templateUrl: './meta-field-update.component.html',
  styleUrls: ['./meta-field-update.component.scss'],
})
export class MetaFieldUpdateComponent implements OnInit {
  metaData: any;
  submitting = false;

  constructor(
    private dataService: DataService,
    private notifier: NotifierService,
    private router: Router
  ) {}
  ngOnInit(): void {
    /// fetching current fee
    this.metaData = history.state.Meta;
    if (!this.metaData) {
      this.metaData = this.getcurrentMeta();
    } else {
      this.setcurrentMeta();
    }
  }

  // Get Meta from local storage
  getcurrentMeta() {
    let currentMeta: any = localStorage.getItem('Meta');
    return JSON.parse(currentMeta);
  }

  // set Meta in local storage
  setcurrentMeta() {
    localStorage.setItem('Meta', JSON.stringify(this.metaData));
  }

  // Adding FAQs
  async onUpdateFaq(form: NgForm) {
    let payload = {
      id: this.metaData.id,
      field_name: form.value.field_name,
      currency: form.value.currency,
      transaction_type: form.value.transaction_type,
      max_length: form.value.max_length,
      min_length: form.value.min_length,
      service_id:form.value.service_id,
      country_iso_code:form.value.country_iso_code
    };

    this.submitting = true;
    try {
      const response = await this.dataService
        .UpdateMetaById(payload)
        .toPromise();
      this.submitting = false;
      this.notifier.notify('success', 'Meta field has been updated!');
      this.router.navigate(['/meta-field']);
    } catch (error: any) {
      this.submitting = false;
      this.notifier.notify('error', error.error.message);
    }
  }
}
