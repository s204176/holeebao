import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    // TODO: Log to error reporting service in production (e.g., Sentry)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bao-white to-bao-cream px-6">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">🥟</div>
            <h1 className="text-4xl font-display font-bold text-gray-800 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-bao-gray-dark mb-8 text-lg">
              We're having trouble steaming things up right now.
              <br />
              Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 rounded-full bg-bao-golden hover:bg-bao-golden-light
                       text-white font-semibold transition-all duration-300
                       shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
