import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { IonContent, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit, OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  isPasswordVisible: boolean = false;
  user: any = {};

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadUserData();
  }

  ngAfterViewInit() {

  }

  // Carrega os dados do usuário do Firestore
  async loadUserData() {
    const user = await this.afAuth.currentUser;
    if (user) {
      const userDoc = this.firestore.collection('users').doc(user.uid);
      userDoc.valueChanges().subscribe((data: any) => {
        this.user = data;
      });
    } else {
      this.showToast('Nenhum usuário logado encontrado.', 2000);
    }
  }

  // Atualiza os dados do usuário no Firestore
  async updateProfile() {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        // Atualiza os dados no Firestore
        const userDoc = this.firestore.collection('users').doc(user.uid);
        await userDoc.update(this.user);
        this.showToast('Perfil atualizado!', 4000);

        // Atualiza a senha no Firebase Authentication
        if (this.user.password && this.user.password !== '') {
          await user.updatePassword(this.user.password);
          
        }
      } else {
        this.showToast('Nenhum usuário logado para atualizar o perfil.', 2000);
      }
    } catch (error: any) {
      console.error('Erro ao atualizar perfil:', error);
      this.showToast(
        `Erro ao atualizar o perfil: ${error.message || 'Erro desconhecido.'}`,
        3000
      );
    }
  }

  formatTelefone() {
    if (this.user.celular) {

      let telefone = this.user.celular.replace(/\D/g, '');

      if (telefone.length > 10) {
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
      } else if (telefone.length > 6) {
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      } else if (telefone.length > 2) {
        telefone = telefone.replace(/^(\d{2})(\d{0,4}).*/, '($1) $2');
      } else {
        telefone = telefone.replace(/^(\d{0,2}).*/, '($1');
      }
  
      this.user.celular = telefone;
    }
  }
  

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.showToast('Logout realizado com sucesso!', 2000);
      this.router.navigate(['/user/login']);
    } catch (error: any) {
      console.error('Erro ao fazer logout:', error);
      this.showToast(
        `Erro ao fazer logout: ${error.message || 'Erro desconhecido.'}`,
        3000
      );
    }
  }

 
  async showToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom',
    });
    toast.present();
  }
}
