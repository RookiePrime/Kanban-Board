import { Board } from "./components/Board";
import { data } from "./utils/test-data";

const App = () => 
    <div className='d-flex justify-content-center h-100'>
      <Board columns={data.columns}></Board>
    </div>

export default App;