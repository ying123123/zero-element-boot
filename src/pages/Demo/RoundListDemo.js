import React from 'react';

import PlainList from '@/components/list/PlainList';
import NamedLayout from '@/components/NamedLayout';
import NamedCart from '@/components/NamedCart';

const { RoundItem } = require('@/presenter/composition')

export default function RoundListDemo(props){

    /**
     * cart 
     * name: '', ( Cart, HoverShadowCart, HightlightCart)
     */

    const config = {
        items:[
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title111',  subTitle:'subTitle111',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title222',  subTitle:'subTitle222',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title333',  subTitle:'subTitle333',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title444',  subTitle:'subTitle444',},
          ],
        layout: {
            name:'Flexbox',
            props: {
                align: 'start', 
                direction: 'row',
            },
        },
        cart:{
            name: 'Round',
            props: {
                fill:'#ccc',
                stroke: '#000'
            },
        }

    };

    return (
        <PlainList {...config} >
            <NamedLayout>
                <NamedCart>
                    <RoundItem />
                </NamedCart>
            </NamedLayout>
        </PlainList>
    )
}