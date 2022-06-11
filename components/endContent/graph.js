import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 400,
        pv: 240,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 1600,
        pv: 1638,
        amt: 210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 1300,
        amt: 1290,
    },
    {
        name: 'Page D',
        uv: 7280,
        pv: 3508,
        amt: 2600,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 2500,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },

];

export default class Graph extends PureComponent {
    render() {
        return (
            <>
                <div className=' flex justify-between px-6 pt-6'>
                    <h3 className='font-thin text-lg italic text-gray-400'>For Business Sharks</h3>
                    <svg className='hover:hover:fill-slate-700 cursor-pointer transform hover:scale-110' width='4' height='15' viewBox='0 0 4 15' fill='#8592A3' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z' />
                    </svg>
                </div>
                <div className='flex gap-10 p-6'>
                    <div className='flex items-center gap-3'>
                        <img className='p-2 rounded-md bg-orange-100' src='./img/icon-wallet.svg' alt='' />
                        <span>
                            <p className='text-sm italic font-thin text-gray-400'>$2.54k</p>
                            <p className='text-xs text-gray-500'>Wallet</p>
                        </span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <img className='p-2 rounded-md bg-gray-100' src='./img/icon-paypal.svg' alt='' />
                        <span>
                            <p className='text-sm italic font-thin text-gray-400'>$4.21k</p>
                            <p className='text-xs text-gray-500'>Paypal</p>
                        </span>
                    </div>
                </div>
                <ResponsiveContainer width='100%' height='50%' >
                    <LineChart width={20} height={20} data={data}>
                        <Line type='monotone' dataKey='pv' stroke='#fb923c' strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>

                {/* <XAxis dataKey='name' />
                    <YAxis /> */}

                <div className='flex justify-between px-6 pb-6 pt-6 items-center'>
                    <div className='text-xs text-gray-400'>
                        <p>You have done 57.6% more sales.</p>
                        <p className='leading-8'>Check your new badge in your profile.</p>
                    </div>
                    <img className='cursor-pointer hover:bg-orange-200 rounded-md transform hover:scale-110' src='./img/icon-next.svg' alt='' />
                </div>
            </>
        );
    }
}
