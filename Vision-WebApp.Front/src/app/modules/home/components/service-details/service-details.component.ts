import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCatalogService } from 'src/app/core/services/Service-area/service-catalog.service';
import { Observable } from 'rxjs';

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  title: string;
  name: string;
  description: string;
  HowWeCanHelp: string;
  icon: string;
  shape: string;
  image: string;
  defaultImage: string;
  benefits: string[];
  faq: FAQ[];
}

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  service!: Service;
  errorMessage: string | null = null;
  allServices: Service[] = [];
  currentServiceTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private serviceCatalogService: ServiceCatalogService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      const serviceName = params.get('name') || '';
      this.loadService(serviceName);
    });

    // Load all services only once
    this.loadAllServices();
  }

  private loadService(serviceName: string): void {
    this.serviceCatalogService.getServiceByName(serviceName).subscribe({
      next: (serviceData: Service) => {
        this.service = serviceData;
        this.currentServiceTitle = serviceData.title;
        this.errorMessage = null;
      },
      error: (error) => {
        console.error('Error fetching service:', error);
        this.errorMessage = 'Service not found.';
      }
    });
  }

  private loadAllServices(): void {
    this.serviceCatalogService.getAllServices().subscribe({
      next: (services: Service[]) => {
        this.allServices = services;
        this.errorMessage = null;
      },
      error: (error) => {
        console.error('Error fetching all services:', error);
        this.errorMessage = 'Could not load services.';
      }
    });
  }
}
