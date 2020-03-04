import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
})

export class ServiceDescriptionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
