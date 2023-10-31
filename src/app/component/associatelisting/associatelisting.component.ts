import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { AssociateModel, associateallmodel } from 'src/app/store/model/associate.model';
import { getassociatelist } from 'src/app/store/Associate/associate.selector';
import { loadassociate } from 'src/app/store/Associate/associate.action';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-associate',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.css']
})
export class AssociateListingComponent {

  Associatelist !: AssociateModel[];
  displayassociate = ["code","name","email","phone","address","type","group","status","action"];
  datasource !: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,private store:Store){

  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.store.dispatch(loadassociate());
    this.store.select(getassociatelist).subscribe((data)=>{
      this.Associatelist = data;
      this.datasource = new MatTableDataSource<AssociateModel>(this.Associatelist)
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
    // console.log(this.Associatelist);
  }

  ngAfterContentChecked(){

  }
  
    
    

  functionadd(){
    this.openPopup(0,'Create Associate');

  }

  openPopup(code:number,title:string){
    this.dialog.open(AddassociateComponent,{
      width:'50%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration: '500ms',
      data:{
        code:code,
        title:title
      }
    })
  }
}
