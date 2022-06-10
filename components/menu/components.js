export default function Components() {
    return (
        <div className="ml-4 mt-4">
            <div className="title-menu">
                COMPONENTS
            </div>
            <div className="cursor-pointer">
                <div className="grid grid-cols-6 gap-2 items-center group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5 mr-3.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.4654 3.67758L9.3654 0.077624C9.1314 -0.0258747 8.8677 -0.0258747 8.6337 0.077624L0.5337 3.67758C0.5157 3.68568 0.5031 3.69918 0.4851 3.70908C0.4599 3.72168 0.4329 3.72978 0.4095 3.74508C0.3897 3.75858 0.3744 3.77568 0.3555 3.79008C0.3303 3.80898 0.306 3.82968 0.2835 3.85128C0.2466 3.88638 0.2142 3.92418 0.1845 3.96468C0.1665 3.98988 0.1476 4.01237 0.1314 4.03757C0.1035 4.08527 0.0828 4.13477 0.063 4.18607C0.0549 4.21037 0.0423 4.23287 0.0351 4.25717C0.0135 4.33547 0 4.41647 0 4.50017V13.5001C0 13.8565 0.2088 14.1777 0.5346 14.3226L8.6346 17.9226C8.7516 17.9748 8.8758 18 9 18C9.1251 18 9.2457 17.9649 9.3618 17.9136L9.3654 17.9226L17.4654 14.3226C17.7912 14.1777 18 13.8565 18 13.5001V4.50017C18 4.14377 17.7912 3.82248 17.4654 3.67758ZM9 1.8857L14.8842 4.50017L9 7.11464L7.8228 6.59174L3.1167 4.50017L9 1.8857ZM1.8 12.916V5.88525L8.1 8.68512V15.7149L1.8 12.916ZM9.9 15.7149V8.68512L16.2 5.88525V12.916L9.9 15.7149Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Widgets</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5 mr-3.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.219 0.374984L5 4.39898L1.781 0.374984C1.515 0.0429837 1.068 -0.0840163 0.669 0.0559837C0.269 0.196984 0 0.574984 0 0.999984V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V0.999984C18 0.574984 17.731 0.196984 17.331 0.0559837C16.931 -0.0820163 16.485 0.0439836 16.219 0.374984L13 4.39898L9.781 0.374984C9.4 -0.0990164 8.6 -0.0990164 8.219 0.374984ZM2 16V14H16.001V16H2ZM12.219 6.62498C12.6 7.09998 13.401 7.09998 13.782 6.62498L16 3.85098L16.001 12H2V3.85098L4.219 6.62498C4.6 7.09998 5.401 7.09998 5.782 6.62498L9 2.60098L12.219 6.62498Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Icons</span>
                    <svg className='my-auto mr-0 ml-auto' width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.41936 10L6.57142 5L1.41936 0L0.142853 1.23883L4.01841 5L0.142853 8.76117L1.41936 10Z" />
                    </svg>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5 mr-3.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 3C18 1.346 16.654 0 15 0C13.698 0 12.599 0.838 12.185 2H5.815C5.401 0.838 4.302 0 3 0C1.346 0 0 1.346 0 3C0 4.302 0.839 5.401 2 5.815V12.184C0.839 12.599 0 13.698 0 15C0 16.654 1.346 18 3 18C4.302 18 5.401 17.162 5.815 16H12.184C12.598 17.162 13.698 18 14.999 18C16.653 18 17.999 16.654 17.999 15C17.999 13.698 17.16 12.599 15.999 12.184V5.816C17.161 5.401 18 4.302 18 3ZM15 2C15.552 2 16 2.449 16 3C16 3.551 15.552 4 15 4C14.448 4 14 3.551 14 3C14 2.449 14.448 2 15 2ZM12.185 14H5.815C5.514 13.153 4.848 12.486 4 12.184V5.816C4.848 5.514 5.514 4.847 5.815 4H12.184C12.486 4.847 13.152 5.514 14 5.815V12.184C13.152 12.486 12.486 13.153 12.185 14ZM3 2C3.552 2 4 2.449 4 3C4 3.551 3.552 4 3 4C2.448 4 2 3.551 2 3C2 2.449 2.448 2 3 2ZM3 16C2.448 16 2 15.551 2 15C2 14.449 2.448 14 3 14C3.552 14 4 14.449 4 15C4 15.551 3.552 16 3 16ZM15 16C14.448 16 14 15.551 14 15C14 14.449 14.448 14 15 14C15.552 14 16 14.449 16 15C16 15.551 15.552 16 15 16Z" />
                    </svg>

                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">UI Elements</span>
                    <svg className='my-auto mr-0 ml-auto group-hover:fill-indigo-500' width="7" height="10" viewBox="0 0 7 10" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.41936 10L6.57142 5L1.41936 0L0.142853 1.23883L4.01841 5L0.142853 8.76117L1.41936 10Z" />
                    </svg>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5 mr-3.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2 0H7.2C6.2073 0 5.4 0.8073 5.4 1.8V5.4H1.8C0.8073 5.4 0 6.2073 0 7.2V16.2C0 17.1927 0.8073 18 1.8 18H10.8C11.7927 18 12.6 17.1927 12.6 16.2V12.6H16.2C17.1927 12.6 18 11.7927 18 10.8V1.8C18 0.8073 17.1927 0 16.2 0ZM1.8 16.2V7.2H10.8L10.8018 16.2H1.8ZM16.2 10.8H12.6V7.2C12.6 6.2073 11.7927 5.4 10.8 5.4H7.2V1.8H16.2V10.8Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Extended UI</span>
                    <svg className='my-auto mr-0 ml-auto group-hover:fill-indigo-500' width="7" height="10" viewBox="0 0 7 10" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.41936 10L6.57142 5L1.41936 0L0.142853 1.23883L4.01841 5L0.142853 8.76117L1.41936 10Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}