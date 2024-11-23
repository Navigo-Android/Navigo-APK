import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('Verificando estado de autenticação...');
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        console.log('Usuário autenticado:', user); // Log do estado do usuário
        if (user) {
          return of(true); // Usuário autenticado, prossegue para a rota.
        } else {
          console.log('Estado do usuário:', user); // Exibe o estado do usuário (null se não autenticado)
          console.log('Acesso negado - Redirecionando para login');
          this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
          return of(false); // Usuário não autenticado, bloqueia o acesso.
        }
      }),
      catchError((error) => {
        console.error('Erro ao verificar autenticação:', error);
        this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
        return of(false); // Em caso de erro, redireciona para login
      })
    );
  }
}
