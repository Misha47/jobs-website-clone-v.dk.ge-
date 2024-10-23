import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-nav',
  templateUrl: './jobs-nav.component.html',
  styleUrl: './jobs-nav.component.scss'
})
export class JobsNavComponent {
  myTheme: string | null = localStorage.getItem('theme') || 'light'
  onChangeTheme(){
    if (this.myTheme === "light"){
      this.myTheme = "dark";
      localStorage.setItem('theme', 'dark')
      document.body.setAttribute('data-bs-theme', 'dark')
    }else{
      this.myTheme = "light";
      localStorage.setItem('theme', 'light')
      document.body.setAttribute('data-bs-theme', 'light')

    }
    console.log(this.myTheme)
  }
}
