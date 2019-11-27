import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AtlasSkillSaveModal from '../components/AtlasSkillSaveModal';
const modalRoot = document.getElementById('modal-root');

class AtlasSaveModalContainer extends Component {
  constructor(props) {
    super(props);

    this.saveCurrentBuild = this.saveCurrentBuild.bind(this);
    this.saveNewBuild = this.saveNewBuild.bind(this);
    this.deleteBuild = this.deleteBuild.bind(this);
    this.renameBuild = this.renameBuild.bind(this);
    this.selectBuild = this.selectBuild.bind(this);
    this.loadBuild = this.loadBuild.bind(this);
    this.copyBuild = this.copyBuild.bind(this);

    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');

    const storageIndex = localStorage.getItem('loadedIndex');
    let loadedIndex = Number(storageIndex);
    if (storageIndex === 'null' || storageIndex === null) loadedIndex = null;

    this.state = {
      builds: localStorage.getItem('builds') ? JSON.parse(localStorage.getItem('builds')) : [],
      loadedIndex: loadedIndex,
      selectedIndex: null
    };
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  saveCurrentBuild() {
    let newBuilds = this.state.builds.concat([]);
    newBuilds[this.state.loadedIndex] = Object.assign({}, this.props.build, { tab: 'character', saveModalOpen: false });
    this.setState({ builds: newBuilds });
    localStorage.setItem('builds', JSON.stringify(newBuilds));
  }

  saveNewBuild() {
    let name = prompt('New Build Name');
    if (name === null || name === '') name = 'New Build';
    let newBuilds = this.state.builds.concat([]);
    let newCurrentBuild = Object.assign({}, this.props.build, { tab: 'character', saveModalOpen: false, buildName: name });
    let index = newBuilds.push(newCurrentBuild);
    index -= 1;
    this.props.renameBuildFromModal(name);
    this.setState({ builds: newBuilds, loadedIndex: index });
    localStorage.setItem('builds', JSON.stringify(newBuilds));
    localStorage.setItem('loadedIndex', String(index));
  }

  deleteBuild() {
    const { selectedIndex, loadedIndex } = this.state;
    let newBuilds = this.state.builds.concat([]);
    let newLoadedIndex = loadedIndex;
    let newSelectedIndex = selectedIndex;
    let didReset = false;
    newBuilds.splice(selectedIndex, 1);
    if (selectedIndex === loadedIndex) {
      newLoadedIndex = null;
      this.props.reset();
      didReset = true;
    }
    if (newLoadedIndex !== null && selectedIndex < loadedIndex) newLoadedIndex -= 1;
    if (selectedIndex !== 0) newSelectedIndex -= 1;
    if (newBuilds.length === 0) newSelectedIndex = null;
    this.setState(
      {
        builds: newBuilds,
        loadedIndex: newLoadedIndex,
        selectedIndex: newSelectedIndex
      }
    );
    localStorage.setItem('builds', JSON.stringify(newBuilds));
    if (didReset) localStorage.setItem('loadedIndex', String(newLoadedIndex));
  }

  renameBuild() {
    let name = prompt('New Build Name');
    if (name === null) return;
    if (name === '') name = 'New Build';
    if (this.state.selectedIndex === this.state.loadedIndex) {
      this.props.renameBuildFromModal(name);
    }
    let newBuilds = this.state.builds.concat([]);
    newBuilds[this.state.selectedIndex].buildName = name;
    this.setState({ builds: newBuilds });
    localStorage.setItem('builds', JSON.stringify(newBuilds));
  }

  selectBuild(index) {
    this.setState({ selectedIndex: index });
  }

  loadBuild() {
    this.props.loadBuildFromModal(this.state.builds[this.state.selectedIndex]);
    localStorage.setItem('loadedIndex', String(this.state.selectedIndex));
  }

  copyBuild() {
    let newBuilds = this.state.builds.concat([]);
    newBuilds.push(this.state.builds[this.state.selectedIndex]);
    this.setState({ builds: newBuilds });
    localStorage.setItem('builds', JSON.stringify(newBuilds));
  }

  render() {
    return ReactDOM.createPortal(
      <AtlasSkillSaveModal
        builds={this.state.builds}
        loadedIndex={this.state.loadedIndex}
        selectedIndex={this.state.selectedIndex}
        rename={this.state.rename}
        saveCurrentBuild={this.saveCurrentBuild}
        saveNewBuild={this.saveNewBuild}
        overwriteBuild={this.overwriteBuild}
        deleteBuild={this.deleteBuild}
        renameBuild={this.renameBuild}
        selectBuild={this.selectBuild}
        loadBuild={this.loadBuild}
        copyBuild={this.copyBuild}
        toggleSaveModal={this.props.toggleSaveModal}
      />,
      this.el
    );
  }
}

export default AtlasSaveModalContainer;
