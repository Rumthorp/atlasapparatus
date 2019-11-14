import Music_Icon_Button from '../../assets/atlas/icons/menu/Music_Icon_Button';
import Skill_BasicMusicalStudies_Icon from '../../assets/atlas/icons/music/Skill_BasicMusicalStudies_Icon';
import Skill_BasicMotionOfBodies_Icon from '../../assets/atlas/icons/music/Skill_BasicMotionOfBodies_Icon';
import Skill_BasicMotionOfMusic_Icon from '../../assets/atlas/icons/music/Skill_BasicMotionOfMusic_Icon';
import Skill_BasicTalentedDancer_Icon from '../../assets/atlas/icons/music/Skill_BasicTalentedDancer_Icon';
import Skill_BasicCatchyTune_Icon from '../../assets/atlas/icons/music/Skill_BasicCatchyTune_Icon';
import Skill_BasicInspiringMusic_Icon from '../../assets/atlas/icons/music/Skill_BasicInspiringMusic_Icon';
import Skill_BasicMusicPractice_Icon from '../../assets/atlas/icons/music/Skill_BasicMusicPractice_Icon';
import Skill_ImprovedMotionOfBodies_Icon from '../../assets/atlas/icons/music/Skill_ImprovedMotionOfBodies_Icon';
import Skill_ImprovedMotionOfMusic_Icon from '../../assets/atlas/icons/music/Skill_ImprovedMotionOfMusic_Icon';
import Skill_ImprovedTalentedDancer_Icon from '../../assets/atlas/icons/music/Skill_ImprovedTalentedDancer_Icon';
import Skill_ImprovedCatchyTune_Icon from '../../assets/atlas/icons/music/Skill_ImprovedCatchyTune_Icon';
import Skill_ImprovedInspiringMusic_Icon from '../../assets/atlas/icons/music/Skill_ImprovedInspiringMusic_Icon';
import Skill_ImprovedMusicPractice_Icon from '../../assets/atlas/icons/music/Skill_ImprovedMusicPractice_Icon';
import Skill_AdvancedMotionOfBodies_Icon from '../../assets/atlas/icons/music/Skill_AdvancedMotionOfBodies_Icon';
import Skill_AdvancedMotionOfMusic_Icon from '../../assets/atlas/icons/music/Skill_AdvancedMotionOfMusic_Icon';
import Skill_AdvancedTalentedDancer_Icon from '../../assets/atlas/icons/music/Skill_AdvancedTalentedDancer_Icon';
import Skill_AdvancedCatchyTune_Icon from '../../assets/atlas/icons/music/Skill_AdvancedCatchyTune_Icon';
import Skill_AdvancedInspiringMusic_Icon from '../../assets/atlas/icons/music/Skill_AdvancedInspiringMusic_Icon';
import Skill_AdvancedMusicPractice_Icon from '../../assets/atlas/icons/music/Skill_AdvancedMusicPractice_Icon';

export default {
  dimension: [3, 5, 5, 2],
  icon: Music_Icon_Button,
  display: 'Music & Dance',
  skills: {
    'Basic Musical Studies': {
      icon: Skill_BasicMusicalStudies_Icon,
      name: 'Basic Musical Studies',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Accordion',
        'Wardrums'
      ]
    },
    'Basic Motion Of Bodies': {
      icon: Skill_BasicMotionOfBodies_Icon,
      name: 'Basic Motion Of Bodies',
      skill: 1,
      row: 0,
      order: 1,
      bonus: [
        {
          'Dancing Stamina Drain Reduction': 50
        }
      ]
    },
    'Basic Motion Of Music': {
      icon: Skill_BasicMotionOfMusic_Icon,
      name: 'Basic Motion Of Music',
      skill: 1,
      row: 0,
      order: 2,
      bonus: [
        {
          'Dancing Contribution To Note Keypress Window': 15
        }
      ]
    },
    'Basic Talented Dancer': {
      icon: Skill_BasicTalentedDancer_Icon,
      name: 'Basic Talented Dancer',
      skill: 1,
      row: 0,
      order: 3,
      bonus: [
        {
          'Dancing Contribution To Max Note Error Tolerance': 15
        }
      ]
    },
    'Basic Catchy Tune': {
      icon: Skill_BasicCatchyTune_Icon,
      name: 'Basic Catchy Tune',
      skill: 1,
      row: 1,
      order: 0,
      bonus: [
        {
          'Musical Buff Duration': 40
        }
      ],
      and: [
        'Basic Musical Studies'
      ]
    },
    'Basic Inspiring Music': {
      icon: Skill_BasicInspiringMusic_Icon,
      name: 'Basic Inspiring Music',
      skill: 1,
      row: 1,
      order: 1,
      bonus: [
        {
          'Song Effective Radius': 15
        }
      ],
      and: [
        'Basic Musical Studies'
      ]
    },
    'Basic Musical Practice': {
      icon: Skill_BasicMusicPractice_Icon,
      name: 'Basic Musical Practice',
      skill: 1,
      row: 1,
      order: 2,
      bonus: [
        {
          'Musical Note Error Tolerance': 15
        }
      ],
      and: [
        'Basic Musical Studies'
      ]
    },
    'Improved Motion Of Bodies': {
      icon: Skill_ImprovedMotionOfBodies_Icon,
      name: 'Improved Motion Of Bodies',
      skill: 2,
      row: 1,
      order: 3,
      bonus: [
        {
          'Dancing Stamina Drain Reduction': 50
        }
      ],
      and: [
        'Basic Motion Of Bodies'
      ]
    },
    'Improved Motion Of Music': {
      icon: Skill_ImprovedMotionOfMusic_Icon,
      name: 'Improved Motion Of Music',
      skill: 2,
      row: 1,
      order: 4,
      bonus: [
        {
          'Dancing Contribution To Note Keypress Window': 15
        }
      ],
      and: [
        'Basic Motion Of Music'
      ]
    },
    'Improved Talented Dancer': {
      icon: Skill_ImprovedTalentedDancer_Icon,
      name: 'Improved Talented Dancer',
      skill: 2,
      row: 1,
      order: 5,
      bonus: [
        {
          'Dancing Contribution To Max Note Error Tolerance': 15
        }
      ],
      and: [
        'Basic Talented Dancer'
      ]
    },
    'Improved Catchy Tune': {
      icon: Skill_ImprovedCatchyTune_Icon,
      name: 'Improved Catchy Tune',
      skill: 2,
      row: 2,
      order: 0,
      bonus: [
        {
          'Musical Buff Duration': 40
        }
      ],
      and: [
        'Basic Catchy Tune'
      ]
    },
    'Improved Inspiring Music': {
      icon: Skill_ImprovedInspiringMusic_Icon,
      name: 'Improved Inspiring Music',
      skill: 2,
      row: 2,
      order: 1,
      bonus: [
        {
          'Song Effective Radius': 15
        }
      ],
      and: [
        'Basic Inspiring Music'
      ]
    },
    'Improved Musical Practice': {
      icon: Skill_ImprovedMusicPractice_Icon,
      name: 'Improved Musical Practice',
      skill: 2,
      row: 2,
      order: 2,
      bonus: [
        {
          'Musical Note Error Tolerance': 15
        }
      ],
      and: [
        'Basic Musical Practice'
      ]
    },
    'Advanced Motion Of Bodies': {
      icon: Skill_AdvancedMotionOfBodies_Icon,
      name: 'Advanced Motion Of Bodies',
      skill: 6,
      row: 2,
      order: 3,
      bonus: [
        {
          'Dancing Stamina Drain Reduction': 50
        }
      ],
      and: [
        'Improved Motion Of Bodies'
      ]
    },
    'Advanced Motion Of Music': {
      icon: Skill_AdvancedMotionOfMusic_Icon,
      name: 'Advanced Motion Of Music',
      skill: 6,
      row: 2,
      order: 4,
      bonus: [
        {
          'Dancing Contribution To Note Keypress Window': 15
        }
      ],
      and: [
        'Improved Motion Of Music'
      ]
    },
    'Advanced Talented Dancer': {
      icon: Skill_AdvancedTalentedDancer_Icon,
      name: 'Advanced Talented Dancer',
      skill: 6,
      row: 2,
      order: 5,
      bonus: [
        {
          'Dancing Contribution To Max Note Error Tolerance': 15
        }
      ],
      and: [
        'Improved Talented Dancer'
      ]
    },
    'Advanced Catchy Tune': {
      icon: Skill_AdvancedCatchyTune_Icon,
      name: 'Advanced Catchy Tune',
      skill: 6,
      row: 3,
      order: 0,
      bonus: [
        {
          'Musical Buff Duration': 40
        }
      ],
      and: [
        'Improved Catchy Tune'
      ]
    },
    'Advanced Inspiring Music': {
      icon: Skill_AdvancedInspiringMusic_Icon,
      name: 'Advanced Inspiring Music',
      skill: 6,
      row: 3,
      order: 1,
      bonus: [
        {
          'Song Effective Radius': 15
        }
      ],
      and: [
        'Improved Inspiring Music'
      ]
    },
    'Advanced Music Practice': {
      icon: Skill_AdvancedMusicPractice_Icon,
      name: 'Advanced Music Practice',
      skill: 6,
      row: 3,
      order: 2,
      bonus: [
        {
          'Musical Note Error Tolerance': 15
        }
      ],
      and: [
        'Improved Musical Practice'
      ]
    }
  }
}
