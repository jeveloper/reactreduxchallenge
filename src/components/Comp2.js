import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Switch from '@material-ui/core/Switch';

export default class Comp2 extends React.PureComponent {

    state = {
        show: true,
        checked: false
    }

    render() {
        const { validentry } = this.props
       
        return (

            <Card >
                {(this.state.show) && (<CardContent style={{ minWidth: 275 }}>
                    <Typography variant="h5" component="h2">
                        Component 2
                    </Typography>
                    <Typography variant="body2" component="p" >
                        Logical operator value: {(this.state.checked || validentry).toString()}   <Switch onChange={(event) => { this.setState({ checked: event.target.checked }) }} />
                    </Typography>
                </CardContent>)}

                <CardActions>
                    <Button size="small" onClick={(e) => this.setState({ show: !this.state.show })}>Show/Hide</Button>
                </CardActions>
            </Card>


        )
    }

}
