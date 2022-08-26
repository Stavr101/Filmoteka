import Pagination from 'tui-pagination';

function initializePagination() {
  const container = document.querySelector('.pagination');

  const pagination = new Pagination(container, {
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'first-child',
    lastItemClassName: 'last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });

  paganation.on('beforeMove', event => {
    const currentPage = event.page;

    if (currentPage === 10) {
      return false;
    }
  });

  paganation.on('afterMove', event => {
    const currentPage = event.page;
    console.log(currentPage);
  });

  return pagination;
}

export { initializePagination as default };
