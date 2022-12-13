import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMarkAllCheckbox]'
})
export class MarkAllCheckboxDirective {

  @HostListener('change', ['$event']) onChange(event: any) {
    let checkboxes = document.querySelectorAll('.card-body tbody td input[type="checkbox"]') as NodeList;
    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = event.target.checked;
    })
  }

}
