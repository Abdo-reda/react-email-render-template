const EmailImport = await import('./email');

function App() {
  return <EmailImport.default {...EmailImport.PreviewProps} />;
}

export default App;
