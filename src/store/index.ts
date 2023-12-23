import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SortType } from '../enums';

interface QueryStore {
	currentPage: number;
	pageSize: number;
	sort: SortType;
	setSortType: (sort: SortType) => void;
	setPageSize: (pageSize: number) => void;
	setCurrentPage: (currentPage: number) => void;
}
export const useQueryStore = create<QueryStore>()(
	persist(
		(set) => ({
			currentPage: 1,
			pageSize: 10,
			sort: SortType.newest,
			setCurrentPage: (newPage) => set({ currentPage: newPage }),
			setPageSize: (newPageSize) => set({ pageSize: newPageSize }),
			setSortType: (newSortType) => set({ sort: newSortType }),
		}),
		{
			name: 'query-store',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);


