import React from 'react';

const AtlasSkillTitle = ({ title, total, spent }) => {
  return (
    <div
      className="asc__title asc__width"
    >
      <div
        className="asc__title__inner asc__title__points"
      >
        <span>
          {`Points: ${total}`}
        </span>
        <span
          className="asc__title asc__title__seperator"
        >
          /
        </span>
        <span
          className={`${spent > total ? 'red' : ''}`}
        >
          {spent}
        </span>
      </div>
      <div
        className="asc__title__inner"
      >
        <span>
          {title}
        </span>
      </div>
      <div
        className="asc__title__inner"
      >
      </div>
    </div>
  );
};

export default AtlasSkillTitle;
