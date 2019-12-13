import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';
/*
function formatName(user) {
    return user.lastName + '. ' + user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'James',
    lastName: 'Bond'
  };
    

  function tick() {
    const element = (
      <div>
        <h1>My name is {formatName(user)}.</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 10000);
*/
/*const Welcome = props => {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Christiane" />;

ReactDOM.render(
    element,
    document.getElementById("root")
)

const App2 = () => {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  ReactDOM.render(
    <App2 />,
    document.getElementById('root')
  );
*/
/*function formatDate(date) {
    return date.toLocaleDateString();
}*/
/*const Avatar = (props) => {
    return (
        <img
            className="Avatar"
            src={props.bild.avatarUrl}
            alt={props.bild.name}
        />
    );
} 
const UserInfo = (props) => {
    return (        
        <div className="UserInfo">
            <Avatar bild={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

const Comment = (props) => {
return (
    <div className="Comment">
    <UserInfo user={props.author}/>
    <div className="Comment-text">{props.text}</div>
    <div className="Comment-date">
        {formatDate(props.date)}
    </div>
    </div>
);
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

  ReactDOM.render(
    <Comment 
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );
*/

/*const Clock = () => {
    return (
        <div>
            <h1>What time is it?</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}*/

class Clock extends React.Component {
    constructor (props) { //this syntax is always the exact same 
        super(props);     //is needed to inheritat the methods of the parent React.Component
        this.state = {    //state is reserved for this and this alone
            date: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>What is the time?</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>);
    }
}

ReactDOM.render(
    <div>
        <Clock />
    </div>,
    document.getElementById('root')
) 

/*const tick = () => {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    ) 
}

setInterval(tick, 1000);*/


//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
