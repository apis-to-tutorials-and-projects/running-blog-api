export const get = (total: number, itemsPage: number, page: number) => {
    const pages = Math.ceil(total / itemsPage);
    return {
      skip: (page - 1) * itemsPage,
      itemsPage,
      total,
      pages: {
        total: pages,
        current: page
      }
    };
}