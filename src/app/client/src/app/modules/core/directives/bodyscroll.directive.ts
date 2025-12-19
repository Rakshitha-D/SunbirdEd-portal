import {Directive, AfterViewInit, OnDestroy} from '@angular/core';

@Directive({
    selector: '[appBodyScroll]',
    standalone: false
})
export class BodyScrollDirective implements AfterViewInit, OnDestroy {

  ngAfterViewInit(): void {
    document.getElementsByTagName('body')[0].classList.add('o-y-hide');
  }
  ngOnDestroy(): void {
    document.getElementsByTagName('body')[0].classList.remove('o-y-hide');
  }

}
