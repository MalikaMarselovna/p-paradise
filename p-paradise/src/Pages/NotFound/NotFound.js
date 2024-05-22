import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div >
      <div className='NotFound text-[#f92e9e]'>404</div>
      <p className="NotFound_txt text-[#f92e9e]">
        Oops, go to 
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFound;