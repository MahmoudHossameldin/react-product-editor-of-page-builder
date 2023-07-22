// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import navigation from '../NavigationItems.json';

function Navigation() {
  return (
    <nav className='mt-[.625rem]'>
      <ul className='list-none'>
        {navigation.pages.map((page) => {
          return (
            <li
              key={page.label}
              className='py-3 pl-2 mb-[.625rem] cursor-pointer'
            >
              <Link to={page.url} className='flex items-center text-greyTitles'>
                <img
                  src={require(`../assets/${page.icon}`)}
                  alt={`${page.label} link icon`}
                  className='mr-3 w-4 h-4'
                />
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
