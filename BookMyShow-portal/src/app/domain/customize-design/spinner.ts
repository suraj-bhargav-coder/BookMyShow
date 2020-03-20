import { SpinnerDirective } from "@rxweb/framework"
import { TemplateConfig } from "@rxweb/dom"

export class AppSpinner extends SpinnerDirective {
    constructor(element: HTMLElement) {
        super(element);
    }

    getTemplate():TemplateConfig {
        return {
            div: {
                class:["spinner-border"]
            }
        }
    }
}
