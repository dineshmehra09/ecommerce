import { NgModule } from '@angular/core';
 import { CommonModule } from "@angular/common";
 import { RouterModule } from "@angular/router";

 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { AuthService } from './services/auth.service';
import { MarkAllCheckboxDirective } from './directives/mark-all-checkbox.directive';
import { ToggleSubmenuDirective } from './directives/toggle-submenu.directive';



@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        MarkAllCheckboxDirective,
        NgbModule
    ],
    imports:[
        RouterModule,
        CommonModule,
        NgbModule,
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        MarkAllCheckboxDirective,
        ToggleSubmenuDirective
        ],
        providers: [AuthService]
})
export class SharedModule { }
