import { BrowserModule } from '@angular/platform-browser';
import { TitleComponent } from './widgets/title/title.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './widgets/selectbox/selectbox.component';
import { HttpClientModule }    from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './widgets/modal/modal.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        FormsModule,
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        ModalContentComponent,
        TitleComponent,
        SelectComponent
    ],
    exports: [
        ModalContentComponent,
        TitleComponent,
        SelectComponent
    ],
    entryComponents: [ModalContentComponent]
})
export class ShareModule {

}