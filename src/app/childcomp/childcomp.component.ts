import { Component,Input,OnChanges,OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnChanges,OnInit,DoCheck {
 @Input() public parentdata='';
   ngOnInit(){
   console.log(`ng onit`);
   
   }
   ngOnChanges(){
     console.log(`ng onchanges`);
     
   }
   constructor(){
    console.log(`Constructor called`);
    
  }
  ngDoCheck(): void {
    console.log(`ngdocheck`);    // executed twice before any changes ?? 
    
  }

}
