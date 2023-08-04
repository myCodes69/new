import { Component,OnInit, SimpleChanges,OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Directive and Hooks';
  public user:any='';
  // constructor(){
  //   console.log(`Constructor called`);
    
  // }
  // ngOnInit(): void {
  //   console.log(`ng onit`);
    
  // }
  
    // ngOnChanges(){
    //   console.log(`ng onchanges`);
      
    // }
  fun(v:any){
    this.user=v;
  }


}
