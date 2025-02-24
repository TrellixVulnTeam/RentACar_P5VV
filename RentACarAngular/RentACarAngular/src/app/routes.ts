import {Routes} from '@angular/router';
import {CarComponent} from './components/car/car.component';
import {SharedComponent} from './components/shared/shared.component';
import {AuthorizedComponent} from './components/authorized/authorized.component';
import {ModeratorGuard} from './guards/moderator.guard';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {UserComponent} from './components/user/user.component';
import {LoginGuard} from './guards/login.guard';
import {ColorComponent} from './components/color/color.component';
import {ColorAddComponent} from './components/color/color-add/color-add.component';
import {ColorEditComponent} from './components/color/color-edit/color-edit.component';
import {BrandComponent} from './components/brand/brand.component';
import {BrandAddComponent} from './components/brand/brand-add/brand-add.component';
import {BrandEditComponent} from './components/brand/brand-edit/brand-edit.component';
import {CarAddComponent} from './components/car/car-add/car-add.component';
import {CarEditComponent} from './components/car/car-edit/car-edit.component';
import {CarDetailComponent} from './components/car/car-detail/car-detail.component';
import {PaymentComponent} from './components/payment/payment.component';
import {CartComponent} from './components/cart/cart.component';
import {CarListComponent} from './components/car/car-list/car-list.component';
import {CarImageAddComponent} from './components/car/car-image/car-image-add/car-image-add.component';
import {CarImageEditComponent} from './components/car/car-image/car-image-edit/car-image-edit.component';
import {UserAddComponent} from './components/user/user-add/user-add.component';
import {UserEditComponent} from './components/user/user-edit/user-edit.component';
import {ColorListComponent} from './components/color/color-list/color-list.component';
import {BrandListComponent} from './components/brand/brand-list/brand-list.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {CustomerAddComponent} from './components/customer/customer-add/customer-add.component';
import {CustomerEditComponent} from './components/customer/customer-edit/customer-edit.component';
import {RentalListComponent} from './components/rental/rental-list/rental-list.component';
import {CustomerListComponent} from './components/customer/customer-list/customer-list.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {
    path: 'authorized',
    component: AuthorizedComponent,
    canActivate: [ModeratorGuard],
    children: [
      {path: '', component: DashboardComponent},

      //Cars
      {path: 'cars/list', component: CarListComponent},
      {path: 'cars/add', component: CarAddComponent},
      {path: 'cars/update/:id', component: CarEditComponent},
      {path: 'cars/image/add/:id', component: CarImageAddComponent},
      {path: 'cars/image/delete/:id', component: CarImageEditComponent},

      //Colors && Brands
      {path: 'colors/add', component: ColorAddComponent},
      {path: 'colors/update/:id', component: ColorEditComponent},
      {path: 'colors/list', component: ColorListComponent},
      {path: 'brands/add', component: BrandAddComponent},
      {path: 'brands/update/:brandId', component: BrandEditComponent},
      {path: 'brands/list', component: BrandListComponent},

      //Users && Customers
      {path: 'users/add', component: UserAddComponent},
      {path: 'users/update/:id', component: UserEditComponent},
      {path: 'users/list', component: UserListComponent},
      {path: 'customers/add', component: CustomerAddComponent},
      {path: 'customers/update/:customer', component: CustomerEditComponent},
      {path: 'customers/list', component: CustomerListComponent},

      //Rentals
      {path: 'rentals/list', component: RentalListComponent},
    ]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'payment/:myrental', component: PaymentComponent},
  {path: 'colors', component: ColorComponent},
  {path: 'brands', component: BrandComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: UserComponent, canActivate: [LoginGuard]},
  {
    path: '',
    component: SharedComponent,
    children: [
      {path: '', component: CarComponent},
      {path: 'cars', component: CarComponent},
      {path: 'cars/brand/:brandId', component: CarComponent},
      {path: 'cars/color/:colorId', component: CarComponent},
      {path: 'car/details/:carId', component: CarDetailComponent},
      {path: 'cars/brand/:brandId/color/:colorId', component: CarComponent},
    ]
  },
  {path: '**', component: NotFoundComponent},
];
