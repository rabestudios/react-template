import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true
    }
  }

  render(): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <div>Something went wrong</div>
    }
    return children
  }
}

export default ErrorBoundary
