import React, { Component, Fragment } from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    // const name = 'react~';
    const value = 1;
    return (
      <Fragment>
        <Counter />
        <MyName />
        <div style={style}> hi there </div>
        <div className="App">  React~~~ </div>
        {/* <div>
          Hello {name}!
        </div>
        <div>
          Bye
        </div> */}
        <div>
          {
            (function () {
              1 + 1 === 2
                ? (<div> correct!</div>)
                : (<div> wrong! </div>)
              if (value === 1) return (<div> one</div>);
              if (value === 2) return (<div> two</div>);
              if (value === 3) return (<div> three</div>);

            })()
          }
        </div>
        {/* <div>
        (() => {
          if (value === 1) return (<div>하나</div>);
          if (value === 2) return (<div>둘</div>);
          if (value === 3) return (<div>셋</div>);
        })()
        </div> */}
      </Fragment>

    )
  }
}
// function foo() {
//   var a = 'hello';
//   let a_ = 'hello~';
//   if (true) {
//     var a = 'bye';
//     let a_ = 'bye~';
//     console.log(a);
//     console.log(a_);
//   }
//   console.log(a);
//   console.log(a_);
// }
export default App;
