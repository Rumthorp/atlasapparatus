import Firearms_Icon_Button from '../../assets/atlas/icons/menu/Firearms_Icon_Button';
import Skill_PistolsBasics_Icon from '../../assets/atlas/icons/firearms/Skill_PistolsBasics_Icon';
import Skill_BasicPistolReloadConcentration_Icon from '../../assets/atlas/icons/firearms/Skill_BasicPistolReloadConcentration_Icon';
import Skill_BasicFasterPistolReload_Icon from '../../assets/atlas/icons/firearms/Skill_BasicFasterPistolReload_Icon';
import Skill_BasicPistolSteadyAim_Icon from '../../assets/atlas/icons/firearms/Skill_BasicPistolSteadyAim_Icon';
import Skill_BasicFirearmsStudies_Icon from '../../assets/atlas/icons/firearms/Skill_BasicFirearmsStudies_Icon';
import Skill_ImprovedPistolReloadConcentration_Icon from '../../assets/atlas/icons/firearms/Skill_ImprovedPistolReloadConcentration_Icon';
import Skill_ImprovedFasterPistolReload_Icon from '../../assets/atlas/icons/firearms/Skill_ImprovedFasterPistolReload_Icon';
import Skill_ImprovedPistolSteadyAim_Icon from '../../assets/atlas/icons/firearms/Skill_ImprovedPistolSteadyAim_Icon';
import Skill_ImprovedFirearmsStudies_Icon from '../../assets/atlas/icons/firearms/Skill_ImprovedFirearmsStudies_Icon';
import Skill_ArtilleryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_ArtilleryUnlock_Icon';
import Skill_AdvancedPistolReloadConcentration_Icon from '../../assets/atlas/icons/firearms/Skill_AdvancedPistolReloadConcentration_Icon';
import Skill_AdvancedFasterPistolReload_Icon from '../../assets/atlas/icons/firearms/Skill_AdvancedFasterPistolReload_Icon';
import Skill_AdvancedPistolSteadyAim_Icon from '../../assets/atlas/icons/firearms/Skill_AdvancedPistolSteadyAim_Icon';
import Skill_ExpertFirearmsStudies_Icon from '../../assets/atlas/icons/firearms/Skill_ExpertFirearmsStudies_Icon';
import Skill_BasicsOfTheBlunderbuss_Icon from '../../assets/atlas/icons/firearms/Skill_BasicsOfTheBlunderbuss_Icon';
import Skill_LuckyLoader_Icon from '../../assets/atlas/icons/firearms/Skill_LuckyLoader_Icon';
import Skill_SecretsOfTheRifle_Icon from '../../assets/atlas/icons/firearms/Skill_SecretsOfTheRifle_Icon';
import Skill_BasicFasterBlunderbussReload_Icon from '../../assets/atlas/icons/firearms/Skill_BasicFasterBlunderbussReload_Icon';
import Skill_BasicFasterRifleReload_Icon from '../../assets/atlas/icons/firearms/Skill_BasicFasterRifleReload_Icon';
import Skill_ImprovedFasterBlunderbussReload_Icon from '../../assets/atlas/icons/firearms/Skill_ImprovedFasterBlunderbussReload_Icon';
import Skill_ImprovedFasterRifleReload_Icon from '../../assets/atlas/icons/firearms/Skill_ImprovedFasterRifleReload_Icon';
import Skill_AdvancedFasterBlunderbussReload_Icon from '../../assets/atlas/icons/firearms/Skill_AdvancedFasterBlunderbussReload_Icon';
import Skill_AdvancedFasterRifleReload_Icon from '../../assets/atlas/icons/firearms/Skill_AdvancedFasterRifleReload_Icon';

export default {
  dimension: [0, 3, 4, 4, 2, 2, 1, 0],
  icon: Firearms_Icon_Button,
  display: 'Firearms',
  skills: {
    'Pistol Basics': {
      icon: Skill_PistolsBasics_Icon,
      name: 'Pistol Basics',
      skill: 2,
      row: 0,
      order: 0,
      recipe: [
        'Simple Bullet',
        'Flintlock'
      ]
    },
    'Basic Pistol Reload Concentration': {
      icon: Skill_BasicPistolReloadConcentration_Icon,
      name: 'Basic Pistol Reload Concentration',
      skill: 2,
      row: 1,
      order: 0,
      bonus: [
        {
          'Pistol Reload Window Size': 20
        }
      ],
      and: [
        'Pistol Basics'
      ]
    },
    'Basic Faster Pistol Reload': {
      icon: Skill_BasicFasterPistolReload_Icon,
      name: 'Basic Faster Pistol Reload',
      skill: 2,
      row: 1,
      order: 1,
      bonus: [
        {
          'Pistol Reload Speed': 10
        }
      ],
      and: [
        'Pistol Basics'
      ]
    },
    'Basic Pistol Steady Aim': {
      icon: Skill_BasicPistolSteadyAim_Icon,
      name: 'Basic Pistol Steady Aim',
      skill: 2,
      row: 1,
      order: 2,
      bonus: [
        {
          'Pistol Aim Spread': -10
        }
      ],
      and: [
        'Pistol Basics'
      ]
    },
    'Basic Firearm Studies': {
      icon: Skill_BasicFirearmsStudies_Icon,
      name: 'Basic Firearm Studies',
      skill: 2,
      row: 1,
      order: 3,
      bonus: [
        {
          'Firearm Equip Quality': 2
        }
      ],
      and: [
        'Pistol Basics'
      ]
    },
    'Improved Pistol Reload Concentration': {
      icon: Skill_ImprovedPistolReloadConcentration_Icon,
      name: 'Improved Pistol Reload Concentration',
      skill: 4,
      row: 2,
      order: 0,
      bonus: [
        {
          'Pistol Reload Window Size': 15
        }
      ],
      and: [
        'Basic Pistol Reload Concentration'
      ]
    },
    'Improved Faster Pistol Reload': {
      icon: Skill_ImprovedFasterPistolReload_Icon,
      name: 'Improved Faster Pistol Reload',
      skill: 4,
      row: 2,
      order: 1,
      bonus: [
        {
          'Pistol Reload Speed': 15
        }
      ],
      and: [
        'Basic Faster Pistol Reload'
      ]
    },
    'Improved Pistol Steady Aim': {
      icon: Skill_ImprovedPistolSteadyAim_Icon,
      name: 'Improved Pistol Steady Aim',
      skill: 4,
      row: 2,
      order: 2,
      bonus: [
        {
          'Pistol Aim Spread': -10
        }
      ],
      and: [
        'Basic Pistol Steady Aim'
      ]
    },
    'Improved Firearm Studies': {
      icon: Skill_ImprovedFirearmsStudies_Icon,
      name: 'Improved Firearm Studies',
      skill: 4,
      row: 2,
      order: 3,
      bonus: [
        {
          'Firearm Equip Quality': 2
        }
      ],
      and: [
        'Basic Firearm Studies'
      ]
    },
    'Artillery Unlock': {
      icon: Skill_ArtilleryUnlock_Icon,
      name: 'Artillery Unlock',
      skill: 8,
      row: 2,
      order: 4,
      unlock: 'artillery',
      and: [
        'Basic Firearm Studies'
      ]
    },
    'Advanced Pistol Reload Concentration': {
      icon: Skill_AdvancedPistolReloadConcentration_Icon,
      name: 'Advanced Pistol Reload Concentration',
      skill: 6,
      row: 3,
      order: 0,
      bonus: [
        {
          'Pistol Reload Window Size': 15
        }
      ],
      and: [
        'Improved Pistol Reload Concentration'
      ]
    },
    'Advanced Faster Pistol Reload': {
      icon: Skill_AdvancedFasterPistolReload_Icon,
      name: 'Advanced Faster Pistol Reload',
      skill: 8,
      row: 3,
      order: 1,
      bonus: [
        {
          'Pistol Reload Speed': 20
        }
      ],
      and: [
        'Improved Faster Pistol Reload'
      ]
    },
    'Advanced Pistol Steady Aim': {
      icon: Skill_AdvancedPistolSteadyAim_Icon,
      name: 'Advanced Pistol Steady Aim',
      skill: 8,
      row: 3,
      order: 2,
      bonus: [
        {
          'Pistol Aim Spread': -15
        }
      ],
      and: [
        'Improved Pistol Steady Aim'
      ]
    },
    'Expert Firearm Studies': {
      icon: Skill_ExpertFirearmsStudies_Icon,
      name: 'Expert Firearm Studies',
      skill: 10,
      row: 3,
      order: 3,
      bonus: [
        {
          'Firearm Equip Quality': 1
        }
      ],
      and: [
        'Improved Firearm Studies'
      ]
    },
    'Basics Of The Blunderbuss': {
      icon: Skill_BasicsOfTheBlunderbuss_Icon,
      name: 'Basics Of The Blunderbuss',
      skill: 8,
      row: 3,
      order: 4,
      recipe: [
        'Blunderbuss',
        'Simple Shot'
      ],
      and: [
        'Improved Firearm Studies'
      ]
    },
    'Lucky Loader': {
      icon: Skill_LuckyLoader_Icon,
      name: 'Lucky Loader',
      skill: 6,
      row: 4,
      order: 0,
      feat: [
        'Lucky Loader'
      ],
      and: [
        'Advanced Pistol Reload Concentration',
        'Advanced Faster Pistol Reload',
        'Advanced Pistol Steady Aim'
      ]
    },
    'Secrets Of The Rifle': {
      icon: Skill_SecretsOfTheRifle_Icon,
      name: 'Secrets Of The Rifle',
      skill: 8,
      row: 4,
      order: 1,
      recipe: [
        'Carbine',
        'Minni Ball'
      ],
      and: [
        'Basics Of The Blunderbuss',
        'Expert Firearm Studies'
      ]
    },
    'Basic Faster Blunderbuss Reload': {
      icon: Skill_BasicFasterBlunderbussReload_Icon,
      name: 'Basic Faster Blunderbuss Reload',
      skill: 4,
      row: 4,
      order: 2,
      bonus: [
        {
          'Blunderbuss Reload Speed': 5
        }
      ],
      and: [
        'Basics Of The Blunderbuss'
      ]
    },
    'Revolvers': {
      icon: Skill_PistolsBasics_Icon,
      name: 'Revolvers',
      skill: 6,
      row: 5,
      order: 0,
      recipe: [
        'Hydra Revolver'
      ],
      and: [
        'Advanced Pistol Reload Concentration',
        'Lucky Loader',
        'Advanced Pistol Steady Aim'
      ]
    },
    'Basic Faster Rifle Reload': {
      icon: Skill_BasicFasterRifleReload_Icon,
      name: 'Basic Faster Rifle Reload',
      skill: 4,
      row: 5,
      order: 1,
      bonus: [
        {
          'Rifle Reload Speed': 5
        }
      ],
      and: [
        'Secrets Of The Rifle'
      ]
    },
    'Improved Faster Blunderbuss Reload': {
      icon: Skill_ImprovedFasterBlunderbussReload_Icon,
      name: 'Improved Faster Blunderbuss Reload',
      skill: 8,
      row: 5,
      order: 2,
      bonus: [
        {
          'Blunderbuss Reload Speed': 7.5
        }
      ],
      and: [
        'Basic Faster Blunderbuss Reload'
      ]
    },
    'Improved Faster Rifle Reload': {
      icon: Skill_ImprovedFasterRifleReload_Icon,
      name: 'Improved Faster Rifle Reload',
      skill: 8,
      row: 6,
      order: 0,
      bonus: [
        {
          'Rifle Reload Speed': 7.5
        }
      ],
      and: [
        'Basic Faster Rifle Reload'
      ]
    },
    'Advanced Faster Blunderbuss Reload': {
      icon: Skill_AdvancedFasterBlunderbussReload_Icon,
      name: 'Advanced Faster Blunderbuss Reload',
      skill: 12,
      row: 6,
      order: 1,
      bonus: [
        {
          'Blunderbuss Reload Speed': 10
        }
      ],
      and: [
        'Improved Faster Blunderbuss Reload'
      ]
    },
    'Advanced Faster Rifle Reload': {
      icon: Skill_AdvancedFasterRifleReload_Icon,
      name: 'Advanced Faster Rifle Reload',
      skill: 12,
      row: 7,
      order: 0,
      bonus: [
        {
          'Rifle Reload Speed': 10
        }
      ],
      and: [
        'Improved Faster Rifle Reload'
      ]
    }
  }
}
