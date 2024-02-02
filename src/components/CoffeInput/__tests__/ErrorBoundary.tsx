import React, {Component, ErrorInfo} from 'react';
import {View, Text} from 'react-native';

class ErrorBoundary extends Component {
  state = {hasError: false, error: null};

  static getDerivedStateFromError(error) {
    return {hasError: true, error};
  }

  componentDidCatch(error, errorInfo) {
    // Aqui você pode registrar o erro, enviar para um serviço de log, etc.
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong!</Text>
          {this.state.error && (
            <Text>Error details: {JSON.stringify(this.state.error)}</Text>
          )}
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
