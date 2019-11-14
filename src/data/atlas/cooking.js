import Cooking_Icon_Button from '../../assets/atlas/icons/menu/Cooking_Icon_Button';
import Skill_BasicsOfCooking_Icon from '../../assets/atlas/icons/cooking/Skill_BasicsOfCooking_Icon';
import Skill_WaterStorage_Icon from '../../assets/atlas/icons/cooking/Skill_WaterStorage_Icon';
import Skill_BasicOvereatingTolerance_Icon from '../../assets/atlas/icons/cooking/Skill_BasicOvereatingTolerance_Icon';
import Skill_BasicExpeditedOrders_Icon from '../../assets/atlas/icons/cooking/Skill_BasicExpeditedOrders_Icon';
import Skill_BasicRecipes_Icon from '../../assets/atlas/icons/cooking/Skill_BasicRecipes_Icon';
import Skill_BasicFarming_Icon from '../../assets/atlas/icons/cooking/Skill_BasicFarming_Icon';
import Skill_ImprovedOvereatingTolerance_Icon from '../../assets/atlas/icons/cooking/Skill_ImprovedOvereatingTolerance_Icon';
import Skill_ImprovedExpeditedOrders_Icon from '../../assets/atlas/icons/cooking/Skill_ImprovedExpeditedOrders_Icon';
import Skill_IntermediateRecipes_Icon from '../../assets/atlas/icons/cooking/Skill_IntermediateRecipes_Icon';
import Skill_Preservatives_Icon from '../../assets/atlas/icons/cooking/Skill_Preservatives_Icon';
import Skill_BasicSoilTilling_Icon from '../../assets/atlas/icons/cooking/Skill_BasicSoilTilling_Icon';
import Skill_AdvancedOvereatingTolerance_Icon from '../../assets/atlas/icons/cooking/Skill_AdvancedOvereatingTolerance_Icon';
import Skill_AdvancedExpeditedOrders_Icon from '../../assets/atlas/icons/cooking/Skill_AdvancedExpeditedOrders_Icon';
import Skill_AdvancedRecipes_Icon from '../../assets/atlas/icons/cooking/Skill_AdvancedRecipes_Icon';
import Skill_SecretsOfFarming_Icon from '../../assets/atlas/icons/cooking/Skill_SecretsOfFarming_Icon';
import Skill_ImprovedSoilTilling_Icon from '../../assets/atlas/icons/cooking/Skill_ImprovedSoilTilling_Icon';
import Skill_SecretsOfCooking_Icon from '../../assets/atlas/icons/cooking/Skill_SecretsOfCooking_Icon';
import Skill_AdvancedSoilTilling_Icon from '../../assets/atlas/icons/cooking/Skill_AdvancedSoilTilling_Icon';
import Skill_UnthinkableDelicacy_Icon from '../../assets/atlas/icons/cooking/Skill_UnthinkableDelicacy_Icon';

export default {
  dimension: [2, 3, 4, 3, 1, 0],
  icon: Cooking_Icon_Button,
  display: 'Cooking & Farming',
  skills: {
    'Basics Of Cooking': {
      icon: Skill_BasicsOfCooking_Icon,
      name: 'Basics Of Cooking',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Cooking Pot',
        'Hardtack',
        'Berry Tea',
        'Ale'
      ]
    },
    'Water Storage': {
      icon: Skill_WaterStorage_Icon,
      name: 'Water Storage',
      skill: 2,
      row: 0,
      order: 1,
      recipe: [
        'Water Jar',
        'Water Barrel'
      ]
    },
    'Basic Overeating Tolerance': {
      icon: Skill_BasicOvereatingTolerance_Icon,
      name: 'Basic Overeating Tolerance',
      skill: 1,
      row: 0,
      order: 2,
      bonus: [
        {
          'Overeating Damage': -10
        }
      ]
    },
    'Basic Expedited Orders': {
      icon: Skill_BasicExpeditedOrders_Icon,
      name: 'Basic Expedited Orders',
      skill: 1,
      row: 1,
      order: 0,
      bonus: [
        {
          'Cooking Speed': 20
        }
      ],
      and: [
        'Basics Of Cooking'
      ]
    },
    'Basic Recipes': {
      icon: Skill_BasicRecipes_Icon,
      name: 'Basic Recipes',
      skill: 1,
      row: 1,
      order: 1,
      recipe: [
        'Pork Pie',
        'Beef Buns',
        'Bubble N\' Squeak',
        'Celery Soup',
        'Hot Cocoa',
        'Monarch\'s Cake',
        'Rosemary Chicken',
        'Spiced Rum',
        'Fish \'n Chips'
      ],
      and: [
        'Basics Of Cooking'
      ]
    },
    'Basic Farming': {
      icon: Skill_BasicFarming_Icon,
      name: 'Basic Farming',
      skill: 1,
      row: 1,
      order: 2,
      recipe: [
        'Small Crop Plot',
        'Water Pipe System',
        'Fertilizer',
        'Stone Water Reseroir'
      ],
      and: [
        'Water Storage'
      ]
    },
    'Improved Overeating Tolerance': {
      icon: Skill_ImprovedOvereatingTolerance_Icon,
      name: 'Improved Overeating Tolerance',
      skill: 2,
      row: 1,
      order: 3,
      bonus: [
        {
          'Overeating Damage': -10
        }
      ],
      and: [
        'Basic Overeating Tolerance'
      ]
    },
    'Improved Expedited Orders': {
      icon: Skill_ImprovedExpeditedOrders_Icon,
      name: 'Improved Expedited Orders',
      skill: 4,
      row: 2,
      order: 0,
      bonus: [
        {
          'Cooking Speed': 20
        }
      ],
      and: [
        'Basic Expedited Orders'
      ]
    },
    'Intermediate Recipes': {
      icon: Skill_IntermediateRecipes_Icon,
      name: 'Intermediate Recipes',
      skill: 5,
      row: 2,
      order: 1,
      recipe: [
        'Dark Draught',
        'Creme Brulee',
        'Pudding',
        'Shrunken Head Stew',
        'Spicey Roll',
        'Stuffed & Baked Fish',
        'Obara Stew'
      ],
      and: [
        'Basic Recipes'
      ]
    },
    'Preservatives': {
      icon: Skill_Preservatives_Icon,
      name: 'Preservatives',
      skill: 1,
      row: 2,
      order: 2,
      recipes: [
        'Preserving Salt',
        'Preserving Bag'
      ],
      and: [
        'Basic Farming'
      ]
    },
    'Basic Soil Tilling': {
      icon: Skill_BasicSoilTilling_Icon,
      name: 'Basic Soil Tilling',
      skill: 1,
      row: 2,
      order: 3,
      bonus: [
        {
          'Soil Growth Bonus': 20
        }
      ],
      and: [
        'Basic Farming'
      ]
    },
    'Advanced Overeating Tolerance': {
      icon: Skill_AdvancedOvereatingTolerance_Icon,
      name: 'Advanced Overeating Tolerance',
      skill: 8,
      row: 2,
      order: 4,
      bonus: [
        {
          'Overeating Damage': -10
        }
      ],
      and: [
        'Improved Overeating Tolerance'
      ]
    },
    'Advanced Expedited Orders': {
      icon: Skill_AdvancedExpeditedOrders_Icon,
      name: 'Advanced Expedited Orders',
      skill: 8,
      row: 3,
      order: 0,
      bonus: [
        {
          'Cooking Speed': 15
        }
      ],
      and: [
        'Improved Expedited Orders'
      ]
    },
    'Advanced Recipes': {
      icon: Skill_AdvancedRecipes_Icon,
      name: 'Advanced Recipes',
      skill: 8,
      row: 3,
      order: 1,
      recipe: [
        'Song of the Sea',
        'Reaper\'s Regard',
        'Tara\'Nosti Treat',
        'Dragon\'s Tongue Delight'
      ],
      and: [
        'Intermediate Recipes'
      ]
    },
    'Secrets Of Farming': {
      icon: Skill_SecretsOfFarming_Icon,
      name: 'Secrets Of Farming',
      skill: 2,
      row: 3,
      order: 2,
      recipe: [
        'Large Crop Plot'
      ],
      and: [
        'Preservatives'
      ]
    },
    'Improved Soil Tilling': {
      icon: Skill_ImprovedSoilTilling_Icon,
      name: 'Improved Soil Tilling',
      skill: 2,
      row: 3,
      order: 3,
      bonus: [
        {
          'Soil Growth Bonus': 20
        }
      ],
      and: [
        'Basic Soil Tilling'
      ]
    },
    'Secrets Of Cooking': {
      icon: Skill_SecretsOfCooking_Icon,
      name: 'Secrets Of Cooking',
      skill: 2,
      row: 4,
      order: 0,
      recipe: [
        'Grill'
      ],
      or: [
        'Advanced Recipes',
        'Basic Farming'
      ]
    },
    'Advanced Soil Tilling': {
      icon: Skill_AdvancedSoilTilling_Icon,
      name: 'Advanced Soil Tilling',
      skill: 6,
      row: 4,
      order: 1,
      bonus: [
        {
          'Soil Growth Bonus': 20
        }
      ],
      and: [
        'Improved Soil Tilling'
      ]
    },
    'Unthinkable Delicacy': {
      icon: Skill_UnthinkableDelicacy_Icon,
      name: 'Unthinkable Delicacy',
      skill: 2,
      row: 5,
      order: 0,
      feat: [
        'Unthinkable Delicacy'
      ],
      and: [
        'Secrets Of Cooking',
        'Advanced Expedited Orders',
        'Advanced Overeating Tolerance',
        'Advanced Soil Tilling'
      ]
    }
  }
}
