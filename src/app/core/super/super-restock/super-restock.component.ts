import { Component } from '@angular/core';
import { RestockInventoryComponent } from 'src/app/components/restock-inventory/restock-inventory.component'

@Component({
    selector: 'app-super-restock',
    templateUrl: './super-restock.component.html',
    styleUrls: ['./super-restock.component.scss']
})
export class SuperRestockComponent extends RestockInventoryComponent { }
