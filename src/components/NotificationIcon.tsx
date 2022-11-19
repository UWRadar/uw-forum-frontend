import React from 'react'
import { BellIcon } from './Icons';

interface NotificationItem {
  text: string;
  read: boolean;
}

const sample_notification_data = [
  {
    "text": "Qui enim veniam nulla aliqua sit laboris fugiat aliqua ut sunt enim elit id enim. Quis aliquip mollit mollit aute ad minim esse consequat qui pariatur voluptate quis aute dolor. Consectetur aliquip enim cupidatat ut adipisicing labore eiusmod velit aliquip proident nulla sint aliqua. Enim enim eu nisi Lorem ut voluptate enim velit sint culpa Lorem ea aute et. Veniam anim culpa cupidatat sunt. Sunt reprehenderit aute incididunt reprehenderit nisi laboris officia irure eiusmod pariatur deserunt aliquip. Ut dolor officia est est qui do officia reprehenderit magna ipsum est aliqua.\r\n",
    "read": true
  },
  {
    "text": "Labore irure occaecat in magna minim et laboris voluptate. Sit ut aliquip eiusmod duis officia consequat ex Lorem velit est quis. Mollit commodo ex dolor excepteur quis voluptate Lorem nisi cupidatat deserunt adipisicing officia et. Commodo quis cupidatat enim ut. Dolore aliquip ipsum cupidatat labore consequat esse ut.\r\n",
    "read": true
  },
  {
    "text": "Cillum ex ullamco laborum nostrud proident ea ipsum laboris incididunt pariatur sit proident nostrud. Esse anim cupidatat minim laborum velit non ad labore. Ut magna fugiat excepteur esse sit incididunt irure. Mollit laborum ad ea tempor exercitation cillum id excepteur. Ad officia do excepteur duis anim id dolore aute veniam culpa adipisicing.\r\n",
    "read": true
  },
  {
    "text": "Nostrud veniam nostrud aute commodo. In nulla enim in quis mollit do. Voluptate ea sint amet veniam amet labore commodo consequat. Commodo commodo dolor excepteur est ut velit elit et consequat eu deserunt cupidatat occaecat. Veniam ullamco ex aliquip voluptate sit nostrud irure officia amet in veniam esse pariatur. Occaecat ad mollit ipsum eu exercitation duis sunt amet cillum eiusmod incididunt velit ipsum.\r\n",
    "read": true
  },
  {
    "text": "Non reprehenderit in velit est labore quis mollit. Eiusmod fugiat proident dolore incididunt fugiat fugiat dolore esse pariatur fugiat. Eu est mollit ex laboris deserunt ea ullamco commodo minim id.\r\n",
    "read": true
  },
  {
    "text": "Nostrud pariatur dolor sunt ex tempor cupidatat ullamco commodo. Fugiat labore qui in adipisicing esse pariatur aliquip commodo culpa eiusmod velit deserunt velit commodo. Culpa in duis deserunt elit commodo eu ut laborum do. Id excepteur est excepteur magna do fugiat non.\r\n",
    "read": true
  }
]

const Popup = ({ data }: {
  data: NotificationItem[]
}) => {
  return (
    <div className="md:w-96 h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 hover:h-auto hover:opacity-100 transition-all duration-500 bg-white fixed top-12 inset-x-4 md:absolute md:right-0 md:left-auto md:top-8 z-10 shadow-2xl rounded-xl">
      <div className="px-4 py-4 border-b border-b-slate-300">
        消息提醒
      </div>
      {data.map((item, i) => (
        <div key={i} className="py-4 pl-4 flex cursor-pointer hover:bg-slate-200 transition-all duration-300">
          <div className="flex-none flex pt-2 w-6 justify-between">
            {item.read && (
              <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
            )}
          </div>
          <div className="flex flex-col pr-6">
            <div className={"line-clamp-1 " + (item.read ? "text-md" : "")}>{item.text}</div>
            {/* <div className="line-clamp-2 text-sm text-slate-600">{item.description}</div> */}
            <span className="text-sm text-purple-800 pt-2">3小时前</span>
          </div>
        </div>
      ))}
      <div className="py-3 flex items-center justify-center cursor-pointer hover:bg-purple-100">
        <a>全部通知</a>
      </div>
    </div>

  )
}

export default function NotificationIcon() {
  const n = 5
  const firstNItems = sample_notification_data.slice(0, n);
  return (
    <div className="relative">
      <BellIcon />
      <span className="bg-red-500 w-5 h-5 absolute -top-2 -right-2 p-1 rounded-full text-xs text-white flex items-center justify-center">6</span>
      <div className="absolute -inset-3 peer"></div>
      <Popup data={firstNItems} />
    </div>
  )
}