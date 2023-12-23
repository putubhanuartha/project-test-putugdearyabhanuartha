import { useQueryStore } from '../../../store';

const PaginateNumber = ({
	min,
	max,
	maxLength,
	current,
}: {
	min: number;
	max: number;
	maxLength: number;
	current: number;
}) => {
	const queryStore = useQueryStore();
	const paginate = (min: number, max: number, maxLength: number) => {
		const total = [];
		let pointer = min;
		while (pointer !== max) {
			const arr = [];
			for (let i = 0; i < maxLength; i++) {
				arr.push(pointer);
				if (pointer === max) {
					total.push(arr);
					return total;
				}
				pointer++;
			}
			total.push(arr);
			pointer -= 2;
		}
		return total;
	};
	const findIndexPagination = (
		min: number,
		max: number,
		arr: number[][],
		current: number
	): number => {
		if (current === min) return 0;
		if (current === max) return arr.length - 1;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				if (current === arr[i][j] && j !== arr[i].length - 1) {
					return i;
				}
			}
		}
		return 0;
	};
	const result = paginate(min, max, maxLength);
	const index = findIndexPagination(min, max, result, current);
	return (
		<div>
			<ul className="flex items-center gap-x-1.5">
				{result[index].map((el) => {
					return (
						<li key={el}>
							<button
								onClick={() => queryStore.setCurrentPage(el)}
								className={`${
									el === current && 'bg-orange-500 text-white'
								} px-2 py-0.5 rounded-lg`}
							>
								{el}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PaginateNumber;
