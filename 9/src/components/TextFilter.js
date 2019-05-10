import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextFilter extends Component {
    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            value: ''
        }
    }

    handleOnChange({target: {value}}) {
        const { onChange } = this.props;
        this.setState({value});
        onChange(value);
    }

    render() {
        const { value } = this.state;
        return (
            <input
                name='textFilter'
                onChange={this.handleOnChange}
                type='text'
                value={value}
            />
        );

    }
};
        


TextFilter.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default TextFilter;
