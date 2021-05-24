import React from 'react';

const EmpresaTable = props => (
  
    <table className="striped">
        <thead>
            <tr>
                <th className="center-align">Empresa</th>
                <th className="center-align">Valor da Entrada</th>
                <th className="center-align">Valor da Parcela</th>
                <th className="center-align">Taxa de Juros</th>
                <th className="center-align">Quantos anos</th>
                <th className="center-align">Ações</th>
            </tr>
        </thead>
    <tbody>
        {
            props.empresas.length > 0 ? (
                props.empresas.map (empresa => (

                    <tr key={empresa.id}>
                        <td className="center-align">{empresa.nome}</td>
                        <td className="center-align">{empresa.valorEntrada}</td>
                        <td className="center-align">{empresa.valorParcela}</td>
                        <td className="center-align">{empresa.taxaJuros}</td>
                        <td className="center-align">{empresa.qtdAnos}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(empresa)}>
                                Editar
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.calculaFinanciamento(empresa.id)}>
                                Calcular
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteEmpresa(empresa.id)}>
                                Excluir
                            </button>                            
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.empresas[0]} Não há dados para serem demonstrados</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default EmpresaTable;