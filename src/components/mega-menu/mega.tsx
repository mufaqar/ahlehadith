import Link from 'next/link';
import React from 'react';

const Mega_menu = ({sub_item}: any) => {
    return (
        <li>
            <Link href={sub_item.link} className="uppercase font-ahle text-[20px] md:text-black text-white hover:text-yellow hover:underline" >
                {sub_item.name}
            </Link>
        </li>
    )
}

export default Mega_menu