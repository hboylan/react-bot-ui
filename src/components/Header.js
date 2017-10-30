import React, {Component} from 'react';

class Header extends Component {
	render(){
		return(
			<header onClick={this.props.onClick}
							style={this.props.onClick ? {cursor: 'pointer'} : {}}>
				<h1>{this.props.title}</h1>
			</header>
		);
	}
}
export default Header;
