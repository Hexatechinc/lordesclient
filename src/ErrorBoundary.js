import {Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    render() {
        if (this.state.hasError) {
            //render custom fallback UI
            return <h1>Something went Wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary