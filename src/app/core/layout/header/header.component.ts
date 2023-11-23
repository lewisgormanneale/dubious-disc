import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { title } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CoreModule, CommonModule, RouterLink],
})
export class HeaderComponent {
  menuItems = [
    {
      label: 'Resources',
      options: [
        {
          sectionTitle: 'Databases',
          options: [
            {
              label: 'Pokédex',
              link: '/pokedex',
            },
            {
              label: 'Team Builder',
              link: '/',
            },
          ],
        },
        {
          sectionTitle: 'Tools',
          options: [
            {
              label: 'Team Builder',
              link: '/',
            },
          ],
        },
      ],
    },
    {
      label: 'Games',
      options: [
        {
          sectionTitle: 'Generation IX',
          options: [
            {
              label: 'Pokémon Scarlet & Violet',
              link: '/scarlet-violet',
            },
          ],
        },
        {
          sectionTitle: 'Generation I',
          options: [
            {
              label: 'Pokémon Red & Blue',
              link: '/red-blue',
            },
            {
              label: 'Pokémon Yellow',
              link: '/yellow',
            },
          ],
        },
      ],
    },
    {
      label: 'Other',
      options: [
        {
          sectionTitle: 'Community',
          options: [
            {
              label: 'About/Contact Us',
              link: '/about',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}
}
