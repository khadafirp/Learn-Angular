import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  liPost:any;
  liComment:any;
  lisComment:[];
  daftarComment:any;
  constructor(private http: HttpClient) { }

  fetchData(idPost:string){
    this.http.get('https://dummyapi.io/data/api/post/' + idPost, {headers : {'app-id': '5fd091cf8d302177eeb328ea'}}) 
    // this.http.get('https://dummyapi.io/data/api/post/' + idPost, {headers : {'app-id': '5fca8132ccb9a4cb0fb568cc'}}) 
    .subscribe(Response => { 
  
      console.log(Response) 
      this.liPost=Response;

      console.log("detil postingan = " + this.liPost);
    }); 
  }

  fetchDataComment(idPost:string){
    this.http.get('https://dummyapi.io/data/api/post/' + idPost + "/comment", {headers : {'app-id': '5fd091cf8d302177eeb328ea'}}) 
    // this.http.get('https://dummyapi.io/data/api/post/' + idPost, {headers : {'app-id': '5fca8132ccb9a4cb0fb568cc'}}) 
    .subscribe(Response => { 
  
      console.log(Response) 
      this.liComment=Response;
      this.lisComment=this.liComment.data;
      // this.daftarComment= JSON.stringify(this.lisComment);
      // console.log("json dari list comment array = " + this.daftarComment);


        // if(this.lisComment == null){
        //     document.getElementById("text").innerText = "There is no comment here";
        // }else{
        //   if(this.lisComment.length == 0){
        //     document.getElementById("text").innerText = this.daftarComment[0].owner.firstName + " " + this.daftarComment[0].owner.lastName + " " + this.daftarComment[0].message;  
        //   }else{
        //     for(var i = 0 ; i < this.lisComment.length ; i++){
        //       document.getElementById("text").innerText = this.daftarComment[i].owner.firstName + " " + this.daftarComment[i].owner.lastName + " " + this.daftarComment[i].message;
        //     }
        //   }
        // }
    // }

      console.log("detil comment = " + this.lisComment);
    }); 
  }

  ngOnInit(): void {
    this.fetchData(localStorage.getItem("idPostNew"));
    this.fetchDataComment(localStorage.getItem("idPostNew"));
  }

}
