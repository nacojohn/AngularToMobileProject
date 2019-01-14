import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
    { path: '', component: AboutMeComponent },
    { path: 'device-info', component: DeviceInfoComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }