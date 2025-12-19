import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@sunbird/shared';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: false
})
export class LandingPageComponent implements OnInit {

  layoutConfiguration;

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
  }

}
