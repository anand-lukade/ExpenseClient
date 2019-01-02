import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//service
import {EntryService} from './entry.service'
import { HttpClientModule } from '@angular/common/http';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,  MatInputModule,
   MatCardModule, MatSelectModule, MatTableModule, 
   MatToolbarModule, MatDialogModule} 
from '@angular/material';

import { NewEntryComponent } from './new-entry/new-entry.component';
//forms
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component'
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //material design
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    //forms
    ReactiveFormsModule,
    MatInputModule, MatCardModule, MatSelectModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
