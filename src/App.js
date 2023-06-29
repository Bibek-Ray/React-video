import React from 'react';
import Video from './Video';
import "/App.css";

const App = () => {
  const apiKey = 'AIzaSyAs0hK4QkCy4CW77rdUcU-zwVej3Z2HqSg';

  return (
    <div>
      <h1 className='heading'>YouTube Videos</h1>
      <Video apiKey={apiKey} />
    </div>
  );
};

export default App;
