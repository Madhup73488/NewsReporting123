import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'; // Ensure correct import statement

const pageSize = 20;

class App extends Component {
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <LoadingBar
          color='rgb(240, 133, 8)'  // Correct color format
          progress={this.state.progress}
          height={3}
        />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<News setProgress={this.setProgress} key='general' pageSize={pageSize} country={'in'} category='general' header={'Headlines'} />}
            />
            <Route
              path='/business'
              element={<News setProgress={this.setProgress} key='business' pageSize={pageSize} country={'in'} category='business' header={'Business'} />}
            />
            <Route
              path='/entertainment'
              element={<News setProgress={this.setProgress} key='entertainment' pageSize={pageSize} country={'in'} category='entertainment' header={'Entertainment'} />}
            />
            <Route
              path='/health'
              element={<News setProgress={this.setProgress} key='health' pageSize={pageSize} country={'in'} category='health' header={'Health'} />}
            />
            <Route
              path='/science'
              element={<News setProgress={this.setProgress} key='science' pageSize={pageSize} country={'in'} category='science' header={'Science'} />}
            />
            <Route
              path='/sports'
              element={<News setProgress={this.setProgress} key='sports' pageSize={pageSize} country={'in'} category='sports' header={'Sports'} />}
            />
            <Route
              path='/technology'
              element={<News setProgress={this.setProgress} key='technology' pageSize={pageSize} country={'in'} category='technology' header={'Technology'} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
