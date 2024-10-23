import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  charArr = 'v.dk.ge__კლონი__საიტი';
  indx = 0
  theme: string | null = localStorage.getItem('theme')
  constructor(){
    document.title = '-'


    let titleInterval = setInterval(() =>{
      if(this.indx === this.charArr.length - 1){
        clearInterval(titleInterval)        
      }
      
      document.title += this.charArr[this.indx]
      ++this.indx
      
    }, 250)

    

    if(!this.theme){
      document.body.setAttribute('data-bs-theme', 'light')
    }else{
      document.body.setAttribute('data-bs-theme', this.theme)
    }
  }
}
