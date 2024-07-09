import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudents';

function App() {

let ram=new SSCStudent("Ram",75,68,92,80,95,88);
    ram.calculateResult();
let ayaan=new SSCStudent("Ayaan",88,80,92,80,95,88);
    ayaan.calculateResult();
let kiran=new SSCStudent("Kiran",79,77,25,80,90,78);
    kiran.calculateResult();
let pawan=new SSCStudent("Pawan",90,78,92,82,95,77);
    pawan.calculateResult();

  return (
    <div className="App">
   <TenthStudent 
   name="Charan" 
   engMarks="90"
   telMarks="88"
   matMarks="92"
   hinMarks="95"
   sciMarks="85"
   socMarks="96"/>

<TenthStudent 
   name="Mahesh" 
   engMarks="90"
   telMarks="81"
   matMarks="95"
   hinMarks="75"
   sciMarks="85"
   socMarks="86"/>

<TenthStudent 
   name="satish" 
   engMarks="80"
   telMarks="92"
   matMarks="95"
   hinMarks="75"
   sciMarks="89"
   socMarks="96"/>

<TenthStudent 
   name="karthik" 
   engMarks="90"
   telMarks="82"
   matMarks="92"
   hinMarks="90"
   sciMarks="91"
   socMarks="96"/>
   
</div>
  );
}

export default App;
