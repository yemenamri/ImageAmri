import logo from './logo.svg';
import './App.css';
import './style.css';
import  Ahmed from './Ahmed.jpg'
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered">Ahmed Amri</h1>
          <img src="./M1.jpg" />
          <br />
          <img src={Ahmed}/>
          <br />
          
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}


function imageamri() {
    return (
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered">Ahmed Amri</h1>
          <br />
          <img src="./Ahmed.jpg"/>
          <br />
          <img src="./public/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }




export default App;
