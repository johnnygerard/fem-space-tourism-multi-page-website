import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let title = this.buildTitle(snapshot);

    if (title !== undefined) {
      title += ' | Space tourism | Frontend Mentor';
      this.title.setTitle(title);
    }
  }
}
