import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleSubmenu]'
})
export class ToggleSubmenuDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
   const submenu = this.element.nativeElement.nextSibling;
   if(!submenu.classList.contains('show')) {
     submenu.classList.add('show');
   }else {
     submenu.classList.remove('show');
   }
  }

}

// document.addEventListener('click', function() {
//   let allSubMenu = document.querySelectorAll('.sidebar-content .navigation li .dropdown-menu') as NodeList;
//   allSubMenu.forEach(function(menu: any){
//     menu.classList.remove('show');
//   })
// })
