import React from 'react';

const Pagination = ({ dataPerPage, totaldata, paginate, Data }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totaldata / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
 <div>


<div className="panel-footer">
          <div className="row">
            <div className="col col-xs-4">Showing {dataPerPage} of {Data.length} Items
            </div>
            <div className="col col-xs-8">
              <ul className="pagination hidden-xs pull-right">
              {pageNumbers.map((number) => (

                <li><a onClick={() => paginate(number)} href="#">{number}</a></li>

              ))}
             </ul>
           
            </div>
          </div>
        </div>
</div>
  );
};

export default Pagination;
