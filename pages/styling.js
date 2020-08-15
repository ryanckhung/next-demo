// http://localhost:3001/styling

const styleA = {
  color: "red",
};

const Styling = () => (
  <div>
    <h1 style={styleA}>Styling</h1>
    <p>Adding CSS</p>
    <div id="sub-title">ID styling</div>

    <style jsx>{`
      p {
        color: green;
      }
      #sub-title {
        color: blue;
        border: 1px solid blue;
      }
    `}</style>
  </div>
);

export default Styling;
