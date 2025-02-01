import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LangService } from './core/services/lang/lang.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from './core/services/loading/loading.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  environment = environment;
  isLoading: boolean = false;
  currentLang: string = ''
  optionsEntertainment: AnimationOptions = {
    path: "./assets/json/websiteLoader.json"
  };
  constructor(private router: Router,
    private lang: LangService,
    public dialog: MatDialog,
    private loading: LoadingService
  ) { }

 async ngOnInit(){
    this.loading.isLoading.subscribe(isLoading => {
      setTimeout(() => {
          this.isLoading = isLoading;
      });
    });

    // Defult Theme
    const theme = localStorage.getItem('theme');
    theme ? document.body.classList.add(theme) : document.body.classList.add(this.environment.defaultTheme)

    // Defult Lang
    this.currentLang = localStorage.getItem('lang') ?? this.environment.defaultLang;
    this.lang.langChanged(this.currentLang);
    this.lang.currentLang.subscribe(value => {
      this.environment.defaultLang = value
    })

    // Scroll to top when rout to other page
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);

    });


  }

  animationCreated(animationItem: AnimationItem): void {
  }

  openGradeDialog() {

  }

  onActivate() {
    // window.scroll(0,0);
    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });
 }

}
