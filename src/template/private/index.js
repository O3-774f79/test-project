import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {test} from '../../user/UserActions'
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
class PrivateLayout extends Component {
    render() {
        const Component = this.props.component;
        const { route, user, userActions} = this.props
        return (
            <Grid container spacing={24}>
            <Grid item xs={4} md={2} lg={2} style={{backgroundColor:"red"}}>
                <h1>Private Layout</h1>
                <h2>Hello {user.name}</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/profile/posts'>Posts</Link></li>
                </ul>
                <button onClick={() => {userActions.logout()}}>Logout</button>
            </Grid>
            <Grid item xs={8} md={10} lg={10} style={{backgroundColor:"green"}}>
                <Component route={route}/>
                <Button variant="contained" color="primary" className={this.props.classes.button} onClick={() => this.props.dispatch(test())}>
        Primary
      </Button>
            </Grid>
            </Grid>
        );
    }
}
export default withStyles(styles)(PrivateLayout)