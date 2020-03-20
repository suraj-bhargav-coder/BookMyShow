import { Toastr, ToastrMessageType } from '@rxweb/js';
import { TemplateConfig } from '@rxweb/dom';

export class BaseToastr extends Toastr {
    constructor() {
        super();
        this.defaultConfig.timeOut = 5000;
    }

    success(message: string) {
        this.show(message, ToastrMessageType.success);
    }

    error(message: string) {
        this.show(message, ToastrMessageType.error);
    }

    warning(message: string) {
        this.show(message, ToastrMessageType.warning);
    }

    info(message: string) {
        this.show(message, ToastrMessageType.info);
    }
}

