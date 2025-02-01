import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-brand-area',
  templateUrl: './brand-area.component.html',
  styleUrls: ['./brand-area.component.scss']
})
export class BrandAreaComponent  {
  @ViewChild('brandSwiper', { static: false }) brandSwiper!: ElementRef;


   ngAfterViewInit(): void {
    if (!this.brandSwiper?.nativeElement) {
      console.error("Swiper element not found!");
      return;
    }

    const swiperParams: any = {
      breakpoints: {
        1200: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        575: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        }
      }
    };

    // Apply Swiper parameters to the native element
    Object.assign(this.brandSwiper.nativeElement, swiperParams);

    // Initialize Swiper after setting parameters
    if (typeof this.brandSwiper.nativeElement.initialize === 'function') {
      this.brandSwiper.nativeElement.initialize();
    } else {
      console.error("Swiper initialization function not found!");
    }
  }
}
