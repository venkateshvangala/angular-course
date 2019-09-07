import { Component, Input } from "@angular/core";

@Component({
    selector: 'vbm-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.scss']
})
export class TitleComponent{

    private _title: any = null;

    @Input() set title(data){
        this._title = data;
    }

    get title(){
        return this._title;
    }
}