import React, { Component } from 'react';
import axios from 'axios';


export default class calcProfitLost extends Component {
  constructor(props) {
    super(props);

    
    this.onChangeI1 = this.onChangeI1.bind(this);
    this.onChangeE1 = this.onChangeE1.bind(this);
    this.onChangeI2 = this.onChangeI2.bind(this);
    this.onChangeE2 = this.onChangeE2.bind(this);
    this.onChangeI3 = this.onChangeI3.bind(this);
    this.onChangeE3 = this.onChangeE3.bind(this);
    this.onChangeI4 = this.onChangeI4.bind(this);
    this.onChangeE4 = this.onChangeE4.bind(this);
    this.onChangeTotalInc = this.onChangeTotalInc.bind(this);
    this.onChangeTotalExp = this.onChangeTotalExp.bind(this);
    this.onChangeProfLst = this.onChangeProfLst.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    
  
        i1:'',
        e1:'',
        i2:'',
        e2:'',
        i3:'',
        e3:'',
        i4:'',
        e4:'',
        totalInc:'',
        totalExp:'',
        ProfLst:'',
    }
}



onChangeI1(e) {
  this.setState({
      i1: e.target.value
  });
}

onChangeE1(e) {
    this.setState({
        e1: e.target.value
    });
}

onChangeI2(e) {
  this.setState({
      i2: e.target.value
  });
}

onChangeE2(e) {
    this.setState({
        e2: e.target.value
    });
}

onChangeI3(e) {
  this.setState({
      i3: e.target.value
  });
}

onChangeE3(e) {
    this.setState({
        e3: e.target.value
    });
}

onChangeI4(e) {
  this.setState({
      i4: e.target.value
  });
}

onChangeE4(e) {
    this.setState({
        e4: e.target.value
    });
}

onChangeTotalInc(e) {
  this.setState({
      totalInc: e.target.value
  });
}

onChangeTotalExp(e) {
    this.setState({
        totalExp: e.target.value
    });
}

onChangeProfLst(e) {
  this.setState({
    ProfLst: e.target.value
  });
}


onSubmit(e) {
    e.preventDefault();

    const calcProfLst = {
        i1: this.state.i1,
        e1: this.state.e1,
        i2: this.state.i2,
        e2: this.state.e2,
        i3: this.state.i3,
        e3: this.state.e3,
        i4: this.state.i4,
        e4: this.state.e4,
        totalInc: this.state.totalInc,
        totalExp: this.state.totalExp,
        ProfLst: this.state.ProfLst,
        
    }

    console.log(calcProfLst);

    axios.post('http://localhost:5000/calcProfLst/add', calcProfLst)
        .then(res => console.log(res.data));

    window.location = '/';
}



    render() {
        return (
         
          <div className='container'>
          <form className="row gy-2 gx-3 align-items-center" onSubmit={this.onSubmit}>
              
              <div >
                        <label  for="autoSizingInput">Grand Total of All Income</label>
                        <input type="text"
                            placeholder="Grand Total Income"
                            required
                            className="form-control"
                            value={(parseInt(this.state.i1)+parseInt(this.state.i2)+parseInt(this.state.i3)+parseInt(this.state.i4))}
                            onClick={this.total}
                            onChange={this.onChangeTotalInc}
                        />
                    </div>
              
              <div >
                  <label  for="autoSizingInput">Grand Total of All Expenses</label>
                  <input type="text"
                      placeholder="Grand Total Expenses"
                      required
                      className="form-control"
                      value={(parseInt(this.state.e1)+parseInt(this.state.e2)+parseInt(this.state.e3)+parseInt(this.state.e4))}
                      onChange={this.onChangeTotalExp}
                  />
              </div>

              <div >
                  <label  for="autoSizingInput">Profit/Lost</label>
                  <input type="text"
                      placeholder="Profit or Lost"
                      required
                      className="form-control"
                      value={(parseInt(this.state.totalInc)-parseInt(this.state.totalExp))}
                      onChange={this.onChangeProfLst}
                  />
              </div>
              <br/> <br/>  <br/> <br/> 
              <div >
                  <input type="submit" value="Calculate" className="btn btn-primary" />
              </div>
          </form>
      </div>

                       


        )
    }
}