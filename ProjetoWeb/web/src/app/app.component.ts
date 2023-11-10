import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';
import { HttpService } from 'src/service/HttpService';
import { FilmeService } from 'src/service/FilmeService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'Filmes';
  //filmes = data.desc

  filmes:any

  constructor(private filmesSrv: FilmeService){

  }

  ngOnInit(): void {
    this.bind()
    this.filmes = data.desc
    console.log(this.filmes)
  }

  async bind(){
    const filmes = await this.filmesSrv.GetAll();
    console.log(filmes)
  }

}
