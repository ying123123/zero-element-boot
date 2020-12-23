const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const CartSet = require('../cart');

export default forwardRef(function NamedCart({ name, props, children}, ref) {

  const [CartRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  //let CartConfig = { ...cart, ...cart.props };

  // if (typeof props === 'string') {
  //   CartConfig = {
  //     ...Cart,
  //     name: props,
  //   };
  // } else {
  //   CartConfig = { ...Cart };
  // }

  const Cart = CartSet[name] || tips(namess);

  return (
      <Cart {...props} ref={CartRef}>
        {React.Children.toArray(children).map(child => {
          return React.cloneElement(child, {
            ...rest
          })
        })}
      </Cart>
  )

})

function tips(name) {
  return _ => `NamedCart ${name} 未定义`;
}