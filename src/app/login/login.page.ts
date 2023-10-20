import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonAvatar, IonModal } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonAvatar, { read: ElementRef }) avatar!: ElementRef<HTMLIonAvatarElement>;

  @ViewChild(IonModal) modal!: IonModal;

  private animation!: Animation;
  constructor(private router: Router,private animationCtrl: AnimationController ,private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl.create()
      .addElement(this.avatar.nativeElement)
      .duration(3000)
      .iterations(2)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)', opacity: '1' },
        { offset: 0.25, transform: 'translateX(100px)', opacity: '0.2' },
        { offset: 0.50, transform: 'translateX(0px)', opacity: '1' },
        { offset: 0.75, transform: 'translateX(-100px)', opacity: '0.2' },
        { offset: 1, transform: 'translateX(0px)', opacity: '1' },
      ])
  }
  playAvatar() {
    this.animation.play();
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }
}


