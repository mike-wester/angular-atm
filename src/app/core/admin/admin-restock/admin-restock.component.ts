import { Component } from '@angular/core';
import { RestockInventoryComponent } from 'src/app/components/restock-inventory/restock-inventory.component'

@Component({
    selector: 'app-admin-restock',
    templateUrl: './admin-restock.component.html',
    styleUrls: ['./admin-restock.component.scss']
})
export class AdminRestockComponent extends RestockInventoryComponent { }
