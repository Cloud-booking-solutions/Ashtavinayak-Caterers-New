
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'salads', name: 'Salads' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'sides', name: 'Side Dishes' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes and peas, served with mint and tamarind chutneys',
        price: '₹30',
        dietary: ['v'],
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Paneer Tikka',
        description: 'Cubes of cottage cheese marinated in yogurt and spices, grilled to perfection',
        price: '₹280',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Onion Bhaji',
        description: 'Crispy onion fritters spiced with cumin and coriander, served with mint chutney',
        price: '₹100',
        dietary: ['v', 'gf'],
        image: 'https://img.freepik.com/premium-photo/crispy-kanda-bhaji-bhajji-pyaj-pakode-fried-onion-pakora-delicious-street-food-from-india_466689-72976.jpg?w=2000'
      },
      {
        name: 'Chicken 65',
        description: 'Spicy deep-fried chicken bites flavored with curry leaves and red chilies',
        price: '₹200',
        dietary: [],
        image: 'https://1.bp.blogspot.com/-7da7hWHJjQc/X5guDBEmelI/AAAAAAAAY-U/npO6jGByU3skct3rWE87cH1uW1I1bREiwCLcBGAsYHQ/s2048/chicken+65+8.JPG'
      },
    ],
    salads: [
      {
        name: 'Kachumber Salad',
        description: 'Fresh mixture of cucumber, tomatoes, onions with a squeeze of lemon juice and spices',
        price: '₹120',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Sprouted Moong Salad',
        description: 'Nutritious sprouted mung beans with cucumber, tomato, and tangy lemon dressing',
        price: '₹150',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Tandoori Chicken Salad',
        description: 'Grilled tandoori chicken slices on a bed of fresh vegetables with raita dressing',
        price: '₹180',
        dietary: ['gf'],
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
    'main-courses': [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken pieces in a rich, creamy tomato sauce with butter and cream',
        price: '₹280',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in a rich tomato and cashew gravy with aromatic Indian spices',
        price: '₹250',
        dietary: ['v'],
        image: 'https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg?w=2000'
      },
      {
        name: 'Lamb Rogan Josh',
        description: 'Tender lamb pieces slow-cooked in a rich gravy of Kashmiri chilies and spices',
        price: '₹350',
        dietary: ['gf'],
        image: 'https://crockpot-app-prod.s3.ap-southeast-2.amazonaws.com/lamb-shank-rogan-josh-900x900_2ab8d057f0.jpeg'
      },
      {
        name: 'Dal Makhani',
        description: 'Creamy black lentils slow-cooked with butter and spices, finished with cream',
        price: '₹220',
        dietary: ['v', 'gf'],
        image: 'https://wallpapercave.com/wp/wp8494128.jpg'
      },
    ],
    sides: [
      {
        name: 'Garlic Naan',
        description: 'Soft leavened bread topped with garlic and butter, baked in tandoor',
        price: '₹60',
        dietary: ['v'],
        image: 'https://tse1.mm.bing.net/th?id=OIP.9IlTYJWxV6aofqJDcSVbQgHaE7&pid=Api&P=0&h=220'
      },
      {
        name: 'Jeera Rice',
        description: 'Fragrant basmati rice cooked with cumin seeds and aromatic spices',
        price: '₹120',
        dietary: ['v', 'gf'],
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.jpg'
      },
      {
        name: 'Raita',
        description: 'Cooling yogurt mixed with cucumber, mint, and mild spices',
        price: '₹70',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
    desserts: [
      {
        name: 'Gulab Jamun',
        description: 'Soft milk-solid dumplings soaked in rose and cardamom flavored sugar syrup',
        price: '₹100',
        dietary: ['v'],
        image: 'https://tse3.mm.bing.net/th?id=OIP.B32bansRI7RS3yfbUSEBNwHaHa&pid=Api&P=0&h=220'
      },
      {
        name: 'Rasmalai',
        description: 'Soft cottage cheese patties immersed in creamy saffron milk, garnished with pistachios',
        price: '₹120',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1634118520179-0c78b72df69a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Kheer',
        description: 'Creamy rice pudding flavored with cardamom, saffron and garnished with nuts',
        price: '₹90',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Kulfi',
        description: 'Traditional Indian ice cream made with condensed milk, flavored with pistachios and cardamom',
        price: '₹80',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
    beverages: [
      {
        name: 'Masala Chai',
        description: 'Traditional Indian spiced tea brewed with aromatic spices and herbs',
        price: '₹50',
        dietary: ['v'],
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Lassi',
        description: 'Sweet or salty yogurt-based drink blended with spices and sometimes fruit',
        price: '₹80',
        dietary: ['v', 'gf'],
        image: 'https://www.veganricha.com/wp-content/uploads/2022/06/Baklava-Lassi-4538.jpg'
      },
      {
        name: 'Fresh Lime Soda',
        description: 'Refreshing drink made with fresh lime juice, sugar, salt and soda water',
        price: '₹70',
        dietary: ['v', 'gf'],
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
                <span className="text-sm text-gray-600">Gluten-Free (gf)</span>
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
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Gluten-Free</span>
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