const { useRef, useEffect, useState } = require('react');

module.exports = function useLayout() {
  const layoutRef = useRef();
  const [init, setInit] = useState(false);

  // set flag for only one time run 
  useEffect(_ => {
    if (init === false) {
      setInit(true);
    }
  }, [layoutRef.current]);

  function getClassName() {
    if (layoutRef.current && layoutRef.current.getClassName) {
      return layoutRef.current.getClassName();
    }
  }

  return [layoutRef, {
    getClassName,
  }]
}
