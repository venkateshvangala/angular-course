import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit{

  private userId: any = null;


  constructor(private router: ActivatedRoute){

  }

  ngOnInit(){
    this.router.params.subscribe(
      (res:any) => {
        this.userId = res.id
      }
    )
  }

}
