import React, { Component } from "react";
import {
  type ErrorBoundaryProps,
  type ErrorBoundaryState,
} from "../../interfaces/ui";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error("Error Caught: ", error.message);
    return { hasError: true }; // Update the state so that next render will display fallback UI
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // We can log the error to a logger or other error reporting service
    console.error("Error Caught: ", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong, Please try again!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
