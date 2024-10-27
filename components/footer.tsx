import React from 'react';
import { Image, Link } from "@nextui-org/react";
import { siteConfig } from '@/config/site';

// icons from react-icons
import { socialLinks } from '@/lib/data';

function FooterSection() {
    return (
        <div className='bg-gray-600 dark:bg-gray-900 pb-14 sm:pb-4'>
            <div className="flex flex-col md:flex-row text-center items-center w-full h-max justify-center p-10 gap-10 md:gap-20">
                <div className="flex gap-5 justify-center items-center">
                    <Image src={siteConfig.logo} alt={siteConfig.name} width={40} height={40} className="rounded-full bg-gray-300" />
                    <div className="flex flex-col text-left mb-5 md:mb-0">
                        <h2 className="text-xl font-bold text-gray-300 dark:text-gray-400 hover:animate-rolling-text">{siteConfig.name}</h2>
                        <p className="text-sm text-gray-300 dark:text-gray-400">{siteConfig.shortIntro}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center gap-3 mb-5">
                        {
                            socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 dark:text-gray-400 hover:text-sky-300 hover:font-bold transition-transform duration-200 transform hover:scale-110 text-2xl"
                                >
                                    {social.icon}
                                </Link>
                            ))
                        }
                    </div>

                    <div className="flex justify-center gap-3 flex-wrap">
                        {
                            siteConfig.navbarItems.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.hash}
                                    className="text-gray-300 dark:text-gray-400 hover:text-sky-300 hover:font-bold transition-transform duration-200 transform hover:scale-110"
                                >
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <small className="pb-2 block text-xs text-gray-400 dark:text-gray-700">
                    &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </small>
            </div>
        </div>
    )
}

export default FooterSection