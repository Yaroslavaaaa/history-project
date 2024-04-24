import './App.css';
import kuzma from './images/kuzma.jpeg'
import chernyavskie from './images/chernyavskie.jpeg'
import hospital from './images/hospital.jpg'
import hospital1 from './images/hospital1.jpg'
import petrProhorovich from './images/petrProhorovich.jpg'
import pohoronka from './images/pohoronka.jpg'
import zaOtvagu from './images/zaOtvagu.jpg'
import ulyana from './images/ulyana.jpeg'
import ulyana1 from './images/ulyana1.jpeg'
import ViktorPetrovich from './images/ViktorPetrovich.jpg'
import rewards from './images/rewards.jpg'
import andrey from './images/andrey.jpeg'
import aleksandr from './images/aleksandr.jpeg'
import tselina from './images/tselina.jpeg'

function App() {
  return (
    <div className="App">
      <h1>Фотографии семьи</h1>
      <div className='gallery'>
        <div className='image-div'>
          <img className='image' src={kuzma} />
          <h4>Прапрадедушка Кузьма</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={chernyavskie} />
          <h4>Братья Чернявские</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={hospital} />
          <h4>Редькин Петр Герасимович во время пребывания в госпитале</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={hospital1} />
          <h4>Обратная сторона фотографии из госпиталя с подписью</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={petrProhorovich} />
          <h4>Коржов Петр Прохорович</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={pohoronka} />
          <h4>Похоронка Редькина Виктора Герасимовича</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={tselina}/>
          <h4>Прадедушка Вуйко Андрей на освоении целины</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={zaOtvagu} />
          <h4>Медаль "За отвагу" Коржова Петра Прохоровича</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={ulyana} />
          <h4>Медаль Аникеевой Ульяны в честь 65-летия победы</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={ulyana1} />
          <h4>Медаль Аникеевой Ульяны в честь 65-летия победы</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={ViktorPetrovich} />
          <h4>Редькин Виктор Петрович</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={rewards} />
          <h4>Награды Редькина Виктора Петровича</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={andrey} />
          <h4>Прадедушка Вуйко Андрей</h4>
        </div>
        <div className='image-div'>
          <img className='image' src={aleksandr} />
          <h4>Дедушка Вуйко Александр Андреевич</h4>
        </div>      
      </div>
    </div>
  );
}

export default App;
