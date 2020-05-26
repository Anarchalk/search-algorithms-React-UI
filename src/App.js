import React, {Component} from 'react';
import './App.css';
import data from './Linear'

class App extends Component {
state = {
data:[],
num : '',
binum:'',
binaryResult: 0,
result:0
}


componentDidMount(){
  this.setState(data)
}

// indexOf = (value) => {
//     for (let i = 0; i < this.state.data.length; i++) {
//         if (this.state.data[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// };

// handleChange =(e)=> {
//   this.setState({
//     num: e.target.value
//   })
// }

// handleSubmit=(e)=> {
//   e.preventDefault()
//   console.log(this.state.num)
//   console.log(this.indexOf(parseInt(this.state.num)))
  
//   this.setState({
//     result: this.indexOf(parseInt(this.state.num))
//   },() => console.log(this.state.result) )

// }

/************************BINARY**********/

binarySearch = (data, value, start, end) => {
  let dataB = data.sort();
  //console.log(dataB)
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? dataB.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = dataB[index];
  this.setState({binaryResult:this.state.binaryResult +1})
  console.log(start, end);
  if (item === value) {
      return index;
  }
  else if (item < value) {
      return this.binarySearch(dataB, value, index + 1, end);
  }
  else if (item > value) {
      return this.binarySearch(dataB, value, start, index - 1);
  }
};


binaryHandleChange =(e)=> {
  this.setState({
    binum: e.target.value
  })
}
binaryHandleSubmit =(e)=> {
  e.preventDefault()
  console.log(this.state.binum)
  
  this.setState({
    result: this.binarySearch(this.state.data, parseInt(this.state.binum)) 
  })
}

  render() {
    return (
      <div className="App">
      
          <p>SEARCH ALGO</p>
          {/* <form onSubmit ={this.handleSubmit} >
            <label>find number</label>
            <input 
            onChange={this.handleChange}
            type='number'
            max = '98'
            min = '1'
            name='num'
            value={this.state.num}
            />
            <button type='submit' value='submit'>find</button>
          </form>
        {
          this.state.result >= 0 ? 
          <p>{this.state.result +1} searches</p> : 
          <p>item not found</p>
        } */}
        <form onSubmit ={this.binaryHandleSubmit} >
            <label>find</label>
            <input 
            onChange={this.binaryHandleChange}
            type='number'
            max = '98'
            min = '1'
            name='binum'
            value={this.state.binum}
            />
            <button type='submit' value='submit'>find</button>
          </form>
          {
          this.state.binaryResult >= 0 ? 
          <p>{this.state.binaryResult +1} searches</p> : 
          <p>item not found</p>
        }
      </div>
    );

  }
}

export default App;
