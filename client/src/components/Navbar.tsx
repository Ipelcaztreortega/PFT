import {Link} from "react-router-dom";
import {SignedIn, UserButton} from '@clerk/clerk-react';
import './Navbar.css';
import {dark} from '@clerk/themes';

export default function Navbar() {
  return (
    <div className="navbar">
        <Link to='/'>Dashboard</Link>
        <SignedIn>
            <UserButton appearance={{baseTheme: dark}}/>
        </SignedIn>
        
    </div>
  )
}
