import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  deleteCharacter: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<any>(`https://ih-crud-api.herokuapp.com/characters/${id}`).subscribe((data) => {
        this.character = data;
      });
    }
  }

  onDeleteClick(): void {
    if (this.character && this.character._id) {
      // Emit event to notify the parent (character-list) component
      this.deleteCharacter.emit(this.character._id);
    }
  }
}