'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pool() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const isAndroid = navigator.userAgent.toLowerCase().includes('android');

    // Convert search params (e.g. ?user=yassir&ref=123) into a string
    const queryString = searchParams.toString();
    const pathWithParams = queryString ? `${pathname}?${queryString}` : pathname;

    if (isAndroid) {
      // Android intent deep link
      window.location.href = `intent:/${pathWithParams}#Intent;scheme=blotopay;package=com.yassirira.newapp;end`;
    } else {
      // iOS or other platforms
      window.location.href = `blotopay:/${pathWithParams}`;
    }
  }, [pathname, searchParams]);

  return null;
}
