import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let val = event.target.value;
    if (event.target.type === 'number') {
      val = Number(val);
    }
    this.setState({
      [event.target.name]: val
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
        <Typography variant="body1" align="left" gutterBottom>
          Current balance: $500,000
        </Typography>
        <ValidatorForm onSubmit={this.handleSubmit}>
          <Paper style={{ padding: 16 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid>
                <TextField
                  onChange={this.handleChange}
                  id="outlined-required"
                  label="Ticker"
                  type="ticker"
                  name="ticker"
                  required={true}
                />
              </Grid>
              <Grid>
                <TextField
                  onChange={this.handleChange}
                  id="outlined-number"
                  label="Quantity"
                  type="number"
                  name="quantity"
                  required={true}
                />
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </ValidatorForm>
      </div>
    );
  }
}

export default BuyStockForm;
