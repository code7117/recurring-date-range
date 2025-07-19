import logo from './logo.svg';
import './App.css';
import { RecurrenceProvider } from "./Context/RecurrenceContext";
import RecurringDatePicker from "./Components/RecurringDatePicker/RecurringDatePicker";
function App() {
  return (
    <>
     <RecurrenceProvider>
      <RecurringDatePicker />
    </RecurrenceProvider>
  </>
  );
}

export default App;
