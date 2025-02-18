function PrincipalMetasApp({ children }) {
    return (
        <div class="d-flex flex-row mb-2 fw-semibold" style={{ height: '80%' }}>
            <aside class="sidebar d-flex flex-column" >
                <a class="p-2 sin-estilo-enlace" href="/lista">
                    <i class="bi bi-journals"> </i> 
                    Lista
                </a>
                <a class="p-2 sin-estilo-enlace" href="/crear">
                    <i class="bi bi-plus-circle"> </i>
                    Crear
                </a>
            </aside>
            <main class="p-2">
                {children}
            </main>
        </div>
    );
}

export default PrincipalMetasApp;