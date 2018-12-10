import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ConstantsService, StringGenerator10 } from '../../../core/core.module';
import { ConfigOptionsService } from '../../../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutApp;
  userId;
  user;

  constructor(
    @Inject(ConstantsService) private aboutAppService,
    @Inject(StringGenerator10) private userIDGeneratorService,
    @Optional() private config: ConfigOptionsService
  ) {}

  ngOnInit() {
    this.aboutApp = this.aboutAppService;
    this.userId = this.userIDGeneratorService;
    this.user = this.config.getConfigOption();
  }
}
