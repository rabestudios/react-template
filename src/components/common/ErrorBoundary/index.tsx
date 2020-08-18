import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <div>Something went wrong</div>;
        }
        return children;
    }
}

export default ErrorBoundary;
