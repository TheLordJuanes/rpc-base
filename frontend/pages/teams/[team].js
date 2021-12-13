import HeadRPC from '../../components/HeadRPC'
import AddIntegrant from '../../components/AddIntegrant'
import { useRouter } from 'next/router'
import Link from 'next/Link'

let idGeneral = 0

export default function home({ integrants }) {

    const router = useRouter()
    let teamId = router.query.team
    idGeneral = teamId
    console.log(teamId)

    return (

        <div className="container">

            <HeadRPC />

            <div className="d-flex justify-content-end">
                Add a new Integrant
                
            </div>
            <form action="http://localhost:8080/addIntegrant" method="post" className="form-control">
                <input type="hidden" id="teamId" name="teamId" value={idGeneral} /> <br/>
                <AddIntegrant />
            </form>

            <table className="table table-hover table-striped text-center">

                <thead>

                    <tr>
                        <th>
                            Email
                        </th>
                        <th>
                            Nickname
                        </th>
                        <th>
                            First name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>

                </thead>

                <tbody>

                    {integrants.map(e => (
                        <tr>
                            <td>
                                {e.email}
                            </td>
                            <td>
                                {e.nickname}
                            </td>
                            <td>
                                {e.firstname}
                            </td>
                            <td>
                                {e.lastname}
                            </td>
                            <td>
                                {e.country}
                            </td>
                            <td>
                            <form method="POST" action="http://localhost:8080/deleteIntegrant">
                                <input type="hidden" id="teamId" name="teamId" value={teamId} />
                                <input type="hidden" id="email" name="email" value={e.email} />
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
    const response = await fetch('http://localhost:8080/integrants/'+idGeneral)
    //console.log(idGeneral)
    const integrants = await response.json()
    return { integrants: integrants }
}