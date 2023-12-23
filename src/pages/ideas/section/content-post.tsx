import { ChangeEvent } from 'react';
import {
	SHOW_PER_PAGE,
	SORT_BY,
	SUITMEDIA_URL_SERVER,
} from '../../../contants';
import { useQueryStore } from '../../../store';
import CardContainer from '../components/card-container';
import { SortType } from '../../../enums';
import { useQuery } from 'react-query';
import { fetchAllPost } from '../../../http/_GET';
import CardSkeleton from '../../../components/loading/card-skeleton';
import { useNavigate } from 'react-router-dom';

const ContentPost = () => {
	const queryStore = useQueryStore();
	const navigate = useNavigate();
	const handleShowperPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		queryStore.setPageSize(Number(e.currentTarget.value));
		queryStore.setCurrentPage(1);
	};
	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		queryStore.setSortType(e.currentTarget.value as SortType);
		queryStore.setCurrentPage(1);
	};
	const { data, isError, isLoading } = useQuery(
		[
			queryStore.currentPage,
			queryStore.pageSize,
			queryStore.sort,
			SUITMEDIA_URL_SERVER,
		],
		{
			queryFn: () =>
				fetchAllPost({
					currentPage: queryStore.currentPage,
					pageSize: queryStore.pageSize,
					sort: queryStore.sort,
					url: SUITMEDIA_URL_SERVER,
				}),
			refetchOnWindowFocus: false,
			onError: () => {
				window.sessionStorage.removeItem('query-store');
				alert('Network Error, Redirecting to Homepage');
				navigate('/');
			},
		}
	);
	return (
		<div className="min-h-[100vh] py-3">
			<div className="container mx-auto">
				{isLoading && <CardSkeleton />}
				{!isLoading && !isError && data && (
					<>
						<div className="flex justify-between items-center flex-wrap">
							<p>
								Showing {data.meta.from} - {data.meta.to} of {data.meta.total}
							</p>
							<div className="flex items-center gap-x-6 flex-wrap">
								<div className="flex gap-x-2 items-center">
									<label htmlFor="show_per_page">Show per page:</label>
									<select
										defaultValue={queryStore.pageSize}
										onChange={handleShowperPageChange}
										id="show_per_page"
										name="show_per_page"
										className="w-24 px-1 py-1 rounded-full border-[1px] border-gray-400"
									>
										{SHOW_PER_PAGE.map((el) => {
											return (
												<option
													key={el}
													value={el}
												>
													{el}
												</option>
											);
										})}
									</select>
								</div>
								<div className="flex items-center gap-x-2">
									<label htmlFor="sort_by">Sort by:</label>
									<select
										defaultValue={queryStore.sort}
										onChange={handleSortChange}
										id="sort_by"
										name="sort_by"
										className="w-28 px-1 py-1 rounded-full border-[1px] border-gray-400"
									>
										{SORT_BY.map((el) => {
											return (
												<option
													key={el.key}
													value={el.value}
												>
													{el.key}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
						<CardContainer
							meta={data.meta}
							data={data.data}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default ContentPost;
