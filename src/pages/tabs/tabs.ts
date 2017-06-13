import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { FeedRoot } from '../pages';
import { ChannelRoot } from '../pages';
import { SettingsRoot } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  feedRoot: any = FeedRoot;
  channelRoot: any = ChannelRoot;
  settingsRoot: any = SettingsRoot;

  feedRootTitle = " ";
  channelRootTitle = " ";
  settingsRootTitle = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['FEED_ROOT_TITLE', 'CHANNEL_ROOT_TITLE', 'SETTINGS_ROOT_TITLE']).subscribe(values => {
      this.feedRootTitle = values['FEED_ROOT_TITLE'];
      this.channelRootTitle = values['CHANNEL_ROOT_TITLE'];
      this.settingsRootTitle = values['SETTINGS_ROOT_TITLE'];
    });
  }
}
