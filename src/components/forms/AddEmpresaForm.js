import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const AddEmpresaForm = props => {

    const initialFormState = { nome: '', valorEntrada: '', valorParcela: '', taxaJuros: '', qtdAnos: ''};
    const [empresa, setEmpresa] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setEmpresa({ ...empresa, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!empresa.nome || !empresa.valorEntrada || !empresa.valorParcela || !empresa.taxaJuros || !empresa.qtdAnos) return;

        props.addEmpresa(empresa);
        setEmpresa(initialFormState);
    };

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" 
                            id="nome" 
                            name="nome" 
                            value={empresa.nome}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="nome">Nome da Empresa</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <NumberFormat 
                            thousandSeparator={'.'} 
                            decimalSeparator={','} 
                            prefix={'R$ '} 
                            className="some" 
                            inputmode="numeric"
                            name="valorEntrada" 
                            value={empresa.valorEntrada}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="valorEntrada">Valor da Entrada</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <NumberFormat 
                            thousandSeparator={'.'} 
                            decimalSeparator={','} 
                            prefix={'R$ '} 
                            name="valorParcela" 
                            value={empresa.valorParcela}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="valorParcela">Valor da Parcela</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <NumberFormat 
                            decimalSeparator={','} 
                            prefix={'% '} 
                            name="taxaJuros" 
                            value={empresa.taxaJuros}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="taxaJuros">Taxa de Juros</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            type="number" 
                            name="qtdAnos" 
                            value={empresa.qtdAnos}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="qtdAnos">Financiado em quantos anos?</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEmpresaForm;
