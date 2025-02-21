import './PrincipalMetasApp.css'

function PrincipalMetasApp({ children }) {
    return (
        <div className="d-flex flex-row mb-2 fw-semibold" style={{ height: '80%' }}>
            <aside className="sidebar d-flex flex-column" >
                <a className="p-2 sin-estilo-enlace" href="/lista">
                    <i className="bi bi-journals"> </i> 
                    List
                </a>
                <a className="p-2 sin-estilo-enlace" href="/crear">
                    <i className="bi bi-plus-circle"> </i>
                    Add 
                </a>
            </aside>
            <main className="p-2 " style={{ width: '100%' }}>
                {children}
            </main>
        </div>
    );
}

export default PrincipalMetasApp;