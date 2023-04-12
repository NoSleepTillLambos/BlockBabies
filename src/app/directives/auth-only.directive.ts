import { Directive,ElementRef,ChangeDetectorRef, Input } from '@angular/core';

@Directive({
  selector: '[appAuthOnly]'
})
export class AuthOnlyDirective {

  // check for verification
  @Input() isVerified: boolean = false;

  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.updateVisibility();
  }

  private updateVisibility() {
    if(this.isVerified) {
      // show elements
      this.el.nativeElement.style.display = ""
    } else {
      // hide
      this.el.nativeElement.style.display = "none"
    }
  }

  ngOnChanges() {

    // detect if there is a change
    this.updateVisibility();
    this.cdRef.detectChanges()

  }

}
