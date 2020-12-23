const React = require('react');
const NamedListSet = require('../../autox');
//const promiseAjax = require('@/utils/request');
//const formatData = require('../../utils/formatData');

export default function NamedList({ name, props, children }) {
  const NamedList = NamedListSet[name] || tips(name);

  // do not handle query in NamedList
  // function handleQuery(queryData) {
  //   return promiseAjax(API, queryData).then(response => {
  //     return formatData(response.data);
  //   });
  // }

  return <NamedList {...props} >
    {children}
  </NamedList>

}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}