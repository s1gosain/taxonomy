import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions.jsx";
import Lineage from "./Lineage.jsx";

const API_URL = 'http://takehome.onecodex.com/api/taxonomy';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getInfoById = this.getInfoById.bind(this);
    this.getInfoByName = this.getInfoByName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.findLineage = this.findLineage.bind(this);
  }

  
  getInfoById(){
    axios.get(`${API_URL}/${this.state.query}`)
    .then(res => {
      this.setState({
      results: res.data
      });
      console.log('id', this.state.results)
    })
  }

  getInfoByName(){
    axios.post(`${API_URL}_search`, {
      query: this.state.query
    })
    .then(res => {
      this.setState({
        results: res.data
      });
      console.log('name', this.state.results)
    })
  }

  findLineage(x){
    console.log('recursion');
    while (x !== "1") {
      this.setState({
        query: x
      }, () => {
        this.getInfoById();
        x = this.state.results.parent;
        console.log('new parent id', x)
      })
    }
  }

  handleClick(e){
    const target = e.target.id;
    console.log('target id', target);
    //first make this ID the query string 
    this.setState({
      query: target
    }, () => {
      console.log('results parent', this.state.results.parent)
      this.findLineage(this.state.results.parent);
    })
}

  handleInputChange(event){
    this.setState({
      query: event.target.value
    }, () => {
      if (this.state.query){
        //check if numerical (i.e. id)
        if(/^[0-9]+$/.test(this.state.query)) {
          this.getInfoById();
        }
        //if name, need to make post request to API
        if(/^[a-zA-Z\s]*$/.test(this.state.query)) {
          this.getInfoByName();
        }

    }})
  }

  render() {
    return (
      <div>
        <form>
         <input
            placeholder="Type your search here"
           onChange={this.handleInputChange}
          />
         <Suggestions results={this.state.results} handleClick={this.handleClick}/>
        </form>
        {/* <Lineage /> */}
      </div>
    )
  }
}

export default Search;