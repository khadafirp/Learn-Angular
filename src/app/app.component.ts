import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  li:any; 
  lis=[]; 
  store=null;
  constructor(
    private http : HttpClient, 
    private router: Router){} 
  
  ngOnInit(): void { 
    this.http.get('https://dummyapi.io/data/api/user', {headers : {'app-id': '5fca8132ccb9a4cb0fb568cc'}}) 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.data; 
    }); 
    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} 
  }  

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
