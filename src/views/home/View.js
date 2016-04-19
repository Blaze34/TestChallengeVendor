import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

export default class HomeView extends React.Component {
  render () {
    return (
      <div className='text-center'>
        <h1>Welcome to our vending machine</h1>
        <Link className="btn btn-primary text-uppercase" to="/phone">Start now</Link>
      </div>
    );
  }
}
