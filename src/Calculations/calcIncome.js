import React, { Component } from 'react';
import axios from 'axios';


export default class calcIncome extends Component {
    constructor(props) {
        super(props);

        this.onChangeDep1 = this.onChangeDep1.bind(this);
        this.onChangeI1 = this.onChangeI1.bind(this);
        this.onChangeDep2 = this.onChangeDep2.bind(this);
        this.onChangeI2 = this.onChangeI2.bind(this);
        this.onChangeDep3 = this.onChangeDep3.bind(this);
        this.onChangeI3 = this.onChangeI3.bind(this);
        this.onChangeDep4 = this.onChangeDep4.bind(this);
        this.onChangeI4 = this.onChangeI4.bind(this);
        this.onChangeTotalInc = this.onChangeTotalInc.bind(this);

        this.state = {
            dep1:'',
            i1:'',
            dep2:'',
            i2:'',
            dep3:'',
            i3:'',
            dep4:'',
            i4:'',
            totalInc:'',
        }
    }

    

    onChangeDep1(e) {
        this.setState({
            dep1: e.target.value
        });
    }

    onChangeI1(e) {
        this.setState({
            i1: e.target.value
        });
    }

    onChangeDep2(e) {
        this.setState({
            dep2: e.target.value
        });
    }

    onChangeI2(e) {
        this.setState({
            i2: e.target.value
        });
    }

    onChangeDep3(e) {
        this.setState({
            dep3: e.target.value
        });
    }

    onChangeI3(e) {
        this.setState({
            i3: e.target.value
        });
    }

    onChangeDep4(e) {
        this.setState({
            dep4: e.target.value
        });
    }

    onChangeI4(e) {
        this.setState({
            i4: e.target.value
        });
    }

    onChangeTotalInc(e) {
        this.setState({
            totalInc: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const calcInc = {
            
            dep1: this.state.dep1,
            i1: this.state.i1,
            dep2: this.state.dep2,
            i2: this.state.i2,
            dep3: this.state.dep3,
            i3: this.state.i3,
            dep4: this.state.dep4,
            i4: this.state.i4,
            totalInc: this.state.totalInc,
            
        }


        console.log(calcInc);

        axios.post('http://localhost:5000/calcInc/add', calcInc)
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
                            value={this.state.dep1}
                            onChange={this.onChangeDep1}
                        />
                        
                    </div>
                  
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.i1}
                            onChange={this.onChangeI1}
                        />
                    </div>
                    
                

                <br/> <br/>   

               
                   <div  >
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.dep2}
                            onChange={this.onChangeDep2}
                        />
                        
                    </div>
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.i2}
                            onChange={this.onChangeI2}
                        />
                    </div>
                    

                   

                <br/> <br/> 
                 
              
                <div  >
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.dep3}
                            onChange={this.onChangeDep3}
                        />
                        
                    </div>
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.i3}
                            onChange={this.onChangeI3}
                        />
                    </div>
                   
                    

               <br/> <br/> 

               
                   <div>
                        <label  for="autoSizingInput">Department </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.dep4}
                            onChange={this.onChangeDep4}
                        />
                        
                    </div>
                    <div >
                        <label class="visually-hidden" for="autoSizingInput"> </label>
                        <input type="text"
                            placeholder="Enter Total Income"
                            required
                            className="form-control"
                            value={this.state.i4}
                            onChange={this.onChangeI4}
                        />
                    </div>

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
                    <br/> <br/>  <br/> <br/> 
                    <div >
                        <input type="submit" value="Calculate" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}