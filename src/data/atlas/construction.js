import Construction_Icon_Button from '../../assets/atlas/icons/menu/Construction_Icon_Button';
import Skill_BasicToolStudies_Icon from '../../assets/atlas/icons/construction/Skill_BasicToolStudies_Icon';
import Skill_BasicsOfBuilding_Icon from '../../assets/atlas/icons/construction/Skill_BasicsOfBuilding_Icon';
import Skill_Handyman_Icon from '../../assets/atlas/icons/construction/Skill_Handyman_Icon';
import Skill_AdvancedToolStudies_Icon from '../../assets/atlas/icons/construction/Skill_AdvancedToolStudies_Icon';
import Skill_Weaving_Icon from '../../assets/atlas/icons/construction/Skill_Weaving_Icon';
import Skill_ChemicalsAndTanning_Icon from '../../assets/atlas/icons/construction/Skill_ChemicalsAndTanning_Icon';
import Skill_BasicRepairBonus_Icon from '../../assets/atlas/icons/construction/Skill_BasicRepairBonus_Icon';
import Skill_BasicRepairSkill_Icon from '../../assets/atlas/icons/construction/Skill_BasicRepairSkill_Icon';
import Skill_ExpertToolStudies_Icon from '../../assets/atlas/icons/construction/Skill_ExpertToolStudies_Icon';
import Skill_SecretsOfBuilding_Icon from '../../assets/atlas/icons/construction/Skill_SecretsOfBuilding_Icon';
import Skill_ImprovedRepairBonus_Icon from '../../assets/atlas/icons/construction/Skill_ImprovedRepairBonus_Icon';
import Skill_ImprovedRepairSkill_Icon from '../../assets/atlas/icons/construction/Skill_ImprovedRepairSkill_Icon';
import Skill_SeamanshipUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_SeamanshipUnlock_Icon';
import Skill_BasicCraftingSpeed_Icon from '../../assets/atlas/icons/construction/Skill_BasicCraftingSpeed_Icon';
import Skill_Metallurgy_Icon from '../../assets/atlas/icons/construction/Skill_Metallurgy_Icon';
import Skill_AdvancedRepairBonus_Icon from '../../assets/atlas/icons/construction/Skill_AdvancedRepairBonus_Icon';
import Skill_AdvancedRepairSkill_Icon from '../../assets/atlas/icons/construction/Skill_AdvancedRepairSkill_Icon';
import Skill_ImprovedCraftingSpeed_Icon from '../../assets/atlas/icons/construction/Skill_ImprovedCraftingSpeed_Icon';
import Skill_ArmoryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_ArmoryUnlock_Icon';
import Skill_MeleeWeaponryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_MeleeWeaponryUnlock_Icon';
import Skill_RepairFiend_Icon from '../../assets/atlas/icons/construction/Skill_RepairFiend_Icon';
import Skill_AdvancedCraftingSpeed_Icon from '../../assets/atlas/icons/construction/Skill_AdvancedCraftingSpeed_Icon';
import Skill_EsoteryOfBuilding_Icon from '../../assets/atlas/icons/construction/Skill_EsoteryOfBuilding_Icon';

export default {
  dimension: [2, 4, 3, 4, 3, 0, 0],
  icon: Construction_Icon_Button,
  display: 'Construction & Mercantilism',
  skills: {
    'Basic Tool Studies': {
      icon: Skill_BasicToolStudies_Icon,
      name: 'Basic Tool Studies',
      skill: 2,
      row: 0,
      order: 0,
      bonus: [
        {
          'Tool Equip Quality': 2
        }
      ]
    },
    'Basics of Building': {
      icon: Skill_BasicsOfBuilding_Icon,
      name: 'Basic of Building',
      skill: 1,
      row: 0,
      order: 1,
      recipe: [
        'Thatch Wall',
        'Thatch Roof',
        'Thatch Floor',
        'Thatch Door',
        'Thatch Ceiling',
        'Wooden Chair',
        'Wooden Table',
        'Rope Ladder',
        'Portable Rope Ladder'
      ]
    },
    'Handyman': {
      icon: Skill_Handyman_Icon,
      name: 'Handyman',
      skill: 1,
      row: 0,
      order: 2,
      recipe: [
        'Repair Hammer',
        'Storage Box',
        'Paintbrush',
        'Spray Painter'
      ]
    },
    'Advanced Tool Studies': {
      icon: Skill_AdvancedToolStudies_Icon,
      name: 'Advanced Tool Studies',
      skill: 4,
      row: 1,
      order: 0,
      bonus: [
        {
          'Tool Equip Quality': 2
        }
      ],
      and: [
        'Basic Tool Studies'
      ]
    },
    'Weaving': {
      icon: Skill_Weaving_Icon,
      name: 'Weaving',
      skill: 2,
      row: 1,
      order: 1,
      recipe: [
        'Loom'
      ],
      and: [
        'Basics of Building'
      ]
    },
    'Chemicals and Tanning': {
      icon: Skill_ChemicalsAndTanning_Icon,
      name: 'Chemicals and Tanning',
      skill: 2,
      row: 1,
      order: 2,
      recipe: [
        'Tannery',
        'Mortar and Pestle',
        'Preserving Salt',
        'Organic Paste',
        'Fire Gel',
        'Blasting Powder',
        'Organic Paste(Coral)',
        'Gunpowder'
      ],
      and: [
        'Handyman'
      ]
    },
    'Basic Repair Bonus': {
      icon: Skill_BasicRepairBonus_Icon,
      name: 'Basic Repair Bonus',
      skill: 1,
      row: 1,
      order: 3,
      bonus: [
        {
          'Repair Bonus': 20
        }
      ],
      and: [
        'Handyman'
      ]
    },
    'Basic Repair Skill': {
      icon: Skill_BasicRepairSkill_Icon,
      name: 'Basic Repair Skill',
      skill: 1,
      row: 1,
      order: 4,
      bonus: [
        {
          'Repair Minigame Window Region': 15
        }
      ],
      and: [
        'Handyman'
      ]
    },
    'Expert Tool Studies': {
      icon: Skill_ExpertToolStudies_Icon,
      name: 'Expert Tool Studies',
      skill: 8,
      row: 2,
      order: 0,
      bonus: [
        {
          'Tool Equip Quality': 1
        }
      ],
      and: [
        'Advanced Tool Studies'
      ]
    },
    'Secrets of Building': {
      icon: Skill_SecretsOfBuilding_Icon,
      name: 'Secrets of Building',
      skill: 2,
      row: 2,
      order: 1,
      recipe: [
        'Wood Roof',
        'Wood Door',
        'Wood Floor',
        'Wood Ladder',
        'Wood Pillar',
        'Wood Ceiling',
        'Wood Staircase',
        'Wood Wall',
        'Medium Wood Gate',
        'Medium Wood Gateway',
        'Large Wood Gate',
        'Large Wood Gateway',
        'Wood Fence Support',
        'Wood Wall Hook',
        'Wood Gun Mount',
        'Wood Cliff Platform',
        'Large Storage Box',
        'Lever',
        'Wooden Sign',
        'Wooden Billboard',
        'Wooden Wall Sign',
        'Training Dummy',
        'Wood Canvas',
        'Large Wood Wall',
        'Bookshelf',
        'Custom Flag',
        'Ship Cargo Rack',
        'Wide Medium Wood Gate',
        'Wide Medium Wood Gateway',
        'Ice Box'
      ],
      and: [
        'Weaving'
      ]
    },
    'Improved Repair Bonus': {
      icon: Skill_ImprovedRepairBonus_Icon,
      name: 'Improved Repair Bonus',
      skill: 2,
      row: 2,
      order: 2,
      bonus: [
        {
          'Repair Bonus': 20
        }
      ],
      and: [
        'Basic Repair Bonus'
      ]
    },
    'Improved Repair Skill': {
      icon: Skill_ImprovedRepairSkill_Icon,
      name: 'Improved Repair Skill',
      skill: 2,
      row: 2,
      order: 3,
      bonus: [
        {
          'Repair Minigame Window Region': 15
        }
      ],
      and: [
        'Basic Repair Skill'
      ]
    },
    'Seamanship Unlock': {
      icon: Skill_SeamanshipUnlock_Icon,
      name: 'Seamanship Unlock',
      skill: 2,
      row: 3,
      order: 0,
      unlock: 'seamanship',
      and: [
        'Secrets of Building'
      ]
    },
    'Basic Crafting Speed': {
      icon: Skill_BasicCraftingSpeed_Icon,
      name: 'Basic Crafting Speed',
      skill: 1,
      row: 3,
      order: 1,
      bonus: [
        {
          'Crafting Speed': 20
        }
      ],
      and: [
        'Secrets of Building'
      ]
    },
    'Metallurgy': {
      icon: Skill_Metallurgy_Icon,
      name: 'Metallurgy',
      skill: 2,
      row: 3,
      order: 2,
      recipe: [
        'Forge',
        'Cobalt Ingot',
        'Copper Ingot',
        'Iridium Ingot',
        'Iron Ingot',
        'Silver Ingot',
        'Tin Ingot'
      ],
      and: [
        'Secrets of Building',
        'Chemicals and Tanning'
      ]
    },
    'Advanced Repair Bonus': {
      icon: Skill_AdvancedRepairBonus_Icon,
      name: 'Advanced Repair Bonus',
      skill: 8,
      row: 3,
      order: 3,
      bonus: [
        {
          'Repair Bonus': 20
        }
      ],
      and: [
        'Improved Repair Bonus'
      ]
    },
    'Advanced Repair Skill': {
      icon: Skill_AdvancedRepairSkill_Icon,
      name: 'Advanced Repair Skill',
      skill: 8,
      row: 3,
      order: 4,
      bonus: [
        {
          'Repair Minigame Window Region': 15
        }
      ],
      and: [
        'Improved Repair Skill'
      ]
    },
    'Improved Crafting Speed': {
      icon: Skill_ImprovedCraftingSpeed_Icon,
      name: 'Improved Crafting Speed',
      skill: 2,
      row: 4,
      order: 0,
      bonus: [
        {
          'Crafting Speed': 20
        }
      ],
      and: [
        'Basic Crafting Speed'
      ]
    },
    'Armory Unlock': {
      icon: Skill_ArmoryUnlock_Icon,
      name: 'Armory Unlock',
      skill: 2,
      row: 4,
      order: 1,
      unlock: 'armory',
      and: [
        'Metallurgy'
      ]
    },
    'Melee Weaponry Unlock': {
      icon: Skill_MeleeWeaponryUnlock_Icon,
      name: 'Melee Weaponry Unlock',
      skill: 3,
      row: 4,
      order: 2,
      unlock: 'meleeWeaponry',
      and: [
        'Metallurgy'
      ]
    },
    'Repair Fiend': {
      icon: Skill_RepairFiend_Icon,
      name: 'Repair Fiend',
      skill: 6,
      row: 4,
      order: 3,
      feat: [
        'Repair Fiend'
      ],
      and: [
        'Advanced Repair Bonus',
        'Advanced Repair Skill'
      ]
    },
    'Advanced Crafting Speed': {
      icon: Skill_AdvancedCraftingSpeed_Icon,
      name: 'Advanced Crafting Speed',
      skill: 6,
      row: 5,
      order: 0,
      bonus: [
        {
          'Crafting Speed': 20
        }
      ],
      and: [
        'Improved Crafting Speed'
      ]
    },
    'Esotery of Building': {
      icon: Skill_EsoteryOfBuilding_Icon,
      name: 'Esotery of Building',
      skill: 8,
      row: 6,
      order: 0,
      recipe: [
        'Crew Resources Silo',
        'Stone Floor',
        'Stone Ceiling',
        'Stone Wall',
        'Stone Staircase',
        'Stone Pillar',
        'Stone Roof',
        'Stone Door',
        'Medium Stone Gate',
        'Medium Stone Gateway',
        'Large Stone Gate',
        'Large Stone Gateway',
        'Lighthouse',
        'Wood Elevator System',
        'Stone Fence Support',
        'Stone Cliff Platform',
        'Taxation Bank',
        'Large Stone Wall',
        'Player Shop',
        'Small Wood Gate',
        'Small Wood Gateway',
        'Small Stone Gate',
        'Small Stone Gateway',
        'Wide Medium Stone Gate',
        'Wide Medium Stone Gateway'
      ],
      and: [
        'Advanced Crafting Speed'
      ]
    }
  }
}
