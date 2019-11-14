import Captaineering_Icon_Button from '../../assets/atlas/icons/menu/Captaineering_Icon_Button';
import Skill_BasicShipMaintenance_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicShipMaintenance_Icon';
import Skill_LieutenantPodium_Icon from '../../assets/atlas/icons/captaineering/Skill_LieutenantPodium_Icon';
import Skill_BasicsOfCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicsOfCrew_Icon';
import Skill_ImprovedShipMaintenance_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedShipMaintenance_Icon';
import Skill_MusicUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_MusicUnlock_Icon';
import Skill_BasicCheaperCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicCheaperCrew_Icon';
import Skill_BasicCrewEducation_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicCrewEducation_Icon';
import Skill_BasicTalentedCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicTalentedCrew_Icon';
import Skill_BasicRationing_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicRationing_Icon';
import Skill_AdvancedShipMaintenance_Icon from '../../assets/atlas/icons/captaineering/Skill_AdvancedShipMaintenance_Icon';
import Skill_ImprovedCheaperCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedCheaperCrew_Icon';
import Skill_BasicRallyTheTroops_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicRallyTheTroops_Icon';
import Skill_ImprovedCrewEducation_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedCrewEducation_Icon';
import Skill_ImprovedTalentedCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedTalentedCrew_Icon';
import Skill_ImprovedRationing_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedRationing_Icon';
import Skill_BasicEfficientRepairs_Icon from '../../assets/atlas/icons/captaineering/Skill_BasicEfficientRepairs_Icon';
import Skill_AdvancedCheaperCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_AdvancedCheaperCrew_Icon';
import Skill_ImprovedRallytheTroops_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedRallytheTroops_Icon';
import Skill_AdvancedCrewEducation_Icon from '../../assets/atlas/icons/captaineering/Skill_AdvancedCrewEducation_Icon';
import Skill_AdvancedTalentedCrew_Icon from '../../assets/atlas/icons/captaineering/Skill_AdvancedTalentedCrew_Icon';
import Skill_AdvancedRationing_Icon from '../../assets/atlas/icons/captaineering/Skill_AdvancedRationing_Icon';
import Skill_ImprovedEfficientRepairs_Icon from '../../assets/atlas/icons/captaineering/Skill_ImprovedEfficientRepairs_Icon';
import Skill_ReloadOverdrive_Icon from '../../assets/atlas/icons/captaineering/Skill_ReloadOverdrive_Icon';
import Skill_AdvancedEfficientRepairs_Icon from '../../assets/atlas/icons/captaineering/Skill_AdvancedEfficientRepairs_Icon';

export default {
  dimension: [2, 5, 5, 5, 1, 0],
  icon: Captaineering_Icon_Button,
  display: 'Captaineering',
  skills: {
    'Basic Ship Maintenance': {
      icon: Skill_BasicShipMaintenance_Icon,
      name: 'Basic Ship Maintenance',
      skill: 2,
      row: 0,
      order: 0,
      bonus: [
        {
          'Ship Decaying Rate': -20
        }
      ]
    },
    'Lieutenant Podium': {
      icon: Skill_LieutenantPodium_Icon,
      name: 'Lieutenant Podium',
      skill: 4,
      row: 0,
      order: 1,
      recipe: [
        'Lieutenant Command Podium'
      ]
    },
    'Basics Of Crew': {
      icon: Skill_BasicsOfCrew_Icon,
      name: 'Basics Of Crew',
      skill: 2,
      row: 0,
      order: 2,
      recipe: [
        'Ship Resource Box',
        'Food Larder'
      ]
    },
    'Improved Ship Maintenance': {
      icon: Skill_ImprovedShipMaintenance_Icon,
      name: 'Improved Ship Maintenance',
      skill: 4,
      row: 1,
      order: 0,
      bonus: [
        {
          'Ship Decaying Rate': -15
        }
      ],
      and: [
        'Basic Ship Maintenance'
      ]
    },
    'Music Unlock': {
      icon: Skill_MusicUnlock_Icon,
      name: 'Music Unlock',
      skill: 2,
      row: 1,
      order: 1,
      unlock: 'music',
      and: [
        'Lieutenant Podium'
      ]
    },
    'Basic Cheaper Crew': {
      icon: Skill_BasicCheaperCrew_Icon,
      name: 'Basic Cheaper Crew',
      skill: 2,
      row: 1,
      order: 2,
      bonus: [
        {
          'Crew Payment Period': 10
        }
      ],
      and: [
        'Basics Of Crew'
      ]
    },
    'Basic Crew Education': {
      icon: Skill_BasicCrewEducation_Icon,
      name: 'Basic Crew Education',
      skill: 2,
      row: 1,
      order: 3,
      bonus: [
        {
          'Ship Sinking Speed': -10
        }
      ],
      and: [
        'Basics Of Crew'
      ]
    },
    'Basic Talented Crew': {
      icon: Skill_BasicTalentedCrew_Icon,
      name: 'Basic Talented Crew',
      skill: 1,
      row: 1,
      order: 4,
      bonus: [
        {
          'Crew Sail Turn Speed': 10
        },
        {
          'Crew Sail Raise And Lower Speed': 20
        }
      ],
      and: [
        'Basics Of Crew'
      ]
    },
    'Basic Rationing': {
      icon: Skill_BasicRationing_Icon,
      name: 'Basic Rationing',
      skill: 2,
      row: 1,
      order: 5,
      bonus: [
        {
          'Crew Food Consumption Period': -10
        }
      ],
      and: [
        'Basics Of Crew'
      ]
    },
    'Advanced Ship Maintenance': {
      icon: Skill_AdvancedShipMaintenance_Icon,
      name: 'Advanced Ship Maintenance',
      skill: 8,
      row: 2,
      order: 0,
      bonus: [
        {
          'Ship Decaying Rate': -15
        }
      ],
      and: [
        'Improved Ship Maintenance'
      ]
    },
    'Improved Cheaper Crew': {
      icon: Skill_ImprovedCheaperCrew_Icon,
      name: 'Improved Cheaper Crew',
      skill: 4,
      row: 2,
      order: 1,
      bonus: [
        {
          'Crew Payment Period': 10
        }
      ],
      and: [
        'Basic Cheaper Crew'
      ]
    },
    'Basic Rally The Troops': {
      icon: Skill_BasicRallyTheTroops_Icon,
      name: 'Basic Rally The Troops',
      skill: 2,
      row: 2,
      order: 2,
      feat: [
        'Basic Rally The Troops'
      ],
      and: [
        'Basic Rationing',
        'Basic Crew Education',
        'Basic Cheaper Crew',
        'Basic Talented Crew'
      ]
    },
    'Improved Crew Education': {
      icon: Skill_ImprovedCrewEducation_Icon,
      name: 'Improved Crew Education',
      skill: 2,
      row: 2,
      order: 3,
      bonus: [
        {
          'Ship Sinking Speed': -10
        }
      ],
      and: [
        'Basic Crew Education'
      ]
    },
    'Improved Talented Crew': {
      icon: Skill_ImprovedTalentedCrew_Icon,
      name: 'Improved Talented Crew',
      skill: 2,
      row: 2,
      order: 4,
      bonus: [
        {
          'Crew Sail Turn Speed': 10
        },
        {
          'Crew Sail Raise And Lower Speed': 10
        }
      ],
      and: [
        'Basic Talented Crew'
      ]
    },
    'Improved Rationing': {
      icon: Skill_ImprovedRationing_Icon,
      name: 'Improved Rationing',
      skill: 2,
      row: 2,
      order: 5,
      bonus: [
        {
          'Crew Food Consumption Period': -10
        }
      ],
      and: [
        'Basic Rationing'
      ]
    },
    'Basic Efficient Repairs': {
      icon: Skill_BasicEfficientRepairs_Icon,
      name: 'Basic Efficient Repairs',
      skill: 2,
      row: 3,
      order: 0,
      bonus: [
        {
          'Ship Part Replacement Timer': -10
        }
      ],
      and: [
        'Advanced Ship Maintenance'
      ]
    },
    'Advanced Cheaper Crew': {
      icon: Skill_AdvancedCheaperCrew_Icon,
      name: 'Advanced Cheaper Crew',
      skill: 8,
      row: 3,
      order: 1,
      bonus: [
        {
          'Crew Payment Period': 15
        }
      ],
      and: [
        'Improved Cheaper Crew'
      ]
    },
    'Improved Rally The Troops': {
      icon: Skill_ImprovedRallytheTroops_Icon,
      name: 'Improved Rally The Troops',
      skill: 6,
      row: 3,
      order: 2,
      feat: [
        'Improved Rally The Troops'
      ],
      and: [
        'Basic Rally The Troops',
        'Improved Rationing',
        'Improved Talented Crew',
        'Improved Crew Education'
      ]
    },
    'Advanced Crew Education': {
      icon: Skill_AdvancedCrewEducation_Icon,
      name: 'Advanced Crew Education',
      skill: 8,
      row: 3,
      order: 3,
      bonus: [
        {
          'Ship Sinking Speed': -10
        }
      ],
      and: [
        'Improved Crew Education'
      ]
    },
    'Advanced Talented Crew': {
      icon: Skill_AdvancedTalentedCrew_Icon,
      name: 'Advanced Talented Crew',
      skill: 8,
      row: 3,
      order: 4,
      bonus: [
        {
          'Crew Sail Turn Speed': 10
        },
        {
          'Crew Sail Raise And Lower Speed': 10
        }
      ],
      and: [
        'Improved Talented Crew'
      ]
    },
    'Advanced Rationing': {
      icon: Skill_AdvancedRationing_Icon,
      name: 'Advanced Rationing',
      skill: 8,
      row: 3,
      order: 5,
      bonus: [
        {
          'Crew Food Consumption Period': -10
        }
      ],
      and: [
        'Improved Rationing'
      ]
    },
    'Improved Efficient Repairs': {
      icon: Skill_ImprovedEfficientRepairs_Icon,
      name: 'Improved Efficient Repairs',
      skill: 4,
      row: 4,
      order: 0,
      bonus: [
        {
          'Ship Part Replacement Timer': -10
        }
      ],
      and: [
        'Basic Efficient Repairs'
      ]
    },
    'Reload Overdrive': {
      icon: Skill_ReloadOverdrive_Icon,
      name: 'Reload Overdrive',
      skill: 10,
      row: 4,
      order: 1,
      feat: [
        'Reload Overdrive'
      ],
      and: [
        'Improved Rally The Troops',
        'Advanced Cheaper Crew',
        'Advanced Rationing',
        'Advanced Crew Education',
        'Advanced Talented Crew'
      ]
    },
    'Advanced Efficient Repairs': {
      icon: Skill_AdvancedEfficientRepairs_Icon,
      name: 'Advanced Efficient Repairs',
      skill: 8,
      row: 5,
      order: 0,
      bonus: [
        {
          'Ship Part Replacement Timer': -10
        }
      ],
      and: [
        'Improved Efficient Repairs'
      ]
    }
  }
}
