import React, { Component } from 'react';

import './Item-details.scss';

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item) });
    });
  }

  render() {
    const ChooseItem = () => {
      return (
        <div className="item-details__select">Select a item from a list!</div>
      );
    };

    const ItemView = ({ item, image }) => {
      const { name } = item;

      return (
        <div>
          <img className="item-details__image" src={image} />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })}
            </ul>
          </div>
        </div>
      );
    };
    const { item, image } = this.state;

    const selectItem = !item ? <ChooseItem /> : null;
    const content = item ? <ItemView item={item} image={image} /> : null;

    return (
      <div className="item-details card">
        {selectItem}
        {content}
      </div>
    );
  }
}
