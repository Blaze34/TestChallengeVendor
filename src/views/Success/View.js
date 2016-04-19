import React, { PropTypes } from 'react';

export default class SuccessView extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.context.router.push('/');
    }, 7000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <div className='text-center container-fluid'>
        <h1>Thanks for your purchase. We will release by SMS your receipt</h1>
      </div>
    );
  }
}
