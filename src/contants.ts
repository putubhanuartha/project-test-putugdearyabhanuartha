import { SortType } from './enums';

const SUITMEDIA_URL_SERVER = 'https://suitmedia-backend.suitdev.com/api/ideas';
const SORT_BY: { value: SortType; key: string }[] = [
	{
		value: SortType.newest,
		key: 'Newest',
	},
	{
		key: 'Oldest',
		value: SortType.oldest,
	},
];

const ROUTES_NAV: string[] = [
	'work',
	'about',
	'services',
	'ideas',
	'careers',
	'contact',
];

const SHOW_PER_PAGE: number[] = [10, 20, 50];

export { SUITMEDIA_URL_SERVER, SORT_BY, SHOW_PER_PAGE, ROUTES_NAV };
