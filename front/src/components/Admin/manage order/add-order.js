import React, { Component } from 'react';
import './add-order.css'

class Addorder extends Component {
  render() {
    return (
      <div className="Addorder">
        <form>
          <div className="ditails">
            <input type="text" placeholder="Details" />
            <label>Cutomer ID</label>
            <select>
              <option value="" ></option>
              <option value="" ></option>
              <option value="" ></option>
            </select>
          </div>
          <div className="sele">
            <label>priority</label>
            <select>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>

            <label>order_status</label>
            <select>
              <option value="pending">Pending</option>
              <option value="processing">processing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <button className="btn btn-success" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Addorder;