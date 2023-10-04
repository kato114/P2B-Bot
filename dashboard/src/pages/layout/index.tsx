import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LeftNavBar } from '../../components/LeftNavBar';
import Loading from '../../components/Loading';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LeftNavBar/>
      <div className='flex flex-col w-full min-h-full md:pl-[260px]'>
        <Header />
        <Outlet />

        <Footer className='p-10 md:hidden'/>
      </div>
    </Suspense>
  )
};

export default Layout;
