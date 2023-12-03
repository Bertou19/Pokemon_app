import { Directive } from "@angular/core";

@Directive({
  selector: "[appBorderCard]",
  standalone: true,
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {}
}
