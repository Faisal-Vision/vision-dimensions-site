import { Component } from '@angular/core';
import { ServiceCatalogService } from 'src/app/core/services/Service-area/service-catalog.service';
interface Service {
  title: string;
  name: string;
  description: string;
  icon: string;
  shape: string;
  image: string;
  defaultImage: string
  benefits: string[];
  faq: { question: string; answer: string }[];
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent {
    services:Service[] = [];
  constructor(private serviceCatalogService: ServiceCatalogService) {}

  ngOnInit(): void {
    this.serviceCatalogService.getAllServices().subscribe({
      next: (data) => (this.services = data),
      error: (e) => console.error(e),
    });
  }


}


