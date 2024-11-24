import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Rotas públicas
  {
    path: 'user/login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'user/registro',
    loadChildren: () => import('./user/registro/registro.module').then(m => m.RegistroPageModule),
  },
  {
    path: 'user/password',
    loadChildren: () =>
      import('./user/password/password.module').then(m => m.PasswordPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'artigos/python',
    loadChildren: () => import('./artigos/python/python.module').then(m => m.PythonPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/java',
    loadChildren: () => import('./artigos/java/java.module').then(m => m.JavaPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/javascript',
    loadChildren: () => import('./artigos/javascript/javascript.module').then(m => m.JavaScriptPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-python',
    loadChildren: () => import('./mapa/map-python/map-python.module').then(m => m.MapPythonPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfpython',
    loadChildren: () => import('./profissoes/pfpython/pfpython.module').then(m => m.PfpythonPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-java',
    loadChildren: () => import('./mapa/map-java/map-java.module').then(m => m.MapJavaPageModule),
    canActivate: [AuthGuard],
  },  
  {
    path: 'mapa/map-js',
    loadChildren: () => import('./mapa/map-js/map-js.module').then(m => m.MapJsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mapa/map-c',
    loadChildren: () => import('./mapa/map-c/map-c.module').then(m => m.MapCPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-php',
    loadChildren: () => import('./mapa/map-php/map-php.module').then(m => m.MapPhpPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-typescript',
    loadChildren: () => import('./mapa/map-typescript/map-typescript.module').then(m => m.MapTypescriptPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-css',
    loadChildren: () => import('./mapa/map-css/map-css.module').then(m => m.MapCssPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-react',
    loadChildren: () => import('./mapa/map-react/map-react.module').then(m => m.MapReactPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-django',
    loadChildren: () => import('./mapa/map-django/map-django.module').then(m => m.MapDjangoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-bootstrap',
    loadChildren: () => import('./mapa/map-bootstrap/map-bootstrap.module').then(m => m.MapBootstrapPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-vue',
    loadChildren: () => import('./mapa/map-vue/map-vue.module').then(m => m.MapVuePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-angular',
    loadChildren: () => import('./mapa/map-angular/map-angular.module').then(m => m.MapAngularPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-mysql',
    loadChildren: () => import('./mapa/map-mysql/map-mysql.module').then(m => m.MapMysqlPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-flask',
    loadChildren: () => import('./mapa/map-flask/map-flask.module').then(m => m.MapFlaskPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-oracle',
    loadChildren: () => import('./mapa/map-oracle/map-oracle.module').then(m => m.MapOraclePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-firebase',
    loadChildren: () => import('./mapa/map-firebase/map-firebase.module').then(m => m.MapFirebasePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-ionic',
    loadChildren: () => import('./mapa/map-ionic/map-ionic.module').then(m => m.MapIonicPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-ai',
    loadChildren: () => import('./mapa/map-ai/map-ai.module').then(m => m.MapAIPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mapa/map-security',
    loadChildren: () => import('./mapa/map-security/map-security.module').then(m => m.MapSecurityPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/c',
    loadChildren: () => import('./artigos/c/c.module').then(m => m.CPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/typescript',
    loadChildren: () => import('./artigos/typescript/typescript.module').then(m => m.TypescriptPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/css',
    loadChildren: () => import('./artigos/css/css.module').then(m => m.CssPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/php',
    loadChildren: () => import('./artigos/php/php.module').then(m => m.PhpPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/react',
    loadChildren: () => import('./artigos/react/react.module').then(m => m.ReactPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/Django',
    loadChildren: () => import('./artigos/django/django.module').then(m => m.DjangoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/bootstrap',
    loadChildren: () => import('./artigos/bootstrap/bootstrap.module').then(m => m.BootstrapPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/vue',
    loadChildren: () => import('./artigos/vue/vue.module').then(m => m.VuePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/angular',
    loadChildren: () => import('./artigos/angular/angular.module').then(m => m.AngularPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/flask',
    loadChildren: () => import('./artigos/flask/flask.module').then(m => m.FlaskPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/ionic',
    loadChildren: () => import('./artigos/ionic/ionic.module').then(m => m.IonicPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/mysql',
    loadChildren: () => import('./artigos/mysql/mysql.module').then(m => m.MysqlPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/oracle',
    loadChildren: () => import('./artigos/oracle/oracle.module').then(m => m.OraclePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/firebase',
    loadChildren: () => import('./artigos/firebase/firebase.module').then(m => m.FirebasePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/ai',
    loadChildren: () => import('./artigos/ai/ai.module').then(m => m.AIPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artigos/security',
    loadChildren: () => import('./artigos/security/security.module').then(m => m.SecurityPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfjavascript',
    loadChildren: () => import('./profissoes/pfjavascript/pfjavascript.module').then(m => m.PfjavascriptPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfjava',
    loadChildren: () => import('./profissoes/pfjava/pfjava.module').then(m => m.PfjavaPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfc',
    loadChildren: () => import('./profissoes/pfc/pfc.module').then(m => m.PfcPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfflask',
    loadChildren: () => import('./profissoes/pfflask/pfflask.module').then(m => m.PfflaskPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfionic',
    loadChildren: () => import('./profissoes/pfionic/pfionic.module').then(m => m.PfionicPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfphp',
    loadChildren: () => import('./profissoes/pfphp/pfphp.module').then(m => m.PfphpPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pftypescript',
    loadChildren: () => import('./profissoes/pftypescript/pftypescript.module').then(m => m.PftypescriptPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfcss',
    loadChildren: () => import('./profissoes/pfcss/pfcss.module').then(m => m.PfcssPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfreact',
    loadChildren: () => import('./profissoes/pfreact/pfreact.module').then(m => m.PfreactPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfdjango',
    loadChildren: () => import('./profissoes/pfdjango/pfdjango.module').then(m => m.PfdjangoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfbootstrap',
    loadChildren: () => import('./profissoes/pfbootstrap/pfbootstrap.module').then(m => m.PfbootstrapPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfvue',
    loadChildren: () => import('./profissoes/pfvue/pfvue.module').then(m => m.PfvuePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfangular',
    loadChildren: () => import('./profissoes/pfangular/pfangular.module').then(m => m.PfangularPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfmysql',
    loadChildren: () => import('./profissoes/pfmysql/pfmysql.module').then(m => m.PfmysqlPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pforacle',
    loadChildren: () => import('./profissoes/pforacle/pforacle.module').then(m => m.PforaclePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pffirebase',
    loadChildren: () => import('./profissoes/pffirebase/pffirebase.module').then(m => m.PffirebasePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfai',
    loadChildren: () => import('./profissoes/pfai/pfai.module').then(m => m.PfaiPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profissoes/pfsecurity',
    loadChildren: () => import('./profissoes/pfsecurity/pfsecurity.module').then(m => m.PfsecurityPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'php',
    loadChildren: () => import('./artigos/php/php.module').then( m => m.PhpPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
