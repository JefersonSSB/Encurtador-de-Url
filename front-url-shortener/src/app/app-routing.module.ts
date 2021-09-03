import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlCreateComponent } from './views/url-shortener/url-create/url-create.component';
import { UrlListComponent } from './views/url-shortener/url-list/url-list.component';

const routes: Routes = [
  { path: "", component: UrlCreateComponent },
  { path: "url-list", component: UrlListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
