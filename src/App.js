import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <Card name='William Hurlands' designation='CO-FOUNDER , BZR'  meetingPercentage='90%' industries={['#CyberSecurity','#ECommerce']} meetingRate='250$'/>
    </div>
  );
}
export default App;
