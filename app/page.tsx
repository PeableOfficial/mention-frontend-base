import Image from 'next/image'
import Sidebar from './components/Sidebar';
import AsideFooter from './components/Footer';

export default function Home() {
  return (
    <div className="flex w-full justify-center gap-0 lg:gap-4">
      <Sidebar />
      <div className="hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0 border-dark-border dark:border-light-border xs:border-l-2 sm:border-x-2">
        
      </div>
      {/* Follow and trends */}
      <aside className="flex w-96 flex-col gap-4 p-4 hidden lg:inline-block">
      </aside>
      <AsideFooter />
    </div>
  );
}
