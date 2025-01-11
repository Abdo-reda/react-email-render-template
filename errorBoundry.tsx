import React from "react";
import { Component } from "react";
import ErrorViewComponent from "./errorView";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMsg: "",
  };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromError(error) {
    let errorMsg = "";
    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (typeof error === "string") {
      errorMsg = error;
    }
    return { hasError: true, errorMsg: errorMsg };
  }

  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) {
		console.log('-0-00-', this.state.errorMsg)
      return <ErrorViewComponent errorMsg={this.state.errorMsg} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
