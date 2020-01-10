import React, { Component } from 'react';

import './Item-details.scss';
import SwapiService from '../../services/swapi-service';
// import Spinner from '../Spinner';

export const Record = ({ field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  SwapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    // console.log(this.props.children);
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
      const { id, name, gender, birthYear, eyeColor } = item;

      return (
        <div>
          <img className="item-details__image" src={image} />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                console.log(child);
                return child;
              })}
            </ul>
          </div>
        </div>
      );
    };
    const { item, image } = this.state;

    const selectItem = !item ? <ChooseItem /> : null;
    const content = item ? <ItemView item={item} image={image} /> : null;
    // const spinner = loading ? <Spinner /> : null;

    return (
      <div className="item-details card">
        {selectItem}
        {/* {spinner} */}
        {content}
      </div>
    );
  }
}
