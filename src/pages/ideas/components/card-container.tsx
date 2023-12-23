import { useQueryStore } from '../../../store';
import { ApiIdeasType, MetaResponseType } from '../../../types';
import Card from './card';
import {
	MdOutlineKeyboardDoubleArrowLeft,
	MdOutlineKeyboardDoubleArrowRight,
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import PaginateNumber from './paginate-number';
const CardContainer = ({
	data,
	meta,
}: {
	data: ApiIdeasType[];
	meta: MetaResponseType;
}) => {
	const queryStore = useQueryStore();
	return (
		<div className="mt-7 flex flex-col gap-y-12">
			<div className="grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto grid-cols-1  gap-x-5 gap-y-10">
				{data &&
					data
						.filter((el) => {
							return (
								el.medium_image.length !== 0 && el.small_image.length !== 0
							);
						})
						.map((el) => {
							return (
								<Card
									key={el.id}
									{...el}
								/>
							);
						})}
			</div>
			<nav className="flex items-center mx-auto gap-x-5">
				<button
					className={`${queryStore.currentPage === 1 && 'text-gray-400'}`}
					disabled={queryStore.currentPage === 1}
					onClick={() => queryStore.setCurrentPage(1)}
				>
					<MdOutlineKeyboardDoubleArrowLeft size={30} />
				</button>
				<button
					onClick={() => queryStore.setCurrentPage(queryStore.currentPage - 1)}
					className={`${queryStore.currentPage === 1 && 'text-gray-400'}`}
					disabled={queryStore.currentPage === 1}
				>
					<MdOutlineKeyboardArrowLeft size={30} />
				</button>
				<PaginateNumber
					min={1}
					max={meta.last_page}
					current={meta.current_page}
					maxLength={5}
				/>
				<button
					onClick={() => queryStore.setCurrentPage(queryStore.currentPage + 1)}
					className={`${
						queryStore.currentPage === meta.last_page && 'text-gray-400'
					}`}
					disabled={queryStore.currentPage === meta.last_page}
				>
					<MdOutlineKeyboardArrowRight size={30} />
				</button>
				<button
					className={`${
						queryStore.currentPage === meta.last_page && 'text-gray-400'
					}`}
					disabled={queryStore.currentPage === meta.last_page}
					onClick={() => queryStore.setCurrentPage(meta.last_page)}
				>
					<MdOutlineKeyboardDoubleArrowRight size={30} />
				</button>
			</nav>
		</div>
	);
};

export default CardContainer;
