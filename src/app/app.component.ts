import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule,FormControlName, Validators} from "@angular/forms";
import {CommonModule, JsonPipe} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


//Signals
const count =signal(0);
console.log('The count is: ' + count());
count.set(3);
console.log('The count is: ' + count());
count.update(value => value + 1);
console.log('The count is: ' + count());
//writable Signals
const count1:WritableSignal<number>=signal(0);
//Computed Signals: Not= Computed Signals are not Writable Signals, cant .set
const count2:Signal<number>=computed(() => count()* 2);
console.log('The count2 is: ' + count2);
const x = signal(5);
const y = 10;
const z=computed(() => x() + y)
console.log('Alte Value z: '+ z);
x.set(15);
console.log('Neue Value z: '+ z);
x.update(value => value * 5);
console.log('The Last Value of Z: ' +z);

//Steigende WritableSignals
const a:WritableSignal<number>=signal(3);
const b=computed(() => a());




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

  onComputed() {
    a.update(value => value + 1);
    console.log(b());
  }
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


  //Count Signal-Cup Of Cake Rezept
  countCake: WritableSignal<number | any | bigint> =signal(10);

  butter:Signal<number>  =computed(() => 0.1 * this.countCake);
  sugar = computed(() =>  0.05 * this.countCake);
  flour = computed(() =>  this.countCake * 0.2);

  update($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.countCake.set(parseInt(input.value));
  }



}



