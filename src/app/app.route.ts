import {Routes,RouterModule} from '@angular/router'
import { HomeComponent } from './pages/home/home.component' 
import { PagosComponent } from './pages/pagos/pagos.component'
import { ProveedoresComponent } from './pages/proveedores/proveedores.component'
import { SolicitudComponent } from './pages/solicitud/solicitud.component'
import { VerifiedtokenComponent } from './pages/verifiedtoken/verifiedtoken.component'
import { LoginComponent } from './pages/login/login.component'


const routes:Routes = [
    {path:'', component:VerifiedtokenComponent},
    {path:'home', component:HomeComponent},
    {path:'pagos', component:PagosComponent},
    {path:'proveedores', component:ProveedoresComponent},
    {path:'solicitud', component:SolicitudComponent},
    {path:'login', component:LoginComponent}
]


export const expRoutes=RouterModule.forRoot(routes)