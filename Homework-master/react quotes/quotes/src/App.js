import React from 'react';

function Button (props) {
    return <button type="button" onClick={props.click} >{props.text} </button>;
}

class FirstApi extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            quotes: false,
            random: false,
            index: 0,
            search: false,
            arr:false
        }
        
  }
 random = () => {
        let numb = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
      //  let arr= this.state.quotes;
    this.setState({random: numb,
                    index: 0});
    }
index = () =>{
    let index= this.state.index;
    index += 5;
    this.setState({index: index})
}
search = (event) => {
   let searchInput = event.target.value
   console.log(searchInput);
   this.setState({search: searchInput})
   
}
handleSearch = () =>{
    let arr = this.state.quotes;
    let newArr = [];
    let search = this.state.search;
    console.log(this.state.search);
    for(let i=0; i < this.state.search.length; i++){
      /*   var n = search[i].toLocaleLowerCase();
        var s = arr */
        if(arr.indexOf(search) != -1){
            newArr.push(arr[i]);}
    }
    console.log('newArr:', newArr)
}

  componentDidMount() {
    
    const url = 'https://programming-quotes-api.herokuapp.com/quotes/lang/en';
  
    fetch(url)
   
        .then (response => response.json())  
        .then (data => this.setState({quotes: data}));
        } 

  render() {
    let a = this.state.random
    let b = this.state.index
    
   if (a === false && b === 0){
   return ( <div>
                <input type="text" onChange={this.search} ></input> <Button click={this.handleSearch} text='DONT TOUCH does not work - search'/>
                <Button click={this.random} text='Random' /> 
                <Button click={this.index} text='get me 5' /> 
            </div>);
   } else if (a !== false && b === 0){
    return (
        <div>
        {console.log('blah', a)} 
        { this.state.quotes &&  <ListContainer map='2'quotes={this.state.quotes[a]} />} 
        <input type="text"></input> <Button text='DONT TOUCH does not work - search' />
        <Button click={this.random} text='Random' />
        <Button click={this.index} text='get me 5' />
        </div>
      );
    } else if ( b !== 0){ 
        return (
            <div>
            {console.log('imdiv:', this.state.index)}
            { this.state.quotes &&  <ListContainer map='0' quotes={this.state.quotes} index={this.state.index} />} 
            <Button click={this.random} text='Random' />
            <Button click={this.index} text='get me 5' />
            </div>)
    }
  }
}

const Lists = props => {
    const quotes = props.quotes;
    const map = props.map;
    const index = props.index;
    const start = index-5;
    ;
    console.log('entrylist:', props.quotes);
    if (map > 1){
        console.log('lists:', map); 
    const listItems = <ListItem key={quotes.id} author={quotes.author} quote={quotes.en} />;
    
    return <ul>{listItems}</ul>;
    }
    else{
       console.log('listsindex:', quotes);
       let arr = quotes;
        let newArr= arr.slice(start, index)
        
        /* const listItems = quotes.filter(quote => (quotes.index<5;
            <ListItem key={quote.id} author={quote.author} quote={quote.en} /> ) */
           
            const listItems = newArr.map(quote => (
                <ListItem key={quote.id} author={quote.author} quote={quote.en} />
              ));
              return <ul>{listItems}</ul>;
    }
};
  const ListItem = props => {
    const { quote, author } = props;
    console.log('listItem:',props)
    return (
      <li>
        <span>{quote}</span>
        <span>
          {""} - <strong>{author}</strong>
        </span>
      </li>
    );
  };
  const ListContainer = props => {
    return <Lists map={props.map} quotes={props.quotes} index={props.index} />;
  };

  


export default FirstApi;