import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class NavbarComponent {
  navbar: string = "This is the website of Devtown and this is the Navbar";
}
