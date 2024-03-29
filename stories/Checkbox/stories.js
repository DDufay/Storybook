import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

class CheckboxStateful extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    onCheckboxChange(value) {
        this.setState({ value });

        this.props.onCheckboxChange(value);
    };

    render() {
        return (
            <Checkbox
                value={this.state.value}
                onCheckboxChange={this.onCheckboxChange}
            >
                {this.props.children}
            </Checkbox>
        );
    }
}

storiesOf('Checkbox', module)
    .add('with checked', () => {
        const value = true;
        const children = text('label', 'My Checkbox Label');
        const onCheckboxChange = action('toggle');

        return (
            <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </CheckboxStateful>
        );
    })
    .add('with unchecked', () => {
        const value = false;
        const children = text('label', 'My Checkbox Label');
        const onCheckboxChange = action('toggle');

        return (
            <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </CheckboxStateful>
        );
    });