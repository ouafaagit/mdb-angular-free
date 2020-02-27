import {NgModule} from '@angular/core';
import {clientlistModule} from './client_list/clientlist.module';
import {client_updateModule} from './client_update/client_update.module';

@NgModule({
  imports: [
    clientlistModule,
    client_updateModule
  ]
})
export class ClientModule {
}
