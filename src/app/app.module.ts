import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { createStore} from 'redux'

import {NgRedux,NgReduxModule} from 'ng2-redux'
import { AppComponent } from './app.component';
import { IAppState, RootReducer, INIT_STATE } from "app/store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(ngRedux:NgRedux<IAppState>){
     ngRedux.configureStore(RootReducer, INIT_STATE);
   }
 }

