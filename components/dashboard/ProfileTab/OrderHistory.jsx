import React from 'react';

const OrderHistory = () => {
  return (
    <div>
      <div>
        <table className="table  table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course</th>
              <th scope="col">Price</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Complete Web Development Course</td>
              <td>৳ 4500</td>
              <td>Verified</td>
              <td>Manual Bkash </td>
              <td>10-06-2021</td>
              <td>
                <button className="btn btn-success">Invoice Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
