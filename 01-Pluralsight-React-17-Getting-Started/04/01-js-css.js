/*
/* Nerdy secret: You can use "less" below! Don't tell anybody... */

// .github-profile {
// 	margin: 1rem;
//   img {
//     width: 75px;
//   }
//   .info {
//     display: inline-block;
//     margin-left: 12px;
// 		.name {
//     	font-size: 1.25rem;
//       font-weight: bold;
//     }
//   }
// }

// form {
// 	border: thin solid #ddd;
//   background-color: #fbfbfb;
//   padding: 2rem;
//   margin-bottom: 2rem;
//   display: flex;
//   justify-content: center;
// }

// .header {
// 	text-align: center;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// }


class Card extends React.Component {
	render() {
  	return (
    	<div className="github-profile">
    	  <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
    	</div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Card />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);


