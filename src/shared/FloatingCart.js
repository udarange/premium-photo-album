import React from 'react';
import { useSelector } from 'react-redux';

export default function FloatingCart({ setCartIsOpen, position = 'absolute' }) {
  const { cartItemIdList } = useSelector((state) => state.cartReducer);

  return (
    <button
      type="button"
      style={{
        border: 'none',
        background: '#313131',
        position,
        top: '0',
        right: '0',
      }}
      onClick={() => setCartIsOpen(true)}
    >
      <img
        alt="cart"
        src="data:image/png;base64,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"
      />
      <p
        className="m-0"
        style={{
          background: 'yellow',
          borderRadius: '100px',
          width: 'fit-content',
          padding: '0 10px',
          position: 'absolute',
          top: '25px',
          right: '0px',
        }}
      >
        {cartItemIdList.length}
      </p>
    </button>
  );
}
