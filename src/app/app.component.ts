import { Component, OnInit } from '@angular/core';
import { ServiceTypeModel, ServiceModel } from './models/models';
import { AppService } from './services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceDescriptionComponent } from './components/service-description/service-description.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serviceTypes: ServiceTypeModel[];
  terms: string;
  iAgree: boolean;

  constructor(service: AppService, private dialog: MatDialog) {
    service.getServiceTypes().subscribe(x => this.serviceTypes = x);
    service.getTermsOfConditionsText().subscribe(x => this.terms = x);
  }

  getSelectedServices(serviceType: ServiceTypeModel) {
    return serviceType.services.filter(s => s.isChecked);
  }

  isAnyServiceSelected() {
    return this.serviceTypes.some(st => st.services.some(s => s.isChecked));
  }

  onMoreClick(service: ServiceModel) {
    let dialogRef = this.dialog.open(ServiceDescriptionComponent, {
      height: '300px',
      width: '500px',
      data: { service }
    });
  }
}
