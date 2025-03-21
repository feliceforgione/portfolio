import { Logo } from '../Logo';

export function HomeFallback() {
  return (
    <div className="bgBlue h-screen w-screen flex items-center justify-center">
      <Logo className="mainYellow" />
    </div>
  );
}
