const React = require('react');

export default function NamedSeperator({ name, props, children }) {
  const NamedSeperator = NamedListSet[name] || tips(name);

  // do not handle query in NamedList
  // function handleQuery(queryData) {
  //   return promiseAjax(API, queryData).then(response => {
  //     return formatData(response.data);
  //   });
  // }

  return <NamedSeperator {...props} >
    {children}
  </NamedSeperator>

}

function tips(name) {
  return _ => `NamedSeperator ${name} 未定义`;
}