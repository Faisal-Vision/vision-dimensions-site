import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BannerAreaComponent } from '../banner-area/banner-area.component';
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



@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    BannerAreaComponent,
    ServiceAreaComponent,
    AboutAreaComponent,
    CounterAreaComponent,
    CaseAreaComponent,
    OfferAreaComponent,
    ProcessAreaComponent,
    FooterComponent,
    ServiceDetailsComponent,
    CaseDetailsComponent,
    CaseListComponent,
    BrandAreaComponent,
    AboutComponent,
    ContactComponent,
    Error404Component
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatDialogModule,

  ]
})
export class HomeModule { }
