import React from 'react'
import SectionHeader from './SectionHeader'

const CustomerCharges =(props)=>{
    const {subTotal,tip,total} = props.charges


    return (
        <div className='customer-charges-container'>
            <SectionHeader header='Customer Charges' />
            <hr />
            <section>
                <div className='charges-line'>
                    <div className='charges-text'>Subtotal</div>
                    <div className='charges-value'>{subTotal}</div>                        
                </div>
                <div className='charges-line'>
                    <div className='charges-text'>Tip</div>
                    <div className='charges-value'>{tip}</div>
                </div>
                <div className='charges-hr-container'>
                    <div className='charges-hr'></div>
                </div>
                <div className='charges-line'>
                    <div className='charges-text'>Total</div>
                    <div className='charges-value'>{total}</div>                        
                </div>
                
            </section>
        </div>
    )
}

export default CustomerCharges