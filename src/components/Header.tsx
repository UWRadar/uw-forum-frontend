import NotificationIcon from "./NotificationIcon";
// import { useUserStore } from "../store";
import { useEffect, useState } from "react";
import type { UserProfileItem } from "../types";
import { SpinnerIcon } from "./Icons";

const sample_user = {
  avatarUrl: "https://i.pravatar.cc/120",
  username: "vince",
};

function Button({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon?: JSX.Element;
  onClick?: (e: any) => void;
}) {
  return (
    <button
      className="px-3 py-1.5 text-sm bg-white rounded-lg border border-purple-800 text-purple-800 hover:bg-purple-100/70 transition-all duration-300"
      onClick={onClick}
    >
      {icon && <span className="inline-block mr-2">{icon}</span>}
      {text}
    </button>
  );
}

const UserProfile = ({ user }: { user: UserProfileItem }) => {
  // const { user, loading } = useUserStore((state) => state);
  return (
    <div className="flex items-center gap-3">
      <img
        src={user.avatarUrl}
        alt="User avatar"
        width="36"
        height="36"
      />
      <span className="hidden md:inline-block">{user.username}</span>
    </div>
  );
};

// const SignOutButton = () => {
//   const {
//     signOut: setSignOutState,
//     setLoading,
//     setError,
//     loading,
//   } = useUserStore((state) => state);
//   const sign_out = () => {
//     setLoading(true);
//     signOut(auth)
//       .then(() => {
//         setSignOutState();
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   };
//   return loading ? (
//     <SpinnerIcon />
//   ) : (
//     <Button text="退出登陆" onClick={sign_out} />
//   );
// };

const Header = () => {
  // const router = useRouter();
  // const userState = useUserStore((state) => state);

  return (
    <header className={`w-full h-16 flex items-center justify-between px-6`}>
      <span
        className="text-xl font-semibold cursor-pointer"
        // onClick={() => router.push("/")}
      >
        华大树洞
      </span>
      <div className="flex items-center gap-8">
        <NotificationIcon />
        {/* {userState.user ? (
          <div className="flex gap-4">
            <UserProfile />
            <SignOutButton />
          </div>
        ) : userState.loading ? (
          <SpinnerIcon />
        ) : (
          <Button text="登陆" onClick={() => router.push("/login")} />
        )} */}
        <Button text="登陆" />
      </div>
    </header>
  );
};

export default Header;
