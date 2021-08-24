import app from './services/servidor/app';
import "./services/database/connection"

app.listen(app.get('port'), () => {
  console.log(`Listen on port ${app.get('port')}`);
}   );  
