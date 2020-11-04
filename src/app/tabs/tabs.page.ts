import { Component } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  public homePath = "./home-pages/home/home.module#HomePageModule"
  subscribe: any;
  constructor(
    public shared: SharedDataService,
    public config: ConfigService,
    public navCtrl: NavController,
    public platform: Platform,) {

  }

  showImg() {
    if (this.config.defaultIcons == true) return false;
    else return true;
  }
  ionChange(appTabs) {
    this.config.currentRoute = "tabs/" + appTabs.getSelected();
    //console.log(this.config.currentRoute);
    if (this.shared.customerData.id == null && this.config.currentRoute == 'tabs/cart') {
      this.navCtrl.navigateForward("/tabs/cart");
    }
  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
    this.subscribe = this.platform.backButton.subscribe(() => {
      if (window.confirm("Do you want to exit?")) {
        navigator['app'].exitApp();
      }
    });
  }
  ionViewWillLeave() {
    this.subscribe.unsubscribe();
  }

}
