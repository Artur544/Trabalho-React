import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProprietario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const navigate = useNavigate();

    const saveProprietario = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/api/proprietario`,{
            nome:nome,
            email:email,
            endereco:endereco
        });
        navigate('/Proprietario');
    }
    
    
    return (

        <div>
            <form onSubmit={ saveProprietario }>
                <div className="field">
                    <div class="mb-2">
                        <label className="form-label">Nome</label>

                        <input className="form-control"
                            type = "text"
                            placeholder="Nome"
                            value = { nome }
                            onChange={ (e) => setNome(e.target.value) }
                        />
                    </div>
                </div>


                <div className="field">
                    <div class="mb-2">


                        <label className="form-label">Email</label>

                        <input className="form-control"
                            type = "text"
                            placeholder="Email"
                            value = { email }
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                    </div>
                </div>

                <div className="field">
                    <div class="mb-2">


                        <label className="form-label">Endereço</label>

                        <input className="form-control"
                            type = "text"
                            placeholder="Endereço"
                            value = { endereco }
                            onChange={ (e) => setEndereco(e.target.value) }
                        />
                    </div>
                </div>


                <div className="field">
                    <input className="form-control" type = "submit" value="Salvar"/>
                    <button className="button is-primary">Salva</button>
                </div>
                
            </form>

        </div>

    );

}

export default AddProprietario;