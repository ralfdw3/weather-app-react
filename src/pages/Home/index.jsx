import Header from '../../components/Header';
import Body from '../../components/Body';
import Forecast from '../../components/Forecast';
import MakeWithLove from '../../components/MakeWithLove';

function Home() {

  return (
    <body className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <Body />
      </div>
      <div className='forecast'>
        <Forecast />
      </div>
      <div className='footer'>
        <MakeWithLove />
      </div>
    </body>
  );
}

export default Home
