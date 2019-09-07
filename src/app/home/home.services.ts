import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService{

    constructor(private http: HttpClient){

    }

    getTest(){
        return new Observable(subscriber => {
            subscriber.next("HELLO TEST HOME PAGE EXPA")
        })
    }

    fetchUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
}