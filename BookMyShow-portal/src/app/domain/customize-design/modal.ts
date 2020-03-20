import { Modal, ComponentType } from "@rxweb/js"
import { Injectable, ComponentRef, ComponentFactoryResolver, Injector, EmbeddedViewRef, ViewContainerRef } from '@angular/core';
@Injectable()
export class ModalView extends Modal {
    private componentRef: ComponentRef<any>;
    viewContainerRef: ViewContainerRef;
    constructor(private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver) {
        super();
        this.designClass.class = ["modal", "fade"];
        this.designClass.style = { "padding-right": "17px", "display": "block" };
        this.designClass.showIn = ["show"]
        this.designClass.backDropClass = ["modal-backdrop", "show"];
    }


    setResolver(componentFactoryResolver: ComponentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    resolver = (component: ComponentType<any>, params?: {
        [key: string]: any;
    }): HTMLElement => {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, this.viewContainerRef.parentInjector);
        if (params)
            this.setParams(params);
        this.componentRef.instance["ngOnInit"]();
        return this.rootNode();
    }

    private setParams(params: {
        [key: string]: any;
    }): void {
        let propNames = Object.getOwnPropertyNames(params);
        for (let key of propNames) {
            this.componentRef.instance[key] = params[key];
        }
    }

    rootNode(): HTMLElement {
        return (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    }

    destroy = (): void => {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = undefined;
        }
    }
}
