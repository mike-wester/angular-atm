import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[show-hide-input]'
})
export class ShowHideInput {
    @HostBinding() type: string;

    constructor() {
        this.type = 'password';
    }

    public changeType(type: string): void {
        this.type = type;
    }
}
