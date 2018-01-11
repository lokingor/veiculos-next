import Link from 'next/link'
import Router from 'next/router'
import Layout from '../components/Layout'
import VehiclesRepository from '../data/Vehicles'

const checks = {}
var srch = ""

var vehicles = VehiclesRepository.getVehicles()
const getPage = (props) => props.url.query.page ? props.url.query.page : 1

const paginate = (array, page_size, page_number) => {
  --page_number;
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

const numPages = (vehicles) => {
  var pages = []
  for (var i = 1; i <= (vehicles.length - 1)/5 + 1; i++) {
    pages.push(i)
  }
  return pages
}

const Index = (props) => (
  <Layout>
    <nav className="action-bar">
      <Link href="/create">
        <button className="action-bar__create">Novo Carro</button>
      </Link>
      <button className="action-bar__delete" onClick={() => {
        vehicles = VehiclesRepository.deleteVehicles(checks)
        Router.push('/')
      }}>Excluir Carro</button>
      <div className="action-bar__search">
        <input className="action-bar__search__field" type="text" placeholder="Pesquisar" onChange={(event) => {
          srch = event.target.value
        }}/>
        <div className="action-bar__search__icon" onClick={() => {
          vehicles = VehiclesRepository.searchVehicles(srch)
          Router.push('/')
        }}><img src="/static/search.svg" width="12" /></div>
      </div>
    </nav>
    <table className="car-list">
      <thead>
        <tr className="car-list__titles">
         <th></th>
         <th>Placa</th>
         <th>Modelo</th>
         <th>Marca</th>
         <th>Foto</th>
         <th>Combustível</th>
         <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {
          paginate(vehicles, 5, getPage(props)).map( (vehicle, i) => (
            <tr key={vehicle.placa} className="table-row">
             <td><input className="car-list__checkbox" type="checkbox" onChange={(event) => (
               checks[vehicle.placa] = event.target.checked
             )} /></td>
             <Link href={`/create?placa=${vehicle.placa}`} as={`/edit/${vehicle.placa}`}>
               <td>{vehicle.placa}</td>
             </Link>
             <Link href={`/create?placa=${vehicle.placa}`} as={`/edit/${vehicle.placa}`}>
               <td>{vehicle.modelo}</td>
             </Link>
             <Link href={`/create?placa=${vehicle.placa}`} as={`/edit/${vehicle.placa}`}>
               <td>{vehicle.marca}</td>
             </Link>
               <td><a href={vehicle.imagem} target="_blank">{vehicle.imagem ? "Imagem" : "Sem foto"}</a></td>
             <Link href={`/create?placa=${vehicle.placa}`} as={`/edit/${vehicle.placa}`}>
               <td>{vehicle.combustivel}</td>
             </Link>
             <Link href={`/create?placa=${vehicle.placa}`} as={`/edit/${vehicle.placa}`}>
               <td>{vehicle.valor}</td>
             </Link>
            </tr>
          ))
        }
      </tbody>
    </table>
    <ul className="pagination">
      <Link key="first-page" href='/'><li className="pagination__item">{'<<'}</li></Link>
      {
        numPages(vehicles).map( (page, i) => (
          <Link key={`nav-${page}`} href={`/?page=${page}`}><li className="pagination__item">{page}</li></Link>
        ))
      }
      <Link key="last-page" href={`/?page=${numPages(vehicles).length}`}><li className="pagination__item">{'>>'}</li></Link>
    </ul>
    <style jsx>{`
      .action-bar {
        margin-top: 20px;
      }
      .action-bar__search {
        width: 220px;
        float: right;
        border: 1px solid #C9D3DD;
        border-radius: 4px;
      }
      .action-bar__search__field, .action-bar__search__icon {
        float: left;
      }
      .action-bar__search__field {
        width: 80%;
        padding: 14px 16px;
        border: none;
      }
      .action-bar__search__icon {
        width: 20%;
        border-left: 1px solid #C9D3DD;
        padding: 13px 16px 12px;
        cursor: pointer;
      }
      .action-bar__create, .action-bar__delete {
        padding: 14px 36px;
        color: #FFF;
        font-family: Arial;
        font-size: 14px;
        border-radius: 5px;
        display: inline-block;
        cursor: pointer;
        border: none;
      }
      .action-bar__create {
        background-color: #4ABA58;
        margin-right: 24px;
      }
      .action-bar__delete {
        background-color: #B54949;
      }
      .car-list {
        margin-top: 20px;
        background-color: #FFF;
        border-radius: 4px;
        border: 1px solid #C9D3DD;
        width: 100%;
        border-collapse: collapse;
      }
      .car-list__titles {
        background-color: #F8FAFC;
      }
      .car-list__titles th {
        height: 40px;
      }
      td, th {
        height: 50px;
        border-bottom: 1px solid #C9D3DD;
        color: #395B7B;
      }
      td {
        font-size: 14px;
      }
      td:last-child, th:last-child {
        padding-right: 42px;
        text-align: right;
      }
      th {
        font-size: 13px;
        text-align: left;
      }
      .table-row {
        cursor: pointer;
      }
      .table-row:hover {
        background-color: #D8E9FB;
      }
      .car-list__checkbox {
        height: 20px;
        width: 20px;
        background-color: #FFF;
        border: 1px solid #C9D3DD;
        border-radius: 4px;
        margin: 0 auto;
        display: block;
      }
      .pagination {
        display: flex;
        justify-content: center;
        margin-top: 30px;
      }
      .pagination__item {
        display: block;
        height: 40px;
        width: 40px;
        background-color: #FFF;
        color: #395B7B;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #C9D3DD;
        cursor: pointer;
      }
      .pagination__item:hover {
        background-color: #FFFAEB;
      }
    `}</style>
  </Layout>
)

export default Index
