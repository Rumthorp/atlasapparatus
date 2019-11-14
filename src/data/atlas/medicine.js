import Medicine_Icon_Button from '../../assets/atlas/icons/menu/Medicine_Icon_Button';
import Skill_BasicMedicalStudies_Icon from '../../assets/atlas/icons/medicine/Skill_BasicMedicalStudies_Icon';
import Skill_BasicMedicalAssistant_Icon from '../../assets/atlas/icons/medicine/Skill_BasicMedicalAssistant_Icon';
import Skill_BasicMedicalEfficacy_Icon from '../../assets/atlas/icons/medicine/Skill_BasicMedicalEfficacy_Icon';
import Skill_BasicPhysicianSkills_Icon from '../../assets/atlas/icons/medicine/Skill_BasicPhysicianSkills_Icon';
import Skill_BasicMedicalLongevity_Icon from '../../assets/atlas/icons/medicine/Skill_BasicMedicalLongevity_Icon';
import Skill_ImprovedMedicalAssistant_Icon from '../../assets/atlas/icons/medicine/Skill_ImprovedMedicalAssistant_Icon';
import Skill_ImprovedMedicalEfficacy_Icon from '../../assets/atlas/icons/medicine/Skill_ImprovedMedicalEfficacy_Icon';
import Skill_ImprovedPhysicianSkills_Icon from '../../assets/atlas/icons/medicine/Skill_ImprovedPhysicianSkills_Icon';
import Skill_ImprovedMedicalLongevity_Icon from '../../assets/atlas/icons/medicine/Skill_ImprovedMedicalLongevity_Icon';
import Skill_Savior_Icon from '../../assets/atlas/icons/medicine/Skill_Savior_Icon';
import Skill_AdvancedMedicalAssistant_Icon from '../../assets/atlas/icons/medicine/Skill_AdvancedMedicalAssistant_Icon';
import Skill_AdvancedPhysicianSkills_Icon from '../../assets/atlas/icons/medicine/Skill_AdvancedPhysicianSkills_Icon';
import Skill_AdvancedMedicalLongevity_Icon from '../../assets/atlas/icons/medicine/Skill_AdvancedMedicalLongevity_Icon';
import Skill_ImprovedSavior_Icon from '../../assets/atlas/icons/medicine/Skill_ImprovedSavior_Icon';

export default {
  dimension: [0, 4, 4, 5, 0],
  icon: Medicine_Icon_Button,
  display: 'Medicine',
  skills: {
    'Basic Medical Studies': {
      icon: Skill_BasicMedicalStudies_Icon,
      name: 'Basic Medical Studies',
      skill: 1,
      row: 0,
      order: 0,
      recipe: [
        'Medkit'
      ]
    },
    'Basic Medical Assistant': {
      icon: Skill_BasicMedicalAssistant_Icon,
      name: 'Basic Medical Assistant',
      skill: 1,
      row: 1,
      order: 0,
      bonus: [
        {
          'Medkit Use Speed': 10
        }
      ],
      and: [
        'Basic Medical Studies'
      ]
    },
    'Basic Medical Efficacy': {
      icon: Skill_BasicMedicalEfficacy_Icon,
      name: 'Basic Medical Efficacy',
      skill: 1,
      row: 1,
      order: 1,
      bonus: [
        {
          'Medkit Healing Effectiveness': 10
        }
      ],
      and: [
        'Basic Medical Studies'
      ]
    },
    'Basic Physician Skills': {
      icon: Skill_BasicPhysicianSkills_Icon,
      name: 'Basic Physician Skills',
      skill: 1,
      row: 1,
      order: 2,
      bonus: [
        {
          'Medkit Minigame Window Region': 15
        }
      ],
      and: [
        'Basic Medical Studies'
      ]
    },
    'Basic Medical Longevity': {
      icon: Skill_BasicMedicalLongevity_Icon,
      name: 'Basic Medical Longevity',
      skill: 1,
      row: 1,
      order: 3,
      bonus: [
        {
          'Medkit Durability': 20
        }
      ],
      and: [
        'Basic Medical Studies'
      ]
    },
    'Basic Self Healing': {
      icon: Skill_BasicMedicalStudies_Icon,
      name: 'Basic Self Healing',
      skill: 1,
      row: 1,
      order: 4,
      bonus: [
        {
          'Medkit Self Heal Amount': 200
        }
      ],
      and: [
        'Basic Medical Studies'
      ]
    },
    'Improved Medical Assistant': {
      icon: Skill_ImprovedMedicalAssistant_Icon,
      name: 'Improved Medical Assistant',
      skill: 2,
      row: 2,
      order: 0,
      bonus: [
        {
          'Medkit Use Speed': 10
        }
      ],
      and: [
        'Basic Medical Assistant'
      ]
    },
    'Improved Medical Efficacy': {
      icon: Skill_ImprovedMedicalEfficacy_Icon,
      name: 'Improved Medical Efficacy',
      skill: 2,
      row: 2,
      order: 1,
      bonus: [
        {
          'Medkit Healing Effectiveness': 10
        }
      ],
      and: [
        'Basic Medical Efficacy'
      ]
    },
    'Improved Physician Skills': {
      icon: Skill_ImprovedPhysicianSkills_Icon,
      name: 'Improved Physician Skills',
      skill: 2,
      row: 2,
      order: 2,
      bonus: [
        {
          'Medkit Minigame Window Region': 20
        }
      ],
      and: [
        'Basic Physician Skills'
      ]
    },
    'Improved Medical Longevity': {
      icon: Skill_ImprovedMedicalLongevity_Icon,
      name: 'Improved Medical Longevity',
      skill: 2,
      row: 2,
      order: 3,
      bonus: [
        {
          'Medkit Durability': 20
        }
      ],
      and: [
        'Basic Medical Longevity'
      ]
    },
    'Improved Self Healing': {
      icon: Skill_BasicMedicalStudies_Icon,
      name: 'Improved Self Healing',
      skill: 2,
      row: 2,
      order: 4,
      bonus: [
        {
          'Medkit Self Heal Amount': 200
        }
      ],
      and: [
        'Basic Self Healing'
      ]
    },
    'Advanced Medical Assistant': {
      icon: Skill_AdvancedMedicalAssistant_Icon,
      name: 'Advanced Medical Assistant',
      skill: 4,
      row: 3,
      order: 0,
      bonus: [
        {
          'Medkit Use Speed': 10
        }
      ],
      and: [
        'Improved Medical Assistant'
      ]
    },
    'Basic Savior': {
      icon: Skill_Savior_Icon,
      name: 'Basic Savior',
      skill: 8,
      row: 3,
      order: 1,
      feat: [
        'Basic Savior'
      ],
      and: [
        'Improved Medical Assistant',
        'Improved Medical Efficacy',
        'Improved Physician Skills',
        'Improved Medical Longevity'
      ]
    },
    'Advanced Medical Efficacy': {
      icon: Skill_AdvancedMedicalAssistant_Icon,
      name: 'Advanced Medical Efficacy',
      skill: 8,
      row: 3,
      order: 2,
      bonus: [
        {
          'Medkit Healing Effectiveness': 10
        }
      ],
      and: [
        'Improved Medical Efficacy'
      ]
    },
    'Advanced Physician Skills': {
      icon: Skill_AdvancedPhysicianSkills_Icon,
      name: 'Advanced Physician Skills',
      skill: 8,
      row: 3,
      order: 3,
      bonus: [
        {
          'Medkit Minigame Window Region': 15
        }
      ],
      and: [
        'Improved Physician Skills'
      ]
    },
    'Advanced Medical Longevity': {
      icon: Skill_AdvancedMedicalLongevity_Icon,
      name: 'Advanced Medical Longevity',
      skill: 8,
      row: 3,
      order: 4,
      bonus: [
        {
          'Medkit Durability': 20
        }
      ],
      and: [
        'Improved Medical Longevity'
      ]
    },
    'Advanced Self Healing': {
      icon: Skill_BasicMedicalStudies_Icon,
      name: 'Advanced Self Healing',
      skill: 8,
      row: 3,
      order: 5,
      bonus: [
        {
          'Medkit Self Heal Amount': 200
        }
      ],
      and: [
        'Improved Self Healing'
      ]
    },
    'Improved Savior': {
      icon: Skill_ImprovedSavior_Icon,
      name: 'Improved Savior',
      skill: 12,
      row: 4,
      order: 0,
      feat: [
        'Improved Savior'
      ],
      and: [
        'Advanced Medical Assistant',
        'Advanced Medical Efficacy',
        'Advanced Physician Skills',
        'Advanced Medical Longevity',
        'Basic Savior'
      ]
    }
  }
}
