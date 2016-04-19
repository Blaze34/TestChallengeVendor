import React, { PropTypes } from 'react';
import connect from 'react-redux/lib/components/connect';
import { setPhone } from 'redux/modules/info';

import styles from './styles.scss';

export class PhoneView extends React.Component {
  static propTypes = {
    setPhone: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {phone: ''};
  }

  addDigit = (digit) => {
    this.setState({phone: `${this.state.phone}${digit}`});
  };

  deleteLast = () => {
    this.setState({phone: this.state.phone.slice(0, -1)});
  };

  enter = () => {
    this.props.setPhone(this.state.phone);
    this.context.router.push('/balance');
  };

  render() {
    return (
      <div className='text-center container-fluid'>
        <h1>Insert your phone#</h1>

        <div className={styles.inputGroup}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Phone number" value={this.state.phone}/>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.enter}>Enter ></button>
            </span>
          </div>
        </div>

        <div className="text-center">
          <div className="btn-group btn-group-lg">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) =>
              <button type="button" key={i} className="btn btn-default" onClick={() => this.addDigit(i)}>{i}</button>
            )}
          </div>
          {' '}
          <div className="btn-group btn-group-lg">
            <button className="btn btn-default" type="button" onClick={this.deleteLast}>{`< Delete`}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setPhone })(PhoneView)
