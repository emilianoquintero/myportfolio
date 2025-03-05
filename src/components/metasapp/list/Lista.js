import Meta from "./Meta";

const ListaMock = [
    {
        'id': '1',
        'detalles': 'correr por 30 mnts',
        'periodo': 'dia',
        'eventos': 1,
        'icono': '😊',
        'meta': 365,
        'plazo': '2030-01-01',
        'completado': 5
    },
    {
        'id': '2',
        'detalles': 'caminar por 30 mnts',
        'periodo': 'dia',
        'eventos': 1,
        'icono': '😂',
        'meta': 365,
        'plazo': '2030-01-01',
        'completado': 100
    },
]

function Lista() {
    return (
        ListaMock.map(meta => <Meta {...meta}></Meta>)
    );
}

export default Lista;