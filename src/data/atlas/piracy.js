import Piracy_Icon_Button from '../../assets/atlas/icons/menu/Piracy_Icon_Button';
import Skill_BasicsOfPiracy_Icon from '../../assets/atlas/icons/piracy/Skill_BasicsOfPiracy_Icon';
import Skill_MusicUnlock_Icon from '../../assets/atlas/icons/unlock/Skill_MusicUnlock_Icon';
import Skill_SecretsOfPiracy_Icon from '../../assets/atlas/icons/piracy/Skill_SecretsOfPiracy_Icon';
import Skill_BasicKnowledgeOfTheOldOnes_Icon from '../../assets/atlas/icons/piracy/Skill_BasicKnowledgeOfTheOldOnes_Icon';
import Skill_BasicShoveler_Icon from '../../assets/atlas/icons/piracy/Skill_BasicShoveler_Icon';
import Skill_BasicPlunder_Icon from '../../assets/atlas/icons/piracy/Skill_BasicPlunder_Icon';
import Skill_BasicEagleEyes_Icon from '../../assets/atlas/icons/piracy/Skill_BasicEagleEyes_Icon';
import Skill_BasicDiver_Icon from '../../assets/atlas/icons/piracy/Skill_BasicDiver_Icon';
import Skill_BasicStoutLiver_Icon from '../../assets/atlas/icons/piracy/Skill_BasicStoutLiver_Icon';
import Skill_ImprovedKnowledgeOfTheOldOnes_Icon from '../../assets/atlas/icons/piracy/Skill_ImprovedKnowledgeOfTheOldOnes_Icon';
import Skill_ImprovedShoveler_Icon from '../../assets/atlas/icons/piracy/Skill_ImprovedShoveler_Icon';
import Skill_ImprovedPlunder_Icon from '../../assets/atlas/icons/piracy/Skill_ImprovedPlunder_Icon';
import Skill_ImprovedEagleEyes_Icon from '../../assets/atlas/icons/piracy/Skill_ImprovedEagleEyes_Icon';
import Skill_ImprovedDiver_Icon from '../../assets/atlas/icons/piracy/Skill_ImprovedDiver_Icon';
import Skill_ImprovedStoutLiver_Icon from '../../assets/atlas/icons/piracy/Skill_ImprovedStoutLiver_Icon';
import Skill_AdvancedKnowledgeOfTheOldOnes_Icon from '../../assets/atlas/icons/piracy/Skill_AdvancedKnowledgeOfTheOldOnes_Icon';
import Skill_AdvancedShoveler_Icon from '../../assets/atlas/icons/piracy/Skill_AdvancedShoveler_Icon';
import Skill_AdvancedPlunder_Icon from '../../assets/atlas/icons/piracy/Skill_AdvancedPlunder_Icon';
import Skill_AdvancedEagleEyes_Icon from '../../assets/atlas/icons/piracy/Skill_AdvancedEagleEyes_Icon';
import Skill_AdvancedDiver_Icon from '../../assets/atlas/icons/piracy/Skill_AdvancedDiver_Icon';
import Skill_AdvancedStoutLiver_Icon from '../../assets/atlas/icons/piracy/Skill_AdvancedStoutLiver_Icon';
import Skill_PryingEyes_Icon from '../../assets/atlas/icons/piracy/Skill_PryingEyes_Icon';
import Skill_WhatsYoursIsMine_Icon from '../../assets/atlas/icons/piracy/Skill_WhatsYoursIsMine_Icon';
import Skill_DropTheGauntlet_Icon from '../../assets/atlas/icons/piracy/Skill_DropTheGauntlet_Icon';

export default {
  dimension: [0, 1, 5, 5, 5, 0, 1],
  icon: Piracy_Icon_Button,
  display: 'Piracy',
  skills: {
    'Basics Of Piracy': {
      icon: Skill_BasicsOfPiracy_Icon,
      name: 'Basics Of Piracy',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Blackjack',
        'Handcuffs',
        'Hanging Noose',
        'Grappling Hook',
        'Flare Gun'
      ]
    },
    'Music Unlock': {
      icon: Skill_MusicUnlock_Icon,
      name: 'Music Unlock',
      skill: 2,
      row: 1,
      order: 0,
      unlock: 'music',
      and: [
        'Basics Of Piracy'
      ]
    },
    'Secrets Of Piracy': {
      icon: Skill_SecretsOfPiracy_Icon,
      name: 'Secrets Of Piracy',
      skill: 2,
      row: 1,
      order: 1,
      recipe: [
        'Gibbet',
        'Wooden Cage',
        'Diving Attachment',
        'Guillotine'
      ],
      and: [
        'Basics Of Piracy'
      ]
    },
    'Basic Knowledge Of The Old Ones': {
      icon: Skill_BasicKnowledgeOfTheOldOnes_Icon,
      name: 'Basic Knowledge Of The Old Ones',
      skill: 1,
      row: 2,
      order: 0,
      bonus: [
        {
          'Damage vs Army Of The Damned': 20
        }
      ],
      and: [
        'Secrets Of Piracy'
      ]
    },
    'Basic Shoveler': {
      icon: Skill_BasicShoveler_Icon,
      name: 'Basic Shoveler',
      skill: 1,
      row: 2,
      order: 1,
      bonus: [
        {
          'Shovel Resource Collection': 20
        }
      ],
      and: [
        'Secrets Of Piracy'
      ]
    },
    'Basic Plunder': {
      icon: Skill_BasicPlunder_Icon,
      name: 'Basic Plunder',
      skill: 1,
      row: 2,
      order: 2,
      bonus: [
        {
          'Shipwrecked Structure Returned Resource Quantity': 15
        }
      ],
      and: [
        'Secrets Of Piracy'
      ]
    },
    'Basic Eagle Eyes': {
      icon: Skill_BasicEagleEyes_Icon,
      name: 'Basic Eagle Eyes',
      skill: 1,
      row: 2,
      order: 3,
      bonus: [
        {
          'Buried Treasure Emitter Visibility Range': 20
        }
      ],
      and: [
        'Secrets Of Piracy'
      ]
    },
    'Basic Diver': {
      icon: Skill_BasicDiver_Icon,
      name: 'Basic Diver',
      skill: 1,
      row: 2,
      order: 4,
      bonus: [
        {
          'Diving Suit Durability': 15
        },
        {
          'Diving Suit Underwater Active Time': 10
        }
      ],
      and: [
        'Secrets Of Piracy'
      ]
    },
    'Basic Stout Liver': {
      icon: Skill_BasicStoutLiver_Icon,
      name: 'Basic Stout Liver',
      skill: 1,
      row: 2,
      order: 5,
      bonus: [
        {
          'Alcohol Nutritional Value': 20
        }
      ],
      recipe: [
        'Grog'
      ],
      and: [
        'Secrets Of Piracy'
      ]
    },
    'Improved Knowledge Of The Old Ones': {
      icon: Skill_ImprovedKnowledgeOfTheOldOnes_Icon,
      name: 'Improved Knowledge Of The Old Ones',
      skill: 4,
      row: 3,
      order: 0,
      bonus: [
        {
          'Damage vs Army Of The Damned': 20
        }
      ],
      and: [
        'Basic Knowledge Of The Old Ones'
      ]
    },
    'Improved Shoveler': {
      icon: Skill_ImprovedShoveler_Icon,
      name: 'Improved Shoveler',
      skill: 3,
      row: 3,
      order: 1,
      bonus: [
        {
          'Shovel Resource Collection': 20
        }
      ],
      and: [
        'Basic Shoveler'
      ]
    },
    'Improved Plunder': {
      icon: Skill_ImprovedPlunder_Icon,
      name: 'Improved Plunder',
      skill: 4,
      row: 3,
      order: 2,
      bonus: [
        {
          'Shipwrecked Structure Returned Resource Quantity': 15
        }
      ],
      and: [
        'Basic Plunder'
      ]
    },
    'Improved Eagle Eyes': {
      icon: Skill_ImprovedEagleEyes_Icon,
      name: 'Improved Eagle Eyes',
      skill: 3,
      row: 3,
      order: 3,
      bonus: [
        {
          'Buried Treasure Emitter Visibility Range': 20
        }
      ],
      and: [
        'Basic Eagle Eyes'
      ]
    },
    'Improved Diver': {
      icon: Skill_ImprovedDiver_Icon,
      name: 'Improved Diver',
      skill: 4,
      row: 3,
      order: 4,
      bonus: [
        {
          'Diving Suit Durability': 15
        },
        {
          'Diving Suit Underwater Active Time': 10
        }
      ],
      and: [
        'Basic Diver'
      ]
    },
    'Improved Stout Liver': {
      icon: Skill_ImprovedStoutLiver_Icon,
      name: 'Improved Stout Liver',
      skill: 3,
      row: 3,
      order: 5,
      bonus: [
        {
          'Alcohol Nutritional Value': 40
        }
      ],
      and: [
        'Basic Stout Liver'
      ]
    },
    'Advanced Knowledge Of The Old Ones': {
      icon: Skill_AdvancedKnowledgeOfTheOldOnes_Icon,
      name: 'Advanced Knowledge Of The Old Ones',
      skill: 8,
      row: 4,
      order: 0,
      bonus: [
        {
          'Damage vs Army Of The Damned': 20
        }
      ],
      and: [
        'Improved Knowledge Of The Old Ones'
      ]
    },
    'Advanced Shoveler': {
      icon: Skill_AdvancedShoveler_Icon,
      name: 'Advanced Shoveler',
      skill: 6,
      row: 4,
      order: 1,
      bonus: [
        {
          'Shovel Resource Collection': 20
        }
      ],
      and: [
        'Improved Shoveler'
      ]
    },
    'Advanced Plunder': {
      icon: Skill_AdvancedPlunder_Icon,
      name: 'Advanced Plunder',
      skill: 8,
      row: 4,
      order: 2,
      bonus: [
        {
          'Shipwrecked Structure Returned Resource Quantity': 15
        }
      ],
      and: [
        'Improved Plunder'
      ]
    },
    'Advanced Eagle Eyes': {
      icon: Skill_AdvancedEagleEyes_Icon,
      name: 'Advanced Eagle Eyes',
      skill: 6,
      row: 4,
      order: 3,
      bonus: [
        {
          'Buried Treasure Emitter Visibility Range': 20
        }
      ],
      and: [
        'Improved Eagle Eyes'
      ]
    },
    'Advanced Diver': {
      icon: Skill_AdvancedDiver_Icon,
      name: 'Advanced Diver',
      skill: 8,
      row: 4,
      order: 4,
      bonus: [
        {
          'Diving Suit Durability': 15
        },
        {
          'Diving Suit Underwater Active Time': 10
        }
      ],
      and: [
        'Improved Diver'
      ]
    },
    'Advanced Stout Liver': {
      icon: Skill_AdvancedStoutLiver_Icon,
      name: 'Advanced Stout Liver',
      skill: 6,
      row: 4,
      order: 5,
      bonus: [
        {
          'Alcohol Nutritional Value': 60
        }
      ],
      and: [
        'Improved Stout Liver'
      ]
    },
    'Prying Eyes': {
      icon: Skill_PryingEyes_Icon,
      name: 'Prying Eyes',
      skill: 4,
      row: 5,
      order: 0,
      feat: [
        'Prying Eyes'
      ],
      and: [
        'Advanced Eagle Eyes'
      ]
    },
    'What\'s Yours Is Mine': {
      icon: Skill_WhatsYoursIsMine_Icon,
      name: 'What\'s Yours Is Mine',
      skill: 6,
      row: 6,
      order: 0,
      feat: [
        'What\'s Yours Is Mine'
      ],
      and: [
        'Prying Eyes',
        'Advanced Knowledge Of The Old Ones',
        'Advanced Shoveler',
        'Advanced Plunder',
        'Advanced Diver',
        'Advanced Stout Liver'
      ]
    },
    'Drop The Gauntlet': {
      icon: Skill_DropTheGauntlet_Icon,
      name: 'Drop The Gauntlet',
      skill: 6,
      row: 6,
      order: 1,
      feat: [
        'Drop The Gauntlet'
      ],
      and: [
        'Prying Eyes',
        'Advanced Knowledge Of The Old Ones',
        'Advanced Shoveler',
        'Advanced Plunder',
        'Advanced Diver',
        'Advanced Stout Liver'
      ]
    }
  }
}
