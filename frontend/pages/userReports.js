import HeadRPC from '../components/HeadRPC'
import Link from 'next/Link'



export default function generalReports() {

    return (

        <div className="container">
            <div>         
                   <HeadRPC />
            </div>
            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
            <div>
                <table className="table table-hover table-striped text-center" id="OrderingTable">
                    <thead>

                        <tr>
                            <th id="statisticsPanel">
                                <h2 >Reportes - Usuario</h2>
                                
                            </th>
                            <th id="filterOptionsAnd2Grafics">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal" >Opciones de filtrado</button>
                                <div className="modal fade" id="miModal" tabIndex="-1" aria-hidden="true" aria-aria-labelledby="modalTitle" data-bs-backdrop="static">
                                <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="modalTitle">Filtrar</h5>
                                <button type ="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" id="SystemFilters">
                                <table>
                                    <th id="dateFilter">
                                    <div id="checker">
                                <table>
                                <th><input type ="checkbox" name="Filtrar por fechas" id="dateFilterChecked"></input></th>
                                <th><h6>Filtrar por fechas</h6></th>
                                </table>
                                </div>
                                <div id="datepickerFrom">
                                <table>
                                <th><h6>Desde: </h6></th>
                                <th><input type ="date" className="form-control"></input></th>
                                </table>
                                </div>
                                <div id="datepickerUntil">
                                <table>
                                <th><h6>Hasta: </h6></th>
                                <th><input type ="date" className="form-control"></input></th>
                                </table>
                                </div>
                                <div>
                                    <button type="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                                    </th>
                                    <th id="rankFilter">
                                        <div></div>
                                        
                                        <div id="checker">
                                <table>
                                <th><input type ="checkbox" name="Filtrar por rango de tiempo" id="rankFilterChecked"></input></th>
                                <th><h6>Filtrar por rango de tiempo</h6></th>
                                </table>
                                </div> 

                                        <div>
                                            <select name="rankSelector" id="rankSelect">
                                                <option value="Ultima semana">Ultima semana</option>
                                                <option value="Ultimo mes">Ultimo mes</option>
                                                <option value="Ultimo año">Ultimo año</option>
                                            </select>
                                        </div>
                                        <div>
                                        <div>
                                    <button type="btn btn-primary" id="toFilter">Filtrar</button>
                                </div>
                                        </div>

                                    </th>
                                    
                                </table>
                                <div className="modal-footer"></div>
                                </div>
                                </div>
                                </div>
                                </div>
                            </th>
                            <th id="ResetFiltersAnd1Grafic">
                                <Link href="/records/generalReports">
                                    <a className="btn btn-primary" role="button">Eliminar filtros</a>
                                </Link>
                            </th>

                        </tr>

                        <tr id= "datesTableAnd2Grafics">
                            <td id= "Sistem data">
                            <table className="table table-hover table-striped text-center" id="statisticsTable">
                                    <tr>

                                        <td>Total ingresos: </td>

                                        <td>Celda 2</td>

                                    </tr>
                        
                                    <tr>

                                        <td>Tiempo promedio en sesion: </td>

                                        <td>Celda 2</td>

                                    </tr>
                                    <tr>

                                        <td>Intentos fallidos antes del último ingreso: </td>

                                        <td>Celda 2</td>

                                    </tr>
                                    <tr>

                                        <td>Promedio de Intentos fallidos de ingreso: </td>

                                        <td>Celda 2</td>

                                    </tr>
                                </table>
                            </td>
                            <td id="Ingresosgrafic">
                                <h1>Espacio para gráfico ingresos</h1>
                            </td>
                            <td id="Ingresosgrafic">
                                <h1>Espacio para gráfico Actividad en la página</h1>
                            </td>

                        </tr>
                        <tr id="grafic1Row">
                            <td></td>
                            <td id="tiempoEnSessionGrafic">
                                <h1>Espacio para gráfico tiempo en sesión</h1>
                            </td>
                        </tr>

                    </thead>

                </table>
            </div>

            <Link href='./lastUsersRecords'>
                                    <a className="btn btn-primary" role="button">Atrás</a>
                                </Link>



        </div>





    );
}


