import { Dispatch, SetStateAction } from "react";
import { HomePageTypes } from "./Enums";

interface Props {
	typeList: string[];
	typeSelected: HomePageTypes;
	setTypeSelected: Dispatch<SetStateAction<HomePageTypes>>
}

function TypeHeader({ typeList, typeSelected, setTypeSelected }: Props) {
	const topicsElement = typeList.map((type, idx) => {
		const onClick = () => {
			setTypeSelected(idx);
		};

		if (typeSelected === idx) {
			return (
				<div
					className="type type-focused"
					key={idx} onClick={onClick}
				>
					<p>{type}</p>
				</div>
			);
		}
		return (
			<div key={idx} className="type" onClick={onClick}>
				<p>{type}</p>
			</div>
		);
	});
	return (
		<div className="type-header">
			{topicsElement}
		</div>
	);
}

export default TypeHeader;
