import Star from '../../assets/atlas/icons/menu/Star';
import Skill_RejuvenatedLevel1_Icon from '../../assets/atlas/icons/quest/Skill_RejuvenatedLevel1_Icon';
import Skill_TreasureMaster_Icon from '../../assets/atlas/icons/quest/Skill_TreasureMaster_Icon';
import Skill_ScourgeOfTheDamned_Icon from '../../assets/atlas/icons/quest/Skill_ScourgeOfTheDamned_Icon';
import Skill_BlueWhaleKiller_Icon from '../../assets/atlas/icons/quest/Skill_BlueWhaleKiller_Icon';
import Skill_RejuvenatedLevel2_Icon from '../../assets/atlas/icons/quest/Skill_RejuvenatedLevel2_Icon';
import Skill_FriendOfTheMermaids_Icon from '../../assets/atlas/icons/quest/Skill_FriendOfTheMermaids_Icon';
import Skill_SquidKiller_Icon from '../../assets/atlas/icons/quest/Skill_SquidKiller_Icon';
import Skill_SpermWhaleKiller_Icon from '../../assets/atlas/icons/quest/Skill_SpermWhaleKiller_Icon';
import Skill_RejuvenatedLevel3_Icon from '../../assets/atlas/icons/quest/Skill_RejuvenatedLevel3_Icon';
import Skill_VeteranExplorer_Icon from '../../assets/atlas/icons/quest/Skill_VeteranExplorer_Icon';
import Skill_InstantEquip_Icon from '../../assets/atlas/icons/quest/Skill_InstantEquip_Icon';
import Skill_GhostHunter_Icon from '../../assets/atlas/icons/quest/Skill_GhostHunter_Icon';
import Skill_ExploreTheDepths_Icon from '../../assets/atlas/icons/quest/Skill_ExploreTheDepths_Icon';
import Skill_VeteranPathfinder_Icon from '../../assets/atlas/icons/quest/Skill_VeteranPathfinder_Icon';
import Skill_TorpedoStudies_Icon from '../../assets/atlas/icons/quest/Skill_TorpedoStudies_Icon';
import Skill_HarvestBoost_Icon from '../../assets/atlas/icons/quest/Skill_HarvestBoost_Icon';

export default {
  dimension: [3, 3, 3, 3],
  icon: Star,
  skills: {
    'Rejuvenated Level 1': {
      icon: Skill_RejuvenatedLevel1_Icon,
      name: 'Rejuvenated Level 1',
      skill: 0,
      row: 0,
      order: 0,
      bonus: [
        { 'Melee Damage': 10 },
        { 'Max Stamina': 10 },
        { 'Max Weight': 10 },
        { 'Health Regeneration': 10 },
        { 'Stamina Regeneration': 10 }
      ]
    },
    'Treasure Master': {
      icon: Skill_TreasureMaster_Icon,
      name: 'Treasure Master',
      skill: 0,
      row: 0,
      order: 1,
      bonus: [
        { 'Melee Tool Durability': 100 }
      ]
    },
    'Scourge of the Damned': {
      icon: Skill_ScourgeOfTheDamned_Icon,
      name: 'Scourge of the Damned',
      skill: 0,
      row: 0,
      order: 2,
      bonus: [
        { 'Armor Durability': 100 }
      ]
    },
    'Blue Whale Killer': {
      icon: Skill_BlueWhaleKiller_Icon,
      name: 'Blue Whale Killer',
      skill: 0,
      row: 0,
      order: 3,
      bonus: [
        { 'Prone Speed': 100 },
        { 'Crouched Speed': 100 }
      ]
    },
    'Rejuvenated Level 2': {
      icon: Skill_RejuvenatedLevel2_Icon,
      name: 'Rejuvenated Level 2',
      skill: 0,
      row: 1,
      order: 0,
      bonus: [
        { 'Melee Damage': 5 },
        { 'Max Stamina': 5 },
        { 'Max Weight': 5 },
        { 'Health Regeneration': 5 },
        { 'Stamina Regeneration': 5 }
      ],
      and: [
        'Rejuvenated Level 1'
      ]
    },
    'Friend of the Mermaids': {
      icon: Skill_FriendOfTheMermaids_Icon,
      name: 'Friend of the Mermaids',
      skill: 0,
      row: 1,
      order: 1,
      bonus: [
        { 'Stamina Regeneration': 35 }
      ]
    },
    'Squid Killer': {
      icon: Skill_SquidKiller_Icon,
      name: 'Squid Killer',
      skill: 0,
      row: 1,
      order: 2,
      bonus: [
        { 'Equilibrium Vitamin Range': 10 },
        { 'Equilibrium Cooldown Reduction': 80 }
      ]
    },
    'Sperm Whale Killer': {
      icon: Skill_SpermWhaleKiller_Icon,
      name: 'Sperm Whale Killer',
      skill: 0,
      row: 1,
      order: 3,
      bonus: [
        { 'Taming Feeding Affinity Increase': 30 }
      ]
    },
    'Rejuvenated Level 3': {
      icon: Skill_RejuvenatedLevel3_Icon,
      name: 'Rejuvenated Level 3',
      skill: 0,
      row: 2,
      order: 0,
      bonus: [
        { 'Melee Damage': 5 },
        { 'Max Stamina': 5 },
        { 'Max Weight': 5 },
        { 'Health Regeneration': 5 },
        { 'Stamina Regeneration': 5 }
      ],
      and: [
        'Rejuvenated Level 2'
      ]
    },
    'Veteran Explorer': {
      icon: Skill_VeteranExplorer_Icon,
      name: 'Veteran Explorer',
      skill: 0,
      row: 2,
      order: 1,
      bonus: [
        { 'Encumbered Speed': 250 }
      ]
    },
    'Instant Equip': {
      icon: Skill_InstantEquip_Icon,
      name: 'Instant Equip',
      skill: 0,
      row: 2,
      order: 2,
      feat: [
        'Instant Equip'
      ]
    },
    'Ghost Hunter': {
      icon: Skill_GhostHunter_Icon,
      name: 'Ghost Hunter',
      skill: 0,
      row: 2,
      order: 3,
      bonus: [
        { 'Gold From Treasure You Dig': 20 }
      ]
    },
    'Explore the Depths': {
      icon: Skill_ExploreTheDepths_Icon,
      name: 'Explore the Depths',
      skill: 0,
      row: 3,
      order: 0,
      recipe: [
        'Submarine'
      ]
    },
    'Veteran Pathfinder': {
      icon: Skill_VeteranPathfinder_Icon,
      name: 'Veteran Pathfinder',
      skill: 0,
      row: 3,
      order: 1,
      bonus: [
        { 'Absolute Feat Cooldown Reduction': -40 }
      ]
    },
    'Torpedo Studies': {
      icon: Skill_TorpedoStudies_Icon,
      name: 'Torpedo Studies',
      skill: 0,
      row: 3,
      order: 2,
      recipe: [
        'Torpedo',
        'Torpedo Launcher'
      ]
    },
    'Harvest Boost': {
      icon: Skill_HarvestBoost_Icon,
      name: 'Harvest Boost',
      skill: 0,
      row: 3,
      order: 3,
      feat: [
        'Harvest Boost'
      ]
    }
  }
}
