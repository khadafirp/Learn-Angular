import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  li:any; 
  lis=[]; 
  liDua:any; 
  lisDua=[]; 
  liTiga:any;
  pictureUser:any;
  nameUser:any;
  emailUser:any;
  phoneUser:any;
  postId=Array();
  newPostId;
  liComment:any;
  lisComment:[];
  ownerComment:any;
  messageComment:any;
  store=null;
  vm=this;
  
  course = "Angular Learning";
  testValue = "";
  constructor(
    private http : HttpClient, 
    private router: Router){}

    ngOnInit(): void { 
      this.http.get('https://dummyapi.io/data/api/user', {headers : {'app-id': '5fd091cf8d302177eeb328ea'}}) 
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

    fetchProfilUser(idUser:string){
      this.http.get('https://dummyapi.io/data/api/user/' + idUser, {headers : {'app-id': '5fd091cf8d302177eeb328ea'}}) 
      // this.http.get('https://dummyapi.io/data/api/user/' + idUser, {headers : {'app-id': '5fca8132ccb9a4cb0fb568cc'}}) 
      .subscribe(Response => {  
        console.log(Response) 
        this.liTiga=Response;
        this.pictureUser=this.liTiga.picture;  
        this.nameUser=this.liTiga.firstName + " " + this.liTiga.lastName;
        this.emailUser=this.liTiga.email;
        this.phoneUser=this.liTiga.phone;
      }); 
    }

    fetchDataUser(idUser:string){
      this.http.get('https://dummyapi.io/data/api/user/' + idUser + '/post', {headers : {'app-id': '5fd091cf8d302177eeb328ea'}}) 
      // this.http.get('https://dummyapi.io/data/api/user/' + idUser + '/post', {headers : {'app-id': '5fca8132ccb9a4cb0fb568cc'}}) 
      .subscribe(Response => { 
    
        console.log(Response) 
        this.liDua=Response; 
        this.lisDua=this.liDua.data; 
      }); 
    }

    fetchComments(idPost:string){
      this.http.get('https://dummyapi.io/data/api/post/' + idPost + '/comment', {headers : {'app-id': '5fd091cf8d302177eeb328ea'}}) 
      // this.http.get('https://dummyapi.io/data/api/post/' + idPost + '/comment', {headers : {'app-id': '5fca8132ccb9a4cb0fb568cc'}}) 
        .subscribe(Response => { 
      
          console.log(Response) 
          this.liComment=Response; 
          this.lisComment=this.liComment.data;

          // var a = JSON.stringify(this.lisComment.toString().replace("[", "").replace("]", ""));
          // this.ownerComment=JSON.parse(this.lisComment.toString().replace("[", "").replace("]", ""));
          // console.log(a);
          console.log(this.lisComment);
          console.log(this.lisComment.length);

          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");

        }); 
    }

    goToPage(pageName:string, idUser:string):void{
      this.router.navigate([`${pageName}`]);
      localStorage.setItem("idUser", idUser);
      localStorage.setItem("idPost", idUser);
      this.course = idUser;
      console.log(this.course);
      // this.testValue = 'https://dummyapi.io/data/api/user/' + this.course + '/post';
      this.fetchProfilUser(this.course);
      this.fetchDataUser(this.course);
    }
    
}
