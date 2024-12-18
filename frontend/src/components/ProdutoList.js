import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProdutoList = () => {

    const [produtos, setProduto] = useState([]);
    useEffect( () => {
        listarProdutos();

    },[]);



    const listarProdutos = async () =>{
        const response = await axios.get('http://localhost:5000/api/produtos');
        setProduto(response.data);
    }

    const deletarProduto = async (id) => {
        await axios.delete(`http://localhost:5000/api/produto/${id}`);
        listarProdutos();
    }

    return (

        <div>
            <Link to="/addProduto" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Proprietário ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos.map ((produto,index) => (
                        <tr key = { produto.id }>
                            <td> { index + 1 } </td>
                            <td> { produto.descricao } </td>
                            <td> { produto.quantidade } </td>
                            <td> { produto.valor } </td>
                            <td> { produto.proprietario_id } </td>
                            <td> 
                                <Link to={`/editProduto/${produto.id}`} className="button is-small is-info"> Edit </Link>
                                <button onClick={ () => deletarProduto(produto.id) } className="button is-small is-danger">Delete</button>
                            </td>

                        </tr>




                    ))}
                </tbody>
            </table>
            <Link to="/Proprietario" className="button is-primary mt-2">Página Proprietário</Link>
        </div>


    )

}


export default ProdutoList;