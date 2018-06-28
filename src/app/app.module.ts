import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ColoursComponent } from './components/colours/colours.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColourOneComponent } from './components/colour-one/colour-one.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colours', component: ColoursComponent },
  { path: 'colours/:id', component: ColoursComponent }
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
