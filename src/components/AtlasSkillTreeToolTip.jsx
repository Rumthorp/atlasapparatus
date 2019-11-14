import React from 'react';
import getElementPosition from '../utilities/getElementPosition';

const AtlasSkillTreeTooltip = ({ skill, allotted, tooltipCorner, tooltipCoords }) => {
  const canvasOffset = getElementPosition(document.getElementById('canvas'));
  const wrapperStyle = {
    left: tooltipCoords.x + canvasOffset.left,
    top: tooltipCoords.y + canvasOffset.top
  };

  if (tooltipCorner === 'bl') {
    wrapperStyle.transform = 'translateX(-100%)';
  }

  if (tooltipCorner === 'tl') {
    wrapperStyle.transform = 'translateY(-100%) translateX(-100%)';
  }

  if (tooltipCorner === 'tr') {
    wrapperStyle.transform = 'translateY(-100%)';
  }

  let lists = {};

  const buildRequirements = () => {
    lists.require = [];
    skill[skill.and ? 'and' : 'or'].forEach((name, index, array) => {
      if (index === 0) {
        lists.require.push(
          <span
            key={`requiresspan`}
          >
            Requires
          </span>
        );
      }

      lists.require.push(
        <span
          className={allotted[name] ? 'green': 'red'}
          key={`tooltipand${name}`}
        >
          {name}
        </span>
      );

      if (!(index === array.length - 1)) {
        lists.require.push(
          <span
            key={`tooltipandseperator${name}`}
          >
            {skill.and ? 'AND' : 'OR'}
          </span>
        );
      }
    });
  };

  const buildRecipes = () => {
    lists.recipe = [];
    let recipes = [];

    skill.recipe.forEach((name) => {
      recipes.push(
        <span
          key={`tooltiprecipename${name}`}
        >
          {name}
        </span>
      );

      if (recipes.length === 10) {
        lists.recipe.push(
          <div
            className="column"
            key={`recipeblock${lists.recipe.length}`}
          >
            {
              lists.recipe.length === 0 &&
              <span>
                Give Recipes:
              </span>
            }
            {recipes}
          </div>
        );
        recipes = [];
      }
    });

    if (lists.recipe.length === 0) {
      lists.recipe.push(
        <div
          className="column"
          key={`recipeblock${lists.recipe.length}`}
        >
          <span>
            Give Recipes:
          </span>
          {recipes}
        </div>
      );
    }
  };

  const buildBonuses = () => {
    lists.bonus = [];
    skill.bonus.forEach((bonus) => {
      const name = Object.keys(bonus)[0];
      lists.bonus.push(
        <span
          key={`bonusblock${name}`}
        >
          {`${name} ${bonus[name] >= 0 ? '+' : '-'} ${Math.abs(bonus[name])}`}
        </span>
      );
    });
  };

  const buildFeats = () => {
    lists.feat = [];
    skill.feat.forEach((feat) => {
      lists.feat.push(
        <span
          key={`featblock${feat}`}
        >
          {feat}
        </span>
      );
    });
  };

  if (skill.and || skill.or) buildRequirements();
  if (skill.recipe) buildRecipes();
  if (skill.bonus) buildBonuses();
  if (skill.feat) buildFeats();

  return (
    <div
      className="asc__skill-tooltip__wrapper row"
      style={wrapperStyle}
    >
      <div
        className="column"
      >
        <span>
          {skill.name}
        </span>
        <div
          className="column"
        >
          {lists.require}
        </div>
        {
          skill.skill !== 0 &&
          <div
            className="row"
          >
            <span>Skill Points:</span>
            <span
              className="asc__skill-tooltip__skillpoint"
            >{skill.skill}</span>
          </div>
        }
      </div>
      {
        lists.recipe &&
        <div
          className="asc__skill-tooltip__data row"
        >
          {lists.recipe}
        </div>
      }
      {
        lists.bonus &&
        <div
          className="asc__skill-tooltip__data column"
        >
          <span>Bonus:</span>
          {lists.bonus}
        </div>
      }
      {
        lists.feat &&
        <div
          className="asc__skill-tooltip__data column"
        >
          <span>Feats:</span>
          {lists.feat}
        </div>
      }
    </div>
  );
};

export default AtlasSkillTreeTooltip;
