import React, { Component } from 'react';
import axios from 'axios';



export default class calcExpenses extends Component {
    constructor(props) {
        super(props);

        
        this.onChangeD1 = this.onChangeD1.bind(this);
        this.onChangeE1 = this.onChangeE1.bind(this);
        this.onChangeD2 = this.onChangeD2.bind(this);
        this.onChangeE2 = this.onChangeE2.bind(this);
        this.onChangeD3 = this.onChangeD3.bind(this);
        this.onChangeE3 = this.onChangeE3.bind(this);
        this.onChangeD4 = this.onChangeD4.bind(this);
        this.onChangeE4 = this.onChangeE4.bind(this);
        this.onChangeTotalExp = this.onChangeTotalExp.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        
      
            d1:'',
            e1:'',
            d2:'',
            e2:'',
            d3:'',
            e3:'',
            d4:'',
            e4:'',
            totalExp:'',
        }
    }

   

    onChangeD1(e) {
        this.setState({
            d1: e.target.value
        });
    }

    onChangeE1(e) {
        this.setState({
            e1: e.target.value
        });
    }

    onChangeD2(e) {
        this.setState({
            d2: e.target.value
        });
    }

    onChangeE2(e) {
        this.setState({
            e2: e.target.value
        });
    }

    onChangeD3(e) {
        this.setState({
            d3: e.target.value
        });
    }

    onChangeE3(e) {
        this.setState({
            e3: e.target.value
        });
    }

    onChangeD4(e) {
        this.setState({
            d4: e.target.value
        });
    }

    onChangeE4(e) {
        this.setState({
            e4: e.target.value
        });
    }

    onChangeTotalExp(e) {
        this.setState({
            totalExp: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const calcExp = {
            d1: this.state.d1,
            e1: this.state.e1,
            d2: this.state.d2,
            e2: this.state.e2,
            d3: this.state.d3,
            e3: this.state.e3,
            d4: this.state.d4,
            e4: this.state.e4,
            totalExp: this.state.totalExp,
            
        }

        console.log(calcExp);

        axios.post('http://localhost:5000/calcExp/add', calcExp)
            .then(res => console.log(res.data));

        window.location = '/';
    }


    render() {
        return (
            <div className='container'>
                <form className="row gy-2 gx-3 align-items-center" onSubmit={this.onSubmit}>
               

                    <div  >
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.d1}
                            onChange={this.onChangeD1}
                        />
                        
                    </div>
                  
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.e1}
                            onChange={this.onChangeE1}
                        />
                    </div>
                    
                

                <br/> <br/>   

               
                   <div  >
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.d2}
                            onChange={this.onChangeD2}
                        />
                        
                    </div>
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.e2}
                            onChange={this.onChangeE2}
                        />
                    </div>
                    

                   

                <br/> <br/> 
                 
              
                <div  >
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.d3}
                            onChange={this.onChangeD3}
                        />
                        
                    </div>
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.e3}
                            onChange={this.onChangeE3}
                        />
                    </div>
                   
                    

               <br/> <br/> 

               
                   <div>
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.d4}
                            onChange={this.onChangeD4}
                        />
                        
                    </div>
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Expenses"
                            required
                            className="form-control"
                            value={this.state.e4}
                            onChange={this.onChangeE4}
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
                    <br/> <br/>  <br/> <br/> 
                    <div >
                        <a href="/calcFront"><input type="submit" value="Calculate" className="btn btn-primary" /></a>
                    </div>
                </form>

                
            </div>
        )
    }
}