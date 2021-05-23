import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import EmpresaTable from '../components/table/EmpresaTable';
import AddEmpresaForm from '../components/forms/AddEmpresaForm';
import EditEmpresaForm from '../components/forms/EditEmpresaForm';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            empresas: [],
            currentEmpresa: { id: null, nome: '', taxaJuros: '', valorEntrada: '', valorParcela: '', qtdAnos: '' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshEmpresaTable();
    }

    refreshEmpresaTable() {
        debugger
        this.empresasData = api.get('/listar-todos')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    empresas: data,
                    setEmpresas: data
                });
            });
    }

    addEmpresa = empresa => {
        debugger
        empresa.taxaJuros = empresa.taxaJuros.replace('% ', '').replace(',', '.');
        empresa.valorEntrada = empresa.valorEntrada.replace('R$ ', '').replace(',', '.');
        empresa.valorParcela = empresa.valorParcela.replace('R$ ', '').replace(',', '.');
        api.post('/adicionar', qs.stringify(empresa))
            .then(res => {
                this.refreshEmpresaTable();
            });
    };

    deleteEmpresa = id => {
        debugger
        api.delete(`excluir/${id}`)
            .then(res => {
                this.refreshEmpresaTable();
            });
    };

    updateEmpresa = (id, empresa) => {
        
        api.put(`alterar/${id}`, qs.stringify(empresa))
            .then(res => {

                this.refreshEmpresaTable();
            });
        
        this.setState({ 
            currentEmpresa: { id: null, nome: '', taxaJuros: '', valorEntrada: '', valorParcela: '', qtdAnos: '' }
        });

        this.setEditing(false);
    };

    editRow = empresa => {

        this.setState({ 
            currentEmpresa: { id: empresa.id, nome: empresa.nome, taxa: empresa.taxa, valorEntrada: empresa.valorEntrada, valorParcela: empresa.valorParcela, qtdAnos: empresa.qtdAnos }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { empresas } = this.state;

        return (
            <div className="container">
                    
                <div className="row">
    
                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                <h4>Editar Empresa</h4>
                                <EditEmpresaForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentEmpresa={this.state.currentEmpresa}
                                    updateEmpresa={this.updateEmpresa} 
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                <h4>Cadastrar Empresa</h4>
                                <AddEmpresaForm addEmpresa={this.addEmpresa} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l6">
                        <h5>Empresas</h5>
                        <EmpresaTable empresas={empresas} editRow={this.editRow} deleteEmpresa={this.deleteEmpresa} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;