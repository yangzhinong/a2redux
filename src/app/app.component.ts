import { Component } from '@angular/core';
import { NgRedux , select} from 'ng2-redux'
import { IAppState } from "app/store";
import { INCREMENT } from "app/actions";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //counter= 0;
  @select() counter$:Observable<number>
  constructor(private ngRedux: NgRedux<IAppState>){
  }

  increment(){
      this.ngRedux.dispatch({type: INCREMENT, opt:'yzn', id:1}) ;
  }
}
