import Armory_Icon_Button from '../../assets/atlas/icons/menu/Armory_Icon_Button';
import Skill_BasicsOfArmor_Icon from '../../assets/atlas/icons/armory/Skill_BasicsOfArmor_Icon';
import Skill_BasicTemperateArmor_Icon from '../../assets/atlas/icons/armory/Skill_BasicTemperateArmor_Icon';
import Skill_BasicArmorArticulation_Icon from '../../assets/atlas/icons/armory/Skill_BasicArmorArticulation_Icon';
import Skill_BasicArmorUpkeep_Icon from '../../assets/atlas/icons/armory/Skill_BasicArmorUpkeep_Icon';
import Skill_BasicsOfShields_Icon from '../../assets/atlas/icons/armory/Skill_BasicsOfShields_Icon';
import Skill_BasicArmorStudies_Icon from '../../assets/atlas/icons/armory/Skill_BasicArmorStudies_Icon';
import Skill_ImprovedTemperateArmor_Icon from '../../assets/atlas/icons/armory/Skill_ImprovedTemperateArmor_Icon';
import Skill_ImprovedArmorArticulation_Icon from '../../assets/atlas/icons/armory/Skill_ImprovedArmorArticulation_Icon';
import Skill_ImprovedArmorUpkeep_Icon from '../../assets/atlas/icons/armory/Skill_ImprovedArmorUpkeep_Icon';
import Skill_BasicShieldStudies_Icon from '../../assets/atlas/icons/armory/Skill_BasicShieldStudies_Icon';
import Skill_IntermediateArmorStudies_Icon from '../../assets/atlas/icons/armory/Skill_IntermediateArmorStudies_Icon';
import Skill_AdvancedTemperateArmor_Icon from '../../assets/atlas/icons/armory/Skill_AdvancedTemperateArmor_Icon';
import Skill_AdvancedArmorArticulation_Icon from '../../assets/atlas/icons/armory/Skill_AdvancedArmorArticulation_Icon';
import Skill_AdvancedArmorUpkeep_Icon from '../../assets/atlas/icons/armory/Skill_AdvancedArmorUpkeep_Icon';
import Skill_BasicShieldCare_Icon from '../../assets/atlas/icons/armory/Skill_BasicShieldCare_Icon';
import Skill_BasicHonedEdge_Icon from '../../assets/atlas/icons/armory/Skill_BasicHonedEdge_Icon';
import Skill_ImprovedShieldStudies_Icon from '../../assets/atlas/icons/armory/Skill_ImprovedShieldStudies_Icon';
import Skill_AdvancedArmorStudies_Icon from '../../assets/atlas/icons/armory/Skill_AdvancedArmorStudies_Icon';
import Skill_ImprovedShieldCare_Icon from '../../assets/atlas/icons/armory/Skill_ImprovedShieldCare_Icon';
import Skill_ImprovedHonedEdge_Icon from '../../assets/atlas/icons/armory/Skill_ImprovedHonedEdge_Icon';
import Skill_ExpertShieldStudies_Icon from '../../assets/atlas/icons/armory/Skill_ExpertShieldStudies_Icon';
import Skill_AdvancedShieldCare_Icon from '../../assets/atlas/icons/armory/Skill_AdvancedShieldCare_Icon';
import Skill_AdvancedHonedEdge_Icon from '../../assets/atlas/icons/armory/Skill_AdvancedHonedEdge_Icon';

export default {
  dimension: [3, 4, 4, 2, 1, 1, 0, 1],
  icon: Armory_Icon_Button,
  display: 'Armory',
  skills: {
    'Basics Of Armor': {
      icon: Skill_BasicsOfArmor_Icon,
      name: 'Basics Of Armor',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Hide Boots',
        'Hide Gloves',
        'Hide Hat',
        'Hide Pants',
        'Hide Shirt',
        'Fur Boots',
        'Fur Gauntlets',
        'Fur Cap',
        'Fur Leggings',
        'Fur Chestpiece'
      ]
    },
    'Basic Temperate Armor': {
      icon: Skill_BasicTemperateArmor_Icon,
      name: 'Basic Temperate Armor',
      skill: 1,
      row: 0,
      order: 1,
      bonus: [
        {
          'Armor Insulation Penalty Reduction': 15
        }
      ]
    },
    'Basic Armor Articulation': {
      icon: Skill_BasicArmorArticulation_Icon,
      name: 'Basic Armor Articulation',
      skill: 1,
      row: 0,
      order: 2,
      bonus: [
        {
          'Armor Movement Penalty': -10
        }
      ]
    },
    'Basic Armor Upkeep': {
      icon: Skill_BasicArmorUpkeep_Icon,
      name: 'Basic Armor Upkeep',
      skill: 1,
      row: 0,
      order: 3,
      bonus: [
        {
          'Armor Durability Loss': -10
        }
      ]
    },
    'Basics Of Shields': {
      icon: Skill_BasicsOfShields_Icon,
      name: 'Basics Of Shields',
      skill: 2,
      row: 1,
      order: 0,
      recipe: [
        'Wooden Shield',
        'Heavy Shield'
      ],
      and: [
        'Basics Of Armor'
      ]
    },
    'Basic Armor Studies': {
      icon: Skill_BasicArmorStudies_Icon,
      name: 'Basic Armor Studies',
      skill: 2,
      row: 1,
      order: 1,
      bonus: [
        {
          'Armor Equip Quality': 2
        }
      ],
      and: [
        'Basics Of Armor'
      ]
    },
    'Improved Temperate Armor': {
      icon: Skill_ImprovedTemperateArmor_Icon,
      name: 'Improved Temperate Armor',
      skill: 2,
      row: 1,
      order: 2,
      bonus: [
        {
          'Armor Insulation Penalty Reduction': 15
        }
      ],
      and: [
        'Basic Temperate Armor'
      ]
    },
    'Improved Armor Articulation': {
      icon: Skill_ImprovedArmorArticulation_Icon,
      name: 'Improved Armor Articulation',
      skill: 2,
      row: 1,
      order: 3,
      bonus: [
        {
          'Armor Movement Penalty': -10
        }
      ],
      and: [
        'Basic Armor Articulation'
      ]
    },
    'Improved Armor Upkeep': {
      icon: Skill_ImprovedArmorUpkeep_Icon,
      name: 'Improved Armor Upkeep',
      skill: 2,
      row: 1,
      order: 4,
      bonus: [
        {
          'Armor Durability Loss': -10
        }
      ],
      and: [
        'Basic Armor Upkeep'
      ]
    },
    'Basic Shield Studies': {
      icon: Skill_BasicShieldStudies_Icon,
      name: 'Basic Shield Studies',
      skill: 2,
      row: 2,
      order: 0,
      bonus: [
        {
          'Shield Equip Quality': 2
        }
      ],
      and: [
        'Basics Of Shields'
      ]
    },
    'Intermediate Armor Studies': {
      icon: Skill_IntermediateArmorStudies_Icon,
      name: 'Intermediate Armor Studies',
      skill: 4,
      row: 2,
      order: 1,
      bonus: [
        {
          'Armor Equip Quality': 2
        }
      ],
      and: [
        'Basic Armor Studies'
      ]
    },
    'Advanced Temperate Armor': {
      icon: Skill_AdvancedTemperateArmor_Icon,
      name: 'Advanced Temperate Armor',
      skill: 8,
      row: 2,
      order: 2,
      bonus: [
        {
          'Armor Insulation Penalty Reduction': 15
        }
      ],
      and: [
        'Improved Temperate Armor'
      ]
    },
    'Advanced Armor Articulation': {
      icon: Skill_AdvancedArmorArticulation_Icon,
      name: 'Advanced Armor Articulation',
      skill: 8,
      row: 2,
      order: 3,
      bonus: [
        {
          'Armor Movement Penalty': -25
        }
      ],
      and: [
        'Improved Armor Articulation'
      ]
    },
    'Advanced Armor Upkeep': {
      icon: Skill_AdvancedArmorUpkeep_Icon,
      name: 'Advanced Armor Upkeep',
      skill: 8,
      row: 2,
      order: 4,
      bonus: [
        {
          'Armor Durability Loss': -10
        }
      ],
      and: [
        'Improved Armor Upkeep'
      ]
    },
    'Basic Shield Care': {
      icon: Skill_BasicShieldCare_Icon,
      name: 'Basic Shield Care',
      skill: 2,
      row: 3,
      order: 0,
      bonus: [
        {
          'Shield Durability Loss': -10
        }
      ],
      and: [
        'Basic Shield Studies'
      ]
    },
    'Basic Honed Edge': {
      icon: Skill_BasicHonedEdge_Icon,
      name: 'Basic Honed Edge',
      skill: 2,
      row: 3,
      order: 1,
      bonus: [
        {
          'Stun Time Dealt By Shield': 15
        }
      ],
      and: [
        'Basic Shield Studies'
      ]
    },
    'Secrets Of Armor': {
      icon: Skill_BasicsOfArmor_Icon,
      name: 'Secrets Of Armor',
      skill: 4,
      row: 3,
      order: 2,
      recipe: [
        'Plate Boots',
        'Plate Gloves',
        'Plate Helmet',
        'Plate Pants',
        'Plate Shirt',
        'Glider Suit'
      ],
      and: [
        'Intermediate Armor Studies'
      ]
    },
    'Improved Shield Studies': {
      icon: Skill_ImprovedShieldStudies_Icon,
      name: 'Improved Shield Studies',
      skill: 4,
      row: 4,
      order: 0,
      bonus: [
        {
          'Shield Equip Quality': 2
        }
      ],
      and: [
        'Basic Shield Care',
        'Basic Honed Edge'
      ]
    },
    'Advanced Armor Studies': {
      icon: Skill_AdvancedArmorStudies_Icon,
      name: 'Advanced Armor Studies',
      skill: 8,
      row: 4,
      order: 1,
      bonus: [
        {
          'Armor Equip Quality': 1
        }
      ],
      and: [
        'Secrets Of Armor'
      ]
    },
    'Improved Shield Care': {
      icon: Skill_ImprovedShieldCare_Icon,
      name: 'Improved Shield Care',
      skill: 4,
      row: 5,
      order: 0,
      bonus: [
        {
          'Shield Durability Loss': -10
        }
      ],
      and: [
        'Improved Shield Studies'
      ]
    },
    'Improved Honed Edge': {
      icon: Skill_ImprovedHonedEdge_Icon,
      name: 'Improved Honed Edge',
      skill: 4,
      row: 5,
      order: 1,
      bonus: [
        {
          'Stun Time Dealt By Shield': 15
        }
      ],
      and: [
        'Improved Shield Studies'
      ]
    },
    'Expert Shield Studies': {
      icon: Skill_ExpertShieldStudies_Icon,
      name: 'Expert Shield Studies',
      skill: 8,
      row: 6,
      order: 0,
      bonus: [
        {
          'Shield Equip Quality': 1
        }
      ],
      and: [
        'Improved Shield Studies',
        'Improved Honed Edge'
      ]
    },
    'Advanced Shield Care': {
      icon: Skill_AdvancedShieldCare_Icon,
      name: 'Advanced Shield Care',
      skill: 8,
      row: 7,
      order: 0,
      bonus: [
        {
          'Shield Durability Loss': -10
        }
      ],
      and: [
        'Expert Shield Studies'
      ]
    },
    'Advanced Honed Edge': {
      icon: Skill_AdvancedHonedEdge_Icon,
      name: 'Advanced Honed Edge',
      skill: 10,
      row: 7,
      order: 1,
      bonus: [
        {
          'Stun Time Dealt By Shield': 15
        }
      ],
      and: [
        'Expert Shield Studies'
      ]
    }
  }
}
