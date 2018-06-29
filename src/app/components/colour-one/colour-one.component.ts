import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColourService } from '../../services/colour.service';
import { Colour } from '../../models/colour';
import { Location } from '@angular/common';
//import { HTMLElement } from '@angular/core';

@Component({
  selector: 'app-colour-one',
  templateUrl: './colour-one.component.html',
  styleUrls: ['./colour-one.component.css']
})
export class ColourOneComponent implements OnInit {

  colourOne: Colour;

  constructor(
    //private elem: HTMLElement,
    private route: ActivatedRoute,
    private colourService: ColourService,
    private location: Location
  ) { }

  colorSwap() {
    let i;
    let primCol = document.getElementsByClassName('primary-col') as HTMLCollectionOf<HTMLElement>
    let primBc = document.getElementsByClassName('primary-bc') as HTMLCollectionOf<HTMLElement>
    let secCol = document.getElementsByClassName('secondary-col') as HTMLCollectionOf<HTMLElement>
    let secBc = document.getElementsByClassName('secondary-bc') as HTMLCollectionOf<HTMLElement>
    let accCol = document.getElementsByClassName('accent-col') as HTMLCollectionOf<HTMLElement>
    let accBc = document.getElementsByClassName('accent-bc') as HTMLCollectionOf<HTMLElement>
    let accBor = document.getElementsByClassName('accent-bor') as HTMLCollectionOf<HTMLElement>
    for(i = 0; i < primCol.length; i++) {
      primCol[i].style.color = this.colourOne[0].color2;
    }
    for (i = 0; i < primBc.length; i++) {
      primBc[i].style.backgroundColor = this.colourOne[0].color2;
    }
    for (i = 0; i < secCol.length; i++) {
      secCol[i].style.color = this.colourOne[0].color3;
    }
    for (i = 0; i < secBc.length; i++) {
      secBc[i].style.backgroundColor = this.colourOne[0].color3;
    }
    for (i = 0; i < accCol.length; i++) {
      accCol[i].style.color = this.colourOne[0].color1;
    }
    for (i = 0; i < accBc.length; i++) {
      accBc[i].style.backgroundColor = this.colourOne[0].color1;
    }
    for (i = 0; i < accBor.length; i++) {
      accBor[i].style.borderTop = `5px solid ${this.colourOne[0].color1}`;
    }
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.colourService.getColourById(id).subscribe(data => {
      console.log(data), 
      this.colourOne = data,
      console.log(this.colourOne)
      this.colorSwap();
    }); 
    
  }
}
