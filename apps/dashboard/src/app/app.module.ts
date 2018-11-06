import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@practice/material';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@practice/ui-login';
import { CoreDataModule } from '@practice/core-data';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule,
    CoreDataModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
