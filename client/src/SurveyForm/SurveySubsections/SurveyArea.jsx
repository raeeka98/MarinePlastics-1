import React, { Component } from 'react';

import {
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import '../accordion-styles.css';

import BeachSearch from '../BeachSearch';

class SurveyArea extends Component {

  render() {
    return(
      <AccordionItem className="accordion__item">
          <AccordionItemTitle className="accordion__title accordion__title--animated">
              <h2>Survey Area</h2>
              <div className="accordion__arrow" role="presentation" />
          </AccordionItemTitle>
          <AccordionItemBody className="accordion__body">
              <div>
                <h4>Beach Info:</h4>
              </div>

              <div className="uk-grid uk-child-width-1-3">
                <div>
                  <label>Name<span className="uk-text-danger">*</span></label>
                  <input
                    type='string'
                    placeholder='Name of Beach'
                    id='beachName'
                    className='uk-input uk-margin'
                    onChange={this.props.updateSurveyState}
                    required
                    />
                </div>
                <div>
                  <label>Coordinates (Latitude):<span className="uk-text-danger">*</span></label>
                  <input
                    type='string'
                    placeholder='Latitude of Beach'
                    id='latitude'
                    onChange={this.props.updateSurveyState}
                    className='uk-input uk-margin'
                    />
                </div>
                <div>
                  <label>Coordinates (Longitude):<span className="uk-text-danger">*</span></label>
                    <input
                      type='string'
                      placeholder='Longitude of Beach'
                      id='longitude'
                      onChange={this.props.updateSurveyState}
                      className='uk-input uk-margin'
                      />
                  </div>
                </div>

                <div className="uk-grid uk-child-width-1-3">
                  <div>
                    <label>Major Usage</label>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          id='usageRecreation'
                          className='uk-checkbox'
                          defaultValue={this.props.data.usageRecreation}
                          onChange={this.props.updateCheckedState}
                          />
                      </label> Recreational
                    </div>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          id='usageCommercial'
                          className='uk-checkbox'
                          onChange={this.props.updateCheckedState}
                          />
                      </label> Commercial
                    </div>
                    <div>
                      <label>Other</label>
                        <input
                          type='string'
                          id='usageOther'
                          className='uk-input'
                          onChange={this.props.updateSurveyState}
                          />
                    </div>
                  </div>

                  <div>
                    <label>Reason for Location Choice</label>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          id='locationChoiceProximity'
                          onChange={this.props.updateCheckedState}
                          defaultValue={this.props.data.locationChoiceDebris}
                          className='uk-checkbox'
                          />
                      </label> Proximity/Convenience
                    </div>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          id='locationChoiceDebris'
                          onClick={this.props.updateCheckedState}
                          defaultValue={this.props.data.locationChoiceProximity}
                          className='uk-checkbox'
                          />
                      </label> Known for Debris
                    </div>
                    <div>
                      <label> Other</label>
                        <input
                          type='string'
                          id='locationChoiceOther'
                          placeholder='Other Reasons for Location Choice'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.locationChoiceOther}
                          className='uk-input'
                          />
                    </div>
                  </div>
                  <div>
                    <label>Compass Direction (When Facing the Water):</label>
                        <input
                          type='string'
                          placeholder='Degrees'
                          id='compassDegrees'
                          defaultValue={this.props.data.compassDegrees}
                          onChange={this.props.updateSurveyState}
                          className='uk-input uk-margin'
                          />
                    </div>
                  </div>

                    <hr></hr>

                    <div>
                      <h4>Nearest River Output:</h4>
                    </div>

                    <div className="uk-grid uk-child-width-1-2">
                      <div>
                        <label>Name</label>
                        <input
                          type='string'
                          placeholder='Nearest River Output Name'
                          id='riverName'
                          className='uk-input uk-margin'
                          />
                      </div>
                      <div>
                        <label>Approximate Distance</label>
                        <input
                          type='string'
                          placeholder='Nearest River Output Distance'
                          id='riverDistance'
                          className='uk-input uk-margin'
                          />
                      </div>
                    </div>

                    <hr></hr>

                    <div className="uk-grid uk-child-width-1-2">
                      <h4>Last Tide Before Clean Up:</h4>
                      <h4>Next Tide After Clean Up:</h4>
                    </div>

                    <div className="uk-grid uk-child-width-1-2">
                      <div>
                        <label>Type:<span className="uk-text-danger"></span></label>
                        <select
                          id='tideTypeB'
                          className='uk-select uk-margin'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.tideTypeB}
                          >
                          {!this.props.data.tideTypeB && <option>Please Select</option>}
                          <option>Low</option>
                          <option>High</option>
                        </select>
                      </div>
                      <div>
                        <label>Type:<span className="uk-text-danger"></span></label>
                        <select
                          id='tideTypeA'
                          className='uk-select uk-margin'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.tideTypeA}
                          >
                          {!this.props.data.tideTypeA && <option>Please Select</option>}
                          <option>Low</option>
                          <option>High</option>
                        </select>
                      </div>
                    </div>

                    <div className="uk-grid uk-child-width-1-2">
                      <div>
                        <label>Height (ft):<span className="uk-text-danger"></span></label>
                        <input
                          type="string"
                          placeholder="Height"
                          id='tideHeightB'
                          className='uk-input uk-margin'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.tideHeightB}
                          />
                      </div>
                      <div>
                        <label>Height (ft):<span className="uk-text-danger"></span></label>
                        <input
                          type="string"
                          placeholder="Height"
                          id='tideHeightA'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.tideHeightA}
                          className='uk-input uk-margin'
                          />
                      </div>
                    </div>

                    <div className="uk-grid uk-child-width-1-2">
                      <div>
                        <label>Time:<span className="uk-text-danger"></span></label>
                        <input
                          type="time"
                          id='tideTimeB'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.tideTimeB}
                          className='uk-input uk-margin'

                          />
                      </div>
                      <div>
                        <label>Time:<span className="uk-text-danger"></span></label>
                        <input
                          type="time"
                          id='tideTimeA'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.tideTimeA}
                          className='uk-input uk-margin'

                          />
                      </div>
                    </div>

                    <hr></hr>

                    <div className="uk-grid uk-child-width-1-3">
                      <div>
                        <h4>Wind</h4>
                        <label>Speed:<span className="uk-text-danger"></span></label>
                        <input
                          type="string"
                          placeholder="Speed (knots)"
                          id='windSpeed'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.windSpeed}
                          className='uk-input uk-margin'

                          />

                        <label>Direction:<span className="uk-text-danger"></span></label>
                        <select
                          id='windDir'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.windDir}
                          className='uk-input uk-margin'

                          >
                          {(!this.props.data.windDir) && <option>Please Select</option>}
                          <option>North</option>
                          <option>Northeast</option>
                          <option>East</option>
                          <option>Southeast</option>
                          <option>South</option>
                          <option>Southwest</option>
                          <option>West</option>
                          <option>Northwest</option>
                          <option>None</option>
                        </select>
                      </div>
                      <div>
                        <h4>Slope</h4>
                        <select
                          id='slope'
                          className='uk-select uk-margin'
                          onChange={this.props.updateSurveyState}
                          defaultValue={this.props.data.slope}
                          >
                            {(!this.props.data.slope) && <option>Please Select</option>}
                            <option>Winter Profile</option>
                            <option>Summer Profile</option>
                            <option>None</option>
                        </select>
                      </div>
                      <div>
                        <h4>Substrate Type</h4>
                        <div className="uk-margin">
                          <label>
                            <input
                              type='checkbox'
                              id='substrateTypeSand'
                              onChange={this.props.updateCheckedState}
                              defaultValue={this.props.data.substrateTypeSand}
                              className='uk-checkbox'
                              />
                          </label> Sand
                        </div>
                        <div className="uk-margin">
                          <label>
                            <input
                              type='checkbox'
                              id='substrateTypePebble'
                              onChange={this.props.updateCheckedState}
                              defaultValue={this.props.data.substrateTypePebble}
                              className='uk-checkbox'
                              />
                          </label> Pebble
                        </div>
                        <div className="uk-margin">
                          <label>
                            <input
                              type='checkbox'
                              id='substrateTypeRipRap'
                              onChange={this.props.updateCheckedState}
                              defaultValue={this.props.data.substrateTypeRipRap}
                              className='uk-checkbox'
                              />
                          </label> Rip Rap
                        </div>
                        <div className="uk-margin">
                          <label>
                            <input
                              type='checkbox'
                              id='substrateTypeSeaweed'
                              onChange={this.props.updateCheckedState}
                              defaultValue={this.props.data.substrateTypeSeaweed}
                              className='uk-checkbox'
                              />
                          </label> Seaweed
                        </div>
                        <div className="uk-margin">
                          <label>Other</label>
                            <input
                              type='string'
                              id='substrateTypeOther'
                              placeholder='Other Substrate Types'
                              onChange={this.props.updateSurveyState}
                              defaultValue={this.props.data.substrateTypeOther}
                              className='uk-input'
                              />
                        </div>
                      </div>
                    </div>

          </AccordionItemBody>
      </AccordionItem>
    )
  }

}

export default SurveyArea
