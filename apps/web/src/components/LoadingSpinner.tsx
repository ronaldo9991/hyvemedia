const LoadingSpinner = () => (
  <div style={{ padding: "8px 0 28px" }}>
    <div className="loadingspinner" aria-hidden="true">
      <div id="square1" />
      <div id="square2" />
      <div id="square3" />
      <div id="square4" />
      <div id="square5" />
    </div>
  </div>
);

export default LoadingSpinner;
