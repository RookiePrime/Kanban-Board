import { Board } from "./components";
import {
  BoardData,
  boardData, 
  getLocalStorage, 
} from "./utils";

const App = () => {
    const localStorage:string | null = getLocalStorage('boardData') || null;
    const userData:BoardData = localStorage !== null ? JSON.parse(localStorage) : boardData;

    return (
      <div className='d-flex justify-content-center h-100'>
        <Board columns={userData.columns}></Board>
      </div>
    )
}

export default App;