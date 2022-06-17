import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HelperService {
  base = 'http://localhost:3000'
  mailId:any;
  constructor(private _http:HttpClient) { }
  postData(data:any){
    console.log(data)
  }

//user data crud operations
  postNewUser(data:any){
    return this._http.post(this.base+'/api/postUserInfo',data);
      }
  getUsers(){
    return this._http.get(this.base+'/api/getUserInfo');
  }
  getUserById(id:any){
    return this._http.get(this.base+'/api/getUserById/'+id);
  }
  UpdateUserData(id:any,data:any){
    return this._http.put(this.base+'/api/UpdateUserData/'+id,data);
  }
  deleteUserById(id:any){
    return this._http.delete(this.base+'/api/deleteUser/'+id);
  }
//content data api's
  PostContent(data:any){
    return this._http.post(this.base+'/api/postDataInfo',data);
  }
  getData(){
    return this._http.get(this.base+'/api/getData');
  }
  getDataById(id:any){
    return this._http.get(this.base+'/api/getDataById/'+id);
  }
  UpdateData(id:any,data:any){
    return this._http.put(this.base+'/api/UpdateData/'+id,data);
  }
  checkAdmin(){
    var data=localStorage.getItem('currentUser')
    // console.log(localStorage.getItem('currentUser'))
    if(data!.indexOf('admin')>=0){ //data!.indexOf('admin')>=0
      return true
    }return false
  }
  setAdmin(data:any){
    localStorage.setItem('currentUser',JSON.stringify(data))//JSON.stringify(data)

  }
  getName(){
    return JSON.parse(localStorage.getItem('currentUser') || '{}')
  }
  getUserByName(name:any){
    return this._http.get(this.base+'/api/getDataByName/'+name);

  }
  deleteById(id:any){
    return this._http.delete(this.base+'/api/deleteDataById/'+id)
  }
  getDataName(name:any){
    return this._http.get(this.base+'/api/getDataName/'+name);

  }
  getDataByEmail(mail:any){
    return this._http.get(this.base+'/api/getDataMail/'+mail);
  }
  getMail(mail:any){
    this.mailId=mail;
  }
  putmail(){
    return this.mailId
  }
  }

