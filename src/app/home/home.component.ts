import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../widgets/modal/modal.component';
import { Router } from '@angular/router';


@Component({
    selector: "angular-home",
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{

    bsModalRef: BsModalRef;


    constructor(private homeServices: HomeService, private modalService: BsModalService, private router: Router){


    }

    ngOnInit(){

        this.homeServices.getTest().subscribe(
            res => {
                this.test = res;
            },
            err => {

            }
        );
        this.homeServices.fetchUsers().subscribe(
            (res:any) => {
                this.students = res;
            },
            (err: any) => {

            }
        )
    }

    openUserModal(userId){
        const initialState = {
            "userId": userId
          };
          this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
          this.bsModalRef.content.closeBtnName = 'Close';
    }

    navigateToUserEdit(userId){
        this.router.navigate(['/home/edit', userId]);
    }

    

    private students: any = [];
    private test: any = null;
    
}