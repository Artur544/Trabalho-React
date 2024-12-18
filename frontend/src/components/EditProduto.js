import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduto = () => {
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [proprietario_id, setProprietario_id] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateProduto = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/api/produto/${id}`,{
            descricao:descricao,
            quantidade:quantidade,
            valor:valor,
            proprietario_id:proprietario_id
        });
        navigate('/Produto');
        
    }
    useEffect(() => {
        buscaProduto();
    }, []);

    const buscaProduto = async () => {
        const response = await axios.get(`http://localhost:5000/api/produto/${id}`);
        setDescricao(response.data.descricao);
        setQuantidade(response.data.quantidade);
        setValor(response.data.valor);
        setProprietario_id(response.data.proprietario_id);
    }

    return (

        <div>
            <form onSubmit={ updateProduto }>
                <div className="field">
                    <label className="label">Descrição</label>

                    <input className="input"
                        type = "text"
                        placeholder="Descrição"
                        value = { descricao }
                        onChange={ (e) => setDescricao(e.target.value) }
                    />
                </div>


                <div className="field">
                    <label className="label">Quantidade</label>

                    <input className="input"
                        type = "number"
                        placeholder="Quantidade"
                        value = { quantidade }
                        onChange={ (e) => setQuantidade(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Valor</label>

                    <input className="input"
                        type = "number"
                        placeholder="Valor"
                        value = { valor }
                        onChange={ (e) => setValor(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">ID do Proprietário</label>

                    <input className="input"
                        type = "number"
                        placeholder="ID do proprietário"
                        value = { proprietario_id }
                        onChange={ (e) => setProprietario_id(e.target.value) }
                    />
                </div>


                <div className="field">
                    <button className="button is-primary">Atualizar</button>
                </div>
                
            </form>

        </div>

    );

}

export default EditProduto;