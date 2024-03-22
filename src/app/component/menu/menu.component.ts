import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { Apllication } from '../../enum/apllication';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FieldsetModule, FormsModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  value: string = '';
  buttonsEnabled = {sgp: false, eva: false, sempre: false};

  application = Apllication;

  private $btnSempre!: HTMLElement;
  private $btnSGP!: HTMLElement;
  private $btnEVA!: HTMLElement;

  ngOnInit() {
    this.$btnSempre = document.getElementById('btn-sempre') as HTMLElement;
    this.$btnSGP = document.getElementById('btn-sgp') as HTMLElement;
    this.$btnEVA = document.getElementById('btn-eva') as HTMLElement;

    this.$btnSempre.classList.add('menu__button--disabled');
    this.$btnSGP.classList.add('menu__button--disabled');
    this.$btnEVA.classList.add('menu__button--disabled');
  }

  navigate(url: Apllication) {
    this.$btnSempre?.classList.remove('menu__button--selected');
    this.$btnSGP?.classList.remove('menu__button--selected');
    this.$btnEVA?.classList.remove('menu__button--selected');

    switch (url) {
      case Apllication.SEMPRE:
        this.$btnSempre.classList.add('menu__button--selected');
        break;
      case Apllication.SGP:
        this.$btnSGP.classList.add('menu__button--selected');
        break;
      case Apllication.EVA:
        this.$btnEVA.classList.add('menu__button--selected');
        break;
      default:
        this.enableButton([Apllication.SEMPRE, Apllication.SGP, Apllication.EVA]);
        this.value = '';
        break;
    }
  }

  getApplication() {
    return Apllication;
  }

  private enableButton(str: Apllication[]) {
    str.forEach((button: Apllication) => {
      switch (button) {
        case Apllication.SEMPRE:
          this.$btnSempre.classList.remove('menu__button--disabled');
          this.buttonsEnabled.sempre = true;
          // this.$btnSempre.click();
          break;
        case Apllication.SGP:
          this.$btnSGP.classList.remove('menu__button--disabled');
          this.buttonsEnabled.sgp = true;
          break;
        case Apllication.EVA:
          this.$btnEVA.classList.remove('menu__button--disabled');
          this.buttonsEnabled.eva = true;
          break;
        default:
          break;
      }
    });
  }

  private disableButton(str: Apllication[]) {
    str.forEach((button: Apllication) => {
      switch (button) {
        case Apllication.SEMPRE:
          this.$btnSempre.classList.add('menu__button--disabled');
          this.buttonsEnabled.sempre = false;
          break;
        case Apllication.SGP:
          this.$btnSGP.classList.add('menu__button--disabled');
          this.buttonsEnabled.sgp = false;
          break;
        case Apllication.EVA:
          this.$btnEVA.classList.add('menu__button--disabled');
          this.buttonsEnabled.eva = false;
          break;
        default:
          break;
      }
    });
  }
}
