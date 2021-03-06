import React , { useState } from 'react';
import {Paper, Stepper, Step, StepLabel, Typgography, CircularProgess, Divider, Button, Typography} from '@material-ui/core'
import useStyles from './styles'

const steps = ['Shipping address', 'Payment details']

const Checkout = () => {
    const [activeStep, setactiveStep] = useState(0);
    const classes = useStyles()

    const Form = () => activeStep  === 0 
        ? <AddressForm/>
        : <PaymentForm/>

    

    return (
        <AddressForm>
            <div className={classes.toolbar}/>
            <main className ={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'> Checkout </Typography>
                    <Stepper activeStep ={0} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>  
                            </Step>
                        ))}
                    </Stepper>
                        {activeStep === steps.length  ? <Confirmation /> : <Form/>}
                </Paper>
            </main>
        </AddressForm>
    )
}

export default Checkout
