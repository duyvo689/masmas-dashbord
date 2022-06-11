import React from 'react'
import { useState } from 'react'

export default function Dashboard(props) {

    let [isItem, setIsItem] = useState(false)
    let showItem = () => {
        setIsItem(!isItem)
    }
    console.log(props);
    return (
        < div className='ml-4 mt-4 cursor-pointer' >
            <div className={isItem ? `items-center px-3.5 py-2.5 mr-2.5 rounded-lg grid grid-cols-6 gap-2 bg-indigo-100` : `items-center px-3.5 py-2.5 mr-2.5 rounded-lg grid grid-cols-6 gap-2 group hover:bg-indigo-100`} onClick={showItem}>
                <svg className={isItem ? `inline-block fill-indigo-500` : `inline-block group-hover:fill-indigo-500`} width='18' height='18' viewBox='0 0 18 18' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M0.899987 9.9H1.79999V11.7V16.2C1.79999 17.1927 2.60729 18 3.59999 18H6.29999H11.7H14.4C15.3927 18 16.2 17.1927 16.2 16.2V11.7V9.9H17.1C17.4636 9.9 17.793 9.6804 17.9316 9.3447C18.0711 9.0081 17.9937 8.6211 17.7363 8.3637L9.63629 0.263704C9.28439 -0.0881963 8.71559 -0.0881963 8.36369 0.263704L0.263687 8.3637C0.00628722 8.6211 -0.0711128 9.0081 0.0683872 9.3447C0.206987 9.6804 0.536387 9.9 0.899987 9.9ZM7.19999 16.2V11.7H10.8V16.2H7.19999ZM8.99999 2.1726L14.4 7.5726V11.7L14.4009 16.2H12.6V11.7C12.6 10.7073 11.7927 9.9 10.8 9.9H7.19999C6.20729 9.9 5.39999 10.7073 5.39999 11.7V16.2H3.59999V11.7V9V7.5726L8.99999 2.1726Z' />
                </svg>
                <span className={isItem ? `col-span-4 font-normal text-sm text-indigo-500` : `col-span-4 font-normal text-sm text-gray-500 group-hover:text-indigo-500`}>Dashboards</span>
                <svg xmlns='http://www.w3.org/2000/svg' className={isItem ? `font-normal my-auto mr-0 ml-auto stroke-indigo-500` : `font-normal my-auto mr-0 ml-auto group-hover:stroke-indigo-500`} width='14' height='14' fill='none' viewBox='0 0 24 24' stroke='#8592A3' strokeWidth='3'>
                    <path strokeLinecap='round' strokeLinejoin='round' d={isItem ? `M19 9l-7 7-7-7` : `M9 5l7 7-7 7`} />
                </svg>
            </div>

            <div className={isItem ? `block` : `hidden`}>
                <div className='grid grid-cols-7 gap-3 items-center p-3.5 mr-3.5 hover:bg-slate-100 px-3.5 py-2.5 rounded-lg'>
                    <svg className='m-auto' width='6' height='6' viewBox='0 0 6 6' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M3 0C1.3458 0 0 1.3458 0 3C0 4.6542 1.3458 6 3 6C4.6542 6 6 4.6542 6 3C6 1.3458 4.6542 0 3 0Z' />
                    </svg>
                    <span className='col-span-6 font-normal text-gray-600 text-sm grow'>Analytics</span>
                </div>
                <div className='grid grid-cols-7 gap-3 items-center p-3.5 mr-3.5 hover:bg-slate-100 px-3.5 py-2.5 rounded-lg'>
                    <svg className='m-auto' width='6' height='6' viewBox='0 0 6 6' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M3 0C1.3458 0 0 1.3458 0 3C0 4.6542 1.3458 6 3 6C4.6542 6 6 4.6542 6 3C6 1.3458 4.6542 0 3 0Z' />
                    </svg>

                    <span className='col-span-6 font-normal text-gray-600 text-sm grow'>eCommerce</span>
                </div>
            </div>

            <div className='grid grid-cols-6 gap-2 items-center px-3.5 p-2.5 mr-3.5 group hover:bg-indigo-100 rounded-lg' onClick={() => { props.isMenu ? props.showMenu : 'click me' }}>
                <svg className='group-hover:fill-indigo-500 fill-gray-400' width='18' fill='#435971' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M16 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V2C18 0.897 17.103 0 16 0ZM16 2L16.001 6H12H10H2V2H16ZM2 8H10V16H2V8ZM12 16V8H16.001L16.002 16H12Z' />
                </svg>
                <span className='col-span-4 font-normal text-gray-500 text-sm grow group-hover:text-indigo-500'>Layouts</span>
                <svg className='my-auto mr-0 ml-auto group-hover:fill-indigo-500' width='7' height='10' viewBox='0 0 7 10' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M1.41936 10L6.57142 5L1.41936 0L0.142853 1.23883L4.01841 5L0.142853 8.76117L1.41936 10Z' />
                    <path fillRule='evenodd' clipRule='evenodd' d='M1.41936 10L6.57142 5L1.41936 0L0.142853 1.23883L4.01841 5L0.142853 8.76117L1.41936 10Z' fill='black' fillOpacity='0.1' />
                </svg>
            </div>

        </div >
    )
}