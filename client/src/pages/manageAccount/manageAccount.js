import React, { useState } from 'react';
import './manageAccount.css';

const documentosIniciales = [
    { id: 1, title: 'Documento 1', status: 'pendiente', file: null },
    { id: 2, title: 'Documento 2', status: 'pendiente', file: null },
    { id: 3, title: 'Documento 3', status: 'pendiente', file: null },
    { id: 4, title: 'Documento 4', status: 'pendiente', file: null },
    { id: 5, title: 'Documento 5', status: 'pendiente', file: null },
    { id: 6, title: 'Documento 6', status: 'pendiente', file: null },
];

const ManageAccount = () => {
    const [documentos, setDocumentos] = useState(documentosIniciales);
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const updatePassword = () => {
        // Lógica para cambiar la contraseña
        console.log('Nueva contraseña establecida:', newPassword);
    };

    const handleFileUpload = (file, id) => {
        const updatedDocuments = documentos.map(doc => 
            doc.id === id ? { ...doc, file: file.name, status: 'subido' } : doc
        );
        setDocumentos(updatedDocuments);
    };

    return (
        <div className="manage-account-container">
            <div className="profile-column">
                <h2>Cambiar Contraseña</h2>
                <input
                    type="password"
                    placeholder="Nueva Contraseña"
                    value={newPassword}
                    onChange={handlePasswordChange}
                />
                <button onClick={updatePassword}>Actualizar Contraseña</button>
            </div>

            <div className="documents-column">
                <h2>Gestión de Documentos</h2>
                <div className="documents-grid">
                    {documentos.map(doc => (
                        <div key={doc.id} className="document-item">
                            <div className="document-title">{doc.title}</div>
                            <input
                                type="file"
                                onChange={(e) => handleFileUpload(e.target.files[0], doc.id)}
                            />
                            <div className="document-status">
                                Estado: <span className={`status ${doc.status}`}>{doc.status}</span>
                            </div>
                            {doc.file && (
                                <button onClick={() => console.log('Visualizando documento', doc.file)}>
                                    Ver Documento
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageAccount;
