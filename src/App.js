
import './App.css';
import Products from './components/Product';
import Contents from './components/Contents';

function App() {
  return (
    <div className="App">
    

    {Contents.map(contents => (
            <Products 
               key={contents.id}
               image={contents.image}
               name={contents.name}
               price={contents.price}
               totalSales={contents.totalSales}
               timeleft={contents.timeLeft}
               rating={contents.rating}
            
            />
             

    ))




    }



    </div>
  );
}

export default App;
