import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a constructor from News Component")
 }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
              <NewsItem title="myTitle" description="mydesc" imageUrl="" />
            </div>
            <div className="col-md-4">
              <NewsItem title="myTitle" description="mydesc"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="myTitle" description="mydesc"/>
            </div>
        </div>
        
        
      </div>
    )
  }
}

export default News
