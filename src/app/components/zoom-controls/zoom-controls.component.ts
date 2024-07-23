import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-zoom', // Este é o seletor que você usa no HTML
  standalone: true,
  templateUrl: './zoom-controls.component.html',
  styleUrls: ['./zoom-controls.component.scss']
})


export class ZoomControlsComponent {
  zoomFactor: number = 100; // Valor inicial do zoom em porcentagem.

  zoomIn(): void {
    this.zoomFactor += 10; // Aumenta o zoom em 10%
    (document.documentElement.style as any).zoom = `${this.zoomFactor}%`;
  }

  zoomOut(): void {
    this.zoomFactor -= 10; // Diminui o zoom em 10%
    (document.documentElement.style as any).zoom = `${this.zoomFactor}%`;
  }
}
``
