import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map-python.page.html',
  styleUrls: ['./map-python.page.scss'],
})
export class MapPythonPage implements OnInit {

  openFullscreen(event: Event) {
    const elem = event.target as HTMLImageElement; // Verifica que é uma imagem
    const anyElem = elem as any; // Usado para métodos legados

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (anyElem.webkitRequestFullscreen) { /* Safari legado */
      anyElem.webkitRequestFullscreen();
    } else if (anyElem.msRequestFullscreen) { /* IE11 legado */
      anyElem.msRequestFullscreen();
    }

    // Adiciona listener para detectar quando o usuário sai do fullscreen
    document.addEventListener('fullscreenchange', this.exitHandler.bind(this));
  }

  exitHandler() {
    // Verifica se o documento ainda está em fullscreen
    if (!document.fullscreenElement) {
      console.log("Saindo do fullscreen");

      // Remove os event listeners ao sair do fullscreen
      document.removeEventListener('fullscreenchange', this.exitHandler.bind(this));
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
