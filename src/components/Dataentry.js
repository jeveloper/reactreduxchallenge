import React from 'react'


import Button from '@material-ui/core/Button';

import styled from '@emotion/styled'

import TextField from '@material-ui/core/TextField';
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'


const Intro = styled.p`
  font-size: large;
`

function Dataentry({ undo, cont, sendtext, currvalue, validentry, trimtext }) {
    return (
        <section>
            <Intro>
                Please enter valid entry:  </Intro>

            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Phone number" value={currvalue} onChange={sendtext} />
            </form>
            <p>
                <Button variant="contained" color="primary" onClick={undo}>UNDO</Button>
                &nbsp;<Button variant="contained" color="primary" disabled={!validentry} onClick={cont}>CONTINUE</Button>
                
            </p>

            <Comp1 validentry={validentry}></Comp1>
            <Comp2 validentry={validentry}></Comp2>
            <Comp3 currvalue={currvalue} trimtext={trimtext}></Comp3>
        </section >
    )
}



export default Dataentry
