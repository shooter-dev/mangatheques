import { Component, Input, ViewChild, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
  selector: 'accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {
  @ViewChild('wrapper', {read: ElementRef}) wrapper;
  @Input('expanded') expanded;
  @Input('height') height;

  constructor(public renderer: Renderer) { }

  ngOnInit() {}
  ngAfterViewInit() {
    if(this.height) {
      this.renderer.setElementStyle(this.wrapper.nativeElement, 'height', this.height + 'px');
    }
  }
}
