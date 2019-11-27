import React from 'react';

const AtlasSkillSaveModal = (props) => {
  const {
    builds,
    loadedIndex,
    selectedIndex,
    rename,
    saveCurrentBuild,
    saveNewBuild,
    overwriteBuild,
    deleteBuild,
    renameBuild,
    selectBuild,
    loadBuild,
    copyBuild,
    toggleSaveModal
  } = props;

  const buildList = builds.map((build, index) => {
    const d = new Date();
    const time = d.getTime();
    return (
      <div
        className={`row ${index === selectedIndex ? 'asc__save__build-selected' : 'asc__save__build-wrapper'}`}
        onClick={() => selectBuild(index)}
        key={`build${time + index}`}
      >
        <p
          className={`asc__save__build ${index === loadedIndex ? 'asc__save__build-loaded' : ''}`}
        >
          {build.buildName}
        </p>
      </div>
    );
  });

  return (
    <div
      className="asc__save__modal-wrapper"
    >
      <div
        className="asc__save__modal"
      >
        <div
          className="row center"
        >
          <button
            onClick={saveCurrentBuild}
            disabled={loadedIndex === null}
            className="asc__save__button"
          >
            Save
          </button>
          <button
            onClick={saveNewBuild}
            className="asc__save__button"
          >
            Save New
          </button>
          <button
            onClick={deleteBuild}
            disabled={selectedIndex === null}
            className="asc__save__button"
          >
            Delete
          </button>
          <button
            onClick={loadBuild}
            disabled={selectedIndex === null}
            className="asc__save__button"
          >
            Load
          </button>
          <button
            onClick={renameBuild}
            disabled={selectedIndex === null}
            className="asc__save__button"
          >
            Rename
          </button>
          <button
            onClick={copyBuild}
            disabled={selectedIndex === null}
            className="asc__save__button"
          >
            Copy
          </button>
          <button
            onClick={toggleSaveModal}
            className="asc__save__button"
          >
            Close
          </button>
        </div>
        <div
          className="asc__save__builds-wrapper"
        >
          {buildList}
        </div>
      </div>
    </div>
  );
};

export default AtlasSkillSaveModal;
