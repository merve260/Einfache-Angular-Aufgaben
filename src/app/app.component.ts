import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule,FormControlName, Validators} from "@angular/forms";
import {CommonModule, JsonPipe} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe, CommonModule, ReactiveFormsModule,MatDialogModule,MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  firstname: string = "";
  lastname:string = "";
  quantity: number =0;
  price: number =0;
  show: boolean = true;

  person= {name:"Merve", lastname:"Koc", email:"merve@koc.com"};

  names = ["Alice","Johnson","Thomas"];
  secondName=this.names[1] ;


  actorForm: FormGroup = new FormGroup({
    actorName: new FormControl("", [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)]),
    actorRole: new FormControl(""),
    actorSkill: new FormControl("")
  });


  get totalPrice(){
    return this.price*this.quantity;
  }
resetForm(): void {
    this.quantity = 0;
    this.price = 0;
}

  isResetDisabled():boolean {
    return this.quantity ===0 && this.price === 0 ;
  }

  checkActorName(){
    if(this.actorForm.invalid ){
      return alert();
    }
  }
  alert() {
    alert("Ungültig!")
  }

  items = [{name: 'Tom', id: 101}, {name: 'Joy', id: 102}, {name: 'Smith', id: 103}];
  selectedValue: string= 'Tom';
}

