import React, {Component} from 'react'
import Button from '../components/Button'
import {connect} from 'react-redux'
import {incrementCount, decrementCount} from '../actions/index'



class CounterComponent extends Component{

handleButtonActionIncrement = () => {
  this.props.onIncrementClick(this.props.count)
}

handleButtonActionDecrement = () => {
  this.props.onDecrementClick(this.props.count)
}


render() {
  const {count}=this.props
  return(
    <div>
      <h1 data-testid="count"> Count: {count}</h1>
      <Button action={this.handleButtonActionIncrement} buttonTitle = "+" />
      <Button action={this.handleButtonActionDecrement} buttonTitle = "-" />
    </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {  
      dispatch(incrementCount(count))
    },
    onDecrementClick: (count) => {
      if(count !== 0) 
      dispatch(decrementCount(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)