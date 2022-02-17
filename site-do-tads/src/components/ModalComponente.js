function ModalComponente(props) {

    return (
        <>
            <div className="modal" id="modal-geral" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">FALTOU IMPLMENTAR</h5>
                        </div>
                        <div className="modal-body">
                            <p>Falta implementar..............................</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-geral">
                Mais detalhes
            </button>
        </>
    );
}

export default ModalComponente;