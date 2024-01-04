// import "@/styles/index.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='h-[100%] bg-[#ec3434] display-flex justify-center align-center  p-[35px] '>
      <div className="mt-[0px] text-center w-[100%]">
      <h1 className="text-[50px] text-white pt-[30px] font-header">Achievements</h1>
      <Slider {...settings} className=" pt-20 w-[auto] h-[500px] ">
        {data.map((d) => (
          <div key={d.name} className="font-bodyTrad bg-[#D8D9DA] w-1/2 h-[auto] text-black rounded-xl hover:mt-[10px] transition-[0.2s] justify-center  items-center">
            <div className='h-[100%] bg-black flex justify-center items-center rounded-t-xl w-[100%]'>
              <img src={d.img} alt="" className="h-[150px] w-[100%] rounded-t-xl "/>
            </div>

            <div className="flex flex-col gap-3 p-1">
              <p className="text-x text-left font-bold text-lg">{d.name}</p>
              <p className="font-bodyRobo text-left">{d.review}</p>
           </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFvAMTey2SA18Ep4ZOPogNNZoWklreIfXoA&usqp=CAU`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/03/25-most-popular-characters-in-anime-history-according-to-myanimelist.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjfvrLyaWezbmUYn7myO2sWZsPrcxwOmGFGA&usqp=CAU`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFvAMTey2SA18Ep4ZOPogNNZoWklreIfXoA&usqp=CAU`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFvAMTey2SA18Ep4ZOPogNNZoWklreIfXoA&usqp=CAU`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default App;
