import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import {Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";


import classnames from "classnames";

let list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" },
  { name: "item11" },
  { name: "item12" },
  { name: "item13" },
  { name: "item14" }

];

const MenuItem = ({ text, selected }) => {
	return <div className={`menu-item ${selected ? "active" : ""}`}>
		{text}
	</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem 
		
			text={name} 
			key={name} 
			selected={selected} 
		
		/>;
		
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class App extends Component {
  state = {
    itemsCount: list.length,
    selected: "item1",
	hideSingleArrow: true,
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }


  onUpdate = ({ translate }) => {
    this.setState({ translate });
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const {
      itemsCount,
      selected,
	  hideSingleArrow
    } = this.state;

    const menu = this.menuItems;
    return (
      <div className="App">
        <ScrollMenu
          alignCenter={false}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={false}
          data={menu}
          dragging={true}
          hideArrows={false}
          hideSingleArrow={false}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={false}
          selected={selected}
          transition={+0.3}
          translate={0}
          wheel={true}
        />
      </div>
    );
  }
}

export default App;