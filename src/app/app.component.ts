import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './sass/styles.scss'
  ]
})
export class AppComponent {
  menuItems:Array<object> = [
    {path:"",name:"Home"},
    {path:"about",name:"About"},
    {path:"services",name:"Services"},
    {path:"contact",name:"Contact"}
  ];
  title = 'babysitting';
}
