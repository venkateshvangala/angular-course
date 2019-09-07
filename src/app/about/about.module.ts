import { NgModule } from "@angular/core";
import { ShareModule } from '../shared.module';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [ShareModule],
    declarations: [AboutComponent],
    exports: [
    AboutComponent,
    ]
})
export class AboutModule {

}