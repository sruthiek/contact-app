import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from 'src/models/contactschema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:ContactSchema={}
  groups:any=[]

constructor(private editActivatedRoute:ActivatedRoute, private api:ApiService,private editRouter:Router){


}

ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id}= pathParameter
        console.log(id);
        // call viewcontact api
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
            
          }
        })
      }
    })

    //get all groups
this.api.getGroups().subscribe({
  next:(allGroups:any)=>{
    this.groups=allGroups
    console.log(this.groups);

    
  }
})

}
//editcontact
editContact(id:any){
  //api calll to edit contact
  this.api.editContact(id,this.contact).subscribe({
    next:(response:any)=>{
      //navigate to allcontacts

      this.editRouter.navigateByUrl("")
    }
  })
}

}

