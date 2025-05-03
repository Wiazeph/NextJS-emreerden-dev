'use client';

import React, { useState } from 'react';
//
import { motion } from 'framer-motion';
//
import PageHeaderComponent from '@/components/page-header';
import { Button } from '@/components/ui/button';
//
import { Gear, Setup, Equipment } from '@/constants/pages/whatiuse/kit';
//
import { cn } from '@/lib/utils';

type Props = {};

const KitPageComponent = (props: Props) => {
  const [tab, setTab] = useState<'Gear' | 'Setup' | 'Equipment'>('Gear');
  const tabs = ['Gear', 'Setup', 'Equipment'] as const;

  return (
    <main className="Kit Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="kit"
          pageDescription="List of my Gear, Setup and Equipment"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          className="flex border rounded-md p-1 w-full max-w-72 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700"
        >
          {tabs.map((b) => (
            <Button
              key={b}
              onClick={() => setTab(b)}
              variant={'secondary'}
              size={'sm'}
              className={cn('w-full h-8', {
                'bg-white hover:bg-white dark:bg-zinc-700 dark:hover:bg-zinc-700':
                  tab === b,
              })}
            >
              {b}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 5 * 0.1 }}
          className="border dark:border-zinc-700 w-full rounded-lg "
        >
          <div className="w-full h-11 border-b dark:border-zinc-700 flex items-center  text-zinc-500 dark:text-zinc-500 text-xs px-4 select-none gap-x-4">
            <div className="w-2/3">Name/Specs</div>
            <div className="w-1/3">Description</div>
          </div>

          {tab === 'Gear'
            ? Gear.map((g) => (
                <div className="w-full h-11 border-b last:border-b-0 dark:border-zinc-700 flex items-center  text-zinc-950 dark:text-zinc-50 text-sm px-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 gap-x-4">
                  <div className="flex items-center gap-x-2 w-2/3">
                    {g.name.title}{' '}
                    <span className="text-zinc-500 dark:text-zinc-500">
                      {'>'}
                    </span>{' '}
                    {g.name.specs}
                  </div>
                  <div className="w-1/3">{g.description}</div>
                </div>
              ))
            : tab === 'Setup'
            ? Setup.map((s) => (
                <div className="w-full h-11 border-b last:border-b-0 dark:border-zinc-700 flex items-center  text-zinc-950 dark:text-zinc-50 text-sm px-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 gap-x-4">
                  <div className="flex items-center gap-x-2 w-2/3">
                    {s.name.title}{' '}
                    <span className="text-zinc-500 dark:text-zinc-500">
                      {'>'}
                    </span>{' '}
                    {s.name.specs}
                  </div>
                  <div className="w-1/3">{s.description}</div>
                </div>
              ))
            : Equipment.map((e) => (
                <div className="w-full h-11 border-b last:border-b-0 dark:border-zinc-700 flex items-center  text-zinc-950 dark:text-zinc-50 text-sm px-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 gap-x-4">
                  <div className="flex items-center gap-x-2 w-2/3">
                    {e.name.title}{' '}
                    <span className="text-zinc-500 dark:text-zinc-500">
                      {'>'}
                    </span>{' '}
                    {e.name.specs}
                  </div>
                  <div className="w-1/3">{e.description}</div>
                </div>
              ))}
        </motion.div>
      </div>
    </main>
  );
};

export default KitPageComponent;
