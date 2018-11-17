import {Component} from '@angular/core';
import {OrganisationApiService} from "./organisation-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMPos';
  private newProduct: any = {
    batchNumber: '',
    description: '',
    sellingPrice: 0,
    costPrice: 0
  };

  constructor(private organisationApi: OrganisationApiService) {
  }

  addProduct() {
    this.organisationApi.addProduct(this.newProduct)
      .subscribe(res => {
        this.newProduct = {
          batchNumber: '',
          description: '',
          sellingPrice: 0,
          costPrice: 0
        };
      })
  }


}

