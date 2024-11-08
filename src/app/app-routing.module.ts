import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'artigos/python',
    loadChildren: () => import('./artigos/python/python.module').then(m => m.PythonPageModule)
  },
  {
    path: 'artigos/java',
    loadChildren: () => import('./artigos/java/java.module').then(m => m.JavaPageModule)
  },
  {
    path: 'artigos/javascript',
    loadChildren: () => import('./artigos/javascript/javascript.module').then(m => m.JavaScriptPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'mapa/map-python',
    loadChildren: () => import('./mapa/map-python/map-python.module').then(m => m.MapPythonPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule)
  },
  {
    path: 'profissoes/pfpython',
    loadChildren: () => import('./profissoes/pfpython/pfpython.module').then(m => m.PfpythonPageModule)
  },
  {
    path: 'user/login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'user/registro',
    loadChildren: () => import('./user/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'map-java',
    loadChildren: () => import('./mapa/map-java/map-java.module').then( m => m.MapJavaPageModule)
  },
  {
    path: 'map-js',
    loadChildren: () => import('./mapa/map-js/map-js.module').then( m => m.MapJsPageModule)
  },
  {
    path: 'map-c',
    loadChildren: () => import('./mapa/map-c/map-c.module').then( m => m.MapCPageModule)
  },
  {
    path: 'map-php',
    loadChildren: () => import('./mapa/map-php/map-php.module').then( m => m.MapPhpPageModule)
  },
  {
    path: 'map-typescript',
    loadChildren: () => import('./mapa/map-typescript/map-typescript.module').then( m => m.MapTypescriptPageModule)
  },
  {
    path: 'map-css',
    loadChildren: () => import('./mapa/map-css/map-css.module').then( m => m.MapCssPageModule)
  },
  {
    path: 'map-react',
    loadChildren: () => import('./mapa/map-react/map-react.module').then( m => m.MapReactPageModule)
  },
  {
    path: 'map-django',
    loadChildren: () => import('./mapa/map-django/map-django.module').then( m => m.MapDjangoPageModule)
  },
  {
    path: 'map-bootstrap',
    loadChildren: () => import('./mapa/map-bootstrap/map-bootstrap.module').then( m => m.MapBootstrapPageModule)
  },
  {
    path: 'map-flash',
    loadChildren: () => import('./mapa/map-flash/map-flash.module').then( m => m.MapFlashPageModule)
  },
  {
    path: 'map-vue',
    loadChildren: () => import('./mapa/map-vue/map-vue.module').then( m => m.MapVuePageModule)
  },
  {
    path: 'map-angular',
    loadChildren: () => import('./mapa/map-angular/map-angular.module').then( m => m.MapAngularPageModule)
  },
  {
    path: 'map-mysql',
    loadChildren: () => import('./mapa/map-mysql/map-mysql.module').then( m => m.MapMysqlPageModule)
  },
  {
    path: 'map-oracle',
    loadChildren: () => import('./mapa/map-oracle/map-oracle.module').then( m => m.MapOraclePageModule)
  },
  {
    path: 'map-firebase',
    loadChildren: () => import('./mapa/map-firebase/map-firebase.module').then( m => m.MapFirebasePageModule)
  },
  {
    path: 'map-ai',
    loadChildren: () => import('./mapa/map-ai/map-ai.module').then( m => m.MapAIPageModule)
  },
  {
    path: 'map-security',
    loadChildren: () => import('./mapa/map-security/map-security.module').then( m => m.MapSecurityPageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./artigos/c/c.module').then( m => m.CPageModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./artigos/typescript/typescript.module').then( m => m.TypescriptPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./artigos/css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./artigos/react/react.module').then( m => m.ReactPageModule)
  },
  {
    path: 'django',
    loadChildren: () => import('./artigos/django/django.module').then( m => m.DjangoPageModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./artigos/bootstrap/bootstrap.module').then( m => m.BootstrapPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./artigos/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'vue',
    loadChildren: () => import('./artigos/vue/vue.module').then( m => m.VuePageModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./artigos/angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'mysql',
    loadChildren: () => import('./artigos/mysql/mysql.module').then( m => m.MysqlPageModule)
  },
  {
    path: 'oracle',
    loadChildren: () => import('./artigos/oracle/oracle.module').then( m => m.OraclePageModule)
  },
  {
    path: 'firebase',
    loadChildren: () => import('./artigos/firebase/firebase.module').then( m => m.FirebasePageModule)
  },
  {
    path: 'ai',
    loadChildren: () => import('./artigos/ai/ai.module').then( m => m.AIPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./artigos/security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'pfjavascript',
    loadChildren: () => import('./profissoes/pfjavascript/pfjavascript.module').then( m => m.PfjavascriptPageModule)
  },
  {
    path: 'pfjava',
    loadChildren: () => import('./profissoes/pfjava/pfjava.module').then( m => m.PfjavaPageModule)
  },
  {
    path: 'pfc',
    loadChildren: () => import('./profissoes/pfc/pfc.module').then( m => m.PfcPageModule)
  },
  {
    path: 'pfphp',
    loadChildren: () => import('./profissoes/pfphp/pfphp.module').then( m => m.PfphpPageModule)
  },
  {
    path: 'pftypescript',
    loadChildren: () => import('./profissoes/pftypescript/pftypescript.module').then( m => m.PftypescriptPageModule)
  },
  {
    path: 'pfcss',
    loadChildren: () => import('./profissoes/pfcss/pfcss.module').then( m => m.PfcssPageModule)
  },
  {
    path: 'pfreact',
    loadChildren: () => import('./profissoes/pfreact/pfreact.module').then( m => m.PfreactPageModule)
  },
  {
    path: 'pfdjango',
    loadChildren: () => import('./profissoes/pfdjango/pfdjango.module').then( m => m.PfdjangoPageModule)
  },
  {
    path: 'pfbootstrap',
    loadChildren: () => import('./profissoes/pfbootstrap/pfbootstrap.module').then( m => m.PfbootstrapPageModule)
  },
  {
    path: 'pfflash',
    loadChildren: () => import('./profissoes/pfflash/pfflash.module').then( m => m.PfflashPageModule)
  },
  {
    path: 'pfvue',
    loadChildren: () => import('./profissoes/pfvue/pfvue.module').then( m => m.PfvuePageModule)
  },
  {
    path: 'pfangular',
    loadChildren: () => import('./profissoes/pfangular/pfangular.module').then( m => m.PfangularPageModule)
  },
  {
    path: 'pfmysql',
    loadChildren: () => import('./profissoes/pfmysql/pfmysql.module').then( m => m.PfmysqlPageModule)
  },
  {
    path: 'pforacle',
    loadChildren: () => import('./profissoes/pforacle/pforacle.module').then( m => m.PforaclePageModule)
  },
  {
    path: 'pffirebase',
    loadChildren: () => import('./profissoes/pffirebase/pffirebase.module').then( m => m.PffirebasePageModule)
  },
  {
    path: 'pfai',
    loadChildren: () => import('./profissoes/pfai/pfai.module').then( m => m.PfaiPageModule)
  },
  {
    path: 'pfsecurity',
    loadChildren: () => import('./profissoes/pfsecurity/pfsecurity.module').then( m => m.PfsecurityPageModule)
  }

    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
