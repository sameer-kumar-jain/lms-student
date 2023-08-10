import React from "react"
import { channelMessages, channels, currentLiveClasses, currentMeetings, upcomingLiveClasses, upcomingMeetings } from "../../data"
import { TChannel, TMeeting, TMessage } from "../../types/types"
import SectionDivider from "../../components/section-divider"
import DateView from "../../components/date-view"
import TimeView from "../../components/time-view"
import Link from "next/link"


export default function Inbox() {
  const currentChannel = channels[0]
  return (<div className="flex w-full gap-2.5 pt-5 h-full">
    <div className="flex flex-col w-240 rounded-md bg-white">
      <div className="text-black">
        <div className="mx-4 mt-4 rounded-md border-blue-chill border-1 p-3 text-13.5 font-light">Search</div>
        <div className="mx-4 mt-4 font-light text-11.5 pt-8 uppercase">team channels</div>
        <div className="flex flex-col pt-3 pr-3 flex-wrap">
          {channels.map((channel: TChannel, index: number) => <ChannelItem key={index} data={channel} />)}
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-1 rounded-md bg-white">
      <div className="p-7 flex justify-between items-center shadow-0020">
        <div className="flex justify-center items-center rounded-md w-33 h-33 font-bold" style={{ backgroundColor: currentChannel.hex }}>{currentChannel.title.split("")[0]}</div>
        <div className="flex gap-9 items-center">
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
              <ellipse cx="7.34464" cy="3.71311" rx="3.71311" ry="3.71311" fill="#0C8D92" />
              <path d="M7.5 8C15.7897 8 14.9782 17 14.9782 17H0.021751C0.021751 17 -0.789715 8 7.5 8Z" fill="#0C8D92" />
            </svg>
            <div className="text-11.5 font-medium">1 Member</div>
          </div>
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M12.229 0.294504C11.84 -0.0964958 11.208 -0.0984955 10.815 0.290504C10.711 0.394504 10.639 0.517504 10.59 0.645504C9.758 2.3815 8.842 3.3605 7.686 3.9385C6.389 4.5785 4.9 5.0235 2.5 5.0235C2.37 5.0235 2.24 5.0485 2.118 5.0995C1.873 5.2015 1.679 5.3965 1.577 5.6405C1.476 5.8845 1.476 6.1605 1.577 6.4045C1.628 6.5275 1.701 6.6385 1.794 6.7305L5.037 9.9735L0.5 16.0235L6.55 11.4865L9.792 14.7285C9.884 14.8225 9.995 14.8945 10.118 14.9455C10.24 14.9965 10.37 15.0235 10.5 15.0235C10.63 15.0235 10.76 14.9965 10.882 14.9455C11.127 14.8435 11.322 14.6505 11.423 14.4045C11.474 14.2835 11.5 14.1525 11.5 14.0235C11.5 11.6235 11.944 10.1345 12.583 8.8575C13.16 7.7015 14.139 6.7855 15.876 5.9535C16.005 5.9045 16.127 5.8325 16.23 5.7285C16.619 5.3355 16.617 4.7035 16.226 4.3145L12.229 0.294504Z" fill="#0C8D92" />
            </svg>
            <div className="text-11.5 font-medium">2 Pinned Messages</div>
          </div>
          <button className="btn style4">Exit Channel</button>
        </div>
      </div>
      <div className="px-7 flex-1  flex overflow-y-auto">
        <ChannelMessages />
      </div>
      <div className="p-5 flex justify-between items-center shadow-0020 gap-1.5">
        <div className="flex justify-center items-center rounded-md px-2.5 h-full" style={{ backgroundColor: "#D8F6F8" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_187_5425)">
              <path d="M11.945 23.89C18.542 23.89 23.89 18.542 23.89 11.945C23.89 5.34794 18.542 0 11.945 0C5.34795 0 0 5.34794 0 11.945C0 18.542 5.34795 23.89 11.945 23.89Z" fill="#FFD42A" />
              <path d="M3.83694 3.18848C2.6289 4.30515 1.66454 5.65934 1.00431 7.16613C0.344075 8.67292 0.00220874 10.2999 0.00012207 11.9449C0.000129543 15.1129 1.25861 18.1512 3.49873 20.3913C5.73884 22.6314 8.77709 23.8899 11.9451 23.8899C14.0578 23.8884 16.1323 23.3266 17.9571 22.2618C19.7819 21.197 21.2915 19.6672 22.3322 17.8285C22.112 18.0371 21.884 18.2373 21.6487 18.4285C21.3368 18.676 21.0128 18.9077 20.6778 19.1228C20.3426 19.3382 19.9968 19.5366 19.6417 19.7174C19.2869 19.8979 18.9232 20.0606 18.5521 20.2048C18.1811 20.3493 17.8031 20.4751 17.4195 20.5818C17.0356 20.6883 16.6466 20.7755 16.254 20.8431C15.8614 20.9109 15.4658 20.9589 15.0685 20.9871C14.7875 21.007 14.5058 21.017 14.224 21.0171C13.8258 21.017 13.4279 20.9971 13.0317 20.9573C12.6353 20.9175 12.2412 20.8579 11.8508 20.7788C11.4604 20.6995 11.0743 20.6008 10.6937 20.483C10.3132 20.3654 9.93878 20.2288 9.57189 20.0738C9.20508 19.9186 8.84626 19.7452 8.49677 19.5542C8.14738 19.3634 7.80774 19.1552 7.47914 18.9305C7.15056 18.7056 6.83343 18.4644 6.52894 18.2079C6.22436 17.9513 5.9328 17.6797 5.65535 17.394C5.37771 17.1082 5.11455 16.8088 4.86684 16.4967C4.61939 16.1849 4.38767 15.8608 4.17257 15.5258C3.95747 15.1906 3.75926 14.8448 3.5787 14.4898C3.39793 14.1349 3.23502 13.7712 3.09057 13.4001C2.94634 13.0288 2.82077 12.6506 2.71433 12.2668C2.60787 11.8831 2.52066 11.4944 2.45302 11.102C2.38527 10.7095 2.33718 10.3139 2.30896 9.91655C2.28904 9.6355 2.27908 9.35387 2.27908 9.07211C2.27909 8.67366 2.29905 8.27542 2.33886 7.87896C2.37842 7.48288 2.43775 7.08904 2.51664 6.69888C2.59588 6.30849 2.6946 5.92232 2.81242 5.5418C2.93004 5.16126 3.0666 4.78681 3.22162 4.41992C3.37677 4.0531 3.55018 3.69432 3.74117 3.34483C3.7727 3.29248 3.80461 3.24034 3.83694 3.18848Z" fill="#FFBC2A" />
              <path d="M5.44618 13.6562C5.44618 13.6562 6.00538 17.3458 11.7753 17.3458" stroke="#1A1A1A" strokeLinecap="round" stroke-linejoin="round" />
              <path d="M18.1044 13.6562C18.1044 13.6562 17.5452 17.3458 11.7753 17.3458" stroke="#1A1A1A" strokeLinecap="round" stroke-linejoin="round" />
              <path d="M16.333 8.84373C17.8839 8.84373 19.1411 7.60466 19.1411 6.07616C19.1411 4.54767 17.8839 3.30859 16.333 3.30859C14.7821 3.30859 13.5249 4.54767 13.5249 6.07616C13.5249 7.60466 14.7821 8.84373 16.333 8.84373Z" fill="white" />
              <path d="M7.76248 8.84373C9.31333 8.84373 10.5705 7.60466 10.5705 6.07616C10.5705 4.54767 9.31333 3.30859 7.76248 3.30859C6.21162 3.30859 4.95441 4.54767 4.95441 6.07616C4.95441 7.60466 6.21162 8.84373 7.76248 8.84373Z" fill="white" />
              <path d="M7.76248 7.10935C8.34171 7.10935 8.81127 6.64655 8.81127 6.07567C8.81127 5.50479 8.34171 5.04199 7.76248 5.04199C7.18325 5.04199 6.7137 5.50479 6.7137 6.07567C6.7137 6.64655 7.18325 7.10935 7.76248 7.10935Z" fill="#1A1A1A" />
              <path d="M16.333 7.10935C16.9123 7.10935 17.3818 6.64655 17.3818 6.07567C17.3818 5.50479 16.9123 5.04199 16.333 5.04199C15.7538 5.04199 15.2842 5.50479 15.2842 6.07567C15.2842 6.64655 15.7538 7.10935 16.333 7.10935Z" fill="#1A1A1A" />
            </g>
            <defs>
              <clipPath id="clip0_187_5425">
                <rect width="23.89" height="23.89" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-1 gap-9 items-center shadow-2240 px-3 py-3">
          <input className="flex-1" />
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="5" fill="#D8F6F8" />
              <path d="M12.2001 7.19922V17.1992" stroke="#0C8D92" stroke-width="2.5" stroke-linecap="round" />
              <path d="M7.19995 12.2021H17.2" stroke="#0C8D92" stroke-width="2.5" stroke-linecap="round" />
            </svg>
            <button className="btn style1">
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_187_5439)">
                    <path d="M16.5515 1.18904C16.5668 1.1249 16.5633 1.05771 16.5415 0.995487C16.5196 0.933269 16.4803 0.878647 16.4283 0.838137C16.3763 0.797627 16.3137 0.772938 16.248 0.767015C16.1823 0.761091 16.1163 0.774184 16.0579 0.80473L1.97582 8.18848C1.82001 8.27061 1.68853 8.39227 1.59458 8.54126C1.50063 8.69025 1.44751 8.86132 1.44054 9.03731C1.43358 9.21331 1.47302 9.38805 1.5549 9.54399C1.63679 9.69993 1.75824 9.8316 1.90707 9.92579L5.04207 11.9072C5.07358 11.9272 5.11075 11.9364 5.14796 11.9334C5.18517 11.9305 5.2204 11.9154 5.24833 11.8907L13.6063 4.41892C13.6381 4.38878 13.6802 4.37199 13.724 4.37198C13.7678 4.37198 13.8099 4.38877 13.8418 4.4189C13.8736 4.44903 13.8926 4.4902 13.895 4.53394C13.8973 4.57768 13.8828 4.62067 13.8545 4.65404L7.17539 13.0319C7.16035 13.0508 7.14947 13.0726 7.14344 13.096C7.13741 13.1194 7.13637 13.1438 7.14039 13.1676C7.14441 13.1914 7.1534 13.2141 7.16678 13.2342C7.18015 13.2543 7.19761 13.2713 7.21801 13.2842L11.64 16.0817C11.7746 16.1665 11.9275 16.2179 12.0859 16.2318C12.2444 16.2456 12.4038 16.2215 12.5511 16.1613C12.6983 16.1011 12.8291 16.0067 12.9325 15.8858C13.0359 15.7649 13.109 15.6211 13.1456 15.4664L16.5515 1.18904Z" fill="white" />
                    <path d="M6.17094 13.9378C6.1449 13.9213 6.11493 13.9122 6.08414 13.9112C6.05336 13.9103 6.02288 13.9176 5.99588 13.9324C5.96887 13.9472 5.94631 13.9689 5.93055 13.9954C5.91479 14.0219 5.9064 14.052 5.90625 14.0828C5.90625 14.8088 5.90625 16.5475 5.90625 16.5475C5.90628 16.6835 5.94662 16.8164 6.02216 16.9294C6.09771 17.0424 6.20507 17.1305 6.33068 17.1826C6.45628 17.2346 6.59449 17.2482 6.72783 17.2217C6.86118 17.1952 6.98366 17.1297 7.07981 17.0336L8.46719 15.6469C8.48529 15.6286 8.49908 15.6065 8.50754 15.5822C8.516 15.5579 8.51892 15.532 8.51609 15.5065C8.51325 15.4809 8.50474 15.4563 8.49116 15.4344C8.47758 15.4126 8.45929 15.394 8.43763 15.3802L6.17094 13.9378Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_187_5439">
                      <rect width="16.5" height="16.5" fill="white" transform="translate(0.75 0.75)" />
                    </clipPath>
                  </defs>
                </svg>
                <div>Send</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const ChannelItem = ({ data }: { data: TChannel }) => {
  return (
    <div className="rounded-md py-1 px-4 flex gap-2.5 items-center cursor-pointer hover:bg-twilight-blue">
      <div className="flex justify-center items-center rounded-md w-33 h-33 font-medium text-white" style={{ backgroundColor: data.hex }}>{data.title.split("")[0]}</div>
      <div className="font-bold text-13.5">{data.title}</div>
    </div>
  )
}

const ChannelMessages = () => {
  const messages = channelMessages;
  let from: String | null = null;
  const getMessage = (message: TMessage, index:number) => {
    const sameUser = from === message.from;
    from = message.from;
    return (<div key={index} className={`flex ${from === "me" ? "flex-row-reverse" : ""} ${!sameUser ? "pt-5" : ""}`}>
      <div className="w-33 h-33">
        {!sameUser ? <img src={message.profile_picture} /> : null}
      </div>
      <div className={`flex flex-1 pt-3 ${from === "me" ? "justify-end" : ""}`}>
        <div className="flex flex-col py-2 px-3 rounded-md max-w-80p" style={{ backgroundColor: from === "me" ? "#DCFFEC" : "#EAF9FF" }}>
          {!sameUser ? <div className="text-blue-chill text-11.5 font-medium">{message.display_name}</div> : null}
          <div className="flex gap-2 items-center">
            <div className="text-14 text-slate-900 font-normal flex-1">{message.message}</div>
            <div className="text-11 text-gunsmoke font-normal w-80">{message.time}</div>
          </div>
        </div>
      </div>
    </div>)
  }
  return (
    <div>
      {messages.map(getMessage)}
    </div>

  )
}