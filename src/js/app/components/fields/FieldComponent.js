import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {componentMap} from 'componentMapping';

@componentMap('fieldComponent')
class FieldComponent extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
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
    this.props.onValueChange(this.props.name, value);
};

  get id() {
    const {id, type} = this.props;
    const randomId = `${type}_${'sdasd'}`;
    return id || randomId;
  }


  render() {
    const {type, label, value, className, inputClassName, placeholder} = this.props;
    const classes = cx('form-group', className);
    const inputClasses = cx('form-control', inputClassName);
    const id = this.id;
    return (
      <div className={classes}>
        <label htmlFor={id}> {label} </label>
        <input onChange={this.handleChange} type={type} id={id} placeholder={placeholder} value={value} className={inputClasses} />
      </div>
    );
  }
}

export default FieldComponent;