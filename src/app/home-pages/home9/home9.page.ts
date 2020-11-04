import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NavController,
  IonContent,
  IonInfiniteScroll,
  Platform, IonRouterOutlet
} from "@ionic/angular";
import { ConfigService } from "src/providers/config/config.service";
import { SharedDataService } from "src/providers/shared-data/shared-data.service";
import { AppEventsService } from "src/providers/app-events/app-events.service";



@Component({
  selector: "app-home9",
  templateUrl: "./home9.page.html",
  styleUrls: ["./home9.page.scss"],
})
export class Home9Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  segments = "topSeller"; //first segment by default
  scrollTopButton = false; //for scroll down fab
  //for product slider after banner
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0,
  };

  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  farmproducts: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  biscuitproducts: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  confectionaryproducts: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  bakingproducts: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  page = 1;
  subscribe: any;

  constructor(
    public nav: NavController,
    public config: ConfigService,
    public appEventsService: AppEventsService,
    public shared: SharedDataService,
    public platform: Platform,
    public routerOutlet: IonRouterOutlet,

  ) {
    // this.subscribe = this.platform.backButton.subscribeWithPriority(-1, () => {
    //   if (!this.routerOutlet.canGoBack()) {

    //     navigator["app"].exitApp();


    //   }
    // }
    // );



  }
  doRefresh(event) {
    //console.log('Begin async operation');
    //this.ngOnInit();

    setTimeout(() => {
      //   console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
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

  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  openProducts(value) {
    this.nav.navigateForward(
      this.config.currentRoute + "/products/0/0/" + value
    );
  }
  openCategoryPage() {
    this.appEventsService.publish("openCategoryPage", "");
  }
  openSubCategories(parent) {
    this.nav.navigateForward(
      this.config.currentRoute +
      "/products/" +
      parent +
      "/" +
      parent +
      "/newest"
    );
    // console.log(parent);
  }
  getProducts() {
    let query = "products?" + "page=" + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments;
    if (this.page == 1) {
      this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    this.config.getWoo(query).then((data: any) => {
      let dat = data;
      this.infinite.complete();
      if (this.page == 1) {
        this.products = new Array();
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.products.push(value);
        }
      }
      if (dat.length < 10) {
        this.infinite.disabled = true;
      }
    });
  }
  getFarm() {
    let query = "products?category=" + 16 + "?" + "page=" + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments;
    if (this.page == 1) {
      this.farmproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    this.config.getWoo(query).then((data: any) => {
      let dat = data;
      console.log("Farm", data);
      this.infinite.complete();
      if (this.page == 1) {
        this.farmproducts = new Array();
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.farmproducts.push(value);
        }
      }
      if (dat.length < 10) {
        this.infinite.disabled = true;
      }
    });
  }
  getBiscuit() {
    let query = "products?category=" + 35 + "?" + "page=" + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments;
    if (this.page == 1) {
      this.biscuitproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    this.config.getWoo(query).then((data: any) => {
      let dat = data;
      console.log("Biscuit", data);
      this.infinite.complete();
      if (this.page == 1) {
        this.biscuitproducts = new Array();
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.biscuitproducts.push(value);
        }
      }
      if (dat.length < 10) {
        this.infinite.disabled = true;
      }
    });
  }
  getConfec() {
    let query = "products?category=" + 34 + "?" + "page=" + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments;
    if (this.page == 1) {
      this.confectionaryproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    this.config.getWoo(query).then((data: any) => {
      let dat = data;
      console.log("Confec", data);
      this.infinite.complete();
      if (this.page == 1) {
        this.confectionaryproducts = new Array();
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.confectionaryproducts.push(value);
        }
      }
      if (dat.length < 10) {
        this.infinite.disabled = true;
      }
    });
  }
  getBaking() {
    let query = "products?category=" + 32 + "?" + "page=" + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments;
    if (this.page == 1) {
      this.bakingproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    this.config.getWoo(query).then((data: any) => {
      let dat = data;
      console.log("Baking", data);
      this.infinite.complete();
      if (this.page == 1) {
        this.bakingproducts = new Array();
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.bakingproducts.push(value);
        }
      }
      if (dat.length < 10) {
        this.infinite.disabled = true;
      }
    });
  }
  ngOnInit() {
    this.getProducts();
  }
  ionViewWillEnter() {
    this.config.setCardStyle("14");
  }
}
