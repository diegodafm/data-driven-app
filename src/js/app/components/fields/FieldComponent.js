import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class FieldComponent extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  handleChange = evt => {
    const value = evt.target.value;
    this.props.onValueChange(value);
};

  get id() {
    const {id, type} = this.props;
    const randomId = `${type}_${'sdasd'}`;
    return id || randomId;
  }


  render() {
    const {type, label, value, className, inputClassName, placeholder} = this.props;
    const classes = cx('form-group', className);
    const id = this.id;
    return (
      <div className={classes}>
        <label htmlFor={id}> {label} </label>
        <input onChange={this.handleChange} type={type} id={id} placeholder={placeholder} value={value} className={inputClassName} />
      </div>
    );
  }
}