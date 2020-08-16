import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  // For react to know it is error boundary component use
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  //Method 1
  static getDerivedStateFromError(error) {
    // any wrapped component or child throws an error then here we process the error
    return { hasError: true };
  }
  // Method 2
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return this.state.hasError ? (
      <div>Something went wrong</div>
    ) : (
      this.props.children
    );
  }
}
