import React, { useState } from 'react';
import { Tabs, Tab, Carousel } from 'react-materialize';


export default function News() {
  const [value, setValue] = useState('1');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{
      maxWidth: '430px',
      backgroundColor: '#fff',
      margin: "auto",
      borderBottom: '1px solid #ddd'
    }}>
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Phim đang chiếu" active={value === '1'} onClick={() => handleChange('1')}>
          <Carousel
            carouselId="Carousel-31"
            images={[
              "../assets2/LAB1-image/Ant-man.jpg",
              "../assets2/LAB1-image/Carl.jpg",
              "../assets2/LAB1-image/Coco.jpg",
              "../assets2/LAB1-image/Fast&Furious.jpg",
              " ../assets2/LAB1-image/GuardianOfGalaxy.jpg",
              "../assets2/LAB1-image/Mario.jpg",
              "../assets2/LAB1-image/One piece.jpg",
              "../assets2/LAB1-image/TheNun.jpg",
              "../assets2/LAB1-image/Transformers.jpg"
            ]}
            options={{
              fullWidth: true,
              indicators: true
            }}
          />
        </Tab>
        <Tab title="Phim sắp chiếu" active={value === '2'} onClick={() => handleChange('2')}>
          Coming soon
        </Tab>
        <Tab title="TOP THỊNH HÀNH" active={value === '3'} onClick={() => handleChange('3')}>
          <Carousel
            style={{ width: '500px' }}
            carouselId="Carousel-32"
            images={[
              "../assets2/LAB1-image/Ant-man.jpg",
              "../assets2/LAB1-image/Carl.jpg",
              "../assets2/LAB1-image/Coco.jpg",
              "../assets2/LAB1-image/Fast&Furious.jpg",
              " ../assets2/LAB1-image/GuardianOfGalaxy.jpg",
              "../assets2/LAB1-image/Mario.jpg",
              "../assets2/LAB1-image/One piece.jpg",
              "../assets2/LAB1-image/TheNun.jpg",
              "../assets2/LAB1-image/Transformers.jpg"
            ]}
            options={{
              fullWidth: true,
              indicators: true
            }}
          />
        </Tab>
      </Tabs>
    </div>
  );
}
