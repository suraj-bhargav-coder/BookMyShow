import { Dialog } from '@rxweb/js'
export class BaseDialog extends Dialog {
    constructor() {
        super();
        this.designClass.root = ["sweet-alert", "showSweetAlert", "visible"];
        this.designClass.overlay.class = ["sweet-overlay"];
        this.designClass.overlay.style = { "opacity": 1, "display": "block" };
    }

    getDefaultTemplate() {
        var template = super.getDefaultTemplate();
        template.div.style = { "display": "block", "margin-top": "-128px" };
        return template;

    }
}
export enum DialogEnum {
    Ok = 1,
    Cancel = 2
}