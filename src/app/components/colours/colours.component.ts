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

  constructor(
    private router: Router,
    private colourService: ColourService,
    private route: ActivatedRoute
  ) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // console.log("router changed")
        this.setOneColour();
      }
    })

  }

  setColour(c: Colour) {
    this.colour = c;
    //this.setOneColour();
  }

  setOneColour() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.colourService.getColourById(id).subscribe(data => this.colour = data);
  }

  ngOnInit() {
    this.colourService.getSchemes().subscribe(data => this.colours = data);
  }

}
