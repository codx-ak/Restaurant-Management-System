import BreakFast1 from '../assets/Menu/Breakfast/breakfast1.png'
import BreakFast2 from '../assets/Menu/Breakfast/breakfast2.png'
import BreakFast3 from '../assets/Menu/Breakfast/breakfast3.png'

import Lunch1 from '../assets/Menu/lunch/lunch1.png'
import Lunch2 from '../assets/Menu/lunch/lunch2.png'
import Lunch3 from '../assets/Menu/lunch/lunch3.png'

import Dinner1 from '../assets/Menu/Dinner/dinner1.png'
import Dinner2 from '../assets/Menu/Dinner/dinner2.png'
import Dinner3 from '../assets/Menu/Dinner/dinner3.png'

export const MenuData=[
    {
    section_name:'BREAKFAST',
    items: [
        {
            item_name: "Pancakes",
            description: "Fluffy pancakes served with maple syrup and butter.",
            image:BreakFast1,
            price: 7.99
          },
          {
            item_name: "Eggs Benedict",
            description: "Poached eggs on an English muffin with Canadian bacon and hollandaise sauce.",
            image:BreakFast2,
            price: 9.49
          },
          {
            item_name: "French Toast",
            description: "Thick slices of French toast topped with powdered sugar and fresh berries.",
            image:BreakFast3,
            price: 6.99
          }
    ]
    },
    {
    section_name:'LUNCH',
    items: [
        {
            item_name: "Steak Frites",
            description: "Grilled sirloin steak served with shoestring fries and garlic aioli.",
            image:Lunch1,
            price: 18.99
          },
          {
            item_name: "Salmon Salad",
            description: "Grilled salmon filet on a bed of mixed greens with citrus vinaigrette.",
            image:Lunch2,
            price: 16.99
          },
          {
            item_name: "Pasta Primavera",
            description: "Mixed vegetables and pasta in a light cream sauce.",
            image:Lunch3,
            price: 14.99
          }
    ]
    },
    {
    section_name:'DINNER',
    items: [
        {
            item_name: "Filet Mignon",
            description: "Tender filet mignon cooked to perfection, served with mashed potatoes and asparagus.",
            image:Dinner1,
            price: 27.99
          },
          {
            item_name: "Lobster Tail",
            description: "Grilled lobster tail served with drawn butter and lemon.",
            image:Dinner2,
            price: 32.99
          },
          {
            item_name: "Vegetable Risotto",
            description: "Creamy risotto with seasonal vegetables and Parmesan cheese.",
            image:Dinner3,
            price: 19.99
          }
    ]
    }]