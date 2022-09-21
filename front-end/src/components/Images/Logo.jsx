import { useSelector } from 'react-redux';

export function Logo() {
  const { darkMode } = useSelector((state) => state);

  return (
    <div>
      {darkMode.active ? 'DarkLogo' : 'LightLogo'}
    </div>
  );
}
