import HeadRPC from '../../components/HeadRPC'
import { useRouter } from 'next/router'
import Link from 'next/Link'

export default function home({ users }) {

    const router = useRouter()
    let nickname = router.query.user
    console.log(users)

    return (

        <div className="container">

            <HeadRPC />

            <div className="py-1 text-center">

                <Link href="../../">

                    <a className="btn btn-primary" role="button">Logout</a>

                </Link>

                <p className="p-2">{nickname}</p>

            </div>

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
                    </tr>

                </thead>

                <tbody>

                    {users.map(e => (
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
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

home.getInitialProps = async () => {
    const response = await fetch('http://localhost:8080/ejemplo')
    const users = await response.json()
    return { users: users }
}