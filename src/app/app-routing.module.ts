import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_Layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './_Layout/admin-layout/admin-layout.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import  { DashboardComponent } from './Admin/dashboard/dashboard.component';
import  { HomeComponent } from './home/home.component';
import  { RecyclervoiceComponent } from './recyclervoice/recyclervoice.component';
import  { ContactComponent } from './contact/contact.component';
import  { CareerComponent } from './career/career.component';
import  { MyaccountComponent } from './myaccount/myaccount.component';
import  { ServicesComponent } from './services/services.component';

const routes: Routes = [
  //public layout routes goes here 
  { 
    path: 'public', 
    component: PublicLayoutComponent,
    children: [
      { path:'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'recycler-voice', component: RecyclervoiceComponent }  ,
      { path: 'contact', component: ContactComponent },
      { path: 'career', component: CareerComponent },
      { path: 'my-account', component: MyaccountComponent }
    ]
   },
    //Admin Login routes goes here here
    { 
      path: 'admin',
      component: AdminLayoutComponent, 
      children: [
        { path: 'dashboard', component: DashboardComponent },
        //{ path: 'profile', component: ProfileComponent }
      ]
    },

  //no layout routes
   { path: '', component: MainComponent, pathMatch:'full' }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
