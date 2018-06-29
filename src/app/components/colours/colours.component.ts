import { Component, OnInit } from '@angular/core';
import { Colour } from '../../models/colour';
import { ColourService } from '../../services/colour.service';
import { ActivatedRoute, Event, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})
export class ColoursComponent implements OnInit {

  colour: Colour;
  colours: Colour[];
  coloursSearch: Colour[];
  error: string;

  constructor(
    private router: Router,
    private colourService: ColourService,
    private route: ActivatedRoute
  ) { }

  setColour(c: Colour) {
    this.colour = c;
  }

  searchSchemes(query: string){
    this.colourService.getSchemes(query).subscribe(data => this.coloursSearch = data);
  }

  ngOnInit() {
    this.colourService.getSchemes().subscribe(data => this.colours = data);
  }

}
