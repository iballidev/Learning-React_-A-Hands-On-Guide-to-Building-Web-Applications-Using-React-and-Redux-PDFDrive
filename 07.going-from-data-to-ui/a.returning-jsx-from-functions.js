var Circle = React.createClass({
    render: function () {
      var circleStyle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: this.props.bgColor,
        borderRadius: "50%",
        width: 100,
        height: 100,
      };
  
      return <div style={circleStyle}></div>;
    },
  });
  
//   var theCircle = <Circle bgColor="#F9C240" />; // declaring JSX outside of ReactDom.render()
  function showCircle() {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random() * colors.length);
   
    // return a Circle with a randomly chosen color
    return <Circle bgColor={colors[ran]}/>;
  };
  
  ReactDOM.render(
    <div>
      {/* <Circle bgColor="#F9C240" /> */}
      {/* {theCircle} */}
      {showCircle()}
    </div>,
  
    document.querySelector("#container")
  );
  