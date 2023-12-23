import { formatLocalDateString } from '../../../helper/formatter';
import { ApiIdeasType } from '../../../types';

type CardProps = Omit<ApiIdeasType, 'content' | 'deleted_at' | 'slug'>;
const Card: React.FC<CardProps> = ({
	published_at,
	medium_image,
	title,
	small_image,
}) => {
	return (
		<div className="max-w-64 min-w-56 rounded-lg overflow-clip shadow-xl">
			<div className={`bg-cover bg-center bg-[url(${small_image[0].url})]`}>
				<img
					loading="lazy"
					src={medium_image[0].url}
					alt={medium_image[0].file_name}
					className="object-cover h-56 w-full"
				/>
			</div>

			<div className="py-4 px-5">
				<p className="text-sm">{formatLocalDateString(published_at)}</p>
				<p className="text-base font-semibold line-clamp-3">{title}</p>
			</div>
		</div>
	);
};

export default Card;
