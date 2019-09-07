import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: any = null;
  greetingMsg = "VBM FROM APP COMPONENT PARENT";

  setName(value){
    this.name = value;
  };

  resetName(){
    this.name = null;
  }

}
