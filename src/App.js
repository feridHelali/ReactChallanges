
import './App.css';
import Wrapper from "./components/hierarchy/Wrapper";
import TodoList from "./components/todolib/TodoList";
import EmployeeList from "./components/employee/EmployeeList"

function App() {
 


  return (
    <div className="App">
      {/* <Wrapper />
      <TodoList /> */}
      <EmployeeList />
    </div>
  );
}

export default App;

/*
function Cars(props){
  let carsList=[
    {brand:"Merced",price:75000},
    {brand:"BMW",price:85000},
    {brand:"Peugeot",price:17000},
  ]
  return (
    <div className="App">
      <h1> Cars Catalogue</h1>
      <div className="card">
      { carsList.map((car,index)=> 
         <Car key={index} car={car}/>
         )
      } 
      </div>
    </div>
  )
}

function Car(props){
  let {car} = props;
  return (
    <div className="cardContent" onClick={($event)=>{
      
      console.log($event);
      console.log($event.target);
      alert(`Brand : ${car.brand}\n Price: ${car.price}`);
    }}
     onMouseEnter={ (e)=> {
        e.target.classList.add("cardContentStyled");
        e.target.classList.remove("cardContent")}
      }
     onMouseLeave={ (e)=> {
      e.target.classList.add("cardContent");
      e.target.classList.remove("cardContentStyled")}
    }
    >
      <div>Brand: {car.brand}</div>
      <div>Price: {car.price}</div>
    </div>
  )
}
*/