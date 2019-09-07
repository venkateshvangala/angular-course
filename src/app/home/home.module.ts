import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { ShareModule } from '../shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [ShareModule, BrowserModule, CommonModule, TooltipModule.forRoot()],
    declarations: [HomeComponent],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {


    
}