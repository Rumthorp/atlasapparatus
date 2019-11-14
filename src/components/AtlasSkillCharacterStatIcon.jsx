import React from 'react';

const AtlasSkillCharacterStatIcon = (props) => {
  const {
    startLevelTimers,
    clearLevelTimers,
    stat,
    amount,
    icon
  } = props;

  return (
    <img
      className="asc__level-icon"
      onTouchStart={() => startLevelTimers(stat, amount)}
      onTouchEnd={clearLevelTimers}
      onMouseDown={() => startLevelTimers(stat, amount)}
      onMouseUp={clearLevelTimers}
      onMouseLeave={clearLevelTimers}
      src={icon}
    />
  );
};

export default AtlasSkillCharacterStatIcon;
