import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  liDua:any; 
  lisDua=[]; 
  liTiga:any;
  pictureUser:any;
  nameUser:any;
  emailUser:any;
  phoneUser:any;

  constructor(private http: HttpClient,
    private router: Router) { 
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

      console.log(this.lisDua);
    }); 
  }

  ngOnInit(): void {
    console.log(localStorage.getItem("idUser"));
    // console.log(localStorage.getItem("idPost"));
    this.fetchProfilUser(localStorage.getItem("idUser"));
    this.fetchDataUser(localStorage.getItem("idUser"));
  }

  goToNextPage(pagename:string, idPost:string){
    console.log("idPostNew = " + idPost);
    this.router.navigate([`${pagename}`]);
    localStorage.setItem("idPostNew", idPost);
  }

}
