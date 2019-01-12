import { MessagesService } from './messages.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { DetailComponent } from './detail/detail.component';
import { ChildComponent } from './child/child.component';
import { ColorDirective } from './color.directive';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './reverse.pipe';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import lcoaleDECH from '@angular/common/locales/de';
import { ReceiverComponent } from './receiver/receiver.component';
registerLocaleData(lcoaleDECH);
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveFormComponent,
    ItemsComponent,
    DetailComponent,
    ChildComponent,
    ColorDirective,
    PipesComponent,
    ReversePipe,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de" },MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
