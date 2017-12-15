import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product/product-list.component";
import {ProductUpdateComponent} from "./product/product-update.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ProductListComponent },
  { path: ':id', component: ProductUpdateComponent }
];

export const appRouting = RouterModule.forRoot(routes);
