import HeadRPC from '../../components/HeadRPC'
import { useRouter } from 'next/router'
import Link from 'next/Link'

export default function home({ teams }) {

    const router = useRouter()
    console.log(teams)

    return (

        <div className="container">

            <HeadRPC />

            <span className="center">
            Equipos a los que perteneces y/o eres el creador
            </span>

            <table className="table table-hover table-striped text-center">

                <thead>

                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Action 1
                        </th>
                        <th>
                            Action 2
                        </th>
                    </tr>

                </thead>

                <tbody>

                    {teams.map(e => (
                        <tr>
                            <td>
                                {e.codigo_equipo}
                            </td>
                            <td>
                                {e.nombre}
                            </td>
                            <td>
                                <form method="POST" action="http://localhost:8080/editTeam">
                                <input type="hidden" id="teamId" name="teamId" value={e.codigo_equipo} />
                                    <input type="submit" className="btn btn-primary m-auto" value="Editar"/>
                                </form>
                            </td>
                            <td>
                            <form method="POST" action="http://localhost:8080/deleteTeam">
                                <input type="hidden" id="teamId" name="teamId" value={e.codigo_equipo} />
                                    <input type="submit" className="btn btn-danger m-auto" value="Eliminar"/>
                                </form>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

home.getInitialProps = async () => {
    const response = await fetch('http://localhost:8080/teams')
    const teams = await response.json()
    return { teams: teams }
}