import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/user.service';

@Component({
    selector: "vbm-modal",
    templateUrl: 'modal.component.html'
})
export class ModalContentComponent implements OnInit{

    private id: any = null;

    private user: any = null;

    constructor( private userService: UserService){

    }


    ngOnInit(){
        this.id = this["userId"]

        this.userService.getUser(this.id).subscribe(
            (res:any) => {
                this.user = res;
            }
        )
    }
}