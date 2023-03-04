import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./NotificationPage.css";
import { getNotificationsAPI } from "../api";
import { FiChevronRight } from "react-icons/fi";

interface Notification {
	userId: string;
	content: string;
	time: string;
}

// update api, reassign NotificationContents
const NotificationContents: Notification[] = [{
	userId: "匿名用户",
	content: "在 华大课友介绍中回复了你的评论",
	time: "10:08"
}, {
	userId: "匿名用户",
	content: "在 华大课友介绍中回复了你的评论",
	time: "10:08"
}, {
	userId: "匿名用户",
	content: "在 华大课友介绍中回复了你的评论",
	time: "10:08"
}];



function NotificationPage() {
	// const [typeSelected, setTypeSelected] =
	// 		useState(NotificationPageTypes.Latest);
	const [notifications, setNotifications] = useState<Notification[]>();

	const getNotificationData = () => {
		getNotificationsAPI().then((response: Response) => {
			if (response.ok) {
				return response.json();
			} else {
				console.log("error");
			}
		}).then((data: Notification[]) => {
			if (data) {
				setNotifications(data);
			}
		});
	};

	useEffect(() => {
		// getNotificationData()
		setNotifications(NotificationContents);
	}, []);

	return (
		<div className="notificationpage">
			<Header />
			<div className="notificationpage-main">
				<div className="notification-title">通知</div>
				<div className="notification-list">
					{notifications && notifications.map((notification, idx) => {
						return (
							<div key={idx} className="notification-content">
								{notification.content}
								<FiChevronRight className="not-icon" />
							</div>
						);
					})}
				</div>

			</div>
		</div>

	);
}
export default NotificationPage;
