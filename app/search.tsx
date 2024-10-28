'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'


export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [term, setTerm] = useState();

    function handleSearch(e) {
      if(e.key == "Enter"){
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('term', term);
          } else {
            params.delete('term');
          }
        replace(`${pathname}?${params.toString()}`)
      }
    }

    function changeHandler(e) {
      setTerm(e.target.value);
    }

    return (
        <input type="text" className='search'placeholder={placeholder} onKeyDown={(e) => {handleSearch(e)}} onChange={(e) => {changeHandler(e)}}/>
    );
}