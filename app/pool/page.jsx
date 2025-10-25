'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Pool() {
  const pathname = usePathname();

  useEffect(() => {
    const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
    
    if (isAndroid) {
      window.location.href = `intent:/${pathname}#Intent;scheme=blotopay;package=com.yassirira.newapp;end`;
    } else {
      window.location.href = `blotopay:/${pathname}`;
    }
  }, [pathname]);

  return null;
}