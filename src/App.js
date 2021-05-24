import TextField from '@material-ui/core/TextField';
import './App.css';

function App() {
  return (
    <div className="App" 
      style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
      }}>
     <div>
      <h1>ToDo List App</h1>
      <TextField id="standard-basic" label="write a note" style={{maxWidth:"300px",width:"90vw"}} />
     </div>
    </div>
  );
}

export default App;
