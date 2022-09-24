import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
      <div className='app-wrapper'>
        <header className='header'>
          <img src='https://chpic.su/_data/stickers/g/Gachimuchigang/Gachimuchigang_004.webp'/>
        </header>
        <nav className='nav'>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
                <img src="https://lh3.googleusercontent.com/VfZd9ZxqnEZmTNH6aJwgnoa54Jg-EyZsjUV7qxYS6AY0h9-pgdGki667y8zuHUe94ec=h500"/>
            </div>
            <div>
                ava+descriptions
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
            </div>
            <div>
                <div>
                    Post1
                </div>
                <div>
                    Post2
                </div>
            </div>
        </div>
      </div>
  )

}

export default App;
