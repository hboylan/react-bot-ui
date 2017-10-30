import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DialogGroup from './DialogGroup';

class Dialog extends Component {
	scrollToBottom() {
		const end = ReactDOM.findDOMNode(this.scrollTarget);
		end.scrollIntoView({behavior: 'smooth'});
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	render() {
		let groups = [];
		let group, lastMsgIsUser;
		for (let msg of this.props.messages) {
			
			// next group
			if (lastMsgIsUser !== msg.isUser) {
				lastMsgIsUser = msg.isUser;
				group = {isUser: msg.isUser, messages: []};
				groups.push(group);
			}
			group.messages.push(msg.text);
		}

		// bot is typing
		if (this.props.isBotTyping) {
			const endIndex = groups.length - 1;
			if (groups[endIndex].isUser) {
				groups.push({isUser: false, messages: [null]});
			} else {
				groups[endIndex].messages.push(null);
			}
		}

		return (
			<section
				className="messages-wrapper"
				style={{height: `${this.props.dialogHeight}px`}}>
				<div className="messages">
					{groups.map((group, i) =>
						<DialogGroup
							key={i}
							group={group}
							isUserHidden={this.props.isUserHidden} />
					)}
					<div
						style={{ float: "left", clear: "both" }}
						ref={el => this.scrollTarget = el} />
				</div>
			</section>
		);
	}
}
export default Dialog;
