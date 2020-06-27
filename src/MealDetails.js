import React from 'react'
import SectionHeader from './SectionHeader'

const MealDetails =(props) => {
    return (
        <div className='meal-details-container'>
            <SectionHeader header='Enter the Meal Details'/>
            <hr />
            <section>
                <form id='meal-details-form' onSubmit={e=>props.handleSubmitForm(e)}>
                    <legend hidden>Meal Details Form</legend>
                    <fieldset>
                        <div className='form-line'>
                            <label htmlFor='base-price'>Base Meal Price:</label>
                            <div>$</div>
                            <input onChange={e=>props.handleInputChange(e)} placeholder='0.00' name='base-price' id='base-price'></input>
                        </div>
                        <div className='form-line'>
                            <label htmlFor='tax-rate'>Tax Rate:</label>
                            <div>%</div>
                            <input onChange={e=>props.handleInputChange(e)} placeholder='10' name='tax-rate' id='tax-rate'></input>
                        </div>
                        <div className='form-line'>
                            <label htmlFor='tip-percent'>Tip Percentage:</label>
                            <div>%</div>
                            <input onChange={e=>props.handleInputChange(e)} placeholder='15' name='tip-percent' id='tip-percent'></input>
                        </div>
                        {props.error.toggle===true&&<div>{props.error.message}</div>}
                        <div className='buttons-container'>
                            <button disabled={props.error.toggle || !props.mealDetails.touched} type='submit'>Submit</button>
                            <button onClick={e=>props.handleCancelForm(e)} type='button'>Cancel</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default MealDetails