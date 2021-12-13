import {useRouter} from 'next/router'
import Link from 'next/Link'
import StyleRPC from '../../../../components/StyleRPC';
import HeadRPC from '../../../../components/HeadRPC';
import I from '../../../../components/Imports';

export default function home({data, teamName, contestName}) {

	const router = useRouter()

	return (

		<div className="m-auto">
			<nav className="navbar navbar-expand-sm bg-navbar">
				<div className="container-fluid">
					<img src="../../../img/logo.png" width="50" height="50"/>
					<form className="d-flex ">
						<button onClick={() => router.push("/")} className="btn btn-style" type="button">Logout</button>
					</form>
				</div>
			</nav>

			<div style={{display: "flex", alignItems: "center"}}>

				<img src="/goBackArrow.svg" width="30" height="30"
					 onClick={() => router.push("/contest/" + contestName)}/>
				<h1 style={{marginLeft:"20px"}}>{teamName}</h1>
			</div>
			<br/><br/>

			<table className="table table-hover table-striped text-center">
				<tbody>
				<tr>
					{data.map(t => (
						<td style={{textAlign:"-moz-center"}}>
							<div className="card" style={{width: "18rem", borderRadius: "10px"}}>
								<div className="card-body">
									<p className="card-text"><b>Username:</b> {t.nickname}</p>
									<p className="card-text"><b>Name:</b> {t.firstname} {t.lastname}</p>
									<p className="card-text"><b>Email:</b> {t.email}</p>
									<p className="card-text"><b>Country:</b> {t.country}</p>
								</div>
							</div>
						</td>
					))}
				</tr>
				</tbody>
			</table>
			<HeadRPC/>
			<StyleRPC/>
			<I/>
		</div>
	)
}

export async function getServerSideProps(ctx) {

	const id = ctx.params.team

	const response = await fetch('http://localhost:8080/team/'+id)
	const tableData = await response.json()

	const data = [
		{nickname:"nick", firstName:"firstName", lastName:"lastName", email:"email", country:"country"},
		{nickname:"nick", firstName:"firstName", lastName:"lastName", email:"email", country:"country"},
		{nickname:"nick", firstName:"firstName", lastName:"lastName", email:"email", country:"country"}
	]
	return {props: {data:tableData, teamName: id, contestName: ctx.params.contest}}
}