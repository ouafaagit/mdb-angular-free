
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {clientModel} from './client.model';

@Injectable({providedIn: 'root'})
export class ClientService {

  constructor(private http: HttpClient, private router: Router) {
  }
  getAllClients(): Promise<Array<clientModel>> {
    return this.http.get<Array<clientModel>>(environment.SERVER_API_URL + '/api/clients').toPromise();
  }

  getClient(id: number): Promise<clientModel> {
    return this.http.get<clientModel>(environment.SERVER_API_URL + '/api/clients/' + id).toPromise();
  }

  createClient(client: clientModel): Observable<clientModel> {
    // @ts-ignore
    return this.http.post(environment.SERVER_API_URL + '/api/clients/add', client);
  }

  updateClient(id: number, client: clientModel): Observable<clientModel> {
    // @ts-ignore
    return this.http.put(environment.SERVER_API_URL + '/api/clients/edit/' + id, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(environment.SERVER_API_URL + '/api/clients/delete/' + id);
  }

}
