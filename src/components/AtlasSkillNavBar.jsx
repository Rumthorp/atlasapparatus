import React from 'react';

import Compass from '../assets/atlas/icons/menu/Compass';
import displayOrder from '../data/atlas/displayOrder';
import std from '../data/atlas/skillTreeData';

const AtlasSkillNavBar = (props) => {
  const {
    skills,
    changeTab,
    unlock,
    spentPoints,
    toggleSaveModal,
    saveModalOpen,
    reset,
    buildName
  } = props;
  const skillNavButtons = displayOrder.map(name => {
    if (!std[name].icon) return;
    const disabled = unlock[name] ? false : true;
    return (
      <button
        className={`asc__nav__button ${disabled ? '' : 'asc__nav__button-enabled'}`}
        key={`navButtonSkill${name}`}
        onClick={() => changeTab(name)}
        disabled={saveModalOpen}
      >
        <img
          className="asc__nav__icon"
          src={std[name].icon ? std[name].icon : Compass}
        />
        <div
          className="asc__nav__skillpoint-wrapper"
        >
          {spentPoints[name] ? spentPoints[name] : 0}
        </div>
      </button>
    );
  });

  return (
    <div
      className="row"
    >
      <div
        className="row absolute"
      >
        <button
          onClick={toggleSaveModal}
        >
          Save/Load Build
        </button>
        <button
          onClick={reset}
        >
          Reset
        </button>
        <p
          className="green"
        >
          {buildName}
        </p>
      </div>
      <div
        className="asc__nav__wrapper asc__width row center"
      >
        <button
          className='asc__nav__button asc__nav__button-enabled'
          onClick={() => changeTab('character')}
          disabled={saveModalOpen}
        >
          <img
            className="asc__nav__icon"
            src={Compass}
          />
          <div
            className="asc__nav__skillpoint-wrapper"
          >
          </div>
        </button>
        {skillNavButtons}
      </div>
    </div>
  );
};

export default AtlasSkillNavBar;
