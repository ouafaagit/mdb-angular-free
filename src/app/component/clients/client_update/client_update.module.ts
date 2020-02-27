import {client_updateComponent} from './client_update.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CardsModule, MDBRootModule} from 'angular-bootstrap-md';
// import {MatCardModule} from '@angular/material/card';


const routes = [{
  path: 'Update',
  component: client_updateComponent
}];

@NgModule({
  declarations: [
    client_updateComponent
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
export class client_updateModule {
}
