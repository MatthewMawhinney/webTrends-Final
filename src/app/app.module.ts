import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ColoursComponent } from './components/colours/colours.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColourOneComponent } from './components/colour-one/colour-one.component';

const routes: Routes = [
  { path: 'colours/:id', component: ColourOneComponent },
  { path: 'colours', component: ColoursComponent//, children: [
  //   { 
  //     path: ':id', 
  //     component: ColourOneComponent, 
  //     outlet: 'aux' 
  //   }
  // ] 
  },
  { path: '', component: HomeComponent }
 //{ path: '/HoF', component: }
]

@NgModule({
  declarations: [
    AppComponent,
    ColoursComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ColourOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
