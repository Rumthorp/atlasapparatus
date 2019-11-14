import HandtoHand_Icon_Button from '../../assets/atlas/icons/menu/HandtoHand_Icon_Button';
import Skill_Dexterity_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_Dexterity_Icon';
import Skill_BasicShrugItOff_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_BasicShrugItOff_Icon';
import Skill_BasicPowerHit_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_BasicPowerHit_Icon';
import Skill_BasicBreathControl_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_BasicBreathControl_Icon';
import Skill_BrassKnuckles_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_BrassKnuckles_Icon';
import Skill_MeleeWeaponryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_MeleeWeaponryUnlock_Icon';
import Skill_ImprovedShrugItOff_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_ImprovedShrugItOff_Icon';
import Skill_ImprovedBreathControl_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_ImprovedBreathControl_Icon';
import Skill_BasicFlurryOfBlows_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_BasicFlurryOfBlows_Icon';
import Skill_AdvancedBreathControl_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_AdvancedBreathControl_Icon';
import Skill_BasicHeavyStrikes_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_BasicHeavyStrikes_Icon';
import Skill_ImprovedHeavyStrikes_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_ImprovedHeavyStrikes_Icon';
import Skill_AdvancedHeavyStrike_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_AdvancedHeavyStrike_Icon';
import Skill_ImprovedPowerHit_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_ImprovedPowerHit_Icon';
import Skill_ImprovedFlurryOfBlows_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_ImprovedFlurryOfBlows_Icon';
import Skill_MentalFitness_Icon from '../../assets/atlas/icons/hand-to-hand/Skill_MentalFitness_Icon';

export default {
  dimension: [1, 1, 0, 3, 1, 0, 0, 0, 0, 0],
  icon: HandtoHand_Icon_Button,
  display: 'Hand-to-Hand Combat',
  skills: {
    'Dexterity': {
      icon: Skill_Dexterity_Icon,
      name: 'Dexterity',
      skill: 1,
      row: 0,
      order: 0,
      bonus: [
        {
          'Block Counter Attack Time With Fists': 10
        }
      ]
    },
    'Basic Shrug It Off': {
      icon: Skill_BasicShrugItOff_Icon,
      name: 'Basic Shrug It Off',
      skill: 2,
      row: 0,
      order: 1,
      bonus: [
        {
          'Torpor Resist': -20
        }
      ]
    },
    'Basic Power Hit': {
      icon: Skill_BasicPowerHit_Icon,
      name: 'Basic Power Hit',
      skill: 2,
      row: 1,
      order: 0,
      feat: [
        'Basic Power Hit'
      ],
      and: [
        'Dexterity',
        'Basic Shrug It Off'
      ]
    },
    'Basic Breath Control': {
      icon: Skill_BasicBreathControl_Icon,
      name: 'Basic Breath Control',
      skill: 1,
      row: 1,
      order: 1,
      bonus: [
        {
          'Stamina Drain With Fist Weapons': -15
        }
      ],
      and: [
        'Dexterity'
      ]
    },
    'Brass Knuckles': {
      icon: Skill_BrassKnuckles_Icon,
      name: 'Brass Knuckles',
      skill: 2,
      row: 2,
      order: 0,
      recipe: [
        'Brass Knuckles'
      ],
      and: [
        'Basic Power Hit'
      ]
    },
    'Melee Weaponry Unlock': {
      icon: Skill_MeleeWeaponryUnlock_Icon,
      name: 'Melee Weaponry Unlock',
      skill: 3,
      row: 3,
      order: 0,
      unlock: 'meleeWeaponry',
      and: [
        'Brass Knuckles'
      ]
    },
    'Improved Shrug It Off': {
      icon: Skill_ImprovedShrugItOff_Icon,
      name: 'Improved Shrug It Off',
      skill: 4,
      row: 3,
      order: 1,
      bonus: [
        {
          'Torpor Resist': -20
        }
      ],
      and: [
        'Brass Knuckles'
      ]
    },
    'Improved Breath Control': {
      icon: Skill_ImprovedBreathControl_Icon,
      name: 'Improved Breath Control',
      skill: 4,
      row: 3,
      order: 2,
      bonus: [
        {
          'Stamina Drain With Fist Weapons': -15
        }
      ],
      and: [
        'Basic Breath Control',
        'Brass Knuckles'
      ]
    },
    'Flurry Of Blows': {
      icon: Skill_BasicFlurryOfBlows_Icon,
      name: 'Flurry Of Blows',
      skill: 2,
      row: 3,
      order: 3,
      feat: [
        'Flurry Of Blows'
      ],
      and: [
        'Brass Knuckles'
      ]
    },
    'Advanced Breath Control': {
      icon: Skill_AdvancedBreathControl_Icon,
      name: 'Advanced Breath Control',
      skill: 8,
      row: 4,
      order: 0,
      bonus: [
        {
          'Stamina Drain With Fist Weapons': -15
        }
      ],
      and: [
        'Improved Breath Control'
      ]
    },
    'Basic Heavy Strikes': {
      icon: Skill_BasicHeavyStrikes_Icon,
      name: 'Basic Heavy Strikes',
      skill: 2,
      row: 4,
      order: 1,
      bonus: [
        {
          'Fist and Fist Weapon Damage Bonus': 15
        }
      ],
      and: [
        'Flurry Of Blows'
      ]
    },
    'Improved Heavy Strikes': {
      icon: Skill_ImprovedHeavyStrikes_Icon,
      name: 'Improved Heavy Strikes',
      skill: 4,
      row: 5,
      order: 0,
      bonus: [
        {
          'Fist and Fist Weapon Damage Bonus': 15
        }
      ],
      and: [
        'Basic Heavy Strikes'
      ]
    },
    'Advanced Heavy Strikes': {
      icon: Skill_AdvancedHeavyStrike_Icon,
      name: 'Advanced Heavy Strikes',
      skill: 10,
      row: 6,
      order: 0,
      bonus: [
        {
          'Fist and Fist Weapon Damage Bonus': 15
        }
      ],
      and: [
        'Improved Heavy Strikes'
      ]
    },
    'Improved Power Hit': {
      icon: Skill_ImprovedPowerHit_Icon,
      name: 'Improved Power Hit',
      skill: 4,
      row: 7,
      order: 0,
      feat: [
        'Improved Power Hit'
      ],
      and: [
        'Advanced Heavy Strikes',
        'Advanced Breath Control',
        'Improved Shrug It Off'
      ]
    },
    'Improved Flurry Of Blows': {
      icon: Skill_ImprovedFlurryOfBlows_Icon,
      name: 'Improved Flurry Of Blows',
      skill: 4,
      row: 8,
      order: 0,
      feat: [
        'Improved Flurry Of Blows'
      ],
      and: [
        'Improved Power Hit'
      ]
    },
    'Martial Fitness': {
      icon: Skill_MentalFitness_Icon,
      name: 'Martial Fitness',
      skill: 6,
      row: 9,
      order: 0,
      bonus: [
        {
          'Stamina Drain': -10
        }
      ],
      and: [
        'Improved Flurry Of Blows'
      ]
    }
  }
}
