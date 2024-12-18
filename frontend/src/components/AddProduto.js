import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduto = () => {
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [proprietario_id, setProprietario_id] = useState('');
    const navigate = useNavigate();

    const saveProduto = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/api/produto`,{
            descricao:descricao,
            quantidade:quantidade,
            valor:valor,
            proprietario_id:proprietario_id
        });
        navigate('/Produto');
        
    }
    
    
    return (

        <div>
            <form onSubmit={ saveProduto }>
                <div className="field">
                    <div className="mb-2">
                        <label className="form-label">Descrição</label>

                        <input className="form-control"
                            type = "text"
                            placeholder="Descrição"
                            value = { descricao }
                            onChange={ (e) => setDescricao(e.target.value) }
                        />
                    </div>
                </div>


                <div className="field">
                    <div className="mb-2">


                        <label className="form-label">Quantidade</label>

                        <input className="form-control"
                            type = "number"
                            placeholder="Quantidade"
                            value = { quantidade }
                            onChange={ (e) => setQuantidade(e.target.value) }
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="mb-2">


                        <label className="form-label">Valor</label>

                        <input className="form-control"
                            type = "number"
                            placeholder="Valor"
                            value = { valor }
                            onChange={ (e) => setValor(e.target.value) }
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="mb-2">


                        <label className="form-label">ID do proprietário</label>

                        <input className="form-control"
                            type = "number"
                            placeholder="ID do proprietário"
                            value = { proprietario_id }
                            onChange={ (e) => setProprietario_id(e.target.value) }
                        />
                    </div>
                </div>


                <div className="field">
                    <button className="button is-primary">Salva</button>
                </div>
                
            </form>

        </div>

    );

}

export default AddProduto;