import React from 'react'
import Header from './Header'
import MealDetails from './MealDetails'
import CustomerCharges from './CustomerCharges'
import MyEarningsInfo from './MyEarningsInfo'

class App extends React.Component {
  state = {
    mealDetails:{
      basePrice:0,
      taxRate:10,
      tipPercent:15,
      touched: false
    },
    charges:{
      subTotal:0,
      tip:0,
      total:0
    },
    error:{
      toggle:false
    },
    earnings:{
      tipTotal: 0,
      mealCount: 0,
      averageTip: 0
    }
  }

  handleInputChange=(e) => {    
    //is input a number??
    if(isNaN(e.target.value)===true){
      //Set Error
      this.setState({
        error:{message:'Please only input numbers', toggle:true},
        charges:{
          subTotal:'NaN',
          tip:'NaN',
          total:'NaN'
        }
      })      
    }else{
      //gets the element that is changing    
      let targetElement;
      switch (e.target.id){
        case 'base-price':
          targetElement='basePrice'
          break;
        case 'tax-rate':
          targetElement='taxRate'
          break;
        case 'tip-percent':
          targetElement='tipPercent'
          break;
          default:
      }

      //change that element's value in state to the input value
      let newMealDetails=this.state.mealDetails;
      newMealDetails[targetElement]=Number(e.target.value)
      newMealDetails.touched=true;

      //change the customer charges based off meal detail values
      let newCharges=this.state.charges;
      newCharges.subTotal=newMealDetails.basePrice+(newMealDetails.basePrice*(newMealDetails.taxRate/100));
      newCharges.tip=newMealDetails.basePrice*newMealDetails.tipPercent/100;
      newCharges.total=newCharges.subTotal+newCharges.tip;
  
      //update state
      this.setState({
        mealDetails:newMealDetails,
        charges:newCharges,
        error:{
          toggle:false
        }
      })      
    }    
  }

  //handle submit form
  handleSubmitForm = (e) => {
    e.preventDefault();

    //calculate tip total, meal count, average tip
    let newEarnings=this.state.earnings;
    newEarnings.tipTotal=newEarnings.tipTotal+this.state.charges.tip;
    newEarnings.mealCount++;
    newEarnings.averageTip=newEarnings.tipTotal/newEarnings.mealCount;

    //set tip total, meal count, average tip
    this.setState({
      earnings:newEarnings
    })

    //reset form
    let newMealDetails=this.state.mealDetails;
    newMealDetails.touched=false;
    this.setState({
      mealDetails:newMealDetails
    })
    e.target.closest('form').reset()
  }

  //handle cancel form
  handleCancelForm = (e) => {
    //reset form
    let newMealDetails=this.state.mealDetails;
    newMealDetails.touched=false;
    this.setState({
      mealDetails:newMealDetails
    })
    e.target.closest('form').reset()
  }

  //handle reset
  handleResetClick = () => {
    this.setState({
        mealDetails:{
          basePrice:0,
          taxRate:10,
          tipPercent:15,
          touched: false
        },
        charges:{
          subTotal:0,
          tip:0,
          total:0
        },
        error:{
          toggle:false
        },
        earnings:{
          tipTotal: 0,
          mealCount: 0,
          averageTip: 0
        }
    })
    document.getElementById('meal-details-form').reset()
  }


  render(){
    return (
      <div className='App'>
        <Header />
        <main>
          <div className='left'>
            <MealDetails mealDetails={this.state.mealDetails} error={this.state.error} handleSubmitForm={this.handleSubmitForm} handleInputChange={this.handleInputChange} handleCancelForm={this.handleCancelForm}/> 
          </div>
          <div className='right'>
            <CustomerCharges charges={this.state.charges}/>
            <MyEarningsInfo earnings={this.state.earnings}/>
            <div className='button-container'>
              <button onClick={this.handleResetClick} type='button'>Reset</button>
            </div>
          </div>
          
        </main>


      </div>
    )
  }
}

export default App