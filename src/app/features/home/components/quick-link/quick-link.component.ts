import { Component, Input, OnInit } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';

@Component({
  selector: 'dd-quick-link',
  templateUrl: './quick-link.component.html',
})
export class QuickLinkComponent implements OnInit {
  @Input() url: string = '';
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
