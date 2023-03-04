/* eslint-disable max-len */
import React from "react";

function ProfileHeader() {
	return (
		<div className="profile-header-background">
			<div className="profile-header-group">
				<img className="profile-picture" src="./img/example-profile-picture.png" alt="profile picture"/>
				<div className="profile-header-info">
					<h2 className="user-name">vincebwe</h2>
					<div className="user-detail">
						<p className="user-year">年级：大五</p>
						<p className="user-major">专业：养老学</p>
						<p className="user-email">邮箱：vincentnb@uw.edu</p>
					</div>
				</div>
				<div>
					<p className="user-level">Level 100</p>
				</div>
				<div>
					<p className="user-setting">个人设置</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileHeader;
