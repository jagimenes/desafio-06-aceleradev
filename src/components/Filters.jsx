import React from "react";

const Filters = (props) => {
  return (
    <div data-testid="filters" className="container">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            onChange={props.handleFilter}
            value={props.inputData}
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          onClick={() => props.handleOrder("name")}
          className={`filters__item ${
            props.filterType === "name" ? "is-selected" : ""
          }`}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => props.handleOrder("country")}
          className={`filters__item ${
            props.filterType === "country" ? "is-selected" : ""
          }`}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => props.handleOrder("company")}
          className={`filters__item ${
            props.filterType === "company" ? "is-selected" : ""
          }`}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => props.handleOrder("department")}
          className={`filters__item ${
            props.filterType === "department" ? "is-selected" : ""
          }`}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          onClick={() => props.handleOrder("admission")}
          className={`filters__item ${
            props.filterType === "admission" ? "is-selected" : ""
          }`}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
