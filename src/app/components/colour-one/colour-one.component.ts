import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColourService } from '../../services/colour.service';
import { Colour } from '../../models/colour';
import { Location } from '@angular/common';

@Component({
  selector: 'app-colour-one',
  templateUrl: './colour-one.component.html',
  styleUrls: ['./colour-one.component.css']
})
export class ColourOneComponent implements OnInit {

  colour: Colour;

  constructor(
    private route: ActivatedRoute,
    private colourService: ColourService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.colourService.getColourById(id).subscribe(data => this.colour = data);
  }
}
