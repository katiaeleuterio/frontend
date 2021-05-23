import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';

const EditEmpresaForm = props => {
    const [empresa, setEmpresa] = useState(props.currentEmpresa);

    const handleInputChange = event => {
        const { name, value } = event.target

        setEmpresa({ ...empresa, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateEmpresa(empresa.id, empresa);
    };

    useEffect(() => {
        setEmpresa(props.currentEmpresa);
    }, [props]);

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
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Alterar</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditEmpresaForm;
