import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/core/services/lang/lang.service';

@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.scss'],
})
export class BannerAreaComponent  {
  shapes = [
  {
  "dataAnimation": "slideInLeft",
  "dataDuration": "2s",
    "dataDelay": ".3s",
    "class": "banner__shape-left2",
    "src": "assets/images/banner/banner-regular-left-shape.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "dataAnimation": "slideInLeft",
    "dataDuration": "2s",
    "dataDelay": ".9s",
    "class": "banner__shape-left1",
    "src": "assets/images/banner/banner-solid-left-shape.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "class": "banner__shape-left3 wow slideInLeft",
    "src": "assets/images/banner/banner-shape-left.png", 
    "alt": "shape",
    "imageClass":"sway__animation"
  },
  {
    "dataAnimation": "slideInRight",
    "dataDuration": "3s",
    "dataDelay": ".3s",
    "class": "banner__shape-right2",
    "src": "assets/images/banner/banner-shape-right-line.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "dataAnimation": "slideInRight",
    "dataDuration": "2s",
    "dataDelay": ".3s",
    "class": "banner__shape-right1",
    "src": "assets/images/banner/banner-shape-right.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "dataAnimation": "slideInRight",
    "dataDuration": "2s",
    "dataDelay": ".9s",
    "class": "banner__right-line1",
    "src": "assets/images/banner/banner-right-line1.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "dataAnimation": "slideInRight",
    "dataDuration": "2s",
    "dataDelay": ".7s",
    "class": "banner__right-line2",
    "src": "assets/images/banner/banner-right-line2.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "dataAnimation": "slideInRight",
    "dataDuration": "2s",
    "dataDelay": ".5s",
    "class": "banner__right-line3",
    "src": "assets/images/banner/banner-right-line3.png",
    "alt": "shape",
    "imageClass":""
  },
  {
    "dataAnimation": "slideInRight",
    "dataDuration": "2s",
    "dataDelay": ".3s",
    "class": "banner__right-line4",
    "src": "assets/images/banner/banner-right-line4.png",
    "alt": "shape",
    "imageClass":""
  }

  ]
  bannerSlides = [
    {
    backgroundImage: "assets/images/banner/banner-image2.webp",
    content: {
      subtitle: {
        text: "Transforming Ideas into Digital Solutions",
      },
      title: {
        text: "Leading Digital Innovation for a Modern World",
      },
      description: {
        text: "Drive business success with tailored digital strategies and technology-driven solutions.",
        breakingText: "Empowering businesses to evolve and excel in a competitive landscape.",
      },
      button: {
        text: "Discover Our Services",
        link: "/about",
      },
    },
    },
    {
  backgroundImage: "assets/images/banner/banner-image3.webp",
  content: {
    subtitle: {
      text: "Connecting Technology & Business Needs",
    },
    title: {
      text: "Seamless Integration, Maximum Efficiency",
    },
    description: {
      text: "Optimize your business operations with custom digital solutions that integrate effortlessly.",
      breakingText: "Our expertise helps you streamline processes and boost productivity.",

    },
    button: {
      text: "View Solutions",
      link: "/service",
    },
      },
    },
    {
  backgroundImage: "assets/images/banner/banner-image.webp",
  content: {
    subtitle: {
      text: "Shaping Tomorrow’s Technology Today",
    },
    title: {
      text: "Prepare for the Future with Cutting-Edge Tech",
    },
    description: {
      text: "Stay ahead in a rapidly evolving digital landscape. We bring the latest innovations to empower your business.",
      breakingText: "Unlock new possibilities with advanced technologies.",
    },
    button: {
      text: "Let’s Talk Tech",
      link: "/contact",
    },
      },
    }
  ];

  constructor(
    private lang: LangService,
    private translate: TranslateService,
  ) {
  }
}
