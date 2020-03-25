import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser,
              private toast: Toast) { }

  ngOnInit() {
    this.openPage('https://time8.in');
  }



  openPage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      toolbartranslucent: 'yes',
      fullscreen: 'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      hardwareback: 'yes',
      allowInlineMediaPlayback: 'no',
      hidden: 'no',
      hidenavigationbuttons: 'yes',
      disallowoverscroll: 'yes',
      presentationstyle: 'fullscreen',
      hidespinner: 'yes',
      footer: 'yes'
    }

    const browser = this.iab.create(url, '_self', options);

    browser.on('loadstop').subscribe(event => {
      this.toast.show(`Page loaded!`, '5000', 'buttom').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });

  }

  ionViewDidEnter() {

  }

}
