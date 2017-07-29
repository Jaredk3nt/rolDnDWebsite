import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocRouterModule } from './documentation/doc-router.module';

import { UrlService } from './url.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    DocRouterModule
  ],
  providers: [
      UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
