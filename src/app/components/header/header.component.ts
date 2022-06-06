import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }


  ngOnInit(): void {
  }

}
