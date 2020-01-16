function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
    return (
      <div className="comment">
        <UserInfo user={props.author} />
        <div className="comment-text">{props.text}</div>
        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>
      
    );
  }

 function Image (props){
   return( <img
    className="avatar"
    src={props.next.avatarUrl}
    alt={props.next.name}
  />
   );
 }

function UserName (props){
    return(
        <div className="userInfo-name">
            {props.next.name}
        </div>
    );
}

 function UserInfo(props){
    return( 
    <div className="userInfo">
        <Image next={props.user}/>
        <UserName next={props.user}/>
    </div>
    );
 };

 
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


/*
const Welcome = (props) => {
    console.log(props);
    return <h1>Hello, {props.name} or the obj. as a string {JSON.stringify(props)}!</h1>
}

const App = ()=>{
    return(
        <div>
             <Welcome name="Nessa" />
             <Welcome name="Christiane" />
             <Welcome name="Silke" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

/*
function buildGreeting(animal) {
    return animal.firstname + ' ' + animal.lastname;
};

const animal = {
    firstname: 'Mister',
    lastname: 'Hamster'
};

const greeting = 
    < h1 >
    Hello, {buildGreeting(animal)}! 
    </h1>


function clock(){
    const time = (
        <div> 
        <h1>Hello, {buildGreeting(animal)}!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
   ReactDOM.render(time, document.getElementById('root'));
}

setInterval(clock, 1000);
*/



/*componentDidMount() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Vienna&APPID=bf85999076e821bfa78ac3229d2f8d7d&units=metric')
    .then(function (response) {
        return response.json();
    })
    .then((responseJSON) => {
        this.weather({responseJSON.weather.main});
        return weather;
    }*/