import Melee_Weaponry_Icon_Button from '../../assets/atlas/icons/menu/Melee_Weaponry_Icon_Button';
import Skill_BasicsOfOneHandedWeapons_Icon from '../../assets/atlas/icons/melee/Skill_BasicsOfOneHandedWeapons_Icon';
import Skill_BasicsOfTwoHandedWeapons_Icon from '../../assets/atlas/icons/melee/Skill_BasicsOfTwoHandedWeapons_Icon';
import Skill_BasicTwoHandedStudies_Icon from '../../assets/atlas/icons/melee/Skill_BasicTwoHandedStudies_Icon';
import Skill_OneHandedWeaponsTier1_Icon from '../../assets/atlas/icons/melee/Skill_OneHandedWeaponsTier1_Icon';
import Skill_OneHandedWeaponsTier2_Icon from '../../assets/atlas/icons/melee/Skill_OneHandedWeaponsTier2_Icon';
import Skill_BasicParrying_Icon from '../../assets/atlas/icons/melee/Skill_BasicParrying_Icon';
import Skill_BasicRiposte_Icon from '../../assets/atlas/icons/melee/Skill_BasicRiposte_Icon';
import Skill_BasicComposedAttacks_Icon from '../../assets/atlas/icons/melee/Skill_BasicComposedAttacks_Icon';
import Skill_BasicCrushingBlow_Icon from '../../assets/atlas/icons/melee/Skill_BasicCrushingBlow_Icon';
import Skill_BasicCircularSlash_Icon from '../../assets/atlas/icons/melee/Skill_BasicCircularSlash_Icon';
import Skill_ImprovedTwoHandedStudies_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedTwoHandedStudies_Icon';
import Skill_SecretsOfTwoHandedWeapons_Icon from '../../assets/atlas/icons/melee/Skill_SecretsOfTwoHandedWeapons_Icon';
import Skill_OneHandedWeaponsTier3_Icon from '../../assets/atlas/icons/melee/Skill_OneHandedWeaponsTier3_Icon';
import Skill_ImprovedRiposte_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedRiposte_Icon';
import Skill_ImprovedParrying_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedParrying_Icon';
import Skill_BasicTremendousForce_Icon from '../../assets/atlas/icons/melee/Skill_BasicTremendousForce_Icon';
import Skill_ImprovedCircularSlash_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedCircularSlash_Icon';
import Skill_AdvancedParrying_Icon from '../../assets/atlas/icons/melee/Skill_AdvancedParrying_Icon';
import Skill_AdvancedRiposte_Icon from '../../assets/atlas/icons/melee/Skill_AdvancedRiposte_Icon';
import Skill_ExpertTwoHandedStudies_Icon from '../../assets/atlas/icons/melee/Skill_ExpertTwoHandedStudies_Icon';
import Skill_ImprovedComposedAttacks_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedComposedAttacks_Icon';
import Skill_ImprovedCrushingBlow_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedCrushingBlow_Icon';
import Skill_CriticalStrike_Icon from '../../assets/atlas/icons/melee/Skill_CriticalStrike_Icon';
import Skill_TargetWeakness_Icon from '../../assets/atlas/icons/melee/Skill_TargetWeakness_Icon';
import Skill_TargetSoftSpots_Icon from '../../assets/atlas/icons/melee/Skill_TargetSoftSpots_Icon';
import Skill_ImprovedTremendousForce_Icon from '../../assets/atlas/icons/melee/Skill_ImprovedTremendousForce_Icon';

export default {
  dimension: [1, 1, 4, 2, 3, 5, 2, 0],
  icon: Melee_Weaponry_Icon_Button,
  display: 'Melee Weaponry',
  skills: {
    'Basics of One-Handed Weapons': {
      icon: Skill_BasicsOfOneHandedWeapons_Icon,
      name: 'Basics of One-Handed Weapons',
      skill: 2,
      row: 0,
      order: 0,
      recipe: [
        'Sword'
      ]
    },
    'Basics of Two-Handed Weapons': {
      icon: Skill_BasicsOfTwoHandedWeapons_Icon,
      name: 'Basics of Two-Handed Weapons',
      skill: 2,
      row: 0,
      order: 1,
      recipe: [
        'Pike'
      ]
    },
    'One-handed Weapons Tier 1': {
      icon: Skill_OneHandedWeaponsTier1_Icon,
      name: 'One-handed Weapons Tier 1',
      skill: 2,
      row: 1,
      order: 0,
      bonus: [
        {
          'One-Handed Melee Weapon Equip Quality': 2
        }
      ],
      and: [
        'Basics of One-Handed Weapons'
      ]
    },
    'Basic Two-Handed Studies': {
      icon: Skill_BasicTwoHandedStudies_Icon,
      name: 'Basic Two-Handed Studies',
      skill: 2,
      row: 1,
      order: 1,
      bonus: [
        {
          'Two-Handed Melee Weapon Equip Quality': 2
        }
      ],
      and: [
        'Basics of Two-Handed Weapons'
      ]
    },
    'One-handed Weapons Tier 2': {
      icon: Skill_OneHandedWeaponsTier2_Icon,
      name: 'One-handed Weapons Tier 2',
      skill: 4,
      row: 2,
      order: 0,
      bonus: [
        {
          'One-Handed Melee Weapon Equip Quality': 2
        }
      ],
      and: [
        'One-handed Weapons Tier 1'
      ]
    },
    'Basic Parrying': {
      icon: Skill_BasicParrying_Icon,
      name: 'Basic Parrying',
      skill: 1,
      row: 2,
      order: 1,
      bonus: [
        {
          'Blocking Stamina Drain': -30
        }
      ],
      and: [
        'One-handed Weapons Tier 1'
      ]
    },
    'Basic Riposte': {
      icon: Skill_BasicRiposte_Icon,
      name: 'Basic Riposte',
      skill: 2,
      row: 2,
      order: 2,
      bonus: [
        {
          'Block Counter Attack Time With Sword Weapons': 10
        }
      ],
      and: [
        'One-handed Weapons Tier 1'
      ]
    },
    'Basic Composed Attacks': {
      icon: Skill_BasicComposedAttacks_Icon,
      name: 'Basic Composed Attacks',
      skill: 2,
      row: 2,
      order: 3,
      bonus: [
        {
          'Two-Handed Weapon Stamina Cost': -15
        }
      ],
      and: [
        'Basic Two-Handed Studies'
      ]
    },
    'Basic Crushing Blows': {
      icon: Skill_BasicCrushingBlow_Icon,
      name: 'Basic Crushing Blows',
      skill: 2,
      row: 2,
      order: 4,
      bonus: [
        {
          'Two-Handed Weapon Durability Damage': 100
        }
      ],
      and: [
        'Basic Two-Handed Studies'
      ]
    },
    'Basic Circular Slice': {
      icon: Skill_BasicCircularSlash_Icon,
      name: 'Basic Circular Slice',
      skill: 4,
      row: 3,
      order: 0,
      feat: [
        'Basic Circular Slice'
      ],
      and: [
        'One-handed Weapons Tier 2'
      ]
    },
    'Improved Two-Handed Studies': {
      icon: Skill_ImprovedTwoHandedStudies_Icon,
      name: 'Improved Two-Handed Studies',
      skill: 4,
      row: 3,
      order: 1,
      bonus: [
        {
          'Two-Handed Melee Weapon Equip Quality': 2
        }
      ],
      and: [
        'Basic Composed Attacks',
        'Basic Crushing Blows'
      ]
    },
    'Secrets of Two-Handed Weapons': {
      icon: Skill_SecretsOfTwoHandedWeapons_Icon,
      name: 'Secrets of Two-Handed Weapons',
      skill: 2,
      row: 3,
      order: 2,
      recipe: [
        'Two-Handed Mace'
      ],
      and: [
        'Basic Crushing Blows'
      ]
    },
    'One-handed Weapons Tier 3': {
      icon: Skill_OneHandedWeaponsTier3_Icon,
      name: 'One-handed Weapons Tier 3',
      skill: 8,
      row: 4,
      order: 0,
      bonus: [
        {
          'One-Handed Melee Weapon Equip Quality': 1
        }
      ],
      and: [
        'Basic Circular Slice'
      ]
    },
    'Improved Riposte': {
      icon: Skill_ImprovedRiposte_Icon,
      name: 'Improved Riposte',
      skill: 4,
      row: 4,
      order: 1,
      bonus: [
        {
          'Block Counter Attack Time With Sword Weapons': 20
        }
      ],
      and: [
        'Basic Circular Slice',
        'Basic Riposte'
      ]
    },
    'Improved Parrying': {
      icon: Skill_ImprovedParrying_Icon,
      name: 'Improved Parrying',
      skill: 4,
      row: 4,
      order: 2,
      bonus: [
        {
          'Blocking Stamina Drain': 0
        }
      ],
      and: [
        'Basic Circular Slice',
        'Basic Parrying'
      ]
    },
    'Basic Tremendous Force': {
      icon: Skill_BasicTremendousForce_Icon,
      name: 'Basic Tremendous Force',
      skill: 6,
      row: 4,
      order: 3,
      feat: [
        'Basic Tremendous Force'
      ],
      and: [
        'Secrets of Two-Handed Weapons',
        'Improved Two-Handed Studies'
      ]
    },
    'Improved Circular Slice': {
      icon: Skill_ImprovedCircularSlash_Icon,
      name: 'Improved Circular Slice',
      skill: 4,
      row: 5,
      order: 0,
      feat: [
        'Improved Circular Slice'
      ],
      and: [
        'One-handed Weapons Tier 3'
      ]
    },
    'Advanced Parrying': {
      icon: Skill_AdvancedParrying_Icon,
      name: 'Advanced Parrying',
      skill: 6,
      row: 5,
      order: 1,
      bonus: [
        {
          'Blocking Stamina Drain': -60
        }
      ],
      and: [
        'Improved Parrying',
        'One-handed Weapons Tier 3'
      ]
    },
    'Advanced Riposte': {
      icon: Skill_AdvancedRiposte_Icon,
      name: 'Advanced Riposte',
      skill: 6,
      row: 5,
      order: 2,
      bonus: [
        {
          'Block Counter Attack Time With Sword Weapons': 15
        }
      ],
      and: [
        'Improved Riposte',
        'One-handed Weapons Tier 3'
      ]
    },
    'Expert Two-Handed Studies': {
      icon: Skill_ExpertTwoHandedStudies_Icon,
      name: 'Expert Two-Handed Studies',
      skill: 8,
      row: 5,
      order: 3,
      bonus: [
        {
          'Two-Handed Melee Weapon Equip Quality': 1
        }
      ],
      and: [
        'Basic Tremendous Force'
      ]
    },
    'Improved Composed Attacks': {
      icon: Skill_ImprovedComposedAttacks_Icon,
      name: 'Improved Composed Attacks',
      skill: 4,
      row: 5,
      order: 4,
      bonus: [
        {
          'Two-Handed Weapon Stamina Cost': -15
        }
      ],
      and: [
        'Basic Tremendous Force'
      ]
    },
    'Improved Crushing Blows': {
      icon: Skill_ImprovedCrushingBlow_Icon,
      name: 'Improved Crushing Blows',
      skill: 4,
      row: 5,
      order: 5,
      bonus: [
        {
          'Two-Handed Weapon Durability Damage': 0
        }
      ],
      and: [
        'Basic Tremendous Force'
      ]
    },
    'Critical Strike': {
      icon: Skill_CriticalStrike_Icon,
      name: 'Critical Strike',
      skill: 4,
      row: 6,
      order: 0,
      feat: [
        'Critical Strike'
      ],
      and: [
        'Advanced Parrying',
        'Advanced Riposte'
      ]
    },
    'Target Weakness': {
      icon: Skill_TargetWeakness_Icon,
      name: 'Target Weakness',
      skill: 4,
      row: 6,
      order: 1,
      feat: [
        'Target Weakness'
      ],
      and: [
        'Improved Composed Attacks',
        'Expert Two-Handed Studies'
      ]
    },
    'Target Soft Spots': {
      icon: Skill_TargetSoftSpots_Icon,
      name: 'Target Soft Spots',
      skill: 4,
      row: 6,
      order: 2,
      feat: [
        'Target Soft Spots'
      ],
      and: [
        'Expert Two-Handed Studies',
        'Improved Crushing Blows'
      ]
    },
    'Improved Tremendous Force': {
      icon: Skill_ImprovedTremendousForce_Icon,
      name: 'Improved Tremendous Force',
      skill: 4,
      row: 7,
      order: 0,
      feat: [
        'Improved Tremendous Force'
      ],
      and: [
        'Target Weakness',
        'Target Soft Spots'
      ]
    }
  }
}
