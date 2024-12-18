import { useState } from 'react';
import meatball from "../../assets/meatBalls.jpeg"
import sambusa from "../../assets/sambus.jpeg"
import SpringRoll from "../../assets/spring_rolls.jpeg"
import canpes from "../../assets/canapes.jpeg"
import pizza from "../../assets/pizza.jpeg"
const CocktailMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuCategories = {
    'Hot Appetizers': [
      {
        name: 'spring rolls',
        description: 'Stir-fried vegetables in rice paper',
        image: SpringRoll
      },
      {
        name: 'Mini Meatballs',
        description: 'Spiced Ethiopian-style empanadas',
        image: meatball      
      },
      {
        name: 'Mini Beef Sambusas',
        description: 'Spiced Ethiopian-style empanadas',
        image: sambusa      
      },
      {
        name: 'mini pizza',
        description: 'Mini pizza with cheese and tomato',
        image: pizza
      },
      {
        name: 'Stuffed Mushrooms',
        description: 'Herb-infused cream cheese filling',
        image: '/api/placeholder/300/200?text=Stuffed+Mushrooms'
      }
    ],
    'Cold Appetizers': [
      {
        name: 'Mediterranean Mezze Platter',
        description: 'Hummus, olives, and fresh vegetables',
        image: '/api/placeholder/300/200?text=Mezze+Platter'
      },
      {
        name: 'canapes',
        description: 'Delicate bites with dill cream',
        image: canpes
      },
      {
        name: 'Spring Rolls',
        description: 'Stir-fried vegetables in rice paper',
        image: '/api/placeholder/300/200?text=Vegetable+Rolls'
      },
      {
        name: 'Caprese Skewers',
        description: 'Fresh mozzarella, tomato, and basil',
        image: '/api/placeholder/300/200?text=Caprese+Skewers'
      },
      {
        name: 'Meatball',
        description: 'Spiced meatballs',    
        image: meatball
      }
    ]
  };

  const handleSeeMore = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          {/* <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="mx-auto mb-4 text-primary-600 w-12 h-12"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg> */}
          <h2 className="text-3xl font-bold text-gray-800">
            Cocktail Event Appetizers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Delightful bites perfect for your cocktail and social events
          </p>
        </div>

        {Object.keys(menuCategories).map((category) => (
          <div key={category} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {category}
              </h3>
              <button 
                onClick={() => handleSeeMore(category)}
                className="flex items-center text-primary-600 hover:text-primary-700 transition"
              >
                {selectedCategory === category ? 'Hide Details' : 'See More'}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {menuCategories[category].slice(0, 4).map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {selectedCategory === category && (
              <div className="mt-6 grid md:grid-cols-4 gap-6 animate-fade-in">
                {menuCategories[category].slice(4).map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailMenu;