import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { MenuComponent } from './widgets/menu/menu.component';
import { HeaderComponent } from './widgets/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ShareModule } from './shared.module';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { UserEditComponent } from "../app/user-edit/user-edit.component"

const USERROUTES:Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
]


@NgModule({
  declarations: [
    UserEditComponent,
    HeaderComponent,
    MenuComponent,
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(USERROUTES, {
      useHash: true
    }),
    FormsModule,
    ShareModule,
    HomeModule,
    ServicesModule,
    AboutModule,
    BrowserModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
