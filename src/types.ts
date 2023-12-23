export type ImageObjectType = {
	file_name: string;
	id: number;
	mime: string;
	url: string;
};

export type ApiIdeasType = {
	content: string;
	created_at: Date;
	deleted_at: Date | null;
	id: number;
	published_at: Date;
	slug: string;
	title: string;
	updated_at: Date;
	medium_image: ImageObjectType[];
	small_image: ImageObjectType[];
};

export type MetaResponseType = {
	current_page: number;
	from: number;
	last_page: number;
	path: string;
	per_page: number;
	to: number;
	total: number;
	links: {
		url: string;
		label: string;
		active: boolean;
	}[];
};

export type ResponsePayload = {
	data: ApiIdeasType[];
	links: {
		first: string;
		last: string;
		next: string;
		prev: string | null;
	};
	meta: MetaResponseType;
};
