import React, { Component } from "react"; 
 
class Search extends Component { 
  state = { 
    search: "", 
    type: 'all',
  }; 
 
  handleKey = (e) => { 
    if (e.key === "Enter") { 
      this.props.searchMovies(this.state.search, this.state.type); 
    } 
  }; 
 
  handleFilter =(e)=>{ 
    this.setState( 
      ()=> ({type: e.target.dataset.type}), 
      () => {this.props.searchMovies(this.state.search,this.state.type)} 
    ) 
  } 
 
  render() { 
    return ( 
      <div className="row"> 
        <div 
          className="col s12" 
          style={{ display: "flex", alignItems: "center" }} 
        > 
          <input 
            className="validate" 
            placeholder="Search" 
            id="search" 
            type="search" 
            value={this.state.search} 
            onChange={(e) => this.setState({ search: e.target.value })} 
            onKeyDown={this.handleKey} 
          /> 
          <button 
            className="waves-effect waves-light btn-small #b71c1c red darken-4" 
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)} 
          > 
            ПОИСК 
          </button> 
        </div> 
        <div> 
            <label> 
                <input  
                className="with-gap"  
                name="type"  
                type="radio" 
                data-type="all" 
                onChange={this.handleFilter} 
                checked={this.state.type === 'all'} /> 
                <span>ALL</span> 
            </label> 
            <label> 
                <input  
                className="with-gap"  
                name="type"  
                type="radio"  
                data-type="movie" 
                onChange={this.handleFilter} 
                checked={this.state.type === 'movie'}/> 
                <span>MOVIES</span> 
            </label> 
            <label> 
                <input  
                className="with-gap"  
                name="type"  
                type="radio" 
                data-type="series" 
                onChange={this.handleFilter} 
                checked={this.state.type === 'series'} /> 
                <span>SERIES</span> 
            </label> 
            <label> 
                <input  
                className="with-gap"  
                name="type"  
                type="radio" 
                data-type="game" 
                onChange={this.handleFilter} 
                checked={this.state.type === 'game'} /> 
                <span>GAMES</span> 
            </label> 
        </div> 
      </div> 
    ); 
  } 
} 
 
export { Search };