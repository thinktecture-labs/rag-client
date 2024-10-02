import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Client } from '@langchain/langgraph-sdk';
import { NavComponent } from './nav/nav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'ng-days-langgraph';

    constructor() {
        this.fn();
    }

    async fn() {
    }
}
