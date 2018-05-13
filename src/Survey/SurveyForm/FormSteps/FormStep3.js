import React, { Component } from 'react';

import FormTableRow from '../FormTableRow';

class FormStep3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    let classNames = this.props.isHidden ? 'uk-hidden' : '';
    return(
      <div className={classNames}>
        <form className="uk-form-horizontal">
          {/* <h3>Surface Rib Scan</h3> */}
          <table className="uk-table uk-table-striped">
            <thead>
              <tr>
                <th>Debris Type</th>
                <th>Amount Fresh</th>
                <th>Amount Weathered</th>
              </tr>
            </thead>
            <tbody>
              <FormTableRow
                name='Cigarette Butts' 
                class='srs'
                id='cigaretteButts'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Fishing Line' 
                class='srs'
                id='fishingLine'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Glass' 
                class='srs'
                id='glass'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Paper' 
                class='srs'
                id='paper'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Filmed Plastic' 
                class='srs'
                id='filmed_plastic'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Misc. Plastic' 
                class='srs'
                id='miscPlastic'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Plastic Bottle' 
                class='srs'
                id='plasticBottle'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Plastic Cap' 
                class='srs'
                id='plasticCap'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Styrofoam' 
                class='srs'
                id='styrofoam'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Wood' 
                class='srs'
                id='wood'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Urethane Foam' 
                class='srs'
                id='urethaneFoam'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Plastic Cup' 
                class='srs'
                id='plasticCup'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Plastic Straw' 
                class='srs'
                id='plasticStraw'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Cotton/Cloth' 
                class='srs'
                id='cottonCloth'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Polypropylene Rope' 
                class='srs'
                id='polypropyleneRope'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Aluminum Can' 
                class='srs'
                id='alumninumCan'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Hygiene Items' 
                class='srs'
                id='hygieneItem'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Metal' 
                class='srs'
                id='metal'
                handleInputChange={ this.props.handleInputChange }
              />
              <FormTableRow
                name='Tile/Brick' 
                class='srs'
                id='tileBrick'
                handleInputChange={ this.props.handleInputChange }
              />
            </tbody>
          </table>
      </form>
    </div>
    );
  }
}

export default FormStep3;
