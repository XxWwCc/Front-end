// var Letter = React.createClass({
// 	render:function () {
// 		return(
// 			<div className = "letter">
// 			{this.props.children}
// 			</div>
// 		);
// 	}
// });
// var myStyle ={
//     fontSize:100,
//     color:'#FF0000'
// };
// var d = document.querySelector("#example");
// var i=0;
// ReactDOM.render(
// 	<div>
// 	<Letter>{i == 1 ? '1' : '0' }</Letter>
// 	<h1 style = {myStyle}>hello React</h1>
// 	</div>,
// 	d
// )

var WebSite = React.createClass({
    render: function() {
      return (
        <div>
          <Name name={this.props.name} />
          <Link site={this.props.site} />
        </div>
      );
    }
  });

  var Name = React.createClass({
    render: function() {
      return (
        <h1>{this.props.name}</h1>
      );
    }
  });

  var Link = React.createClass({
    render: function() {
      return (
        <a href={this.props.site}>
          {this.props.site}
        </a>
      );
    }
  });

  ReactDOM.render(
    <WebSite name="菜鸟教程" site=" http://www.runoob.com" />,
    document.getElementById('example')
  );