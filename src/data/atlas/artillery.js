import Artillery_Icon_Button from '../../assets/atlas/icons/menu/Artillery_Icon_Button';
import Skill_CannonStudies_Icon from '../../assets/atlas/icons/artillery/Skill_CannonStudies_Icon';
import Skill_SwivelGunStudies_Icon from '../../assets/atlas/icons/artillery/Skill_SwivelGunStudies_Icon';
import Skill_AmmunitionStorage_Icon from '../../assets/atlas/icons/artillery/Skill_AmmunitionStorage_Icon';
import Skill_SiegeStudies_Icon from '../../assets/atlas/icons/artillery/Skill_SiegeStudies_Icon';
import Skill_BarShot_Icon from '../../assets/atlas/icons/artillery/Skill_BarShot_Icon';
import Skill_BasicDeftCannonReload_Icon from '../../assets/atlas/icons/artillery/Skill_BasicDeftCannonReload_Icon';
import Skill_BasicCannonSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_BasicCannonSightingSpeed_Icon';
import Skill_BiggerCannonStudies_Icon from '../../assets/atlas/icons/artillery/Skill_BiggerCannonStudies_Icon';
import Skill_BasicDeftSwivelGunReload_Icon from '../../assets/atlas/icons/artillery/Skill_BasicDeftSwivelGunReload_Icon';
import Skill_CanisterShot_Icon from '../../assets/atlas/icons/artillery/Skill_CanisterShot_Icon';
import Skill_ImprovedDeftCannonReload_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedDeftCannonReload_Icon';
import Skill_ImprovedCannonSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedCannonSightingSpeed_Icon';
import Skill_SpikeShot_Icon from '../../assets/atlas/icons/artillery/Skill_SpikeShot_Icon';
import Skill_BasicDeftLargeCannonReload_Icon from '../../assets/atlas/icons/artillery/Skill_BasicDeftLargeCannonReload_Icon';
import Skill_BasicLargeCannonSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_BasicLargeCannonSightingSpeed_Icon';
import Skill_ImprovedDeftSwivelGunReload_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedDeftSwivelGunReload_Icon';
import Skill_AdvancedDeftCannonReload_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedDeftCannonReload_Icon';
import Skill_AdvancedCannonSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedCannonSightingSpeed_Icon';
import Skill_MortarStudies_Icon from '../../assets/atlas/icons/artillery/Skill_MortarStudies_Icon';
import Skill_ImprovedDeftLargeCannonReload_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedDeftLargeCannonReload_Icon';
import Skill_ImprovedLargeCannonSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedLargeCannonSightingSpeed_Icon';
import Skill_AdvancedDeftSwivelGunReload_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedDeftSwivelGunReload_Icon';
import Skill_GreekFire_Icon from '../../assets/atlas/icons/artillery/Skill_GreekFire_Icon';
import Skill_BasicMortarSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_BasicMortarSightingSpeed_Icon';
import Skill_BasicDeftMortarReload_Icon from '../../assets/atlas/icons/artillery/Skill_BasicDeftMortarReload_Icon';
import Skill_AdvancedDeftLargeCannonReload_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedDeftLargeCannonReload_Icon';
import Skill_AdvancedLargeCannonSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedLargeCannonSightingSpeed_Icon';
import Skill_GatlingStudies_Icon from '../../assets/atlas/icons/artillery/Skill_GatlingStudies_Icon';
import Skill_ExplosiveBarrel_Icon from '../../assets/atlas/icons/artillery/Skill_ExplosiveBarrel_Icon';
import Skill_ImprovedMortarSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedMortarSightingSpeed_Icon';
import Skill_ImprovedDeftMortarReload_Icon from '../../assets/atlas/icons/artillery/Skill_ImprovedDeftMortarReload_Icon';
import Skill_AdvancedMortarSightingSpeed_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedMortarSightingSpeed_Icon';
import Skill_AdvancedDeftMortarReload_Icon from '../../assets/atlas/icons/artillery/Skill_AdvancedDeftMortarReload_Icon';

export default {
  dimension: [3, 5, 5, 5, 4, 3, 1],
  icon: Artillery_Icon_Button,
  display: 'Artillery',
  skills: {
    'Cannon Studies': {
      icon: Skill_CannonStudies_Icon,
      name: 'Cannon Studies',
      skill: 6,
      row: 0,
      order: 0,
      recipe: [
        'Ship Cannon',
        'Medium Cannon Ball'
      ]
    },
    'Swivel Gun Studies': {
      icon: Skill_SwivelGunStudies_Icon,
      name: 'Swivel Gun Studies',
      skill: 2,
      row: 0,
      order: 1,
      recipe: [
        'Swivel Gun',
        'Grape Shot'
      ]
    },
    'Ammunition Storage': {
      icon: Skill_AmmunitionStorage_Icon,
      name: 'Ammunition Storage',
      skill: 2,
      row: 0,
      order: 2,
      recipe: [
        'Ship Ammunition Container'
      ]
    },
    'Siege Studies': {
      icon: Skill_SiegeStudies_Icon,
      name: 'Siege Studies',
      skill: 14,
      row: 0,
      order: 3,
      recipe: [
        'Balista Turret',
        'Catapult Turret',
        'Ballista Bolt',
        'Boulder',
        'Harpoon'
      ]
    },
    'Bar Shot': {
      icon: Skill_BarShot_Icon,
      name: 'Bar Shot',
      skill: 6,
      row: 1,
      order: 0,
      recipe: [
        'Bar Shot'
      ],
      and: [
        'Cannon Studies'
      ]
    },
    'Basic Deft Cannon Reload': {
      icon: Skill_BasicDeftCannonReload_Icon,
      name: 'Basic Deft Cannon Reload',
      skill: 2,
      row: 1,
      order: 1,
      bonus: [
        {
          'Cannon Reload Speed': 33.4
        }
      ],
      and: [
        'Cannon Studies'
      ]
    },
    'Basic Cannon Sighting Speed': {
      icon: Skill_BasicCannonSightingSpeed_Icon,
      name: 'Basic Cannon Sighting Speed',
      skill: 2,
      row: 1,
      order: 2,
      bonus: [
        {
          'Cannon Aim Speed': 10
        }
      ],
      and: [
        'Cannon Studies'
      ]
    },
    'Bigger Cannon Studies': {
      icon: Skill_BiggerCannonStudies_Icon,
      name: 'Bigger Cannon Studies',
      skill: 10,
      row: 1,
      order: 3,
      recipe: [
        'Large Cannon',
        'Large Cannon Ball'
      ],
      and: [
        'Cannon Studies',
        'Swivel Gun Studies',
        'Ammunition Storage'
      ]
    },
    'Basic Deft Swivel Gun Reload': {
      icon: Skill_BasicDeftSwivelGunReload_Icon,
      name: 'Basic Deft Swivel Gun Reload',
      skill: 2,
      row: 1,
      order: 4,
      bonus: [
        {
          'Swivel Gun Reload Speed': 10
        }
      ],
      and: [
        'Swivel Gun Studies'
      ]
    },
    'Canister Shot': {
      icon: Skill_CanisterShot_Icon,
      name: 'Canister Shot',
      skill: 4,
      row: 1,
      order: 5,
      recipe: [
        'Canister Shot'
      ],
      and: [
        'Swivel Gun Studies'
      ]
    },
    'Improved Deft Cannon Reload': {
      icon: Skill_ImprovedDeftCannonReload_Icon,
      name: 'Improved Deft Cannon Reload',
      skill: 4,
      row: 2,
      order: 0,
      bonus: [
        {
          'Cannon Reload Speed': 33.4
        }
      ],
      and: [
        'Basic Deft Cannon Reload'
      ]
    },
    'Improved Cannon Sighting Speed': {
      icon: Skill_ImprovedCannonSightingSpeed_Icon,
      name: 'Improved Cannon Sighting Speed',
      skill: 4,
      row: 2,
      order: 1,
      bonus: [
        {
          'Cannon Aim Speed': 10
        }
      ],
      and: [
        'Basic Cannon Sighting Speed'
      ]
    },
    'Spikeshot': {
      icon: Skill_SpikeShot_Icon,
      name: 'Spikeshot',
      skill: 8,
      row: 2,
      order: 2,
      recipe: [
        'Spikeshot'
      ],
      and: [
        'Bigger Cannon Studies'
      ]
    },
    'Basic Deft Large Cannon Reload': {
      icon: Skill_BasicDeftLargeCannonReload_Icon,
      name: 'Basic Deft Large Cannon Reload',
      skill: 2,
      row: 2,
      order: 3,
      bonus: [
        {
          'Large Cannon Reload Speed': 33.4
        }
      ],
      and: [
        'Bigger Cannon Studies'
      ]
    },
    'Basic Large Cannon Sighting Speed': {
      icon: Skill_BasicLargeCannonSightingSpeed_Icon,
      name: 'Basic Large Cannon Sighting Speed',
      skill: 2,
      row: 2,
      order: 4,
      bonus: [
        {
          'Large Cannon Aim Speed': 10
        }
      ],
      and: [
        'Bigger Cannon Studies'
      ]
    },
    'Improved Deft Swivel Gun Reload': {
      icon: Skill_ImprovedDeftSwivelGunReload_Icon,
      name: 'Improved Deft Swivel Gun Reload',
      skill: 4,
      row: 2,
      order: 5,
      bonus: [
        {
          'Swivel Gun Reload Speed': 10
        }
      ],
      and: [
        'Basic Deft Swivel Gun Reload'
      ]
    },
    'Advanced Deft Cannon Reload': {
      icon: Skill_AdvancedDeftCannonReload_Icon,
      name: 'Advanced Deft Cannon Reload',
      skill: 8,
      row: 3,
      order: 0,
      bonus: [
        {
          'Cannon Reload Speed': 33.4
        }
      ],
      and: [
        'Improved Deft Cannon Reload'
      ]
    },
    'Advanced Cannon Sighting Speed': {
      icon: Skill_AdvancedCannonSightingSpeed_Icon,
      name: 'Advanced Cannon Sighting Speed',
      skill: 6,
      row: 3,
      order: 1,
      bonus: [
        {
          'Cannon Aim Speed': 10
        }
      ],
      and: [
        'Improved Cannon Sighting Speed'
      ]
    },
    'Mortar Studies': {
      icon: Skill_MortarStudies_Icon,
      name: 'Mortar Studies',
      skill: 12,
      row: 3,
      order: 2,
      recipe: [
        'Mortar',
        'Mortar Shot'
      ],
      and: [
        'Spikeshot'
      ]
    },
    'Improved Deft Large Cannon Reload': {
      icon: Skill_ImprovedDeftLargeCannonReload_Icon,
      name: 'Improved Deft Large Cannon Reload',
      skill: 4,
      row: 3,
      order: 3,
      bonus: [
        {
          'Large Cannon Reload Speed': 33.4
        }
      ],
      and: [
        'Basic Deft Large Cannon Reload'
      ]
    },
    'Improved Large Cannon Sighting Speed': {
      icon: Skill_ImprovedLargeCannonSightingSpeed_Icon,
      name: 'Improved Large Cannon Sighting Speed',
      skill: 4,
      row: 3,
      order: 4,
      bonus: [
        {
          'Large Cannon Aim Speed': 10
        }
      ],
      and: [
        'Basic Large Cannon Sighting Speed'
      ]
    },
    'Advanced Deft Swivel Gun Reload': {
      icon: Skill_AdvancedDeftSwivelGunReload_Icon,
      name: 'Advanced Deft Swivel Gun Reload',
      skill: 8,
      row: 3,
      order: 5,
      bonus: [
        {
          'Swivel Gun Reload Speed': 10
        }
      ],
      and: [
        'Improved Deft Swivel Gun Reload'
      ]
    },
    'Greek Fire': {
      icon: Skill_GreekFire_Icon,
      name: 'Greek Fire',
      skill: 10,
      row: 4,
      order: 0,
      recipe: [
        'Liquid Flame'
      ],
      and: [
        'Bar Shot',
        'Mortar Studies'
      ]
    },
    'Basic Mortar Sighting Speed': {
      icon: Skill_BasicMortarSightingSpeed_Icon,
      name: 'Basic Mortar Sighting Speed',
      skill: 2,
      row: 4,
      order: 1,
      bonus: [
        {
          'Mortar Aim Speed': 10
        }
      ],
      and: [
        'Mortar Studies'
      ]
    },
    'Basic Deft Mortar Reload': {
      icon: Skill_BasicDeftMortarReload_Icon,
      name: 'Basic Deft Mortar Reload',
      skill: 2,
      row: 4,
      order: 2,
      bonus: [
        {
          'Mortar Reload Speed': 10
        }
      ],
      and: [
        'Mortar Studies'
      ]
    },
    'Advanced Deft Large Cannon Reload': {
      icon: Skill_AdvancedDeftLargeCannonReload_Icon,
      name: 'Advanced Deft Large Cannon Reload',
      skill: 10,
      row: 4,
      order: 3,
      bonus: [
        {
          'Large Cannon Reload Speed': 33.4
        }
      ],
      and: [
        'Improved Deft Large Cannon Reload'
      ]
    },
    'Advanced Large Cannon Sighting Speed': {
      icon: Skill_AdvancedLargeCannonSightingSpeed_Icon,
      name: 'Advanced Large Cannon Sighting Speed',
      skill: 10,
      row: 4,
      order: 4,
      bonus: [
        {
          'Large Cannon Aim Speed': 10
        }
      ],
      and: [
        'Improved Large Cannon Sighting Speed'
      ]
    },
    'Gatling Studies': {
      icon: Skill_GatlingStudies_Icon,
      name: 'Gatling Studies',
      skill: 10,
      row: 5,
      order: 0,
      recipe: [
        'Puckle',
        'Puckle Bullet'
      ],
      and: [
        'Greek Fire'
      ]
    },
    'Explosive Barrel': {
      icon: Skill_ExplosiveBarrel_Icon,
      name: 'Explosive Barrel',
      skill: 10,
      row: 5,
      order: 1,
      recipe: [
        'Explosive Barrel'
      ],
      and: [
        'Greek Fire'
      ]
    },
    'Improved Mortar Sighting Speed': {
      icon: Skill_ImprovedMortarSightingSpeed_Icon,
      name: 'Improved Mortar Sighting Speed',
      skill: 4,
      row: 5,
      order: 2,
      bonus: [
        {
          'Mortar Aim Speed': 10
        }
      ],
      and: [
        'Basic Mortar Sighting Speed'
      ]
    },
    'Improved Deft Mortar Reload': {
      icon: Skill_ImprovedDeftMortarReload_Icon,
      name: 'Improved Deft Mortar Reload',
      skill: 4,
      row: 5,
      order: 3,
      bonus: [
        {
          'Mortar Reload Speed': 10
        }
      ],
      and: [
        'Basic Deft Mortar Reload'
      ]
    },
    'Advanced Mortar Sighting Speed': {
      icon: Skill_AdvancedMortarSightingSpeed_Icon,
      name: 'Advanced Mortar Sighting Speed',
      skill: 10,
      row: 6,
      order: 0,
      bonus: [
        {
          'Mortar Aim Speed': 10
        }
      ],
      and: [
        'Improved Mortar Sighting Speed'
      ]
    },
    'Advanced Deft Mortar Reload': {
      icon: Skill_AdvancedDeftMortarReload_Icon,
      name: 'Advanced Deft Mortar Reload',
      skill: 10,
      row: 6,
      order: 1,
      bonus: [
        {
          'Mortar Reload Speed': 10
        }
      ],
      and: [
        'Improved Deft Mortar Reload'
      ]
    }
  }
}
