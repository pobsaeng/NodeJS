class Pagination {
    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 5;

        var totalPages = Math.ceil(totalItems / pageSize);

        currentPage = currentPage * pageSize;

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            // pages: pages
        };
    }
    getPagination(data) {
        let pageSize = 5,
            totalItems = data.length,
            currentPage = 2;

        var totalPages = Math.ceil(totalItems / pageSize);
        let pager = this.getPager(data.length, pageSize);
        // console.log(pager);
        // get new page of items from items array
        var pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);

        let tpl = new TemplateString();
        let template =
            '<div style="margin-bottom:5px;">' +
            '<nav aria-label="Page navigation"' +
            '<ul class="pagination">' +
            '<li>' +
            '<a href="#" aria-label="Previous">' +
            '<span aria-hidden="true">&laquo;</span>' +
            '</a>' +
            '</li>' +
            '<% for(let i=0; i<this.totalPages; i++) { %>' +
            '<li><a href="#"><% (i+1) %></a></li>' +
            '<% } %>' +
            '<li>' +
            '<a href="#" aria-label="Next">' +
            '<span aria-hidden="true">&raquo;</span>' +
            '</a>' +
            '</li>' +
            '</ul>' +
            '</nav>' +
            '</div>';

        let pagination = tpl.templateEngine(template, {
            totalPages: totalPages,
            divCls: ''
        });
        return pagination;
    }
}