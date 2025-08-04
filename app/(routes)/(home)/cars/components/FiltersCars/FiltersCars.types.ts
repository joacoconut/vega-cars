export type FiltersCarsProps = {
  setFilters: (filterName: string, filterValue: string) => void;
  clearFilters: () => void;
  filters: {
    brand: string;
    type: string;
    transmission: string;
    engine: string;
    people: string;
  };
};
