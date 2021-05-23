import React from 'react';

const EmpresaTable = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Empresa</th>
                <th>Valor da Entrada</th>
                <th>Valor da Parcela</th>
                <th>Taxa de Juros</th>
                <th>Quantos anos</th>
                <th>Ações</th>
            </tr>
        </thead>
    <tbody>
        {
            props.empresas.length > 0 ? (
                props.empresas.map (empresa => (

                    <tr key={empresa.id}>
                        <td>{empresa.nome}</td>
                        <td>{empresa.valorEntrada}</td>
                        <td>{empresa.valorParcela}</td>
                        <td>{empresa.taxaJuros}</td>
                        <td>{empresa.qtdAnos}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(empresa)}>
                                Editar
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