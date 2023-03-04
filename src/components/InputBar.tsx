import React from "react";

interface Props {
  label: string;
  id: string;
  value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (id: string, value: string) => void;
}

function InputBar({label, value, id, onChange}: Props) {
	// function onChange(event: React.ChangeEvent<HTMLInputElement>) {
	//   setValue(event.target.value);
	// }
	return (
		<div className="input-bar">
			<div className="input-bar-label">
				<label htmlFor={id}>{label}</label>
			</div>
			<input
				id={id}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				{return onChange(id, e.target.value);}}/>
		</div>
	);
}

export default InputBar;
