import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kalk1',
  templateUrl: './kalk1.component.html',
  styleUrls: ['./kalk1.component.css']
})
export class Kalk1Component implements OnInit {
  formula: any = {batch:'10', strength:'27', target:'6', flavour:'10'};
  init: boolean;
  constructor() {
    
   }

  ngOnInit() {
    
  }
  calculate(){
    this.init = true;
    this.formula.nicotine = (this.formula.batch*this.formula.target/this.formula.strength).toFixed(2);
    this.formula.finalFlavour = (this.formula.flavour*this.formula.batch)/100
    this.formula.result = (this.formula.batch-this.formula.nicotine-this.formula.finalFlavour).toFixed(2);

    if (this.formula.target === 0){
      this.formula.nicotine = 0;
      this.formula.result = (this.formula.batch-this.formula.finalFlavour).toFixed(2);
    }
    if (this.formula.strength === 0){
      this.formula.nicotine = 0;
      this.formula.result = (this.formula.batch-this.formula.finalFlavour).toFixed(2);
    }

  }
}
