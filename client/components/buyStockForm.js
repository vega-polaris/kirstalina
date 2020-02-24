import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Typography,
  CssBaseline,
  Paper,
  Grid,
  Button
} from '@material-ui/core';

class BuyStockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: '',
      quantity: null
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting form: ', this.state);
  }

  render() {
    return (
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h5" align="center" component="h2" gutterBottom>
          Buy stocks
        </Typography>
        <form>
          <Paper style={{ padding: 16 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid>
                <TextField
                  id="outlined-required"
                  label="Ticker"
                  type="ticker"
                  name="ticker"
                />
              </Grid>
              <Grid>
                <TextField
                  id="outlined-number"
                  label="Quantity"
                  type="quantity"
                  name="quantity"
                />
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    );
  }
}

export default BuyStockForm;
