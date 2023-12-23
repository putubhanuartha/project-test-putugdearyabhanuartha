const formatLocalDateString = (inDate: Date) => {
	const date = new Date(inDate);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	const formatedDate = date.toLocaleDateString('id-ID', options);

	return formatedDate.toUpperCase();
};

export { formatLocalDateString };
