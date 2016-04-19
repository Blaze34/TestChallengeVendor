import React, { PropTypes } from 'react';
import connect from 'react-redux/lib/components/connect';
import { changeBalance, reset } from 'redux/modules/info';

export class BalanceView extends React.Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    changeBalance: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    window.billStacked = this.billStacked;
  }

  bills = [1, 2, 5, 10, 20, 50, 100];

  billStacked = (i) => {
    if(this.bills[i - 1] > 0) {
      this.props.changeBalance(this.bills[i - 1]);
    }
  };

  finish = () => {
    this.props.reset();
    this.context.router.push('/success');
  };

  render() {
    const bills = this.bills.map((v) => `$${v}`).join(' ');

    return (
      <div className='text-center container-fluid'>
        <h1>Please insert {bills} bills</h1>

        <h2>${this.props.balance} inserted</h2>

        <button className="btn btn-primary" type="button" onClick={this.finish}>Finish</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  balance: state.info.balance
});

export default connect(mapStateToProps, { changeBalance, reset })(BalanceView)
