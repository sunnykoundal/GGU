import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './_Layout/public-layout/public-layout.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLayoutComponent } from './_Layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ServicesComponent } from './services/services.component';
import { RecyclervoiceComponent } from './recyclervoice/recyclervoice.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    MainComponent,
    AboutUsComponent,
    AdminLayoutComponent,
    DashboardComponent,
    HomeComponent,
    ServicesComponent,
    RecyclervoiceComponent,
    ContactComponent,
    CareerComponent,
    MyaccountComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
