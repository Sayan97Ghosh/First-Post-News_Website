import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images.firstpost.com/wp-content/uploads/fpranking/1664446056562.jpg?impolicy=website&width=640&height=362',
    'https://images.firstpost.com/wp-content/uploads/fpranking/1664348064943.jpg?impolicy=website&width=640&height=362',
    'https://images.firstpost.com/wp-content/uploads/fpranking/1664362264968.jpg?impolicy=website&width=640&height=362',
  ];

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="yellow"
        bg="#C7B299"
        _hover={{ color:"white",
        bg:"#C7B299"}}
        position="absolute"
        left={side}
        top={top}
        transform={'translate(-20%, -200%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <MdOutlineArrowBackIos />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="yellow"
        bg="#C7B299"
        // borderRadius="full"
        position="absolute"
        _hover={{ color:"white",
        bg:"gray"}}
        right={side}
        top={top}
        transform={'translate(20%, -200%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <MdArrowForwardIos />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            backgroundBlendMode = "inherit"
            
          />
        ))}
      </Slider>
    </Box>
  );
}