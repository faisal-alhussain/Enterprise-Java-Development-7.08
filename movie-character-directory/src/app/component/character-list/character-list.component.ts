// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.http.get<any[]>('https://ih-crud-api.herokuapp.com/characters').subscribe((data) => {
      this.characters = data;
    });
  }

  onCharacterClick(id: string): void {
    this.router.navigate(['/character', id]);
  }
}
