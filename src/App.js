import imgTo from './img/imgTo.png';
import './App.css';
import'./style.css';

function App() {
  return (
    <div className="App">
          <h1 className="title red">Eric Lionel</h1>
      <div style={{border:solid 1px black,maxWidth:100vw}}>


          <br/>

          <img src="/imageInPublic.png"alt='presentateur' />

          <br/>

          <img src= {imageInSrc} alt='presentateur'/>

          </div>

          <vidéo style= {{width:"320", height:"240" }}>

          <source src="maVideo.mp4" type="video/mp4" />

          </vidéo>
      
      
    </div>
  );
}

export default App;
