import React from 'react';

const AtlasSkillTitle = ({ title, total, spent }) => {
  return (
    <div
      className="asc__title asc__width"
    >
      <div
        className="relative"
      >
        <div
          className="asc__title__points row absolute"
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
      </div>
      <div
        className="asc__title__tab"
      >
        <span>
          {title}
        </span>
      </div>
    </div>
  );
};

export default AtlasSkillTitle;
