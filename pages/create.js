import Link from 'next/link'
import Router from 'next/router'
import Layout from '../components/Layout'
import VehiclesRepository from '../data/Vehicles'
import { Formik } from 'formik';

const Create = (props) => (
  <Layout>
    <nav className="action-bar">
      <Link href="/">
        <button className="action-bar__return">Voltar</button>
      </Link>
    </nav>
    <section className="car-create">
    <Formik
      initialValues={props.url.query.placa ? VehiclesRepository.getVehicleByPlate(props.url.query.placa) : {placa: '', modelo: '', marca: '', foto: '', combustivel: '', valor: ''}}
      validate={values => {
        let errors = {};
        if (!values.placa) {
          errors.placa = 'Campo Obrigatório';
        }
        if (!/^[0-9]*$/gm.test(values.valor)) {
          errors.valor = 'Somente Números'
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors }
      ) => {
        VehiclesRepository.setVehicle(values);
        Router.push('/');
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
                <label htmlFor="placa">Placa:</label>
                <input type="text" placeholder="Digite o Número da Placa" id="placa" name="placa"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.placa}  />
                {touched.placa && errors.placa && <div>{errors.placa}</div>}
            </div>
            <div className="col">
                <label htmlFor="modelo">Modelo:</label>
                <input type="text" placeholder="Digite o Modelo" id="modelo" name="modelo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.modelo}  />
                {touched.modelo && errors.modelo && <div>{errors.modelo}</div>}
            </div>
            <div className="col">
                <label htmlFor="marca">Marca:</label>
                <input type="text" placeholder="Digite a Marca" id="marca" name="marca"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.marca}  />
                {touched.marca && errors.marca && <div>{errors.marca}</div>}
            </div>
            <div className="w-100"></div>
            <div className="col">
                <label htmlFor="imagem">Foto:</label>
                <input type="text" placeholder="Digite a URL da Foto" id="imagem" name="imagem"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.imagem}  />
                {touched.imagem && errors.imagem && <div>{errors.imagem}</div>}
            </div>
            <div className="col">
                <label htmlFor="combustivel">Combustível:</label>
                <input type="text" placeholder="Digite o Tipo de Combustível" id="combustivel" name="combustivel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.combustivel}  />
                {touched.combustivel && errors.combustivel && <div>{errors.combustivel}</div>}
            </div>
            <div className="col">
                <label htmlFor="valor">Valor:</label>
                <input type="text" placeholder="Digite o Valor" id="valor" name="valor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.valor}  />
                {touched.valor && errors.valor && <div>{errors.valor}</div>}
            </div>
          </div>
          <div className="button">
            <button className="car-create__save" type="submit" disabled={isSubmitting}>Salvar</button>
          </div>
        </form>
      )}
      />
    </section>
    <style jsx global>{`
      .action-bar {
        margin-top: 20px;
      }
      .action-bar__return {
        padding: 14px 36px;
        color: #363636;
        font-size: 14px;
        border-radius: 5px;
        display: inline-block;
        text-decoration: none;
        background-color: #FFF;
        border: 1px solid #C9D3DD;
        cursor: pointer;
      }
      .car-create {
        margin-top: 20px;
        background-color: #FFF;
        border-radius: 4px;
        border: 1px solid #C9D3DD;
        padding: 20px 42px;
      }
      .car-create__save {
        padding: 14px 36px;
        color: #FFF;
        font-size: 14px;
        border-radius: 5px;
        display: inline-block;
        text-decoration: none;
        background-color: #4ABA58;
        cursor: pointer;
        border: none;
      }
      .button {
        text-align: right;
      }
      .row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }
      .col {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
        margin-bottom: 20px;
      }
      .w-100 {
        width: 100%!important;
      }
      label {
        font-weight: bold;
        font-size: 14px;
      }
      input {
        width: 100%;
        display: block;
        border: 1px solid #C9D3DD;
        border-radius: 4px;
        padding: 16px 16px;
      }
    `}</style>
  </Layout>
)

export default Create
