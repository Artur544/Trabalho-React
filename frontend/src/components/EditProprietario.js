import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProprietario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateProprietario = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/api/proprietario/${id}`,{
            nome:nome,
            email:email,
            endereco:endereco
        });
        navigate('/Proprietario');
        
    }
    useEffect(() => {
        buscaProprietario();
    }, []);

    const buscaProprietario = async () => {
        const response = await axios.get(`http://localhost:5000/api/proprietario/${id}`);
        setNome(response.data.nome);
        setEmail(response.data.email);
        setEndereco(response.data.endereco);
    }

    return (

        <div>
            <form onSubmit={ updateProprietario }>
                <div className="field">
                    <label className="label">Nome</label>

                    <input className="input"
                        type = "text"
                        placeholder="Nome"
                        value = { nome }
                        onChange={ (e) => setNome(e.target.value) }
                    />
                </div>


                <div className="field">
                    <label className="label">Email</label>

                    <input className="input"
                        type = "number"
                        placeholder="Email"
                        value = { email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Endereço</label>

                    <input className="input"
                        type = "number"
                        placeholder="Endereco"
                        value = { endereco }
                        onChange={ (e) => setEndereco(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Atualizar</button>
                </div>
                
            </form>

        </div>

    );

}

export default EditProprietario;