import React from "react";

const Listitem = (props) => {
    return(
        <li className="col-lg-3 col-sm-4 col-6 align-items-stretch my-2">
            <div className="card h-100" >
                <div className="card-body flex-column align-items-stretch">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.class}</h6>
                    <div className="badge badge-pill badge-danger">{props.cat}</div>
                </div>
            </div>     
        </li>
    );
}

const Resultlist = (props) => {
    console.log("listn: ", props.animals);
    const animalList = props.animals.map(animal => <Listitem key={animal.id} name={animal.name} class={animal.class} cat={animal.category} />);
    return(
        <main className="container">
            <ul className="row align-items-stretch p-0">
                {animalList}
            </ul>
        </main>
        
        );
}

export default Resultlist;