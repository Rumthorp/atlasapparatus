import React from 'react';

import displayOrder from '../data/atlas/displayOrder';
import std from '../data/atlas/skillTreeData';
import minusPic from '../assets/atlas/icons/minus';
import healthPic from '../assets/atlas/icons/stat/120px-Health';
import staminaPic from '../assets/atlas/icons/stat/120px-Stamina';
import fortitudePic from '../assets/atlas/icons/stat/120px-Fortitude';
import weightPic from '../assets/atlas/icons/stat/120px-Weight';
import intelligencePic from '../assets/atlas/icons/stat/120px-Intelligence';
import AtlasSkillCharacterStatIcon from './AtlasSkillCharacterStatIcon';
import getStats from '../utilities/getStats';

const AtlasSkillCharacter = (props) => {
  const {
    level,
    health,
    stamina,
    fortitude,
    weight,
    intelligence,
    skills,
    bonuses,
    maxSkillPoints,
    startLevelTimers,
    clearLevelTimers,
    getMaxSkillPoints
  } = props;

  let recipeTally = [];
  let bonusTally = [];
  let featTally = [];

  const buildRecipes = () => {
    displayOrder.forEach((tree) => {
      if (Object.keys(skills[tree]).length) {
        Object.keys(skills[tree]).forEach((name) => {
          if (std[tree].skills[name].recipe) {
            std[tree].skills[name].recipe.forEach((recipe) => {
              recipeTally.push(
                <p
                  key={`${tree}${name}${recipe}`}
                >
                  {recipe}
                </p>
              );
            });
          }
        });
      }
    });
  };

  const buildBonuses = () => {
    let bonusHash = {};
    displayOrder.forEach((tree) => {
      if (Object.keys(skills[tree]).length) {
        Object.keys(skills[tree]).forEach((name) => {
          if (std[tree].skills[name].bonus) {
            std[tree].skills[name].bonus.forEach((bonus) => {
              const bonusName = Object.keys(bonus)[0];
              if (bonusHash[bonusName]) {
                bonusHash[bonusName] += bonus[bonusName];
                return;
              }
              bonusHash[bonusName] = bonus[bonusName];
            });
          }
        });
      }
    });

    Object.keys(bonusHash).forEach((name) => {
      bonusTally.push(
        <p
          key={`${name}: ${bonusHash[name]}`}
        >
          {`${name}: ${bonusHash[name]}`}
        </p>
      );
    });
  };

  const buildFeats = () => {
    displayOrder.forEach((tree) => {
      if (Object.keys(skills[tree]).length) {
        Object.keys(skills[tree]).forEach((name) => {
          if (std[tree].skills[name].feat) {
            std[tree].skills[name].feat.forEach((feat) => {
              featTally.push(
                <p
                  key={`${tree}${name}${feat}`}
                >
                  {feat}
                </p>
              );
            });
          }
        });
      }
    });
  };

  buildRecipes();
  buildBonuses();
  buildFeats();

  return (
    <div
      className="row"
    >
      <div className='asc__character__levels'>
        <div className="row">
          <div
            className="column center"
          >
            <AtlasSkillCharacterStatIcon
              stat="health"
              amount={-1}
              icon={minusPic}
              {...props}
            />
            <AtlasSkillCharacterStatIcon
              stat="health"
              amount={1}
              icon={healthPic}
              {...props}
            />
            <span>
              {health}
            </span>
          </div>
          <div
            className="column center"
          >
            <AtlasSkillCharacterStatIcon
              stat="stamina"
              amount={-1}
              icon={minusPic}
              {...props}
            />
            <AtlasSkillCharacterStatIcon
              stat="stamina"
              amount={1}
              icon={staminaPic}
              {...props}
            />
            <span>
              {stamina}
            </span>
          </div>
          <div
            className="column center"
          >
            <AtlasSkillCharacterStatIcon
              stat="fortitude"
              amount={-1}
              icon={minusPic}
              {...props}
            />
            <AtlasSkillCharacterStatIcon
              stat="fortitude"
              amount={1}
              icon={fortitudePic}
              {...props}
            />
            <span>
              {fortitude}
            </span>
          </div>
          <div
            className="column center"
          >
            <AtlasSkillCharacterStatIcon
              stat="weight"
              amount={-1}
              icon={minusPic}
              {...props}
            />
            <AtlasSkillCharacterStatIcon
              stat="weight"
              amount={1}
              icon={weightPic}
              {...props}
            />
            {weight}
          </div>
          <div
            className="column center"
          >
            <AtlasSkillCharacterStatIcon
              stat="intelligence"
              amount={-1}
              icon={minusPic}
              {...props}
            />
            <AtlasSkillCharacterStatIcon
              stat="intelligence"
              amount={1}
              icon={intelligencePic}
              {...props}
            />
            {intelligence}
          </div>
        </div>
        <div className="column asc__tally">
          <span
            className="asc__big-tally"
          >
            {`Level: ${level}`}
          </span>
          <span>
            {`Max Health: ${getStats('health', health, bonuses)}`}
          </span>
          <span>
            {`Max Stamina: ${getStats('stamina', stamina, bonuses)}`}
          </span>
          <span>
            {`Fortitude: ${getStats('fortitude', fortitude, bonuses)}`}
          </span>
          <span>
            {`Max Weight: ${getStats('weight', weight, bonuses)}`}
          </span>
          <span>
            {`Intelligence: ${getStats('intelligence', intelligence, bonuses)}%`}
          </span>
          <span>
            {`Skill Points: ${maxSkillPoints}`}
          </span>
        </div>
      </div>
      <div
        className="asc__character__lists"
      >
        <div
          className="asc__character__lists__list asc__character__lists__recipes"
        >
          <p
            className="asc__character__lists__tally"
          >
            Recipes
          </p>
          {recipeTally}
        </div>
        <div
          className="asc__character__lists__list asc__character__lists__bonuses"
        >
          <p
            className="asc__character__lists__tally"
          >
            Bonuses
          </p>
          {bonusTally}
        </div>
        <div
          className="asc__character__lists__list asc__character__lists__feats"
        >
          <p
            className="asc__character__lists__tally"
          >
            Feats
          </p>
          {featTally}
        </div>
      </div>
    </div>
  );
};

export default AtlasSkillCharacter;
