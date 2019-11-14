import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fabric } from 'fabric';

import AtlasSkillNavBar from '../components/AtlasSkillNavBar';
import AtlasSkillTitle from '../components/AtlasSkillTitle'
import AtlasSkillCharacter from '../components/AtlasSkillCharacter';
import AtlasSkillTreeTooltip from '../components/AtlasSkillTreeTooltip';
import std from '../data/atlas/skillTreeData';
import findTooltipCorner from '../utilities/findTooltipCorner';

let canvas;

class AtlasSkillCalcContainer extends Component {
  constructor() {
    super();

    this.canvasRef = React.createRef();

    this.getMaxSkillPoints = this.getMaxSkillPoints.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.startLevelTimers = this.startLevelTimers.bind(this);
    this.clearLevelTimers = this.clearLevelTimers.bind(this);

    const skillsObj = {};
    Object.keys(std).forEach(name => skillsObj[name] = {});

    this.state = {
      level: 1,
      health: 0,
      stamina: 0,
      fortitude: 0,
      weight: 0,
      intelligence: 0,
      maxSkillPoints: 0,
      totalSpentPoints: 0,
      spentPoints: {},
      tab: 'character',
      skills: skillsObj,
      recipes: {},
      bonuses: {},
      feats: {},
      skillPoints: 0,
      unlock: {
        'survivalism': true,
        'quest': true
      },
      tooltipActive: false,
      tooltipTarget: '',
      tooltipCorner: '',
      tooltipCoords: {}
    }
  }

  componentDidMount() {
    canvas = new fabric.Canvas('canvas', {
      width: 1800,
      height: 800
    });
    canvas.selection = false;
    document.getElementsByClassName('canvas-container')[0].classList.add('hidden');
    document.getElementsByClassName('canvas-container')[0].style.backgroundColor = '#10191c';

    canvas.on('mouse:over', (options) => {
      if (!options.target) return;
      if (std[this.state.tab].skills[options.target.name]) {
        const tooltipCorner = findTooltipCorner(options.e.clientY, options.e.clientX);
        this.setState({
          tooltipActive: true,
          tooltipTarget: options.target.name,
          tooltipCorner: tooltipCorner,
          tooltipCoords: {x: options.target.oCoords[tooltipCorner].corner[tooltipCorner].x, y: options.target.oCoords[tooltipCorner].corner[tooltipCorner].y}
        });
      }
    })

    canvas.on('mouse:out', (options) => {
      if (!options.target) return;
      if (std[this.state.tab].skills[options.target.name]) {
        this.setState({
          tooltipActive: false,
          tooltipTarget: ''
        });
      }
    });

    canvas.on('mouse:down', (options) => {
      if (options.target) {
        this.selectSkill(options.target.name);
      }
    });

    canvas.on('mouse:wheel', (options) => {
      if (options.e.deltaY < 0) {
        if (canvas.viewportTransform[5] + 100 > 0) return;
        canvas.viewportTransform[5] += 100;
      }

      if (options.e.deltaY > 0) {
        if (canvas.viewportTransform[5] - 100 <= -std[this.state.tab].dimension.length * 200 + 800) return;
        canvas.viewportTransform[5] -= 100;
      }

      for (let object of canvas.getObjects()) {
        object.setCoords();
      }
      canvas.requestRenderAll();
    });
  }

  drawTab() {
    const skills = std[this.state.tab].skills;
    const widthArray = std[this.state.tab].dimension.map(num => (1800 - ((num + num + 1 ) * 100)) / 2);
    const drawLine = (origin, target) => {
      const originX = (widthArray[origin.row] + origin.order * 200) + 50;
      const originY = (origin.row * 100 * 2) + 100;
      const targetX = (widthArray[target.row] + target.order * 200) + 50;
      const targetY = (origin.row * 100 * 2) + (200 * (target.row - origin.row));
      const line = new fabric.Line([targetX, targetY, originX, originY], {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 2,
        selectable: false,
        evented: false,
      });
      canvas.add(line);
    }

    Object.keys(skills).forEach((key) => {
      fabric.Image.fromURL(skills[key].icon, (img) => {
        img.hoverCursor = 'default';
        img.selectable = false;
        img.name = key;

        if (!this.state.skills[this.state.tab][key]) {
          img.filters.push(new fabric.Image.filters.Grayscale());
          img.applyFilters();
        }
        canvas.add(img);
        if (skills[key].skill) {
          const cost = new fabric.Text(skills[key].skill.toString(), {
            fontFamily: 'Impact',
            stroke: '#000000',
            strokeWidth: 2,
            fill: this.state.skills[this.state.tab][key] ? '#1AFF1A' : '#DC3220',
            left: (widthArray[skills[key].row] + skills[key].order * 200) + 3,
            top: (skills[key].row * 100 * 2) + 60
          });
          cost.hoverCursor = 'default';
          cost.selectable = false;
          cost.evented = false;
          canvas.add(cost);
        }
      },
      {
        left: widthArray[skills[key].row] + skills[key].order * 200,
        top: skills[key].row * 100 * 2
      });

    });

    Object.keys(skills).forEach((targetName) => {
      if (skills[targetName].and) {
        skills[targetName].and.forEach((name) => {
          drawLine(skills[name], skills[targetName]);
        });
      }

      if (skills[targetName].or) {
        skills[targetName].or.forEach((name) => {
          drawLine(skills[name], skills[targetName]);
        });
      }
    });
  }

  selectSkill(origin) {
    this.state.skills[this.state.tab][origin] ? this.removeSkills(origin) : this.addSkills(origin)
  }

  removeSkills(origin) {
    const tree = std[this.state.tab].skills;
    const tab = this.state.tab;
    let newSkills = Object.assign({}, this.state.skills);
    let newUnlock = Object.assign({}, this.state.unlock);
    if (!std[tab].skills[origin].unlock) delete newSkills[tab][origin];
    const orderedSkills = Object.keys(newSkills[tab]).map(name => tree[name]).sort((a, b) => {
      return a.row - b.row;
    })
    .forEach((skill) => {
      if (skill.and) {
        skill.and.forEach((name) => {
          if (!newSkills[tab][name]) delete newSkills[tab][skill.name];
        });
      }

      if (skill.or) {
        let skillExists = false;
        let index = 0;
        while (index !== tree[skill.name].or.length) {
          if (newSkills[tab][tree[skill.name].or[index]]) skillExists = true;
          index += 1;
        }
        if (!skillExists) delete newSkills[tab][skill.name];
      }

      if (skill.unlock) {
        const removeTree = (unlock) => {
          Object.keys(newSkills[unlock]).forEach((element) => {
            if (std[unlock].skills[element].unlock) removeTree(std[unlock].skills[element].unlock);
          });
          newSkills[unlock] = {};
          delete newUnlock[unlock];
        };
        delete newSkills[tab][origin];
        if (!newSkills[tab][skill.name])removeTree(skill.unlock);
      }
    });

    this.setState(
      {
        skills: newSkills,
        unlock: newUnlock
      },
      () => {
        this.tallySkills(this.state.skills);
        this.tallySkillPoints();
        this.drawTab();
      }
    );
  }

  addSkills(origin) {
    if (!this.state.unlock[this.state.tab]) return;
    const tree = std[this.state.tab].skills;
    let allotted = this.state.skills[this.state.tab]
    let skillHash = {};
    let unlockHash = {};
    let skillPoints = 0;
    const addSkill = (skillName) => {
      if (tree[skillName].and) {
        tree[skillName].and.forEach((name) => {
          if (!allotted[skillName] || !skillHash[skillName]) addSkill(name);
          skillHash[name] = tree[name];
        });
      } else {
        skillHash[skillName] = tree[skillName];
      }

      if (tree[skillName].or) {
        let skillExists = false;
        let index = 0;
        while (index !== tree[skillName].or.length) {
          if (skillHash[tree[skillName].or[index]] || allotted[tree[skillName].or[index]]) skillExists = true;
          index += 1;
        }
        if (!skillExists) {
          skillHash[tree[skillName].or[0]] = tree[skillName].or[0];
          addSkill(tree[skillName].or[0]);
        }
      }

      if (tree[skillName].unlock) {
        unlockHash[tree[skillName].unlock] = true;
      }
    }

    addSkill(origin);
    skillHash[origin] = tree[origin];
    this.setState(
      {
        skills: {
          ...this.state.skills,
          [this.state.tab]: Object.assign(allotted, skillHash)
        },
        unlock: Object.assign(this.state.unlock, unlockHash)
      },
      () => {
        this.tallySkills(this.state.skills);
        this.tallySkillPoints();
        this.drawTab();
      }
    );
  }

  changeLevel(stat, amount) {
    if (this.state.level === 150 && amount > 0) return;
    if (this.state.level === 0 || this.state[stat] === 0 && amount < 0) return;
    if (stat === 'health' && this.state.health === 67 && amount > 0) return;

    this.setState({ [stat]: this.state[stat] + amount }, () => {
      const {
        health,
        stamina,
        fortitude,
        weight,
        intelligence
      } = this.state;
      this.getMaxSkillPoints(health + stamina + fortitude + weight + intelligence + 1)
    });
  }

  startLevelTimers(stat, amount) {
    this.levelHoldTimeout = setTimeout(
      () => this.levelHoldInterval = setInterval(
        () => this.changeLevel(stat, amount),
        50
      ),
      500
    );
    this.changeLevel(stat, amount);
  }

  clearLevelTimers() {
    window.clearTimeout(this.levelHoldTimeout);
    window.clearInterval(this.levelHoldInterval);
  }

  getMaxSkillPoints(level) {
    let maxSkillPoints = 0;
    for (let l = level; l > 0; l --) {
      if (102 <= l && l <= 150) maxSkillPoints += 12;
      if (82 <= l && l <= 101) maxSkillPoints += 11;
      if (72 <= l && l <= 81) maxSkillPoints += 10;
      if (62 <= l && l <= 71) maxSkillPoints += 9;
      if (52 <= l && l <= 61) maxSkillPoints += 8;
      if (42 <= l && l <= 51) maxSkillPoints += 7;
      if (32 <= l && l <= 41) maxSkillPoints += 6;
      if (22 <= l && l <= 31) maxSkillPoints += 5;
      if (11 <= l && l <= 21) maxSkillPoints += 4;
      if (2 <= l && l <= 10) maxSkillPoints += 3;
    }
    this.setState(
      {
        maxSkillPoints: maxSkillPoints,
        level: level < 1 ? 1 : level
      }
    );
  }

  tallySkillPoints() {
    let total = 0;
    let catagoryTotal = {};
    Object.keys(this.state.skills).forEach((catagory) => {
      if (Object.keys(this.state.skills[catagory]).length === 0) return;
      Object.keys(this.state.skills[catagory]).forEach((name) => {
        const points = std[catagory].skills[name].skill;
        total += points;

        catagoryTotal[catagory] ? catagoryTotal[catagory] += points : catagoryTotal[catagory] = points;
      });
    });
    this.setState({
      totalSpentPoints: total,
      spentPoints: catagoryTotal
    });
  }

  tallySkills() {
    const skills = Object.assign({}, this.state.skills);
    let recipeHash = {};
    let bonusHash = {};
    let featHash = {};

    Object.keys(skills).forEach((tabName) => {
      if (Object.keys(skills[tabName]).length) {
        Object.keys(skills[tabName]).forEach((skillName) => {
          if (skills[tabName][skillName].recipe) skills[tabName][skillName].recipe.forEach(recipe => recipeHash[recipe] = true);
          if (skills[tabName][skillName].feat) skills[tabName][skillName].feat.forEach(feat => featHash[feat] = true);
          if (skills[tabName][skillName].bonus) {
            skills[tabName][skillName].bonus.forEach((bonus) => {
              const key = Object.keys(bonus)[0];
              if (bonusHash[key] !== undefined) bonusHash[key] += bonus[key];
              if (bonusHash[key] === undefined) bonusHash[key] = bonus[key];
            });
          }
        });
      }
    });

    this.setState({
      recipes: recipeHash,
      bonuses: bonusHash,
      feats: featHash
    });
  }

  changeTab(str) {
    canvas.clear();
    if (str === 'character') document.getElementsByClassName('canvas-container')[0].classList.add('hidden');
    if (str !== 'character') document.getElementsByClassName('canvas-container')[0].classList.remove('hidden');
    this.setState({ tab: str }, () => {
      if (str !== 'character') {
        canvas.viewportTransform[5] = 0;
        this.drawTab();
      }
    });
  }

  render() {
    return (
      <div
        className="column"
      >
      {
        this.state.tooltipActive &&
        <AtlasSkillTreeTooltip
          skill={std[this.state.tab].skills[this.state.tooltipTarget]}
          allotted={this.state.skills[this.state.tab]}
          tooltipCorner={this.state.tooltipCorner}
          tooltipCoords={this.state.tooltipCoords}
        />
      }
        <AtlasSkillNavBar
          skills={this.state.skills}
          changeTab={this.changeTab}
          unlock={this.state.unlock}
          spentPoints={this.state.spentPoints}
        />
        <AtlasSkillTitle
          title={this.state.tab === 'character' ? 'Character' : std[this.state.tab].display}
          total={this.state.maxSkillPoints}
          spent={this.state.totalSpentPoints}
        />
      {
        this.state.tab === 'character' &&
        <AtlasSkillCharacter
          getMaxSkillPoints={this.getMaxSkillPoints}
          startLevelTimers={this.startLevelTimers}
          clearLevelTimers={this.clearLevelTimers}
          {...this.state}
        />
      }
        <div
          className="min-width"
        >
          <canvas
            id='canvas'
          >
          </canvas>
        </div>
      </div>
    );
  }
}

export default AtlasSkillCalcContainer;
