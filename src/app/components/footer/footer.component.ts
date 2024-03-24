import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      state('collapsed', style({
        height: '0',
        opacity: 0
      })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out'))
    ])
  ]
})
export class FooterComponent implements OnInit{
  constructor(private sanitizer: DomSanitizer){}
  items: any[] = [
    { label: 'Item 0', expanded: false },
    { label: 'item1', expanded: true },
    { label: 'Item 2', expanded: false },
    { label: 'Item 3', expanded: false },
    { label: 'Item 4', expanded: false },
  ];
  selectedItem: string | null = null;
  sanitizedLabels: SafeHtml[] = [];



  ngOnInit(): void {
    this.sanitizedLabels = this.items.map(item => this.sanitizer.bypassSecurityTrustHtml(item.label));
  }

  selectItem(item: string) {
    if (this.selectedItem === item) {
      this.selectedItem = null; 
    } else {
      this.selectedItem = item;
    }
  }

  toggleItemExpansion(item: any) {
    this.items = this.items.map(i => ({ ...i, expanded: i === item ? !i.expanded : false }));
  }
}
