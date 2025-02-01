import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { BannerAreaComponent } from '../banner-area/banner-area.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { ServiceAreaComponent } from '../service-area/service-area.component';
import { AboutAreaComponent } from '../about-area/about-area.component';
import { CounterAreaComponent } from '../counter-area/counter-area.component';
import { CaseAreaComponent } from '../case-area/case-area.component';
import { OfferAreaComponent } from '../offer-area/offer-area.component';
import { ProcessAreaComponent } from '../process-area/process-area.component';
import { FooterComponent } from '../footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { CaseListComponent } from './components/case-list/case-list.component';
import { BrandAreaComponent } from '../brand-area/brand-area.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error-404/error-404.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'',
    component:BannerAreaComponent
  }
  ,
  {
    path:'',
    component:ServiceAreaComponent
  }
  ,
  {
    path:'',
    component:AboutAreaComponent
  }
  ,
  {
    path:'',
    component:CounterAreaComponent
  }
  ,
  {
    path:'',
    component:CaseAreaComponent
  }
  ,
  {
    path:'',
    component:OfferAreaComponent
  },
  {
    path:'',
    component:BrandAreaComponent
  }

  ,
  {
    path:'',
    component:ProcessAreaComponent
  }

  ,
  {
    path:'',
    component:FooterComponent
  }
  ,
  {
    path:'service',
    component:ServiceComponent
  }
,
  {
    path: 'service-details/:name',
    component: ServiceDetailsComponent
  },
  {
    path: 'case',
    component: CaseListComponent
  },
  // {
  //   path: 'case-details/:id',
  //   component: CaseDetailsComponent
  // }
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
     {path: '**', component: Error404Component, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
