import React from 'react';
import { NavLink } from 'react-router-dom';
import './calcFront.css';
import addExp from '../images/expenses.jpg';
import addInc from '../images/income.jpg';
import findExp from '../images/findExp.jpg';

import { ManageContainer, ManageH1, ManageWrapper, ManageCard, ManageIcon, ManageH2} from './calcFrontElements'


function calcFront() {
    return (
        <div className="manageStaff">
       

            <ManageContainer id='manageexpenses'>
                <ManageH1>Calculation Status</ManageH1>
                <ManageWrapper>
                    <ManageCard>
                        <ManageH2>FIND TOTAL EXPENSES</ManageH2>
                        <ManageIcon src={addExp} />
                        <h4><NavLink to='/Calculations/calcExpenses'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>FIND TOTAL INCOME</ManageH2>
                        <ManageIcon src={addInc} />
                        <h4><NavLink to='/Calculations/calcIncome'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>PROFIT OR LOST</ManageH2>
                        <ManageIcon src={findExp} />
                        <h4><NavLink to='/Calculations/calcProfitLost'>Continue</NavLink></h4>

                    </ManageCard>
                
                </ManageWrapper>
            </ManageContainer>


        </div>
    );
}

export default calcFront;