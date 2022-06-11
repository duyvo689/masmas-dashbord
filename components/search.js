import { useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = 'none';
    };

    const handleBlur = () => {
        clickPoint.current.style.display = 'block';
    };


    let [isShowNotify, setShowNotify] = useState(false)

    let showNotification = () => {
        setShowNotify(!isShowNotify)
    }

    return (
        <div className='items-center my-3 bg-white rounded-lg flex w-full p-1.5'>
            {/* Button menu */}
            <div className='z-30 lg:hidden' onClick={props.showMenu}>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
            </div>

            <div className='relative w-full flex'>
                <div className='absolute top-3 left-3 items-center' ref={clickPoint}>
                    <svg className='w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd'></path></svg>
                </div>
                <input
                    type='text'
                    className='grow block p-2 pl-10  text-gray-900 bg-white rounded-lg border border-none outline-white focus:pl-3'
                    placeholder='Search Here...'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <div className='flex-none min-w-min mx-5 m-auto'>
                    <div className='flex items-center justify-center mx-auto'>
                        {/* flag */}
                        <Image className='cursor-pointer' src='/img/flag.png' alt='' width={24}
                            height={24} />
                        {/* dark light */}
                        <svg className='my-auto ml-5 cursor-pointer hover:fill-slate-700 transform hover:scale-110' width='18' height='19' viewBox='0 0 18 19' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd' d='M16.8678 10.9405C16.2585 11.1025 15.6294 11.1844 14.9985 11.1844C13.077 11.1844 11.2725 10.4374 9.91712 9.082C8.10992 7.2748 7.39802 4.6117 8.05952 2.1313C8.14232 1.8208 8.05322 1.4896 7.82642 1.2628C7.59962 1.036 7.26932 0.944198 6.95702 1.0306C5.42522 1.4401 4.02842 2.2438 2.91692 3.3544C-0.591283 6.8626 -0.591283 12.5731 2.91692 16.0831C4.61702 17.7832 6.87782 18.7201 9.28172 18.7201C11.6856 18.7201 13.9455 17.7841 15.6447 16.084C16.7571 14.9707 17.5617 13.5721 17.9694 12.0421C18.0522 11.7316 17.9622 11.4004 17.7354 11.1736C17.5086 10.9459 17.1765 10.8559 16.8678 10.9405ZM14.373 14.8114C13.0131 16.1713 11.205 16.9201 9.28262 16.9201C7.35932 16.9201 5.55122 16.1704 4.19042 14.8105C1.38422 12.0034 1.38422 7.435 4.19042 4.6279C4.73222 4.0861 5.35862 3.6361 6.04442 3.2932C5.84462 5.8897 6.77702 8.488 8.64542 10.3564C10.5066 12.2185 13.0797 13.1644 15.7086 12.9583C15.3648 13.6414 14.9139 14.2687 14.373 14.8114Z' />
                        </svg>
                        {/* menu */}
                        <svg className='my-auto ml-5 cursor-pointer hover:fill-slate-700 transform hover:scale-110' width='18' height='18' viewBox='0 0 18 18' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd' d='M7 0H1C0.448 0 0 0.448 0 1V7C0 7.552 0.448 8 1 8H7C7.552 8 8 7.552 8 7V1C8 0.448 7.552 0 7 0ZM6 6H2V2H6V6ZM11 8H17C17.553 8 18 7.552 18 7V1C18 0.448 17.553 0 17 0H11C10.447 0 10 0.448 10 1V7C10 7.552 10.447 8 11 8ZM12 2H16V6H12V2ZM0 17C0 17.552 0.448 18 1 18H7C7.552 18 8 17.552 8 17V11C8 10.448 7.552 10 7 10H1C0.448 10 0 10.448 0 11V17ZM2 12H6V16H2V12ZM10 17C10 17.552 10.447 18 11 18H17C17.553 18 18 17.552 18 17V11C18 10.448 17.553 10 17 10H11C10.447 10 10 10.448 10 11V17ZM12 12H16V16H12V12Z' />
                        </svg>
                        {/* notification */}
                        <div className='relative'>
                            <svg className='mb-2 my-auto mx-5 cursor-pointer hover:fill-slate-700 transform hover:scale-110' onClick={showNotification} width='27' height='28' viewBox='0 0 27 28' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                                <path fillRule='evenodd' clipRule='evenodd' d='M15.6858 20.4274V17.2C15.6858 14.3047 13.7193 11.8657 11.0553 11.1322C10.7916 10.468 10.1472 10 9.38577 10C8.62437 10 7.97997 10.468 7.71627 11.1322C5.05227 11.8666 3.08577 14.3047 3.08577 17.2V20.4274L1.54947 21.9637C1.38027 22.132 1.28577 22.3606 1.28577 22.6V24.4C1.28577 24.8977 1.68807 25.3 2.18577 25.3H16.5858C17.0835 25.3 17.4858 24.8977 17.4858 24.4V22.6C17.4858 22.3606 17.3913 22.132 17.2221 21.9637L15.6858 20.4274ZM15.6858 23.5H3.08577V22.9726L4.62207 21.4363C4.79127 21.268 4.88577 21.0394 4.88577 20.8V17.2C4.88577 14.7187 6.90447 12.7 9.38577 12.7C11.8671 12.7 13.8858 14.7187 13.8858 17.2V20.8C13.8858 21.0394 13.9803 21.268 14.1495 21.4363L15.6858 22.9726V23.5ZM9.38577 28C10.5657 28 11.5521 27.2494 11.922 26.2H6.84957C7.21947 27.2494 8.20587 28 9.38577 28Z' />
                                <circle cx='18' cy='11' r='9' fill='#FF3E1D' />
                                <path d='M18.3142 5.601H19.7117V11.4835H21.2392V12.686H19.7117V15H18.3597V12.686H13.9592V11.464L18.3142 5.601ZM15.2722 11.4835H18.3402V7.369L15.2722 11.4835Z' fill='white' />
                            </svg>

                            <div className={isShowNotify ? `absolute w-48 h-60 bg-white right-3 rounded-lg shadow-2xl` : `hidden`}>
                                <ul className='p-6 cursor-pointer'>
                                    <li className='text-gray-400 text-lg'>Notification</li>
                                    <li className='text-gray-400 text-lg'>Notification</li>
                                    <li className='text-gray-400 text-lg'>Notification</li>
                                    <li className='text-gray-400 text-lg'>Notification</li>
                                    <li className='text-gray-400 text-lg'>Notification</li>
                                </ul>
                            </div>
                        </div>

                        {/* avatar */}
                        <Image className='p-xl bg-indigo-200 hover:bg-indigo-300 rounded-full cursor-pointer' width={38}
                            height={38} src='/img/avatar.png' alt='' />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SearchBar