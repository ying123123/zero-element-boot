import React from 'react';

import SelectedList from '@/components/list/SelectedList';
import NamedLayout from '@/autox/node_modules/@/core/NamedLayout';
import NamedCart from '@/components/NamedChart';

const { SelectItem } = require('@/composition/Demo')

export default function SelectedListDemo(props){

    /**
     * SelectedList 
     * 建议配合 SelectBox 使用
     */


    const config = {
        items:[
            {icon:'',  title:'title111',  subTitle:'subTitle111',},
            {icon:'',  title:'title222',  subTitle:'subTitle222',},
            {icon:'',  title:'title333',  subTitle:'subTitle333',},
            {icon:'',  title:'title444',  subTitle:'subTitle444',},
          ],
        layout: {
            name:'SelectBox',
            props: {
                align: 'start', 
                direction: 'column',
            },
        }

    };

    return (
        <SelectedList {...config} >
            <NamedLayout>
                <SelectItem />
            </NamedLayout>
        </SelectedList>
    )
}