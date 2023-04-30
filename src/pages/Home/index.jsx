import './Home.css'
import PageHeader from '../../components/PageHeader';
import PageBody from '../../components/HomePage/PageBody';
import Search from '../../components/HomePage/Search';
import Forecast from '../../components/HomePage/Forecast';
import PageFooter from '../../components/PageFooter';

const Home = () => {

  return (
    <div className='home-container'>

      <header>
        <PageHeader />
      </header>

      <body>
        <Search />
        <PageBody />
        <Forecast />
      </body>

      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}

export default Home
