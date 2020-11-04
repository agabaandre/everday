import { Component, OnInit, ViewChild } from "@angular/core";

import {
  NavController,
  IonContent,
  IonSlides,
  IonInfiniteScroll,
} from "@ionic/angular";
import { ConfigService } from "src/providers/config/config.service";
import { SharedDataService } from "src/providers/shared-data/shared-data.service";
import { AppEventsService } from "src/providers/app-events/app-events.service";

@Component({
  selector: "app-home7",
  templateUrl: "./home7.page.html",
  styleUrls: ["./home7.page.scss"],
})
export class Home7Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild("recentSlider", { static: false }) slider: IonSlides;
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
  myfarms: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public appEventsService: AppEventsService
  ) {}

  ionViewDidEnter() {
    this.shared.hideSplashScreen();
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

  // async getProducts() {
  //   let data = {
  //     confectionaryproducts: 63,
  //     farmproducts: 62,
  //     biscuitproducts: 60,
  //     bakingproducts: 61,
  //     products: 0,
  //   };

  //   let dataValues = Object.values(data);
  //   let dataKeys = Object.keys(data);

  //   let farmProduceQueries = dataValues.map((value) => {
  //     let query = "products?category=" + value + "?" + "page=" + this.page;
  //     query = query + "&status=publish" + "&" + this.config.productsArguments;
  //     return query;
  //   });

  //   for (let index = 0; index < farmProduceQueries.length; index++) {
  //     const query = farmProduceQueries[index];

  //     let data: any = await this.config.getWoo(query);

  //     if (this.page == 1) {
  //       this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //       this.farmproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //       this.biscuitproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //       this.confectionaryproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //       this.bakingproducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //     }
  //     this.infinite.complete();
  //     if (this.page == 1) {
  //       this.biscuitproducts = new Array();
  //       this.confectionaryproducts = new Array();
  //       this.farmproducts = new Array();
  //       this.bakingproducts = new Array();
  //       this.products = new Array();
  //     }
  //     if (data.length != 0) {
  //       this.page++;
  //       for (let value of data) {
  //         if (dataKeys[index] === "biscuitproducts") {
  //           // this.infinite.complete();
  //           this.biscuitproducts.push(value);
  //         } else if (dataKeys[index] === "farmproducts") {
  //           // this.infinite.complete();
  //           this.farmproducts.push(value);
  //         } else if (dataKeys[index] === "bakingproducts") {
  //           // this.infinite.complete();
  //           this.bakingproducts.push(value);
  //         } else if (dataKeys[index] === "confectionaryproducts") {
  //           // this.infinite.complete();
  //           this.confectionaryproducts.push(value);
  //         } else {
  //           this.infinite.complete();
  //           this.products.push(value);
  //         }
  //       }
  //     }
  //     if (data.length < 10) {
  //       this.infinite.disabled = true;
  //     }
  //   }
  // }

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
    let query = "products?category=" + 62 + "?" + "page=" + this.page;
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
    let query = "products?category=" + 60 + "?" + "page=" + this.page;
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
    let query = "products?category=" + 63 + "?" + "page=" + this.page;
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
    let query = "products?category=" + 61 + "?" + "page=" + this.page;
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
  openCategoryPage() {
    this.appEventsService.publish("openCategoryPage", "");
  }

  ngOnInit() {
    this.getProducts();
  }
  ionViewWillEnter() {
    this.config.setCardStyle("15");
  }
}
