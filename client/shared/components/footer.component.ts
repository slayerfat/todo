import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<footer class="text-center">
  <div class="row align-center">
    <div class="column small-8">
      <i class="fa fa-copyright"></i>
      <a href="http://twitter.com/slayerfat">slayerfat</a>
    </div>
  </div>
  <div class="row align-center">
    <div class="column small-8">
      <i class="fa fa-github"></i>
      <a href="https://github.com/slayerfat/todo/tree/angular-2-rc4-meteor">
        Source code
      </a>
    </div>
  </div>
</footer>`,
  styles: [`footer {padding: 2rem;}`]
})
export class FooterComponent {
  //
}
