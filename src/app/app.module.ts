import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { ServiceDescriptionComponent } from './components/service-description/service-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatChipsModule,
  ],
  providers: [],
  entryComponents: [
    ServiceDescriptionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
