import { Component, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IntersectionObserverDirective } from 'ngx-intersection-observer';

@Component({
  selector: 'app-scrollfixed',
  templateUrl: './scrollfixed.component.html',
  styleUrls: ['./scrollfixed.component.css']
})
export class ScrollfixedComponent {
  /* @ViewChild('myVideo', { static: true }) myVideo: ElementRef | any;

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const medio = document.querySelector('.medio');
    if (medio) {
      const rect = medio.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        this.renderer.addClass(medio, 'is-visible');
        this.myVideo.nativeElement.play();
      } else {
        this.renderer.removeClass(medio, 'is-visible');
        this.myVideo.nativeElement.pause();
      }
    }
  } */
  @ViewChild('videoContainer') videoContainer: ElementRef | any;
  @ViewChild('myVideo') myVideo: ElementRef | any;

  isVideoInView = false;

  constructor() { }

  ngAfterViewInit() {
    const options = {
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVideoInView = true;
        } else {
          this.isVideoInView = false;
        }
      });
    }, options);

    observer.observe(this.videoContainer.nativeElement);
  }
}
