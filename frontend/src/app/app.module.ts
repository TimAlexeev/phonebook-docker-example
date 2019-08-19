import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatDialogModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactService } from './core/services/contact.service';
import { ContactCardComponent } from './components/contact-card/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
    ContactCardComponent
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
