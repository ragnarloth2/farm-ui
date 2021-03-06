import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-carousel-autoplay',
  template: `
    <nz-carousel nzAutoPlay>
      <div nz-carousel-content *ngFor="let index of array">
        <h3>{{ index }}</h3>
      </div>
    </nz-carousel>
  `,
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
        margin-top: 50px;
      }
    `
  ]
})
export class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
}
