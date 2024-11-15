import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => !!user), // Usuário logado?
      tap((loggedIn) => {
        if (!loggedIn) {
          console.log('Acesso negado - Redirecionando para login');
          this.router.navigate(['/user/login']);
        }
      })
    );
  }
}
