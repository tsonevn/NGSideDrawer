import {Component, ChangeDetectorRef, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef){

    }
     @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }
    public openDrawer() {
        this.drawer.showDrawer();
    }
}
