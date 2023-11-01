'use client'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
//import { SidebarContext } from '@/app/context/sidebarContext';
import { HomeIcon, CurrencyDollarIcon, AirplaneIcon, ShoppingCartIcon, CurrencyRupeeIcon, DocumentReportIcon, SaveIcon, LightBulbIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link'
import { useToggle } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';


export const navigationLinks = [
    { id: 1, title: 'Home', image: <HomeIcon className="nav-link-icon" /> },
    { id: 2, title: 'Budget', image: <CurrencyDollarIcon className="nav-link-icon" /> },
    { id: 3, title: 'Transactions', image: <AirplaneIcon className="nav-link-icon" /> },
    { id: 4, title: 'Subscriptions', image: <ShoppingCartIcon className="nav-link-icon" /> },
    { id: 5, title: 'Loans', image: <CurrencyRupeeIcon className="nav-link-icon" /> },
    { id: 6, title: 'Reports', image: <DocumentReportIcon className="nav-link-icon" /> },
    { id: 7, title: 'Savings', image: <SaveIcon className="nav-link-icon" /> },
    { id: 8, title: 'Financial Advice', image: <LightBulbIcon className="nav-link-icon" /> },
    { id: 9, title: 'Account', image: <UserIcon className="nav-link-icon" /> },
    { id: 10, title: 'Settings', image: <CogIcon className="nav-link-icon" /> }
];

const SideBar = () => {
    
}

export default Sidebar;