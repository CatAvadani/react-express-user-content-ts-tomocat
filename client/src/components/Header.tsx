import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Events', to: '/events' },
    { name: 'Locations', to: '#' },
    { name: 'Contact', to: '#' },
  ];
  return (
    <header className='absolute inset-x-0 top-0 z-10'>
      <nav
        className='flex items-center justify-between p-4 lg:px-8 '
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link
            to='/'
            className='-m-1.5 p-1.5 flex justify-center items-center'
          >
            <img
              className=' h-10'
              src='https://extremenomads.life/wp-content/uploads/2020/07/cropped-exnomad-newlogo.png'
              alt=''
            />
            <h1 className=' text-3xl p-2 text-orange-600 font-extrabold'>
              Evento
            </h1>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 p-4 border border-transparent border-b-black/10'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className='text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600 transition-all'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            to='/login'
            className='text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600 transition-all'
          >
            Sign in <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://extremenomads.life/wp-content/uploads/2020/07/cropped-exnomad-newlogo.png'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6 '>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 '
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  to='/login'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}