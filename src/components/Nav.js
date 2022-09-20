import { Link } from 'react-router-dom';

function Nav(props) {

    return (
        <nav className='Nav'>

<Link to='/'>
<div>iStocks</div>
</Link>
<Link to='/stocks'>
<div>DashBoard</div>
</Link>
<Link to='/about'>
<div>About</div>
</Link>
        </nav>
    );
}

export default Nav;