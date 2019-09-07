import { NgModule } from "@angular/core";
import { ShareModule } from '../shared.module';
import { ServicesComponent } from './services.component';

@NgModule({
    imports: [ShareModule],
    declarations: [ServicesComponent],
    exports: [
    ServicesComponent,
    ]
})
export class ServicesModule {

}