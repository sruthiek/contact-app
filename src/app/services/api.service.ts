import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactschema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL='https://contact-app-vzj5.onrender.com'


  constructor(private http:HttpClient) {}

  //handle errors
  handleError(error:HttpErrorResponse){
    let errormsg:string=''
    errormsg=` Error:${error.message}`
    // if(error.error){
    //   errormsg=`Error :${error.error.message}`
    // }
    // else{
    //   errormsg=`status:${error.status}\n Error:${error.message}`
    // }
     return throwError(()=>errormsg)
  }
    //get all contacts api 
    getAllContacts(){
      //api call: url=http://localhost:3000/contacts req:get
   return   this.http.get(`${this.BASE_URL}/contacts`)
    }

    //view a contact
    viewContact(id:any){
      //api call: url =http://localhost:3000/contats/ca1
      return this.http.get(`${this.BASE_URL}/contacts/${id}`)
    }
    // get a particular group
    getGroup(id:any){
      return this.http.get(`${this.BASE_URL}/groups/${id}`)
    }

   // get all groups
   getGroups(){
    return this.http.get(`${this.BASE_URL}/groups`)
   }

  //  add contact
  addContact(contact:ContactSchema){
    //api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }
  // delete contact
  deleteContact(id:any){
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }
  // edit a contact
  editContact(id:any,contact:ContactSchema){
    //api call
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }
}
