import Head from 'next/head'
import {useRouter} from 'next/router'
import { useState,forwardRef,useEffect  } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import ContestsForm from '../components/ContestsForm'
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';


export default function Contests() {
  const router = useRouter()

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const baseUrl="http://localhost:8080/contests"

      /*
      console.log("HOLAAAAAAAAAAAA")
      tableData.forEach(function(entry) {
        console.log(entry);
      });*/
    const columns=[
        { title: "Id", 
        field: "codigo_competencia", 
        align: "center",
        },
        { title: "Name", 
        field: "nombre", 
        align: "center",
        },
        { title: "Inscription Start", 
        field: "fecha_inicio_ins", 
        align: "center",
        },
        { title: "Inscription End", 
        field: "fecha_fin_ins", 
        align: "center",
        },
        { title: "Contest Start", 
        field: "fecha_inicio", 
        align: "center",
        },
        { title: "Contest End", 
        field: "fecha_finalizacion", 
        align: "center",
        },

    ]
    const [tableData, setTableData] = useState([
    ])
    const peticionGet=async()=>{
      await axios.get(baseUrl)
      .then(response=>{
       setTableData(response.data);
      })
    }
    useEffect(()=>{
      peticionGet();
    }, [])
    return (
            <div>
              <ContestsForm/>
                <MaterialTable columns={columns} 
                data={tableData}
                icons={tableIcons}
                title="Contest List"
                options={{
                  grouping: true,
                  filtering: true,
                  exportButton: true,
                }}/*
                editable={{
                  onRowAdd:(newRow)=> new Promise ((resolve,reject)=>{
                    setTableData([...tableData,newRow])
                    resolve();
                  }),
                  onRowUpdate:(newRow,oldRow)=> new Promise ((resolve,reject)=>{
                    const updateData=[...tableData]
                    updateData[oldRow.tableData.id]=newRow
                    setTableData(updateData)
                    resolve();
                  }),
                  onRowDelete:(selectedRow)=> new Promise ((resolve,reject)=>{
                    const updateData=[...tableData]
                    updateData.splice(selectedRow.tableData.id,1)
                    setTableData(updateData)
                    resolve();
                  })
                }}*/
			/*	onRowClick={(e, rowData) => {
					router.push("/contest/" + rowData.codigo_competencia)
				}}*/
                />
            
          </div>
)}