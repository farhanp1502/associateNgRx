import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssociateListingComponent } from '../associatelisting/associatelisting.component';
import { Store } from '@ngrx/store';
import { addassociate } from 'src/app/store/Associate/associate.action';
import { AssociateModel } from 'src/app/store/model/associate.model';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent {
  isedit=false;
  title= 'Create Associate';
  dailogdata:any;

constructor(private formbuilder:FormBuilder,private ref:MatDialogRef<AssociateListingComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,private store:Store){

}
ngOnInit(): void {
  this.dailogdata = this.data;
  this.title = this.dailogdata.title;
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}


associateform = this.formbuilder.group({
  id:this.formbuilder.control(0),
  name:this.formbuilder.control('',Validators.required),
  email:this.formbuilder.control('',Validators.compose([Validators.required,Validators.email])),
  phone:this.formbuilder.control('',Validators.required),
  address:this.formbuilder.control('',Validators.required),
  type:this.formbuilder.control('CUSTOMER'),
  group:this.formbuilder.control('level1'),
  status:this.formbuilder.control(true)
})

closePopup(){
  this.ref.close()
}

Saveassociate(){
  if(this.associateform.valid){
    const _obj:AssociateModel = {
      id:this.associateform.value.id as number,
      name: this.associateform.value.name as string,
      email:this.associateform.value.email as string,
      phone:this.associateform.value.phone as string,
      associategroup:this.associateform.value.type as string,
      address:this.associateform.value.address as string,
      type:this.associateform.value.type as string,
      status:this.associateform.value.status as boolean

    }

    this.store.dispatch(addassociate({inputdata:_obj}));
    this.closePopup();
  }
}
}
