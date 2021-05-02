import React, { Component } from 'react';
import Layout from './components/Layout.js';
import './styles.css';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pictures: [],
      value: ''
    };
    this.OnSearch= this.OnSearch.bind(this);
    this.OnSubmit= this.OnSubmit.bind(this);
    this.OnKeyPress= this.OnKeyPress.bind(this);

  }

  OnSearch(event){
	this.setState({
		value: event.target.value


	});
}

  OnKeyPress(event){
  	if(event.keyCode==13)
  		this.OnSubmit(event);
}
	

OnSubmit(event){
	 var tag=this.state.value;
		//alert('Search '+this.state.value);
		event.preventDefault();

		fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&text=:searchText&media=photos&per_page=15&page=1&format=json&nojsoncallback=1&tags='+tag)
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      //alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
           srcPath
        )
      })
      this.setState({pictures: picArray});
      //alert("pics loaded");
    }.bind(this))
	
}


  render() {

    return (
    	<div class="wrap">
    	<div class="search">
    	<input width="100%" class="searchTerm" placeholder="Search free high resolution photos" type="text" value={this.state.value} onChange={this.OnSearch} onKeyDown={this.OnKeyPress}/>
    	<button type="submit" class="searchButton" onClick={this.OnSubmit}>
    	<i className="fa fa-search"></i>
    	</button>
    	</div>
    	<Layout pictures={this.state.pictures}/>
    	</div>
    	);
}
}

export default App;