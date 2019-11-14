import std from '../data/atlas/skillTreeData';

const getStats = (statName, statNumber, bonuses) => {
  let stat = 0;

  if (statName === 'health') {
    stat = 100 + (statNumber * 3);
  }

  if (statName === 'stamina') {
    stat = 100 + (statNumber * 6);
    if (bonuses['Max Stamina']) stat = stat * ((bonuses['Max Stamina'] / 100) + 1) ;
  }

  if (statName === 'fortitude') {
    stat = statNumber * 2;
  }

  if (statName === 'weight') {
    stat = 320 + (statNumber * 14);
    if (bonuses['Max Weight']) stat = stat * ((bonuses['Max Weight'] / 100) + 1) ;
  }

  if (statName === 'intelligence') {
    stat = 100 + (statNumber * 2);
  }

  return stat.toFixed(1);
};

export default getStats;
