import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;
  constructor() {}

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.getStorageTheme();
  }

  getStorageTheme() {
    const url =
      localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }
  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url); // guardando el tema en el localStorage
    console.log(this.linkTheme);
    this.checkCurrentTheme();
  }
  checkCurrentTheme() {
    this.links.forEach((ele) => {
      ele.classList.remove('working'); // borrando la clase working de los li
      const btnTheme = ele.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if (btnUrl === currentTheme) {
        // Si el btn seleccionado es igual
        ele.classList.add('working');
      }
    });
    console.log(this.links);
  }
}
