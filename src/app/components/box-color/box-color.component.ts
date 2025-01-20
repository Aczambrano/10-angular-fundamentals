import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.scss']
})
export class BoxColorComponent implements AfterViewInit {

  @ViewChild('colorCard') colorCard!: ElementRef;
  @ViewChild('colorCanvas') colorCanvas!: ElementRef;

  private ctx!: CanvasRenderingContext2D;
  private size: number = 300;

  ngAfterViewInit(): void {
    const canvas = this.colorCanvas.nativeElement as HTMLCanvasElement;

    this.ctx = canvas.getContext('2d')!;
    
    canvas.width = this.size;
    canvas.height = this.size;

    this.drawColorWheel();
  }

  private drawColorWheel(): void {
    const radius = this.size / 2;

    for (let i = 0; i < 360; i++) {
      const startAngle = (i * Math.PI) / 180;
      const endAngle = ((i + 1) * Math.PI) / 180;

      const gradient = this.ctx.createRadialGradient(
        radius,
        radius,
        0,
        radius,
        radius,
        radius
      );
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, `hsl(${i}, 100%, 50%)`);

      this.ctx.beginPath();
      this.ctx.moveTo(radius, radius);
      this.ctx.arc(radius, radius, radius, startAngle, endAngle);
      this.ctx.closePath();
      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    }

    this.ctx.beginPath();
    this.ctx.arc(radius, radius, radius * 0.25, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fillStyle = "white";
    this.ctx.fill();
  }

  onCanvasClick(event: MouseEvent): void {
    const canvas = this.colorCanvas.nativeElement as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pixel = this.ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = pixel;

    if (a > 0) {
      const color = `rgb(${r}, ${g}, ${b})`;
      this.colorCard.nativeElement.style.backgroundColor = color;
    }
  }
}
