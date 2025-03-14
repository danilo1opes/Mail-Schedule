import { Button } from 'components/Button';
import { NavLogo } from 'components/Nav/NavLogo';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="w-full h-20 bg-gray-100 boder-b border-gray-400">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo />

        <div className="flex gap-4 items-center">
          <Link to="/dashboard">
            <Button variant="dark">Dashboard</Button>
          </Link>
          <Link to="/escrever-agora">
            <Button variant="primary">Escrever Agora</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
