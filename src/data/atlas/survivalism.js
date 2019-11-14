import Survivalism_Icon_Button from '../../assets/atlas/icons/menu/Survivalism_Icon_Button';
import Skill_TheBasics_Icon from '../../assets/atlas/icons/survivalism/Skill_TheBasics_Icon';
import Skill_ToolsOfTheTrade_Icon from '../../assets/atlas/icons/survivalism/Skill_ToolsOfTheTrade_Icon';
import Skill_ConstructionUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_ConstructionUnlock_Icon';
import Skill_BasicSwimming_Icon from '../../assets/atlas/icons/survivalism/Skill_BasicSwimming_Icon';
import Skill_WaterKeeper_Icon from '../../assets/atlas/icons/survivalism/Skill_WaterKeeper_Icon';
import Skill_HandToHandCombatUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_HandToHandCombatUnlock_Icon';
import Skill_ArcheryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_ArcheryUnlock_Icon';
import Skill_AdvancedTools_Icon from '../../assets/atlas/icons/survivalism/Skill_AdvancedTools_Icon';
import Skill_ImprovedSwimming_Icon from '../../assets/atlas/icons/survivalism/Skill_ImprovedSwimming_Icon';
import Skill_BasicOxygen_Icon from '../../assets/atlas/icons/survivalism/Skill_BasicOxygen_Icon';
import Skill_CookingUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_CookingUnlock_Icon';
import Skill_MedicineUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_MedicineUnlock_Icon';
import Skill_BasicHandHarvesting_Icon from '../../assets/atlas/icons/survivalism/Skill_BasicHandHarvesting_Icon';
import Skill_BeastmasteryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_BeastmasteryUnlock_Icon';
import Skill_AdvancedSwimming_Icon from '../../assets/atlas/icons/survivalism/Skill_AdvancedSwimming_Icon';
import Skill_ImprovedOxygen_Icon from '../../assets/atlas/icons/survivalism/Skill_ImprovedOxygen_Icon';
import Skill_BasicWaterInsulation_Icon from '../../assets/atlas/icons/survivalism/Skill_BasicWaterInsulation_Icon';
import Skill_BasicVitamins_Icon from '../../assets/atlas/icons/survivalism/Skill_BasicVitamins_Icon';
import Skill_ImprovedHandHarvesting_Icon from '../../assets/atlas/icons/survivalism/Skill_ImprovedHandHarvesting_Icon';
import Skill_AdvancedOxygen_Icon from '../../assets/atlas/icons/survivalism/Skill_AdvancedOxygen_Icon';
import Skill_ImprovedWaterInsulation_Icon from '../../assets/atlas/icons/survivalism/Skill_ImprovedWaterInsulation_Icon';
import Skill_ImprovedVitamins_Icon from '../../assets/atlas/icons/survivalism/Skill_ImprovedVitamins_Icon';
import Skill_AdvancedHandHarvesting_Icon from '../../assets/atlas/icons/survivalism/Skill_AdvancedHandHarvesting_Icon';
import Skill_AdvancedWaterInsulation_Icon from '../../assets/atlas/icons/survivalism/Skill_AdvancedWaterInsulation_Icon';
import Skill_AdvancedVitamins_Icon from '../../assets/atlas/icons/survivalism/Skill_AdvancedVitamins_Icon';

export default {
  dimension: [1, 5, 5, 4, 3, 1],
  icon: Survivalism_Icon_Button,
  display: 'Survivalism',
  skills: {
    'The Basics': {
      icon: Skill_TheBasics_Icon,
      name: 'The Basics',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Hatchet',
        'Stone Pick',
        'Torch',
        'Campfire',
        'Cloth Boots',
        'Cloth Gloves',
        'Cloth Hat',
        'Cloth Paawnts',
        'Cloth Shirt',
        'Simple Bed',
        'Note'
      ]
    },
    'Tools of the Trade': {
      icon: Skill_ToolsOfTheTrade_Icon,
      name: 'Tools of the Trade',
      skill: 1,
      row: 0,
      order: 1,
      recipe: [
        'Spear'
      ]
    },
    'Construction Unlock': {
      icon: Skill_ConstructionUnlock_Icon,
      name: 'Construction Unlock',
      skill: 2,
      row: 1,
      order: 0,
      unlock: 'construction',
      and: [
        'The Basics'
      ]
    },
    'Basic Swimming': {
      icon: Skill_BasicSwimming_Icon,
      name: 'Basic Swimming',
      skill: 1,
      row: 1,
      order: 1,
      bonus: [
        {
          'Swimming Speed': 15
        }
      ],
      and: [
        'The Basics'
      ]
    },
    'Water Keeper': {
      icon: Skill_WaterKeeper_Icon,
      name: 'Water Keeper',
      skill: 1,
      row: 1,
      order: 2,
      recipe: [
        'Waterskin'
      ],
      and: [
        'The Basics'
      ]
    },
    'Hand-to-Hand Combat Unlock': {
      icon: Skill_HandToHandCombatUnlock_Icon,
      name: 'Hand-to-Hand Combat Unlock',
      skill: 2,
      row: 1,
      order: 3,
      unlock: 'hand-to-handCombat',
      and: [
        'Tools of the Trade'
      ]
    },
    'Archery Unlock': {
      icon: Skill_ArcheryUnlock_Icon,
      name: 'Archery Unlock',
      skill: 3,
      row: 1,
      order: 4,
      unlock: 'archery',
      and: [
        'Tools of the Trade'
      ]
    },
    'Advanced Tools': {
      icon: Skill_AdvancedTools_Icon,
      name: 'Advanced Tools',
      skill: 8,
      row: 1,
      order: 5,
      recipe: [
        'Smithy',
        'Shovel',
        'Fishing Rod',
        'Sissors',
        'Spyglass',
        'Lantern',
        'Metal Pick',
        'Metal Hatchet',
        'Metal Sickle',
        'Climbing Pick',
        'Fishing Net'
      ],
      and: [
        'Tools of the Trade'
      ]
    },
    'Improved Swimming': {
      icon: Skill_ImprovedSwimming_Icon,
      name: 'Improved Swimming',
      skill: 2,
      row: 2,
      order: 0,
      bonus: [
        {
          'Swimming Speed': 15
        }
      ],
      and: [
        'Basic Swimming'
      ]
    },
    'Basic Oxygen': {
      icon: Skill_BasicOxygen_Icon,
      name: 'Basic Oxygen',
      skill: 1,
      row: 2,
      order: 1,
      bonus: [
        {
          'Oxygen Consumption Rate': -20
        }
      ],
      and: [
        'Basic Swimming'
      ]
    },
    'Cooking Unlock': {
      icon: Skill_CookingUnlock_Icon,
      name: 'Cooking Unlock',
      skill: 2,
      row: 2,
      order: 2,
      unlock: 'cooking',
      and: [
        'Water Keeper'
      ]
    },
    'Medicine Unlock': {
      icon: Skill_MedicineUnlock_Icon,
      name: 'Medicine Unlock',
      skill: 2,
      row: 2,
      order: 3,
      unlock: 'medicine',
      and: [
        'Water Keeper'
      ]
    },
    'Basic Hand-Harvesting': {
      icon: Skill_BasicHandHarvesting_Icon,
      name: 'Basic Hand-Harvesting',
      skill: 1,
      row: 2,
      order: 4,
      bonus: [
        {
          'Hand Harvesting Yield': 20
        }
      ],
      and: [
        'Hand-to-Hand Combat Unlock'
      ]
    },
    'Beastmastery Unlock': {
      icon: Skill_BeastmasteryUnlock_Icon,
      name: 'Beastmastery Unlock',
      skill: 2,
      row: 2,
      order: 5,
      unlock: 'beastmastery',
      and: [
        'Hand-to-Hand Combat Unlock'
      ]
    },
    'Advanced Swimming': {
      icon: Skill_AdvancedSwimming_Icon,
      name: 'Advanced Swimming',
      skill: 8,
      row: 3,
      order: 0,
      bonus: [
        {
          'Swimming Speed': 15
        }
      ],
      and: [
        'Improved Swimming'
      ]
    },
    'Improved Oxygen': {
      icon: Skill_ImprovedOxygen_Icon,
      name: 'Improved Oxygen',
      skill: 2,
      row: 3,
      order: 1,
      bonus: [
        {
          'Oxygen Consumption Rate': -20
        }
      ],
      and: [
        'Basic Oxygen'
      ]
    },
    'Basic Water Insulation': {
      icon: Skill_BasicWaterInsulation_Icon,
      name: 'Basic Water Insulation',
      skill: 2,
      row: 3,
      order: 2,
      bonus: [
        {
          'Water Insulation': 15
        }
      ],
      and: [
        'Basic Oxygen'
      ]
    },
    'Basic Vitamins': {
      icon: Skill_BasicVitamins_Icon,
      name: 'Basic Vitamins',
      skill: 1,
      row: 3,
      order: 3,
      bonus: [
        {
          'Vitamin Depletion Rate': -10
        }
      ],
      and: [
        'Cooking Unlock'
      ]
    },
    'Improved Hand-Harvesting': {
      icon: Skill_ImprovedHandHarvesting_Icon,
      name: 'Improved Hand-Harvesting',
      skill: 2,
      row: 3,
      order: 4,
      bonus: [
        {
          'Hand Harvesting Yield': 20
        }
      ],
      and: [
        'Basic Hand-Harvesting'
      ]
    },
    'Advanced Oxygen': {
      icon: Skill_AdvancedOxygen_Icon,
      name: 'Advanced Oxygen',
      skill: 8,
      row: 4,
      order: 0,
      bonus: [
        {
          'Oxygen Consumption Rate': -20
        }
      ],
      and: [
        'Improved Oxygen'
      ]
    },
    'Improved Water Insulation': {
      icon: Skill_ImprovedWaterInsulation_Icon,
      name: 'Improved Water Insulation',
      skill: 2,
      row: 4,
      order: 1,
      bonus: [
        {
          'Water Insulation': 15
        }
      ],
      and: [
        'Basic Water Insulation'
      ]
    },
    'Improved Vitamins': {
      icon: Skill_ImprovedVitamins_Icon,
      name: 'Improved Vitamins',
      skill: 2,
      row: 4,
      order: 2,
      bonus: [
        {
          'Vitamin Depletion Rate': -10
        }
      ],
      and: [
        'Basic Vitamins'
      ]
    },
    'Advanced Hand-Harvesting': {
      icon: Skill_AdvancedHandHarvesting_Icon,
      name: 'Advanced Hand-Harvesting',
      skill: 8,
      row: 4,
      order: 3,
      bonus: [
        {
          'Hand Harvesting Yield': 20
        }
      ],
      and: [
        'Improved Hand-Harvesting'
      ]
    },
    'Advanced Water Insulation': {
      icon: Skill_AdvancedWaterInsulation_Icon,
      name: 'Advanced Water Insulation',
      skill: 8,
      row: 5,
      order: 0,
      bonus: [
        {
          'Water Insulation': 15
        }
      ],
      and: [
        'Improved Water Insulation'
      ]
    },
    'Advanced Vitamins': {
      icon: Skill_AdvancedVitamins_Icon,
      name: 'Advanced Vitamins',
      skill: 8,
      row: 5,
      order: 1,
      bonus: [
        {
          'Vitamin Depletion Rate': -10
        }
      ],
      and: [
        'Improved Vitamins'
      ]
    }
  }
}
