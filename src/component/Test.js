
import {CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={8}
        leftChevron={<button><CaretLeftOutlined/></button>}
        rightChevron={<button><CaretRightOutlined/></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ width:200,height:80, background: '#EEE' }}>First card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Second card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Third card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Fourth card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>First card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Second card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Third card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
};