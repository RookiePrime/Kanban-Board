import { Board } from "./components";
import { data } from "./utils";

const App = () => 
    <div className='d-flex justify-content-center h-100'>
      <Board columns={data.columns}></Board>
    </div>

export default App;