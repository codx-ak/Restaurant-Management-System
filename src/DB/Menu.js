import Image1 from '../assets/Menu/Breakfast/breakfast1.png'
import Image2 from '../assets/Menu/Breakfast/breakfast2.png'
import Image3 from '../assets/Menu/Breakfast/breakfast3.png'
import Image4 from '../assets/Menu/Breakfast/breakfast4.png'
import Image5 from '../assets/Menu/Breakfast/breakfast5.png'

import Image6 from '../assets/Menu/lunch/lunch1.png'
import Image7 from '../assets/Menu/lunch/lunch2.png'
import Image8 from '../assets/Menu/lunch/lunch3.png'
import Image9 from '../assets/Menu/lunch/lunch4.png'
import Image10 from '../assets/Menu/lunch/lunch5.png'

import Image11 from '../assets/Menu/Dinner/dinner1.png'
import Image12 from '../assets/Menu/Dinner/dinner2.png'
import Image13 from '../assets/Menu/Dinner/dinner3.png'
import Image14 from '../assets/Menu/Dinner/dinner4.png'
import Image15 from '../assets/Menu/Dinner/dinner5.png'

export const Menu=[
    {
    section_name:'Desserts',
    items: [
      {
        name: 'Chocolate Lava Cake', 
      description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
      image:Image1,
       price: 6.99
      },
      {
      name: 'Tiramisu', 
      description: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.', 
      image:Image2,
      price: 7.49
      }, 
      {
      name: 'Fruit Tart', 
      description: 'Buttery tart shell filled with custard and topped with fresh seasonal fruits.',
      image:Image3,
      price: 5.99
      }
    ]
    },  
    {
    section_name:'Entrees',
    items: [
      {
        name: 'Steak', 
        description: 'A juicy grilled steak served with garlic mashed potatoes and seasonal vegetables.', 
        image:Image4,
        price: 18.99
      },
      
      {
        name: 'Grilled Chicken', 
        description: 'Tender grilled chicken breast marinated in herbs and spices.',
        image:Image5,
         price: 15.49
        },
      
        {
        name: 'Salmon', 
        description: 'Pan-seared salmon fillet served with lemon butter sauce.',
        image:Image6,
         price: 17.99
        }
    ]
    },
    {
    section_name:'Appetizers',
    items: [
      {
        name: 'Sampler Platter',
        description: 'A delicious assortment of mini spring rolls, chicken wings, and mozzarella sticks.',
        image:Image7,
        price: 10.99
        }
      ,
      {
        name: 'Bruschetta',
         description: 'Toasted baguette slices topped with fresh tomatoes, basil, and balsamic glaze.',
         image:Image8,
          price: 7.49
        },
        {
          name: 'Spinach Dip',
         description: 'Creamy spinach and artichoke dip served with tortilla chips.',
         image:Image9,
          price: 8.99
        }          
    ]
    },
    {
    section_name:'pasta',
    items: [
      {
        name: 'Spaghetti Carbonara',
         description: 'Classic spaghetti with creamy carbonara sauce, bacon, and parmesan cheese.',
         image:Image10,
          price: 12.99
        },
      {
        name: 'Penne Primavera', 
        description: 'Penne pasta tossed with fresh vegetables in a light olive oil and garlic sauce.', 
        image:Image11,
        price: 11.99
      },
      {
        name: 'Chicken Alfredo', 
        description: 'Grilled chicken and fettuccine pasta in a rich alfredo sauce.',
        image:Image12,
         price: 13.99
        }       
    ]
    },
    {
    section_name:'Salads',
    items: [
      {
        name: 'Caesar Salad',
         description: 'Crisp romaine lettuce, croutons, and parmesan cheese with Caesar dressing.',
         image:Image13,
          price: 9.99
        },
    
    {
      name: 'Greek Salad', 
      description: 'Fresh cucumbers, tomatoes, olives, and feta cheese with Greek vinaigrette.',
      image:Image14,
       price: 8.49
      },
    
    {
      name: 'Caprese Salad',
       description: 'Slices of ripe tomatoes, fresh mozzarella, and basil with balsamic glaze.', 
       image:Image15,
       price: 7.99
      }
    ]
    }
  ]
