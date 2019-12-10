import React from 'react'


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default class Comp1 extends React.PureComponent {

    state = {
        show: true
    }
    render() {
        const { validentry } = this.props

        return (

            <Card >
                {(this.state.show) && (<CardContent style={{ minWidth: 275 }}>
                    <Typography variant="h5" component="h2">
                        Component 1
                    </Typography>
                    <Typography variant="body2" component="p" style={{ width: '200px', height: '100px', backgroundColor: (validentry ? 'green' : 'red') }}>

                    </Typography>
                </CardContent>)}

                <CardActions>
                    <Button size="small" onClick={(e) => this.setState({ show: !this.state.show })}>Show/Hide</Button>
                </CardActions>
            </Card>


        )
    }

}
