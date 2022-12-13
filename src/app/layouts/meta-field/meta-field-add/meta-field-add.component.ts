import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-meta-field-add',
  templateUrl: './meta-field-add.component.html',
  styleUrls: ['./meta-field-add.component.scss'],
})
export class MetaFieldAddComponent implements OnInit {
  submitting = false;

  constructor(
    private dataService: DataService,
    private notifier: NotifierService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  // Adding FAQs
  async onAddFaq(form: NgForm) {
    let payload = {
      field_name: form.value.field_name,
      currency: form.value.currency,
      transaction_type: form.value.transaction_type,
      max_length: form.value.max_length,
      min_length: form.value.min_length,
      country_iso_code:form.value.country_iso_code,
      service_id:form.value.service_id
    };
    this.submitting = true;
    try {
      const response = await this.dataService.addMetaField(payload).toPromise();
      this.submitting = false;
      this.notifier.notify('success', 'Meta field has been added!');
      this.router.navigate(['/meta-field']);
    } catch (error: any) {
      this.submitting = false;
      this.notifier.notify('error', error.error.message);
    }
  }
}
