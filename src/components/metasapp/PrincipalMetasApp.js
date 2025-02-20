import './PrincipalMetasApp.css'

function PrincipalMetasApp({ children }) {
    return (
        <div class="d-flex flex-row mb-2 fw-semibold" style={{ height: '80%' }}>
            <aside class="sidebar d-flex flex-column" >
                <a class="p-2 sin-estilo-enlace" href="/lista">
                    <i class="bi bi-journals"> </i> 
                    List
                </a>
                <a class="p-2 sin-estilo-enlace" href="/crear">
                    <i class="bi bi-plus-circle"> </i>
                    Add 
                </a>
            </aside>
            <main class="p-2 " style={{ width: '100%' }}>
                {children}
            </main>
        </div>
    );
}

export default PrincipalMetasApp;