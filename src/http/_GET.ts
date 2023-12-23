import axios from 'axios';
import { SortType } from '../enums';
import { ResponsePayload } from '../types';

const fetchAllPost = async ({
	url,
	currentPage,
	pageSize,
	sort,
}: {
	url: string;
	currentPage: number;
	pageSize: number;
	sort: SortType;
}) => {
	const response = await axios.get(
		url +
			`?page[number]=${currentPage}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sort}`
	);
	return response.data as unknown as ResponsePayload;
};

export { fetchAllPost };
