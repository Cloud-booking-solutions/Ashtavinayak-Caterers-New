
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = [
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'starters', name: 'Starters' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'roti', name: 'Roti' },
    {id: 'rice', name: 'Rice'},
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    breakfast: [
      {
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes and peas, served with mint and tamarind chutneys',
        // price: '₹30',
        dietary: ['v'],
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'idli',
        description: 'Delicious Idlis are here to serve you',
        // price: '₹40',
        dietary: ['v'],
        image: 'https://static.wixstatic.com/media/34a704_66490675e5574045b7a5b74a2c3bf12b~mv2.jpg/v1/fill/w_1000,h_624,al_c,q_90/34a704_66490675e5574045b7a5b74a2c3bf12b~mv2.jpg'
      },
      {
        name: 'Pohe',
        description: 'Crispy Pohe spiced with cumin and coriander, served with mint chutney',
        // price: '₹20',
        dietary: ['v'],
        image: 'https://img.freepik.com/free-photo/pohe-poha-pohaa-also-known-as-pauwa-sira-chira-aval-bajil-among-many-other-names-is-flattened-rice-originating-from-indian-subcontinent_466689-75403.jpg?w=1380&t=st=1659334933~exp=1659335533~hmac=7d69214e38e555ea8850c14f21d49ca65c8dbb2df13bc2d34a92805902e32729'
      },
      {
        name: 'Dhokla',
        description: 'Spicy Dhokla flavored with curry leaves and red chilies',
        // price: '₹30',
        dietary: ['v'],
        image: 'https://www.desiblitz.com/wp-content/uploads/2019/10/7-Delicious-Types-of-Dhokla-to-Make-at-Home-chana.jpg'
      },
      {
        name: 'Vada Pav',
        description: 'Spicy Vada Pav flavored with curry leaves and red chilies',
        // price: '₹20',
        dietary: ['v'],
        image: 'https://media.istockphoto.com/photos/vada-pav-picture-id1329213718?k=20&m=1329213718&s=612x612&w=0&h=uuOkJXL7tCv1mH9GbQ2PV5WKKQmd9evSR7wcQRyAwzo='
      },
      {
        name: 'Mendu Vada',
        description: 'Delicious Mendu Vada is here with spicy Sambar',
        // price: '₹30',
        dietary: ['v'],
        image: 'http://www.homelycuisine.in/wp-content/uploads/2023/10/Medu-vada.jpg'
      },
    ],
    starters: [
      {
        name: 'Veg Manchurian',
        description: 'Veg Manchurian is spicy and crispy option for starter ',
        // price: '₹120',
        dietary: ['v'],
        image: 'https://i.ytimg.com/vi/G5iUqkCLybU/maxresdefault.jpg'
      },
      {
        name: 'Paneer Chilli',
        description: 'Paneer Chilli with cucumber, tomato, and tangy lemon dressing',
        // price: '₹150',
        dietary: ['v'],
        image: 'https://maunikagowardhan.co.uk/wp-content/uploads/2011/11/Chilli-Paneer.jpg'
      },
      {
        name: 'Cutlet',
        description: 'Cutlets of fresh vegetables with raita dressing',
        // price: '₹180',
        dietary: ['v'],
        image: 'https://e0.pxfuel.com/wallpapers/402/912/desktop-wallpaper-plateful-chicken-cutlets.jpg'
      },
      {
        name: 'French',
        description: 'french fries as a crispy starter' ,
        // price: '₹180',
        dietary: ['v'],
        image: 'https://c4.wallpaperflare.com/wallpaper/666/302/422/food-potato-french-fries-hd-wallpaper-preview.jpg'
      },
    ],
    'main-courses': [
      {
        name: 'Chole Masala',
        description: 'Chole Masala pieces in a rich, creamy tomato sauce with butter and cream',
        // price: '₹280',
        dietary: ['v'],
        image: 'https://bonmasala.com/wp-content/uploads/2022/06/Chole-Masala.jpg'
      },
      {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in a rich tomato and cashew gravy with aromatic Indian spices',
        price: '₹250',
        dietary: ['v'],
        image: 'https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg?w=2000'
      },
      {
        name: 'Kaju Masala',
        description: 'Kaju Masala pieces slow-cooked in a rich gravy of Kashmiri chilies and spices',
        // price: '₹350',
        dietary: ['v'],
        image: 'https://i.pinimg.com/originals/b2/67/e3/b267e37a01ebe53a4a1be5e709a1d474.png'
      },
      {
        name: 'Mix Veg',
        description: 'Creamy black lentils slow-cooked with butter and spices, finished with cream',
        // price: '₹220',
        dietary: ['v'],
        image: 'https://www.thespruceeats.com/thmb/MfnEzKj-5LBRbdrD_WQ59zELEX4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mixed-vegetable-curry-1957913-03048999db714405bfe8614c975b8a44.jpg'
      },
      {
        name: 'Bhendi Masala',
        description: 'Bhendi Masala pieces in a rich, creamy tomato sauce with butter and cream',
        // price: '₹280',
        dietary: ['v'],
        image: 'https://aromaticessence.co/wp-content/uploads/2022/06/punjabi_bhindi_masala_gravy_featured-500x500.jpg'
      },
      {
        name: 'Veg Bhuna',
        description: 'Veg Bhuna pieces in a rich, creamy tomato sauce with butter and cream',
        // price: '₹280',
        dietary: ['v'],
        image: 'https://images.slurrp.com/prod/articles/61672cyokns.webp'
      },
      {
        name: 'Matter Paneer',
        description: 'Matter Paneer pieces slow-cooked in a rich gravy of Kashmiri chilies and spices',
        // price: '₹280',
        dietary: ['v'],
        image: 'https://c.ndtvimg.com/2022-07/ehlh3ddg_matar-paneer_120x90_06_July_22.png'
      },
      {
        name: 'Brinjal Bhaji',
        description: 'Brinjal bhaji pieces slow-cooked in a rich gravy of Kashmiri chilies and spices',
        // price: '₹280',
        dietary: ['v'],
        image: 'https://flawlessfood.co.uk/wp-content/uploads/2022/05/Brinjal-Bhaji-.jpg'
      },
    ],
    roti: [
      {
        name: 'Roti',
        description: 'Soft leavened bread topped Roti baked in tandoor',
        // price: '₹60',
        dietary: ['v'],
        image: 'https://enjoyinfourseason.com/wp-content/uploads/2022/05/Fourseason-PLAIN-ROTI.jpg'
      },
      {
        name: 'Puri',
        description: 'Puri cooked with cumin seeds and aromatic spices',
        // price: '₹120',
        dietary: ['v'],
        image: 'http://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Puri_Recipe_Traditional_Homemade-2.jpg'
      },
      {
        name: 'Chapati',
        description: 'Chapati is the healthiest option among all',
       
        dietary: ['v'],
        image: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/06/Chapati-recipe.jpg'
      },
    ],
    rice: [
      {
        name: 'Jeera Rice',
        description: 'Jeera rice is the most crispiest rice.',
        // price: '₹120',
        dietary: ['v'],
        image: 'https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-2-1.jpg'
      },
      {
        name: 'Veg Pulao',
        description: 'Veg Pulao is spicy rice with all ingridients.',
        // price: '₹150',
        dietary: ['v'],
        image: 'https://4.bp.blogspot.com/-qWzc-7lpAXk/WIEb8Z55zmI/AAAAAAAACdE/iewzgRqTP2Q-TdRenIB3zLueuE9rW2nIQCLcB/s1600/vegetable%2Bpulao.JPG'
      },
      {
        name: 'Dal Khichdi',
        description: 'Dal khichdi is smooth as gulab jamun.',
        // price: '₹180g',
        dietary: ['v'],
        image: 'https://images.slurrp.com/prod/articles/2g72ummdd9y.webp'
      },
      {
        name: 'Veg Biryani',
        description: 'Veg biryani is the most delicious rice type' ,
        // price: '₹180',
        dietary: ['v'],
        image: 'https://img.freepik.com/premium-photo/indian-veg-biryani-veg-pulav-4k-hd-photo-indian-vegetable-pulao_1193781-13320.jpg?w=740'
      },
    ],
    desserts: [
      {
        name: 'Vanila Ice-cream',
        description: 'Vanila Ice-cream with sweet flavour',
        // price: '₹100',
        dietary: ['v'],
        image: 'https://wallpapercave.com/wp/wp8867888.jpg'
      },
      {
        name: 'Chocolate Ice-cream',
        description: 'Chocolate Ice-cream with delicious taste',
        // price: '₹100',
        dietary: ['v'],
        image: 'http://www.baltana.com/files/wallpapers-18/Chocolate-Ice-Cream-HD-Desktop-Wallpaper-46571.jpg'
      },
      {
        name: 'Butterscotch Ice-cream',
        description: 'Buttorscotch Ice-cream with sweet flavour',
        // price: '₹100',
        dietary: ['v'],
        image: 'https://images.herzindagi.info/image/2020/Apr/butterscotch-ice-cream-recipe-two.jpg'
      },
      {
        name: 'Strawberry Ice-cream',
        description: 'Strawberry Ice-cream with sweet flavour',
        // price: '₹100',
        dietary: ['v'],
        image: 'https://e1.pxfuel.com/desktop-wallpaper/632/232/desktop-wallpaper-strawberry-ice-cream-strawberry-ice.jpg'
      },
    ],
    beverages: [
      {
        name: 'Coco cola',
        description: 'Chill with the coco cola.',
        // price: '₹50',
        dietary: ['v'],
        image: 'https://images2.alphacoders.com/106/1068711.jpg'
      },
      {
        name: 'Sprite',
        description: 'Stay cools with sprite',
        // price: '₹80',
        dietary: ['v'],
        image: 'https://wallpaperaccess.com/full/1897201.jpg'
      },
      {
        name: 'Fanta',
        description: 'Refreshing drink made with fresh lime juice, sugar, salt and soda water',
        // price: '₹70',
        dietary: ['v',],
        image: 'https://c0.wallpaperflare.com/preview/795/164/862/beverage-blur-can-canister.jpg'
      },
      {
        name: 'Maaza',
        description: 'Refreshing drink made with fresh mazza',
        // price: '₹70',
        dietary: ['v',],
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ff48d59b-4923-4fff-86b6-abf44dc0cf51.__CR0,0,970,600_PT0_SX970_V1___.jpg'
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[50vh] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl">Explore our diverse selection of authentic Indian cuisine prepared with the freshest ingredients and traditional spices.</p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-white sticky top-16 z-40 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              {menuCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                <span className="text-sm text-gray-600">Vegetarian (v)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-sm text-gray-600">Non-vegetarian (nv)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-xl font-bold">{item.name}</h3>
                      <span className="text-orange-500 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex space-x-2">
                      {item.dietary.includes('v') && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vegetarian</span>
                      )}
                      {item.dietary.includes('gf') && (
                        <nvan className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Non-vegetarian</nvan>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Custom Menus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We understand that each event is unique. Our culinary team is happy to create custom menus tailored to your preferences, dietary requirements, and event theme.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold mb-4">Request a Custom Menu</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <ChevronDown size={32} className="text-orange-500" />
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Contact our catering consultants to discuss your specific requirements and preferences. We'll work with you to craft a perfect menu for your event.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-lg font-medium transition-colors">
                Contact Us
              </a>
              <a href="/book" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded text-lg font-medium transition-colors">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;