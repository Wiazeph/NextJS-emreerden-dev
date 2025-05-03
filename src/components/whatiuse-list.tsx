'use client';

import React from 'react';
//
import { motion } from 'framer-motion';
//
import { WhatIUse } from '@/types/whatiuse';
//
import { FaFirefoxBrowser, FaChrome } from 'react-icons/fa6';
import { IoEarth } from 'react-icons/io5';
import { cn } from '@/lib/utils';

type Props = {
  name: string;
  constName: WhatIUse[];
  browser?: 'Firefox' | 'Chrome';
};

const WhatIUseListComponent = (props: Props) => {
  const filteredItems =
    props.name === 'Browser'
      ? props.constName.filter(
          (item) =>
            item.browser &&
            props.browser &&
            item.browser.includes(props.browser)
        )
      : props.constName;

  const links = [
    { key: 'website', icon: IoEarth },
    { key: 'firefox', icon: FaFirefoxBrowser },
    { key: 'chrome', icon: FaChrome },
  ];

  return (
    <ul
      className={`${props.name}-List flex flex-wrap justify-center mdl:justify-normal gap-4`}
    >
      {filteredItems.map((item, index) => (
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 5 * 0.1 }}
          key={index}
          className={cn({
            'Main-Card text-sm flex-col h-22': typeof item.path !== 'string',
          })}
        >
          {typeof item.path === 'string' ? (
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="Main-Card text-sm"
            >
              {item.name}
            </a>
          ) : (
            <>
              <p>{item.name}</p>
              <div className="flex items-center gap-x-4">
                {links.map(
                  (link) =>
                    (item.path as { [key: string]: string })[link.key] && (
                      <a
                        key={link.key}
                        href={
                          (item.path as { [key: string]: string })[link.key]
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors"
                      >
                        <link.icon className="w-4 h-4" />
                      </a>
                    )
                )}
              </div>
            </>
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default WhatIUseListComponent;
