import {clientlistComponent} from './clientlist.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CardsModule, MDBRootModule} from 'angular-bootstrap-md';
// import {MatCardModule} from '@angular/material/card';


const routes = [{
  path: 'list',
  component: clientlistComponent
}];

@NgModule({
  declarations: [
    clientlistComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CardsModule,
    MDBRootModule,
    // MatCardModule
  ]

})
// tslint:disable-next-line:class-name
export class clientlistModule {
}
