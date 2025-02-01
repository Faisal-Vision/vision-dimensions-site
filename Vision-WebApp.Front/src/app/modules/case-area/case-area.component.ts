import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectsCatalogService } from 'src/app/core/services/projectsService/projects-catalog.service';

export interface Project {
  id: number;
  title: string;
  category: string;
  completedDate: string;
  client: string;
  location: string;
  briefDescription: string;
  bannerImage: string;
  mainImage: string;
  defaultImage: string;
  images?: string[]; // Optional in case some projects don't have additional images
  overview: ProjectOverview;
  listingThumbnail: string;
  listingSummary: string;
  projectLink: string;
}

export interface ProjectOverview {
  description: string;
  projectChallenges?: string[]; // Optional in case some projects don't have challenges
  projectOverview: string;
}

@Component({
  selector: 'app-case-area',
  templateUrl: './case-area.component.html',
  styleUrls: ['./case-area.component.scss'],
})
export class CaseAreaComponent implements AfterViewInit {
  @ViewChild('swiper2', { static: false }) swiper2!: ElementRef;

  projects: Project[] = [];
  isRTL: boolean = false;
 constructor(private readonly projectCatalogService: ProjectsCatalogService) {

  }
ngOnInit(): void {
  this.fetchProjects();
  this.isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  // console.log(this.isRTL);
  }

   fetchProjects(): void {
    this.projectCatalogService.getAllProjects().subscribe({
      next: (data: Project[]) => (this.projects = data),
      error: (e: any) => console.error(e),
    });
  }


  ngAfterViewInit(): void {
    if (!this.swiper2?.nativeElement) {
      console.error("Swiper element not found!");
      return;
    }

    const swiperParams = {
      breakpoints: {
        1440: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    };

    // Apply Swiper parameters to the native element
    Object.assign(this.swiper2.nativeElement, swiperParams);

    // Initialize Swiper after setting parameters
    if (typeof this.swiper2.nativeElement.initialize === 'function') {
      this.swiper2.nativeElement.initialize();
    } else {
      console.error("Swiper initialization function not found!");
    }
  }
}




