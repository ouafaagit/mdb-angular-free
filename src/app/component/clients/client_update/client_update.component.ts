import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {clientModel} from '../client.model';
import {ClientService} from '../client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client_update.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

// tslint:disable-next-line:class-name
export class client_updateComponent {
 // config: any;

 public  collection: clientModel[] = [];


  // closeResult: string;
 // clientAdd: ClientModel = new ClientModel({});
 // clientUpdate: ClientModel = new ClientModel({});
client: clientModel = new clientModel({});
  // id: number;

// @ts-ignore
constructor(private router: Router, private Service: ClientService) {

    this.Service.getAllClients().then(response => this.collection = response );
   // this.collection.count = this.collection.clients.length;
   /* this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  delete() {
    this.Service.deleteClient(this.id).subscribe(data => console.log(data), error => console.log(error));
    this.goToList();
  }

  save() {
    this.Service.createClient(this.clientAdd)
      .subscribe(data => console.log(data), error => console.log(error));
    this.clientAdd = new ClientModel({});
    this.goToList();
  }

  onSubmit() {
    this.save();
  }
  update() {
    this.Service.updateClient(this.id, this.clientUpdate).subscribe(data => console.log(data), error => console.log(error));
    this.clientUpdate = new ClientModel({});
    this.goToList();
  }
  goToList() {
    this.router.navigate(['clients/list']).then(() => {window.location.reload(); });
  }

  modalUpdate(updatemodal: TemplateRef<any>, id: number) {
    this.Service.getClient(id).then( async response => this.clientUpdate = await response);
    this.open(updatemodal, id);
  }
  open(content, id: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.id = id;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  goToAdd() {
    this.router.navigate(['clients/add']);
  }

  goToUpdate(id: number) {
    this.router.navigate(['clients/update'], { state: { id} });
  }

  goToDelete(id: number) {
    this.router.navigate(['clients/delete'], { state: { id} });
  }
 */
}

}

