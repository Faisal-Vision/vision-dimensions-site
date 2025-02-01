import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ServiceCatalogService } from 'src/app/core/services/Service-area/service-catalog.service';
import { Observable } from 'rxjs';

interface Service {
  title: string;
  name: string;
  description: string;
  icon: string;
  shape: string;
  image: string;
  defaultImage: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
}

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.scss'],
})
export class ServiceAreaComponent implements AfterViewInit, OnInit {
  @ViewChild('swiper2', { static: false }) swiper2!: ElementRef;

  services: Service[] = [];

  constructor(private serviceCatalogService: ServiceCatalogService) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices(): void {
    this.serviceCatalogService.getAllServices().subscribe({
      next: (data: Service[]) => (this.services = data),
      error: (e: any) => console.error(e),
    });
  }

  ngAfterViewInit(): void {
    const swiperParams: any = {
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      },
    };

    if (this.swiper2?.nativeElement) {
      Object.assign(this.swiper2.nativeElement, swiperParams);
      this.swiper2.nativeElement.initialize();
    }
  }
}
