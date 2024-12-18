import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProprietarioList = () => {

    const [proprietarios, setProprietario] = useState([]);
    useEffect( () => {
        listarProprietarios();

    },[]);



    const listarProprietarios = async () =>{
        const response = await axios.get('http://localhost:5000/api/proprietarios');
        setProprietario(response.data);
    }

    const deletarProprietario = async (id) => {
        await axios.delete(`http://localhost:5000/api/proprietario/${id}`);
        listarProprietarios();
    }

    return (

        <div>
            <Link to="/addProprietario" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { proprietarios.map ((proprietario,index) => (
                        <tr key = { proprietario.id }>
                            <td> { index + 1 } </td>
                            <td> { proprietario.nome } </td>
                            <td> { proprietario.email } </td>
                            <td> { proprietario.endereco } </td>
                            <td> 
                                <Link to={`/editProprietario/${proprietario.id}`} className="button is-small is-info"> Edit </Link>
                                <button onClick={ () => deletarProprietario(proprietario.id) } className="button is-small is-danger">Delete</button>
                            </td>

                        </tr>




                    ))}
                </tbody>
            </table>
            <Link to="/Produto" className="button is-primary mt-2">Página Produto</Link>
        </div>


    )

}


export default ProprietarioList;