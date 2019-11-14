import Beastmastery_Icon_Button from '../../assets/atlas/icons/menu/Beastmastery_Icon_Button';
import Skill_RidingTier1_Icon from '../../assets/atlas/icons/beastmastery/Skill_RidingTier1_Icon';
import Skill_CommandsTier1_Icon from '../../assets/atlas/icons/beastmastery/Skill_CommandsTier1_Icon';
import Skill_TamingTier1_Icon from '../../assets/atlas/icons/beastmastery/Skill_TamingTier1_Icon';
import Skill_BreedingTier1_Icon from '../../assets/atlas/icons/beastmastery/Skill_BreedingTier1_Icon';
import Skill_SneakingTier1_Icon from '../../assets/atlas/icons/beastmastery/Skill_SneakingTier1_Icon';
import Skill_RidingTier2_Icon from '../../assets/atlas/icons/beastmastery/Skill_RidingTier2_Icon';
import Skill_BasicNaturesCry_Icon from '../../assets/atlas/icons/beastmastery/Skill_BasicNaturesCry_Icon';
import Skill_BasicTamingProficiency_Icon from '../../assets/atlas/icons/beastmastery/Skill_BasicTamingProficiency_Icon';
import Skill_BasicNatureTouch_Icon from '../../assets/atlas/icons/beastmastery/Skill_BasicNatureTouch_Icon';
import Skill_SneakingTier2_Icon from '../../assets/atlas/icons/beastmastery/Skill_SneakingTier2_Icon';
import Skill_TamingTier2_Icon from '../../assets/atlas/icons/beastmastery/Skill_TamingTier2_Icon';
import Skill_BreedingTier2_Icon from '../../assets/atlas/icons/beastmastery/Skill_BreedingTier2_Icon';
import Skill_CommandsTier2_Icon from '../../assets/atlas/icons/beastmastery/Skill_CommandsTier2_Icon';
import Skill_CargoHarness_Icon from '../../assets/atlas/icons/beastmastery/Skill_CargoHarness_Icon';
import Skill_ImprovedNaturesCry_Icon from '../../assets/atlas/icons/beastmastery/Skill_ImprovedNaturesCry_Icon';
import Skill_Carriage_Icon from '../../assets/atlas/icons/beastmastery/Skill_Carriage_Icon';
import Skill_SneakingTier3_Icon from '../../assets/atlas/icons/beastmastery/Skill_SneakingTier3_Icon';
import Skill_RidingTier3_Icon from '../../assets/atlas/icons/beastmastery/Skill_RidingTier3_Icon';
import Skill_ImprovedTamingProficiency_Icon from '../../assets/atlas/icons/beastmastery/Skill_ImprovedTamingProficiency_Icon';
import Skill_ImprovedNatureTouch_Icon from '../../assets/atlas/icons/beastmastery/Skill_ImprovedNatureTouch_Icon';
import Skill_AdvancedNaturesCry_Icon from '../../assets/atlas/icons/beastmastery/Skill_AdvancedNaturesCry_Icon';
import Skill_CommandsTier3_Icon from '../../assets/atlas/icons/beastmastery/Skill_CommandsTier3_Icon';
import Skill_BreedingTier3_Icon from '../../assets/atlas/icons/beastmastery/Skill_BreedingTier3_Icon';
import Skill_AdvancedTamingProficiency_Icon from '../../assets/atlas/icons/beastmastery/Skill_AdvancedTamingProficiency_Icon';
import Skill_AdvancedNatureTouch_Icon from '../../assets/atlas/icons/beastmastery/Skill_AdvancedNatureTouch_Icon';

export default {
  dimension: [4, 4, 6, 2, 3, 1],
  icon: Beastmastery_Icon_Button,
  display: 'Beastmastery',
  skills: {
    'Riding Tier 1': {
      icon: Skill_RidingTier1_Icon,
      name: 'Riding Tier 1',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Generic Saddle'
      ],
      bonus: [
        {
          'Riding Tier': 1
        }
      ]
    },
    'Commands Tier 1': {
      icon: Skill_CommandsTier1_Icon,
      name: 'Commands Tier 1',
      skill: 1,
      row: 0,
      order: 1,
      bonus: [
        {
          'Commands Tier': 1
        }
      ]
    },
    'Taming Tier 1': {
      icon: Skill_TamingTier1_Icon,
      name: 'Taming Tier 1',
      skill: 1,
      row: 0,
      order: 2,
      recipe: [
        'Bola'
      ],
      bonus: [
        {
          'Taming Tier': 1
        }
      ]
    },
    'Breeding Tier 1': {
      icon: Skill_BreedingTier1_Icon,
      name: 'Breeding',
      skill: 1,
      row: 0,
      order: 3,
      bonus: [
        {
          'Breeding Tier': 1
        }
      ]
    },
    'Sneaking Tier 1': {
      icon: Skill_SneakingTier1_Icon,
      name: 'Sneaking Tier 1',
      skill: 1,
      row: 0,
      order: 4,
      bonus: [
        {
          'Visibility Range': -10
        }
      ]
    },
    'Riding Tier 2': {
      icon: Skill_RidingTier2_Icon,
      name: 'Riding Tier 2',
      skill: 4,
      row: 1,
      order: 0,
      recipe: [
        'Tier 2 Saddle'
      ],
      bonus: [
        {
          'Riding Tier': 1
        }
      ],
      and: [
        'Riding Tier 1',
        'Commands Tier 1',
        'Taming Tier 1',
        'Breeding Tier 1'
      ]
    },
    'Basic Nature\'s Cry': {
      icon: Skill_BasicNaturesCry_Icon,
      name: 'Basic Nature\'s Cry',
      skill: 2,
      row: 1,
      order: 1,
      feat: [
        'Basic Nature\'s Cry'
      ],
      and: [
        'Riding Tier 1'
      ]
    },
    'Basic Taming Proficiency': {
      icon: Skill_BasicTamingProficiency_Icon,
      name: 'Basic Taming Proficiency',
      skill: 2,
      row: 1,
      order: 2,
      bonus: [
        {
          'Taming Feeding Affinity Increase': 15
        }
      ],
      and: [
        'Taming Tier 1'
      ]
    },
    'Basic Nature\'s Touch': {
      icon: Skill_BasicNatureTouch_Icon,
      name: 'Basic Nature\'s Touch',
      skill: 2,
      row: 1,
      order: 3,
      feat: [
        'Basic Nature\'s Touch'
      ],
      and: [
        'Breeding Tier 1'
      ]
    },
    'Sneaking Tier 2': {
      icon: Skill_SneakingTier2_Icon,
      name: 'Sneaking Tier 2',
      skill: 4,
      row: 1,
      order: 4,
      bonus: [
        {
          'Visibility Range': -10
        }
      ],
      and: [
        'Sneaking Tier 1'
      ]
    },
    'Taming Tier 2': {
      icon: Skill_TamingTier2_Icon,
      name: 'Taming Tier 2',
      skill: 4,
      row: 2,
      order: 0,
      recipe: [
        'Feeding Trough'
      ],
      bonus: [
        {
          'Taming Tier': 1
        }
      ],
      and: [
        'Riding Tier 2'
      ]
    },
    'Breeding Tier 2': {
      icon: Skill_BreedingTier2_Icon,
      name: 'Breeding Tier 2',
      skill: 4,
      row: 2,
      order: 1,
      bonus: [
        {
          'Breeding Tier': 1
        }
      ],
      and: [
        'Riding Tier 2'
      ]
    },
    'Commands Tier 2': {
      icon: Skill_CommandsTier2_Icon,
      name: 'Commands Tier 2',
      skill: 4,
      row: 2,
      order: 2,
      bonus: [
        {
          'Commands Tier': 1
        }
      ],
      and: [
        'Riding Tier 2'
      ]
    },
    'Cargo Harness': {
      icon: Skill_CargoHarness_Icon,
      name: 'Cargo Harness',
      skill: 2,
      row: 2,
      order: 3,
      recipe: [
        'Tier 2 Cargo Saddle'
      ],
      and: [
        'Riding Tier 2'
      ]
    },
    'Improved Nature\'s Cry': {
      icon: Skill_ImprovedNaturesCry_Icon,
      name: 'Improved Nature\'s Cry',
      skill: 4,
      row: 2,
      order: 4,
      feat: [
        'Improved Nature\'s Cry'
      ],
      and: [
        'Basic Nature\'s Cry',
        'Riding Tier 2'
      ]
    },
    'Carriage': {
      icon: Skill_Carriage_Icon,
      name: 'Carriage',
      skill: 2,
      row: 2,
      order: 5,
      recipe: [
        'Tier 2 Carriage Saddle'
      ],
      and: [
        'Riding Tier 2'
      ]
    },
    'Sneaking Tier 3': {
      icon: Skill_SneakingTier3_Icon,
      name: 'Sneaking Tier 3',
      skill: 8,
      row: 2,
      order: 6,
      bonus: [
        {
          'Visibility Range': -10
        }
      ],
      and: [
        'Sneaking Tier 2'
      ]
    },
    'Riding Tier 3': {
      icon: Skill_RidingTier3_Icon,
      name: 'Riding Tier 3',
      skill: 8,
      row: 3,
      order: 0,
      recipe: [
        'Tier 3 Saddle'
      ],
      bonus: [
        {
          'Riding Tier': 1
        }
      ],
      and: [
        'Commands Tier 2',
        'Breeding Tier 2',
        'Taming Tier 2'
      ]
    },
    'Improved Taming Proficiency': {
      icon: Skill_ImprovedTamingProficiency_Icon,
      name: 'Improved Taming Proficiency',
      skill: 4,
      row: 3,
      order: 1,
      bonus: [
        {
          'Taming Feeding Affinity Increase': 15
        }
      ],
      and: [
        'Taming Tier 2',
        'Basic Taming Proficiency'
      ]
    },
    'Improved Nature\'s Touch': {
      icon: Skill_ImprovedNatureTouch_Icon,
      name: 'Improved Nature\'s Touch',
      skill: 4,
      row: 3,
      order: 2,
      feat: [
        'Improved Nature\'s Touch'
      ],
      and: [
        'Basic Nature\'s Touch',
        'Breeding Tier 2'
      ]
    },
    'Advanced Nature\'s Cry': {
      icon: Skill_AdvancedNaturesCry_Icon,
      name: 'Advanced Nature\'s Cry',
      skill: 10,
      row: 4,
      order: 0,
      feat: [
        'Advanced Nature\'s Cry'
      ],
      and: [
        'Improved Nature\'s Cry',
        'Riding Tier 3'
      ]
    },
    'Taming Tier 3': {
      icon: Skill_TamingTier2_Icon,
      name: 'Taming Tier 3',
      skill: 8,
      row: 4,
      order: 1,
      bonus: [
        {
          'Taming Tier': 1
        }
      ],
      and: [
        'Riding Tier 3'
      ]
    },
    'Commands Tier 3': {
      icon: Skill_CommandsTier3_Icon,
      name: 'Commands Tier 3',
      skill: 8,
      row: 4,
      order: 2,
      bonus: [
        {
          'Commands Tier': 1
        }
      ],
      and: [
        'Riding Tier 3'
      ]
    },
    'Breeding Tier 3': {
      icon: Skill_BreedingTier3_Icon,
      name: 'Breeding Tier 3',
      skill: 8,
      row: 4,
      order: 3,
      bonus: [
        {
          'Breeding Tier': 1
        }
      ],
      and: [
        'Riding Tier 3'
      ]
    },
    'Advanced Taming Proficiency': {
      icon: Skill_AdvancedTamingProficiency_Icon,
      name: 'Advanced Taming Proficiency',
      skill: 8,
      row: 5,
      order: 0,
      bonus: [
        {
          'Taming Feeding Affinity Increase': 15
        }
      ],
      and: [
        'Improved Taming Proficiency',
        'Taming Tier 3'
      ]
    },
    'Advanced Nature\'s Touch': {
      icon: Skill_AdvancedNatureTouch_Icon,
      name: 'Advanced Nature\'s Touch',
      skill: 10,
      row: 5,
      order: 1,
      feat: [
        'Advanced Nature\'s Touch'
      ],
      and: [
        'Improved Nature\'s Touch',
        'Breeding Tier 3'
      ]
    }
  }
}
