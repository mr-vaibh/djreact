import React from 'react';
import ReactDOM from 'react-dom'

// Components
import Navbar from './Navbar'
import Content from './Content'

// Styles
// import '../../static/css/style.css'

export default function App() {
    return (
        <div>
            <Navbar />
            
            <Content/>
        </div>
    )
}

const appDiv = document.getElementById('app');
ReactDOM.render(<App />, appDiv);