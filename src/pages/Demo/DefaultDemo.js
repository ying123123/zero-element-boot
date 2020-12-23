import React from 'react';
import { Spin } from 'antd';
import GetField from '@/components/gateway/GetField';
import AutoCombination from '@/autox/AutoCombination/AutoChart';
import NamedList from '@/components/list';
import NamedLayout from '@/autox/node_modules/@/core/NamedLayout';
const AutoComponent = require('@/composition/Demo/node_modules/@/core/AutoComponent');


const presenter = require('@/presenter/default');

export default function Demo(props) {

  // AutoLoadList && LoadMoreList
  // return <NamedList name="AutoLoadList" API="/api/adm/stat/meta/template/table" spin={Spin}>
  //   <NamedLayout name="Align" props={{ align: 'leftAndLastRight' }}>
  //     <GetField dataField="data">
  //       <Test />
  //     </GetField>
  //   </NamedLayout>
  // </NamedList>

  return <AutoComponent/>
}


function Test() {
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>Demo</h2>
}
