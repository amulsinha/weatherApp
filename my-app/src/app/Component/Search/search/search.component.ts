import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() inputText: EventEmitter<string> = new EventEmitter<string>();

  cityName?:string;

getsearchText(){
  this.inputText.emit(this.cityName);
  this.cityName ='';
}

}
