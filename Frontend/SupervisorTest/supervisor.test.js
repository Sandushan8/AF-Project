import Registration from '../../Frontend/src/Pages/Supervisor/Registration'
import ReactDOM from 'react-dom';

//Registration page render component test by Punsisi

test('Renders without crashing', () => {

  const div = document.createElement("div");

  ReactDOM.render(<Registration></Registration>, div)

});



