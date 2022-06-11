import FinanceSummary from './betweenContent/financeSummary'
import ScoreChart from './betweenContent/scoreChart'

export default function Between() {
    return (
        <>
            <div className='md:col-span-2 col-span-1 item-container'>
                <FinanceSummary />
            </div>
            <div className='md:col-span-1 md:block hidden item-container'>
                <ScoreChart />
            </div>
        </>
    )
}