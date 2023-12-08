/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        // TODO logging
    }

    render() {
        if (this.state.hasError) {
           return  <Link to="/error" />;
        }

        return this.props.children;
    }
}
