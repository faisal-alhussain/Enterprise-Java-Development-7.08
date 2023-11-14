import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCharacter: any;

  setSelectedCharacter(character: any) {
    this.selectedCharacter = character;
  }
}
