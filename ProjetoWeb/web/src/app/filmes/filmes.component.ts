import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {
  @Input() filmeInput: any;
  // criada a função INPUT chamada itemInput
}
