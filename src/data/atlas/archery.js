import Archery_Icon_Button from '../../assets/atlas/icons/menu/Archery_Icon_Button';
import Skill_BasicsOfTheBow_Icon from '../../assets/atlas/icons/archery/Skill_BasicsOfTheBow_Icon';
import Skill_BasicBallisticStudies_Icon from '../../assets/atlas/icons/archery/Skill_BasicBallisticStudies_Icon';
import Skill_SecretsOfTheBow_Icon from '../../assets/atlas/icons/archery/Skill_SecretsOfTheBow_Icon';
import Skill_ImprovedBallisticStudies_Icon from '../../assets/atlas/icons/archery/Skill_ImprovedBallisticStudies_Icon';
import Skill_BasicsOfThrowing_Icon from '../../assets/atlas/icons/archery/Skill_BasicsOfThrowing_Icon';
import Skill_BasicSteadyAim_Icon from '../../assets/atlas/icons/archery/Skill_BasicSteadyAim_Icon';
import Skill_ExpertBallisticStudies_Icon from '../../assets/atlas/icons/archery/Skill_ExpertBallisticStudies_Icon';
import Skill_SpeargunStudies_Icon from '../../assets/atlas/icons/archery/Skill_SpeargunStudies_Icon';
import Skill_BasicStrongArm_Icon from '../../assets/atlas/icons/archery/Skill_BasicStrongArm_Icon';
import Skill_Sapper_Icon from '../../assets/atlas/icons/archery/Skill_Sapper_Icon';
import Skill_ArbalestStudies_Icon from '../../assets/atlas/icons/archery/Skill_ArbalestStudies_Icon';
import Skill_FirearmsUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_FirearmsUnlock_Icon';
import Skill_BasicPiercingShot_Icon from '../../assets/atlas/icons/archery/Skill_BasicPiercingShot_Icon';
import Skill_ImprovedStrongArm_Icon from '../../assets/atlas/icons/archery/Skill_ImprovedStrongArm_Icon';
import Skill_ImprovedSteadyAim_Icon from '../../assets/atlas/icons/archery/Skill_ImprovedSteadyAim_Icon';
import Skill_AdvancedStrongArm_Icon from '../../assets/atlas/icons/archery/Skill_AdvancedStrongArm_Icon';
import Skill_AdvancedSteadyAim_Icon from '../../assets/atlas/icons/archery/Skill_AdvancedSteadyAim_Icon';
import Skill_ImprovedPiercingShot_Icon from '../../assets/atlas/icons/archery/Skill_ImprovedPiercingShot_Icon';

export default {
  dimension: [1, 1, 3, 1, 1, 0, 1, 1, 0],
  icon: Archery_Icon_Button,
  display: 'Archery & Throwing Weapons',
  skills: {
    'Basics Of The Bow': {
      icon: Skill_BasicsOfTheBow_Icon,
      name: 'Basics Of The Bow',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Bow',
        'Stone Arrow'
      ]
    },
    'Basic Ballistic Studies': {
      icon: Skill_BasicBallisticStudies_Icon,
      name: 'Basic Ballistic Studies',
      skill: 2,
      row: 0,
      order: 1,
      bonus: [
        {
          'Balistic Weapon Equip Quality': 2
        }
      ]
    },
    'Secrets Of The Bow': {
      icon: Skill_SecretsOfTheBow_Icon,
      name: 'Secrets Of The Bow',
      skill: 8,
      row: 1,
      order: 0,
      recipe: [
        'Flame Arrow',
        'Zip-Line Anchor'
      ],
      and: [
        'Basics Of The Bow'
      ]
    },
    'Improved Ballistic Studies': {
      icon: Skill_ImprovedBallisticStudies_Icon,
      name: 'Improved Ballistic Studies',
      skill: 4,
      row: 1,
      order: 1,
      bonus: [
        {
          'Balistic Weapon Equip Quality': 2
        }
      ],
      and: [
        'Basic Ballistic Studies'
      ]
    },
    'Basics Of Throwing': {
      icon: Skill_BasicsOfThrowing_Icon,
      name: 'Basics Of Throwing',
      skill: 1,
      row: 2,
      order: 0,
      recipe: [
        'Oil Jar',
        'Throwing Knives'
      ],
      and: [
        'Secrets Of The Bow'
      ]
    },
    'Basic Steady Aim': {
      icon: Skill_BasicSteadyAim_Icon,
      name: 'Basic Steady Aim',
      skill: 2,
      row: 2,
      order: 1,
      bonus: [
        {
          'Hand Drawn Projectile Weapon Shake': -20
        }
      ],
      or: [
        'Secrets Of The Bow',
        'Basic Ballistic Studies'
      ]
    },
    'Expert Ballistic Studies': {
      icon: Skill_ExpertBallisticStudies_Icon,
      name: 'Expert Ballistic Studies',
      skill: 10,
      row: 2,
      order: 2,
      bonus: [
        {
          'Balistic Weapon Equip Quality': 1
        }
      ],
      and: [
        'Improved Ballistic Studies'
      ]
    },
    'Speargun Studies': {
      icon: Skill_SpeargunStudies_Icon,
      name: 'Speargun Studies',
      skill: 6,
      row: 2,
      order: 3,
      recipe: [
        'Spear Launcher',
        'Spear Bolt'
      ],
      and: [
        'Improved Ballistic Studies'
      ]
    },
    'Basic Strong Arm': {
      icon: Skill_BasicStrongArm_Icon,
      name: 'Basic Strong Arm',
      skill: 2,
      row: 3,
      order: 0,
      bonus: [
        {
          'Hand Drawn Projectile Weapon Damage': 10
        }
      ],
      or: [
        'Basic Steady Aim',
        'Improved Ballistic Studies'
      ]
    },
    'Sapper': {
      icon: Skill_Sapper_Icon,
      name: 'Sapper',
      skill: 6,
      row: 3,
      order: 1,
      recipe: [
        'Grenade'
      ],
      and: [
        'Expert Ballistic Studies'
      ]
    },
    'Arbalest Studies': {
      icon: Skill_ArbalestStudies_Icon,
      name: 'Arbalest Studies',
      skill: 6,
      row: 4,
      order: 0,
      recipe: [
        'Crossbow',
        'Crossbow Bolt'
      ],
      and: [
        'Basic Strong Arm'
      ]
    },
    'Firearms Unlock': {
      icon: Skill_FirearmsUnlock_Icon,
      name: 'Firearms Unlock',
      skill: 4,
      row: 4,
      order: 1,
      unlock: 'firearms',
      and: [
        'Sapper'
      ]
    },
    'Piercing Shot': {
      icon: Skill_BasicPiercingShot_Icon,
      name: 'Piercing Shot',
      skill: 4,
      row: 5,
      order: 0,
      feat: [
        'Piercing Shot'
      ],
      and: [
        'Arbalest Studies'
      ]
    },
    'Improved Strong Arm': {
      icon: Skill_ImprovedStrongArm_Icon,
      name: 'Improved Strong Arm',
      skill: 4,
      row: 6,
      order: 0,
      bonus: [
        {
          'Hand Drawn Projectile Weapon Damage': 10
        }
      ],
      and: [
        'Piercing Shot'
      ]
    },
    'Improved Steady Aim': {
      icon: Skill_ImprovedSteadyAim_Icon,
      name: 'Improved Steady Aim',
      skill: 4,
      row: 6,
      order: 1,
      bonus: [
        {
          'Hand Drawn Projectile Weapon Shake': -20
        }
      ],
      and: [
        'Piercing Shot',
        'Sapper'
      ]
    },
    'Advanced Strong Arm': {
      icon: Skill_AdvancedStrongArm_Icon,
      name: 'Advanced Strong Arm',
      skill: 8,
      row: 7,
      order: 0,
      bonus: [
        {
          'Hand Drawn Projectile Weapon Damage': 10
        }
      ],
      and: [
        'Improved Strong Arm'
      ]
    },
    'Advanced Steady Aim': {
      icon: Skill_AdvancedSteadyAim_Icon,
      name: 'Advanced Steady Aim',
      skill: 6,
      row: 7,
      order: 1,
      bonus: [
        {
          'Hand Drawn Projectile Weapon Shake': -20
        }
      ],
      and: [
        'Improved Steady Aim'
      ]
    },
    'Improved Piercing Shot': {
      icon: Skill_ImprovedPiercingShot_Icon,
      name: 'Improved Piercing Shot',
      skill: 6,
      row: 8,
      order: 0,
      feat: [
        'Improved Piercing Shot'
      ],
      and: [
        'Advanced Strong Arm',
        'Advanced Steady Aim'
      ]
    }
  }
}
