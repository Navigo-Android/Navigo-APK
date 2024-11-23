import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map-mysql.page.html',
  styleUrls: ['./map-mysql.page.scss'],
})
export class MapMysqlPage implements OnInit {

  openFullscreen(event: Event) {
    const elem = event.target as HTMLImageElement;
    const anyElem = elem as any;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (anyElem.webkitRequestFullscreen) {
      anyElem.webkitRequestFullscreen();
    } else if (anyElem.msRequestFullscreen) {
      anyElem.msRequestFullscreen();
    }


    document.addEventListener('fullscreenchange', this.exitHandler.bind(this));
  }

  exitHandler() {

    if (!document.fullscreenElement) {
      console.log("Saindo do fullscreen");


      document.removeEventListener('fullscreenchange', this.exitHandler.bind(this));
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
