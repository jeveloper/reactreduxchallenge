import React from 'react'

import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class Comp3 extends React.PureComponent {

    state = {
        show: true,
        timer: null,


    }


    start(event) {
        if (event.target.checked) {
            this.setState({ timer: setInterval(this.props.trimtext, 1000) })

        } else {
            clearInterval(this.state.timer);
        }

    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }


    reverseString(str) {
        return str.split("").reverse().join("")
    }

    render() {
        const { currvalue } = this.props


        return (

            <Card >
                {(this.state.show) && (<CardContent style={{ minWidth: 275 }}>
                    <Typography variant="h5" component="h2">
                        Component 3
                    </Typography>
                    <Typography variant="body2" component="p" >
                        This will display text in reverse if its odd number.
                        {(currvalue.length % 2 === 0) && (<span>{this.reverseString(currvalue)}</span>)}
                        <br/>
                        Turn on to start reducing one letter at a time.
                        
                        <Switch onChange={this.start.bind(this)} />
                    </Typography>
                </CardContent>)}

                <CardActions>
                    <Button size="small" onClick={(e) => this.setState({ show: !this.state.show })}>Show/Hide</Button>
                </CardActions>
            </Card>


        )
    }

}
