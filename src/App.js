import AddComponent from './components/AddComponent';
import Alert from './components/Alert';

function App() {
    return (
        <>
       <AddComponent firstNumber={1} secondNumber={2} />
        <Alert />
        </>
        
    );
}

export default App;