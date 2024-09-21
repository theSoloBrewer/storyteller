import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuItem } from '../menu-item';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: "About",
      icon: "help",
    },
    {
      label: "Pricing",
      icon: "attach_money",
    },
    {
      label: "Docs",
      icon: "notes",
    },
    {
      label: "Showcase",
      icon: "slideshow",
    },
    {
      label: "Blog",
      icon: "rss_feed",
    },
  ];

  constructor(private router: Router) { };
  goToAboutUs() {
    this.router.navigate(['/about', 'aboutUs']);
  }
}
