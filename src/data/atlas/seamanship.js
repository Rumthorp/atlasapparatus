import Seamanship_Icon_Button from '../../assets/atlas/icons/menu/Seamanship_Icon_Button';
import Skill_NavigatorsTools_Icon from '../../assets/atlas/icons/seamanship/Skill_NavigatorsTools_Icon';
import Skill_BasicsOfSailing_Icon from '../../assets/atlas/icons/seamanship/Skill_BasicsOfSailing_Icon';
import Skill_CaptaineeringUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_CaptaineeringUnlock_Icon';
import Skill_BasicAbleNavigator_Icon from '../../assets/atlas/icons/seamanship/Skill_BasicAbleNavigator_Icon';
import Skill_BasicSightseeing_Icon from '../../assets/atlas/icons/seamanship/Skill_BasicSightseeing_Icon';
import Skill_BasicCosmology_Icon from '../../assets/atlas/icons/seamanship/Skill_BasicCosmology_Icon';
import Skill_BasicShipwright_Icon from '../../assets/atlas/icons/seamanship/Skill_BasicShipwright_Icon';
import Skill_ImprovedAbleNavigator_Icon from '../../assets/atlas/icons/seamanship/Skill_ImprovedAbleNavigator_Icon';
import Skill_ImprovedSightseeing_Icon from '../../assets/atlas/icons/seamanship/Skill_ImprovedSightseeing_Icon';
import Skill_ImprovedCosmology_Icon from '../../assets/atlas/icons/seamanship/Skill_ImprovedCosmology_Icon';
import Skill_SmallSpeedSail_Icon from '../../assets/atlas/icons/seamanship/Skill_SmallSpeedSail_Icon';
import Skill_SmallWeightSail_Icon from '../../assets/atlas/icons/seamanship/Skill_SmallWeightSail_Icon';
import Skill_MediumHandlingSail_Icon from '../../assets/atlas/icons/seamanship/Skill_MediumHandlingSail_Icon';
import Skill_BasicAbleMapmaker_Icon from '../../assets/atlas/icons/seamanship/Skill_BasicAbleMapmaker_Icon';
import Skill_AdvancedAbleNavigator_Icon from '../../assets/atlas/icons/seamanship/Skill_AdvancedAbleNavigator_Icon';
import Skill_AdvancedSightseeing_Icon from '../../assets/atlas/icons/seamanship/Skill_AdvancedSightseeing_Icon';
import Skill_AdvancedCosmology_Icon from '../../assets/atlas/icons/seamanship/Skill_AdvancedCosmology_Icon';
import Skill_MediumSpeedSail_Icon from '../../assets/atlas/icons/seamanship/Skill_MediumSpeedSail_Icon';
import Skill_MediumWeightSail_Icon from '../../assets/atlas/icons/seamanship/Skill_MediumWeightSail_Icon';
import Skill_IntermediateShipwright_Icon from '../../assets/atlas/icons/seamanship/Skill_IntermediateShipwright_Icon';
import Skill_ArtilleryUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_ArtilleryUnlock_Icon';
import Skill_Gunports_Icon from '../../assets/atlas/icons/seamanship/Skill_Gunports_Icon';
import Skill_DinghyDock_Icon from '../../assets/atlas/icons/seamanship/Skill_DinghyDock_Icon';
import Skill_LargeGunports_Icon from '../../assets/atlas/icons/seamanship/Skill_LargeGunports_Icon';
import Skill_LargeSailHandling_Icon from '../../assets/atlas/icons/seamanship/Skill_LargeSailHandling_Icon';
import Skill_LargeSpeedSail_Icon from '../../assets/atlas/icons/seamanship/Skill_LargeSpeedSail_Icon';
import Skill_LargeWeightSail_Icon from '../../assets/atlas/icons/seamanship/Skill_LargeWeightSail_Icon';
import Skill_AdvancedShipwright_Icon from '../../assets/atlas/icons/seamanship/Skill_AdvancedShipwright_Icon';
import Skill_ImprovedAbleMapmaker_Icon from '../../assets/atlas/icons/seamanship/Skill_ImprovedAbleMapmaker_Icon';
import Skill_ExpertShipwright_Icon from '../../assets/atlas/icons/seamanship/Skill_ExpertShipwright_Icon';
import Skill_AdvancedAbleMapmaker_Icon from '../../assets/atlas/icons/seamanship/Skill_AdvancedAbleMapmaker_Icon';

export default {
  dimension: [1, 5, 6, 5, 2, 0, 0, 2, 1, 0],
  icon: Seamanship_Icon_Button,
  display: 'Seamanship',
  skills: {
    'Navigator\'s Tools': {
      icon: Skill_NavigatorsTools_Icon,
      name: 'Navigator\'s Tools',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Sextant'
      ]
    },
    'Basics Of Sailing': {
      icon: Skill_BasicsOfSailing_Icon,
      name: 'Basics Of Sailing',
      skill: 1,
      row: 0,
      order: 1,
      recipe: [
        'Dinghy',
        'Raft',
        'Tiny Shipyard',
        'Buoy'
      ]
    },
    'Captaineering Unlock': {
      icon: Skill_CaptaineeringUnlock_Icon,
      name: 'Captaineering Unlock',
      skill: 2,
      row: 1,
      order: 0,
      unlock: 'captaineering',
      and: [
        'Navigator\'s Tools'
      ]
    },
    'Basic Able Navigator': {
      icon: Skill_BasicAbleNavigator_Icon,
      name: 'Basic Able Navigator',
      skill: 1,
      row: 1,
      order: 1,
      bonus: [
        {
          'Sextant Buff Duration': 25
        },
        {
          'Sextant Minigame Duration': 10
        }
      ],
      and: [
        'Navigator\'s Tools'
      ]
    },
    'Basic Sightseeing': {
      icon: Skill_BasicSightseeing_Icon,
      name: 'Basic Sightseeing',
      skill: 1,
      row: 1,
      order: 2,
      bonus: [
        {
          'Flotsam Visibility Range': 20
        }
      ],
      and: [
        'Navigator\'s Tools'
      ]
    },
    'Basic Cosmology': {
      icon: Skill_BasicCosmology_Icon,
      name: 'Basic Cosmology',
      skill: 1,
      row: 1,
      order: 3,
      bonus: [
        {
          'Sextant Minigame Time': 10
        }
      ],
      and: [
        'Navigator\'s Tools'
      ]
    },
    'Basic Shipwright': {
      icon: Skill_BasicShipwright_Icon,
      name: 'Basic Shipwright',
      skill: 1,
      row: 1,
      order: 4,
      recipe: [
        'Small Shipyard',
        'Sloop',
        'Small Wood Ship Deck',
        'Small Wood Plank',
        'Ship Steering Wheel',
        'Bucket',
        'Small Handling Sail'
      ],
      and: [
        'Basics Of Sailing'
      ]
    },
    'Piracy Unlock': {
      icon: Skill_CaptaineeringUnlock_Icon,
      name: 'Piracy Unlock',
      skill: 2,
      row: 1,
      order: 5,
      unlock: 'piracy',
      and: [
        'Basics Of Sailing'
      ]
    },
    'Improved Able Navigator': {
      icon: Skill_ImprovedAbleNavigator_Icon,
      name: 'Improved Able Navigator',
      skill: 2,
      row: 2,
      order: 0,
      bonus: [
        {
          'Sextant Buff Duration': 20
        },
        {
          'Sextant Minigame Duration': 10
        }
      ],
      and: [
        'Basic Able Navigator'
      ]
    },
    'Improved Sightseeing': {
      icon: Skill_ImprovedSightseeing_Icon,
      name: 'Improved Sightseeing',
      skill: 2,
      row: 2,
      order: 1,
      bonus: [
        {
          'Flotsam Visibility Range': 20
        }
      ],
      and: [
        'Basic Sightseeing'
      ]
    },
    'Improved Cosmology': {
      icon: Skill_ImprovedCosmology_Icon,
      name: 'Improved Cosmology',
      skill: 2,
      row: 2,
      order: 2,
      bonus: [
        {
          'Sextant Minigame Time': 10
        }
      ],
      and: [
        'Basic Cosmology'
      ]
    },
    'Small Speed Sail': {
      icon: Skill_SmallSpeedSail_Icon,
      name: 'Small Speed Sail',
      skill: 2,
      row: 2,
      order: 3,
      recipe: [
        'Small Speed Sail'
      ],
      and: [
        'Basic Shipwright'
      ]
    },
    'Small Weight Sail': {
      icon: Skill_SmallWeightSail_Icon,
      name: 'Small Weight Sail',
      skill: 2,
      row: 2,
      order: 4,
      recipe: [
        'Small Weight Sail'
      ],
      and: [
        'Basic Shipwright'
      ]
    },
    'Medium Handling Sail': {
      icon: Skill_MediumHandlingSail_Icon,
      name: 'Medium Handling Sail',
      skill: 4,
      row: 2,
      order: 5,
      recipe: [
        'Medium Handling Sail'
      ],
      and: [
        'Basic Shipwright'
      ]
    },
    'Basic Able Mapmaker': {
      icon: Skill_BasicAbleMapmaker_Icon,
      name: 'Basic Able Mapmaker',
      skill: 1,
      row: 2,
      order: 6,
      bonus: [
        {
          'Fog Of War Range': 15
        },
        {
          'Shroud Of War Range': 15
        }
      ],
      and: [
        'Basic Shipwright'
      ]
    },
    'Advanced Able Navigator': {
      icon: Skill_AdvancedAbleNavigator_Icon,
      name: 'Advanced Able Navigator',
      skill: 8,
      row: 3,
      order: 0,
      bonus: [
        {
          'Sextant Buff Duration': 25
        },
        {
          'Sextant Minigame Duration': 25
        }
      ],
      and: [
        'Improved Able Navigator'
      ]
    },
    'Advanced Sightseeing': {
      icon: Skill_AdvancedSightseeing_Icon,
      name: 'Advanced Sightseeing',
      skill: 8,
      row: 3,
      order: 1,
      bonus: [
        {
          'Flotsam Visibility Range': 20
        }
      ],
      and: [
        'Improved Sightseeing'
      ]
    },
    'Advanced Cosmology': {
      icon: Skill_AdvancedCosmology_Icon,
      name: 'Advanced Cosmology',
      skill: 8,
      row: 3,
      order: 2,
      bonus: [
        {
          'Sextant Minigame Time': 10
        }
      ],
      and: [
        'Improved Cosmology'
      ]
    },
    'Medium Speed Sail': {
      icon: Skill_MediumSpeedSail_Icon,
      name: 'Medium Speed Sail',
      skill: 4,
      row: 3,
      order: 3,
      recipe: [
        'Medium Speed Sail'
      ],
      and: [
        'Small Speed Sail',
        'Medium Handling Sail'
      ]
    },
    'Medium Weight Sail': {
      icon: Skill_MediumWeightSail_Icon,
      name: 'Medium Weight Sail',
      skill: 4,
      row: 3,
      order: 4,
      recipe: [
        'Medium Weight Sail'
      ],
      and: [
        'Small Weight Sail',
        'Medium Handling Sail'
      ]
    },
    'Intermediate Shipwright': {
      icon: Skill_IntermediateShipwright_Icon,
      name: 'Intermediate Shipwright',
      skill: 4,
      row: 3,
      order: 5,
      recipe: [
        'Schooner',
        'Medium Wood Ship Deck',
        'Medium Wood Plank'
      ],
      and: [
        'Medium Handling Sail'
      ]
    },
    'Artillery Unlock': {
      icon: Skill_ArtilleryUnlock_Icon,
      name: 'Artillery Unlock',
      skill: 8,
      row: 4,
      order: 0,
      unlock: 'artillery',
      and: [
        'Intermediate Shipwright'
      ]
    },
    'Gunports': {
      icon: Skill_Gunports_Icon,
      name: 'Gunports',
      skill: 2,
      row: 4,
      order: 1,
      recipe: [
        'Medium Wood Gunport'
      ],
      and: [
        'Intermediate Shipwright'
      ]
    },
    'Dinghy Dock': {
      icon: Skill_DinghyDock_Icon,
      name: 'Dinghy Dock',
      skill: 1,
      row: 4,
      order: 2,
      recipe: [
        'Dinghy Ship Hangar'
      ],
      and: [
        'Intermediate Shipwright'
      ]
    },
    'Large Gunports': {
      icon: Skill_LargeGunports_Icon,
      name: 'Large Gunports',
      skill: 4,
      row: 5,
      order: 0,
      recipe: [
        'Large Wood Gunport'
      ],
      and: [
        'Gunports'
      ]
    },
    'Large Handling Sail': {
      icon: Skill_LargeSailHandling_Icon,
      name: 'Large Handling Sail',
      skill: 10,
      row: 6,
      order: 0,
      recipe: [
        'Large Handling Sail'
      ],
      and: [
        'Large Gunports'
      ]
    },
    'Large Speed Sail': {
      icon: Skill_LargeSpeedSail_Icon,
      name: 'Large Speed Sail',
      skill: 10,
      row: 7,
      order: 0,
      recipe: [
        'Large Speed Sail'
      ],
      and: [
        'Medium Speed Sail',
        'Large Handling Sail'
      ]
    },
    'Large Weight Sail': {
      icon: Skill_LargeWeightSail_Icon,
      name: 'Large Weight Sail',
      skill: 10,
      row: 7,
      order: 1,
      recipe: [
        'Large Weight Sail'
      ],
      and: [
        'Medium Weight Sail',
        'Large Handling Sail'
      ]
    },
    'Advanced Shipwright': {
      icon: Skill_AdvancedShipwright_Icon,
      name: 'Advanced Shipwright',
      skill: 8,
      row: 7,
      order: 2,
      recipe: [
        'Brigantine',
        'Large Shipyard'
      ],
      and: [
        'Large Handling Sail'
      ]
    },
    'Improved Able Mapmaker': {
      icon: Skill_ImprovedAbleMapmaker_Icon,
      name: 'Improved Able Mapmaker',
      skill: 2,
      row: 8,
      order: 0,
      bonus: [
        {
          'Fog Of War Range': 15
        },
        {
          'Shroud Of War Range': 15
        }
      ],
      and: [
        'Advanced Shipwright'
      ]
    },
    'Expert Shipwright': {
      icon: Skill_ExpertShipwright_Icon,
      name: 'Expert Shipwright',
      skill: 14,
      row: 8,
      order: 1,
      recipe: [
        'Galleon',
        'Large Wood Ship Deck',
        'Large Wood Plank'
      ],
      and: [
        'Advanced Shipwright',
        'Dinghy Dock'
      ]
    },
    'Advanced Able Mapmaker': {
      icon: Skill_AdvancedAbleMapmaker_Icon,
      name: 'Advanced Able Mapmaker',
      skill: 8,
      row: 9,
      order: 0,
      bonus: [
        {
          'Fog Of War Range': 20
        },
        {
          'Shroud Of War Range': 20
        }
      ],
      and: [
        'Improved Able Mapmaker'
      ]
    }
  }
}
