
export default function AppPages() {
    return (
        <div className="ml-4 mt-4">
            <div className="title-menu">
                APPS & PAGES
            </div>
            <div className="cursor-pointer">
                <div className="grid grid-cols-6 gap-2 items-center mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className="inline-block group-hover:fill-indigo-500" width="18" height="17" viewBox="0 0 18 17" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2 0.928574H1.8C0.8073 0.928574 0 1.73587 0 2.72857V13.5286C0 14.5213 0.8073 15.3286 1.8 15.3286H16.2C17.1927 15.3286 18 14.5213 18 13.5286V2.72857C18 1.73587 17.1927 0.928574 16.2 0.928574ZM16.2 2.72857V3.18847L9 8.78917L1.8 3.18937V2.72857H16.2ZM1.8 13.5286V5.46817L8.4474 10.6387C8.6094 10.7656 8.8047 10.8286 9 10.8286C9.1953 10.8286 9.3906 10.7656 9.5526 10.6387L16.2 5.46817L16.2018 13.5286H1.8Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Email</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className='inline-block group-hover:fill-indigo-500' width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2 0H1.8C0.8073 0 0 0.8073 0 1.8V12.6C0 13.5927 0.8073 14.4 1.8 14.4H4.5V17.7903L10.1493 14.4H16.2C17.1927 14.4 18 13.5927 18 12.6V1.8C18 0.8073 17.1927 0 16.2 0ZM16.2 12.6H9.6507L6.3 14.6097V12.6H1.8V1.8H16.2V12.6Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Chat</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className='inline-block group-hover:fill-indigo-500' width="17" height="18" viewBox="0 0 17 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.08571 18H14.6857C15.6784 18 16.4857 17.1927 16.4857 16.2V2.7C16.4857 1.7073 15.6784 0.9 14.6857 0.9H12.8857C12.8857 0.4023 12.4834 0 11.9857 0H4.78571C4.28801 0 3.88571 0.4023 3.88571 0.9H2.08571C1.09301 0.9 0.285706 1.7073 0.285706 2.7V16.2C0.285706 17.1927 1.09301 18 2.08571 18ZM2.08571 2.7H3.88571V4.5H12.8857V2.7H14.6857V16.2H2.08571V2.7ZM5.87201 8.8137L7.48571 10.4274L10.8994 7.0137L12.172 8.2863L7.48571 12.9726L4.59941 10.0863L5.87201 8.8137Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Todo</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className='inline-block group-hover:fill-indigo-500' width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.899109 3.6V5.4V16.2C0.899109 17.1927 1.70641 18 2.69911 18H15.2991C16.2918 18 17.0991 17.1927 17.0991 16.2V5.4V3.6C17.0991 2.6073 16.2918 1.8 15.2991 1.8H13.4991V0H11.6991V1.8H6.29911V0H4.49911V1.8H2.69911C1.70641 1.8 0.899109 2.6073 0.899109 3.6ZM15.3009 16.2H2.69911V5.4H15.2991L15.3009 16.2Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Calendar</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 8H7C7.553 8 8 7.552 8 7V1C8 0.448 7.553 0 7 0H1C0.447 0 0 0.448 0 1V7C0 7.552 0.447 8 1 8ZM2 2H6V6H2V2ZM17 0H11C10.447 0 10 0.448 10 1V7C10 7.552 10.447 8 11 8H17C17.553 8 18 7.552 18 7V1C18 0.448 17.553 0 17 0ZM16 6H12V2H16V6ZM7 18C7.553 18 8 17.553 8 17V11C8 10.447 7.553 10 7 10H1C0.447 10 0 10.447 0 11V17C0 17.553 0.447 18 1 18H7ZM2 12H6V16H2V12ZM15 11H13V13H11V15H13V17H15V15H17V13H15V11Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Kanban</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="17" viewBox="0 0 18 17" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2 1.8H8.4726L6.9363 0.2637C6.768 0.0945 6.5385 0 6.3 0H1.8C0.8073 0 0 0.8073 0 1.8V14.4C0 15.3927 0.8073 16.2 1.8 16.2H16.2C17.1927 16.2 18 15.3927 18 14.4V3.6C18 2.6073 17.1927 1.8 16.2 1.8ZM1.8 14.4V3.6H8.1H9H16.2L16.2018 14.4H1.8Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">File Manager</span>
                </div>

                <div className="grid grid-cols-6 gap-2 items-center  mr-3.5 group hover:bg-indigo-100 rounded-lg px-3.5 p-2.5">
                    <svg className="group-hover:fill-indigo-500" width="18" height="18" viewBox="0 0 18 18" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V2C18 0.897 17.103 0 16 0ZM16 2V5H2V2H16ZM2 16V7H16.001L16.002 16H2Z" />
                    </svg>
                    <span className="col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500">Pages</span>
                    <svg className='my-auto mr-0 ml-auto group-hover:fill-indigo-500' width="7" height="10" viewBox="0 0 7 10" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.41936 10L6.57142 5L1.41936 0L0.142853 1.23883L4.01841 5L0.142853 8.76117L1.41936 10Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}