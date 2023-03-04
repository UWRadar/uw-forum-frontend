import { useState } from "react";
import InputBar from "../components/InputBar";

function Profile() {
	const [formValue, setFormValue] = useState({
		name: "",
		year: "",
		major: "",
		email: ""
	});

	const onChange = (id: string, value: string) => {
		setFormValue((old) => { return { ...old, [id]: value }; });
	};

	return (
		<form>
			<InputBar
				label="姓名"
				id="name"
				value={formValue["name"]}
				onChange={onChange}
			/>
			<InputBar
				label="年级"
				id="year"
				value={formValue["year"]}
				onChange={onChange}
			/>
			<InputBar
				label="专业"
				id="major"
				value={formValue["major"]}
				onChange={onChange}
			/>
			<InputBar
				label="邮箱"
				id="email"
				value={formValue["email"]}
				onChange={onChange}
			/>
		</form>
	);
}

export default Profile;
