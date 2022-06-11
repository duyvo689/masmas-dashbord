
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group F', value: 7 },
    { name: 'Group F', value: 5 },
    { name: 'Group F', value: 3 },
    { name: 'Group F', value: 0 },
];

export default class ScoreChart extends PureComponent {
    render() {
        return (
            <>
                <div className="flex w-full flex-col items-center justify-center p-6">
                    <p className="text-sm text-gray-500">Your score is</p>
                    <h3 className="italic font-thin text-gray-400 text-lg">Awesome</h3>

                    <ResponsiveContainer >
                        <div className="w-full h-44 relative mt-2 flex items-center justify-center">
                            <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    startAngle={220}
                                    endAngle={0}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={90}
                                    innerRadius={70}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                />
                            </PieChart>
                            <div className="flex items-center justify-center flex-col absolute -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4">
                                <p className='text-gray-400 font-thin italic text-4xl'>78</p>
                                <p className='font-thin text-xs text-gray-500'>Out of 100</p>
                            </div>
                        </div>
                    </ResponsiveContainer>
                    <div className="relative items-center justify-center flex flex-col bottom-0">
                        <p className="text-sm text-gray-400">Your score is based on the last</p>
                        <p className="text-sm text-gray-600 font-normal mt-1 mb-2">287 Transactions</p>
                        <div className="btn">View my Account</div>
                    </div>
                </div >
            </>
        );
    }
}


{/* 
                    


                    */}