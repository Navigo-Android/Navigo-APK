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
    canActivate: [AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'artigos/python',
    loadChildren: () => import('./artigos/python/python.module').then(m => m.PythonPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'artigos/java',
    loadChildren: () => import('./artigos/java/java.module').then(m => m.JavaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'artigos/javascript',
    loadChildren: () => import('./artigos/javascript/javascript.module').then(m => m.JavaScriptPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mapa/map-python',
    loadChildren: () => import('./mapa/map-python/map-python.module').then(m => m.MapPythonPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profissoes/pfpython',
    loadChildren: () => import('./profissoes/pfpython/pfpython.module').then(m => m.PfpythonPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'map-java',
    loadChildren: () => import('./mapa/map-java/map-java.module').then( m => m.MapJavaPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-js',
    loadChildren: () => import('./mapa/map-js/map-js.module').then( m => m.MapJsPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-c',
    loadChildren: () => import('./mapa/map-c/map-c.module').then( m => m.MapCPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-php',
    loadChildren: () => import('./mapa/map-php/map-php.module').then( m => m.MapPhpPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-typescript',
    loadChildren: () => import('./mapa/map-typescript/map-typescript.module').then( m => m.MapTypescriptPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-css',
    loadChildren: () => import('./mapa/map-css/map-css.module').then( m => m.MapCssPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-react',
    loadChildren: () => import('./mapa/map-react/map-react.module').then( m => m.MapReactPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-django',
    loadChildren: () => import('./mapa/map-django/map-django.module').then( m => m.MapDjangoPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-bootstrap',
    loadChildren: () => import('./mapa/map-bootstrap/map-bootstrap.module').then( m => m.MapBootstrapPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-flash',
    loadChildren: () => import('./mapa/map-flask/map-flash.module').then( m => m.MapFlashPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-vue',
    loadChildren: () => import('./mapa/map-vue/map-vue.module').then( m => m.MapVuePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-angular',
    loadChildren: () => import('./mapa/map-angular/map-angular.module').then( m => m.MapAngularPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-mysql',
    loadChildren: () => import('./mapa/map-mysql/map-mysql.module').then( m => m.MapMysqlPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-oracle',
    loadChildren: () => import('./mapa/map-oracle/map-oracle.module').then( m => m.MapOraclePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-firebase',
    loadChildren: () => import('./mapa/map-firebase/map-firebase.module').then( m => m.MapFirebasePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-ai',
    loadChildren: () => import('./mapa/map-ai/map-ai.module').then( m => m.MapAIPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'map-security',
    loadChildren: () => import('./mapa/map-security/map-security.module').then( m => m.MapSecurityPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'c',
    loadChildren: () => import('./artigos/c/c.module').then( m => m.CPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'typescript',
    loadChildren: () => import('./artigos/typescript/typescript.module').then( m => m.TypescriptPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'css',
    loadChildren: () => import('./artigos/css/css.module').then( m => m.CssPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'react',
    loadChildren: () => import('./artigos/react/react.module').then( m => m.ReactPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'django',
    loadChildren: () => import('./artigos/django/django.module').then( m => m.DjangoPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./artigos/bootstrap/bootstrap.module').then( m => m.BootstrapPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'flash',
    loadChildren: () => import('./artigos/flash/flash.module').then( m => m.FlashPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'vue',
    loadChildren: () => import('./artigos/vue/vue.module').then( m => m.VuePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'angular',
    loadChildren: () => import('./artigos/angular/angular.module').then( m => m.AngularPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'mysql',
    loadChildren: () => import('./artigos/mysql/mysql.module').then( m => m.MysqlPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'oracle',
    loadChildren: () => import('./artigos/oracle/oracle.module').then( m => m.OraclePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'firebase',
    loadChildren: () => import('./artigos/firebase/firebase.module').then( m => m.FirebasePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'ai',
    loadChildren: () => import('./artigos/ai/ai.module').then( m => m.AIPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'security',
    loadChildren: () => import('./artigos/security/security.module').then( m => m.SecurityPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfjavascript',
    loadChildren: () => import('./profissoes/pfjavascript/pfjavascript.module').then( m => m.PfjavascriptPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfjava',
    loadChildren: () => import('./profissoes/pfjava/pfjava.module').then( m => m.PfjavaPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfc',
    loadChildren: () => import('./profissoes/pfc/pfc.module').then( m => m.PfcPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfphp',
    loadChildren: () => import('./profissoes/pfphp/pfphp.module').then( m => m.PfphpPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pftypescript',
    loadChildren: () => import('./profissoes/pftypescript/pftypescript.module').then( m => m.PftypescriptPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfcss',
    loadChildren: () => import('./profissoes/pfcss/pfcss.module').then( m => m.PfcssPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfreact',
    loadChildren: () => import('./profissoes/pfreact/pfreact.module').then( m => m.PfreactPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfdjango',
    loadChildren: () => import('./profissoes/pfdjango/pfdjango.module').then( m => m.PfdjangoPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfbootstrap',
    loadChildren: () => import('./profissoes/pfbootstrap/pfbootstrap.module').then( m => m.PfbootstrapPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfflash',
    loadChildren: () => import('./profissoes/pfflash/pfflash.module').then( m => m.PfflashPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfvue',
    loadChildren: () => import('./profissoes/pfvue/pfvue.module').then( m => m.PfvuePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfangular',
    loadChildren: () => import('./profissoes/pfangular/pfangular.module').then( m => m.PfangularPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfmysql',
    loadChildren: () => import('./profissoes/pfmysql/pfmysql.module').then( m => m.PfmysqlPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pforacle',
    loadChildren: () => import('./profissoes/pforacle/pforacle.module').then( m => m.PforaclePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pffirebase',
    loadChildren: () => import('./profissoes/pffirebase/pffirebase.module').then( m => m.PffirebasePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfai',
    loadChildren: () => import('./profissoes/pfai/pfai.module').then( m => m.PfaiPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'pfsecurity',
    loadChildren: () => import('./profissoes/pfsecurity/pfsecurity.module').then( m => m.PfsecurityPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    redirectTo: 'user/login', // Redireciona rotas inválidas para login
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
