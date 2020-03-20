import { GridDesigner } from "@rxweb/grid"

export class AppGrid extends GridDesigner {

    constructor(source: any[], model: Function, gridConfiguration?: any) {
        super(source, model, gridConfiguration);
        this.allowSorting = true;
        this.designClass.tableClass = "table mb-0 fs-14 table_md".split(' ');
        this.designClass.ascendingClass = "fas fa-sort".split(' ');
        this.designClass.rowClass = "gradeA even".split(" ");
        this.footerDesignClass.rootClass = "d-column d-md-flex px-3 py-2 justify-content-between text-center align-items-center border-top".split(' ');
        this.footerDesignClass.dropDownTemplateClass.rootClass = "dataTables_length mb-3 mb-lg-0".split(' ');
        this.footerDesignClass.dropDownTemplateClass.controlClass = "form-control form-control-md mx-2 w-auto".split(" ");
        this.footerDesignClass.textTemplateClass.rootClass = "my-3 my-lg-0 fs-14".split(" ");
        this.footerDesignClass.paginatorClass.rootClass = "Page navigation example".split(" ");
        this.footerDesignClass.paginatorClass.unorderedListItemClass = "pagination m-0 justify-content-center".split(" ");;
        this.footerDesignClass.paginatorClass.listItemClass = ["page-item", function () { return this.active ? "active" : "" }];
        this.footerDesignClass.paginatorClass.anchorClass = "page-link d-flex align-items-cente".split(" ");
        this.footerDesignClass.dropDownTemplateClass.labelClass = "d-flex align-items-center mb-0 font-weight-normal justify-content-center".split(' ');
        this.maxPerPage = 25;
        this.pagingSource = [25, 50, 75, 100];
    }
}
