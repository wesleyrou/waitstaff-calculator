import React from 'react'
import SectionHeader from './SectionHeader'

const MyEarningsInfo = (props) => {
    return (
        <div className='my-earnings-info-container'>
            <SectionHeader header='My Earnings Info' />
            <hr />
            <section>
                <div className='earnings-line'>
                    <div className='earnings-text'>
                        Tip Total:
                    </div>
                    <div className='earnings-value'>
                        {props.earnings.tipTotal}
                    </div>
                </div>
                <div className='earnings-line'>
                    <div className='earnings-text'>
                        Meal Count:
                    </div>
                    <div className='earnings-value'>
                        {props.earnings.mealCount}
                    </div>
                </div>
                <div className='earnings-line'>
                    <div className='earnings-text'>
                        Average Tip Per Meal:
                    </div>
                    <div className='earnings-value'>
                        {props.earnings.averageTip}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyEarningsInfo