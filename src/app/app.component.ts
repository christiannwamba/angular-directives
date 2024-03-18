import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DimensionsDirective } from './dimensions.directive';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { DebugDirective } from './debug.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    DimensionsDirective,
    DebugDirective,
    WelcomeMessageComponent,
  ],
  encapsulation: ViewEncapsulation.None,

  template: `
    <main>
      <!-- Structural directives -->
      <!-- <h1 [innerHTML]="'<p>abeisoisis</p>'"></h1>
      <div *ngIf="isHappy; then happyTemplate; else sadTemplate">
        <h1>investing machines</h1>
      </div>
      <ng-template [ngIf]="!isHappy" [ngIfElse]="happyTemplate"></ng-template> -->

      <ng-template #profile let-name="name" let-userAge="age">
        <p>My name is {{ name }}</p>
        <p>I am {{ userAge }} years old</p>
      </ng-template>

      <h1>some dummy h1</h1>

      <ng-container
        *ngTemplateOutlet="profile; context: { name: 'Benzo', age: '56' }"
      ></ng-container>

      <ng-container
        *ngTemplateOutlet="profile; context: { name: 'Bilkisu', age: '26' }"
      ></ng-container>

      <!-- <ng-template #happyTemplate>
        <h1>yaay! am happy ouu la laah!</h1>
      </ng-template>

      <ng-template #sadTemplate>
        <h1>wayoo! am sad</h1>
      </ng-template>

      <ng-template [ngIf]="isHappy" [ngIfElse]="sadTemplate">
        <h2>owam</h2>
      </ng-template>

      <ng-container *ngIf="isAlive; else isDead">
        <p>
          this is paragraph that will show if isAlive is truthy! like rukieee
        </p>
      </ng-container>

      <ng-template #isDead>
        <h1>sth died</h1>
      </ng-template>

      <div ngClass="bg_red">
        <h2>this h2 has a red background-color</h2>
      </div>
      <div [class]="isRed ? 'bg_red' : ''">
        <h2>this h2 has a red background-color</h2>
      </div>

      <div [ngClass]="{ bg_red: isRed }">
        <h2>this h2 will have a red background</h2>
      </div>

      <div [ngClass]="{ bg_red: isRed, border_green: borderIsGreen }">
        <h2>this h2 will have a red background-color but not a green border</h2>
      </div>
      <div [ngClass]="['bg_red', 'border_green']">
        <h2>this h2 will have a red background and a green border</h2>
      </div>

      <h1>told me</h1>

      <div [ngStyle]="getStyles()">
        <h2>this h2 will have a red background</h2>
      </div>

      <ng-template #isFine>
        <h1>Fine babbah yayyah</h1>
      </ng-template>

      <li *ngFor="let item of names; let i = index; odd as p">
        {{ i }} {{ item }}
      </li>
      <li *ngFor="let item of profile | keyvalue; let i = index">
        {{ i }} {{ item.key }} {{ item.value }}
      </li>

      <div [ngSwitch]="club">
        <p *ngSwitchCase="'liverpool'">you will never walk alone</p>
        <p *ngSwitchCase="'man city'">the cityzens</p>
        <p *ngSwitchDefault>no club</p>
        <ng-template [ngSwitchCase]="'liverpool'">
          <p>the kop</p>
        </ng-template>
      </div>

      <input type="text" [(ngModel)]="name" />
      {{ name }}
      <input type="text" [ngModel]="name" (ngModelChange)="name = $event" />
      {{ name }}

      <div>
        <h1>welcome abord humans</h1>
      </div>
      <div dimDisplay="pink" debugDir>
        <welcome-message />
      </div> -->

      <div debugDir dimDisplay="red">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi
          facilis libero, quo earum voluptatibus ipsa molestias! Eveniet nobis
          facilis minus, expedita animi nam recusandae? Reiciendis sunt iure
          neque asperiores illum alias hic fugiat laboriosam optio nesciunt iste
          quaerat vitae, assumenda, laudantium repellat. Laudantium laborum
          nesciunt suscipit tenetur eius, nihil inventore cupiditate
          reprehenderit itaque illum. Eius, dolor quaerat ducimus cupiditate
          impedit odit debitis? Quisquam exercitationem ratione cumque non eaque
          dolores? Cupiditate assumenda facilis dignissimos.
        </h1>
      </div>
    </main>
  `,

  styles: `


*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	font-weight: normal;
}


body {
	min-height: 100vh;
	color: var(--color-text);
	background: var(--color-background);
	transition: color 0.5s, background-color 0.5s;
	line-height: 1.6;
	font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
		"Droid Sans", "Helvetica Neue", sans-serif;
	font-size: 15px;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
  body{
  max-width: 800px;
}
  .bg_red{
    background-color: red;
  }
  .border_green{
    border: 3px solid green;
  }


  .box {
  position: relative;
  padding: 0 1.3rem;
}

.box::before {
  content: attr(data-dims);
  position: absolute;
  background-color: green;
  color: white;

  top: 50%;
  left: 102%;
  width: 13rem;
  transform: translateY(-50%);
  padding: 5px;
  border-radius: 5px;
}
  `,
})
export class AppComponent {
  // class binding
  isRed = true;
  borderIsGreen = false;

  isHappy = true;
  isAlive = true;

  //

  names = ['Salah', 'Kelvin'];
  name = '';

  profile = {
    name: 'john Bobo',
    age: 21,
    dob: '5/2/1991',
  };

  setName(v: string) {
    console.log({ v });
    this.name = v;
  }

  club = 'liverpool';

  getStyles() {
    return { border: '2px solid red', backgroundColor: 'green' };
  }
}
