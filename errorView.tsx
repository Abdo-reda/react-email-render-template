import * as React from "react";

export const ErrorViewComponent = ({ errorMsg }) => {
  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '1rem',
    },
    errorBox: {
      border: '1px solid red',
      borderRadius: '8px',
      backgroundColor: '#ffecec',
      color: '#b00020',
      padding: '1rem',
      wordWrap: 'break-word' as const,
    },
    heading: {
      fontSize: '1.5rem',
      margin: '0 0 1rem',
      color: '#b00020',
    },
    errorMsg: {
      fontSize: '1rem',
      margin: '0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.errorBox}>
        <h1 style={styles.heading}>Something Went Wrong!</h1>
        <p style={styles.errorMsg}>{errorMsg}</p>
      </div>
    </div>
  );
};

export default ErrorViewComponent;
