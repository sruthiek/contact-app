import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
 export class AllContactsComponent  implements OnInit {
  //to hold all contacts
allcontacts:any=[]
isLoading:boolean=true
errormsg:string=''
todaydate:Date = new Date()
searchKey:string=""


  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllContacts()
    
  }
//get all contacts
getAllContacts(){
  this.api.getAllContacts().subscribe({
    next:(response:any)=>{
      console.log(response);
      setTimeout(()=>{
        this.allcontacts= response
        this.isLoading=false
      },2000);
     

    },
    error:(err:any)=>{
      console.log(err.message);
      this.errormsg=err.message
      this.isLoading=false
    }
  })
}
  //deletecontact
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
        this.getAllContacts()
        
      }
    })
  }
}
