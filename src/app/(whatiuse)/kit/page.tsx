import type { Metadata } from 'next';
import React from 'react';
//
import KitComponent from '@/containers/pages/whatiuse/kit';

export const metadata: Metadata = {
  title: 'Kit - Emre Erden',
  description: "Emre Erden's Kit",
};

type Props = {};

const KitPage = (props: Props) => {
  return <KitComponent />;
};

export default KitPage;
