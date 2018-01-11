const data = [
  {
    "combustivel": "Flex",
    "imagem": null,
    "marca": "Volkswagem",
    "modelo": "Gol",
    "placa": "FFF-5498",
    "valor": "20000"
  },
  {
    "combustivel": "Gasolina",
    "imagem": null,
    "marca": "Volkswagem",
    "modelo": "Fox",
    "placa": "FOX-4125",
    "valor": "20000"
  },
  {
    "combustivel": "Alcool",
    "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    "marca": "Volkswagen",
    "modelo": "Fusca",
    "placa": "PAI-4121",
    "valor": "20000"
  }
];

const VehiclesRepository = {
  data: data
}

VehiclesRepository.getVehicles = () => (
  VehiclesRepository.data
)

VehiclesRepository.getVehicleByPlate = (plate) => {
  return VehiclesRepository.data.filter( ( elem, index, arr ) => elem['placa'] == plate )[0]
}

VehiclesRepository.searchVehicles = (srch) => {
  return VehiclesRepository.data.filter( ( elem, index, arr ) => elem['placa'].indexOf(srch) !== -1 )
}

VehiclesRepository.setVehicle = (vehicle) => {
  if (VehiclesRepository.data.filter( ( elem, index, arr ) => elem['placa'] == vehicle.placa ).length == 0) {
    VehiclesRepository.data.push(vehicle)
  }
  else {
    VehiclesRepository.data = VehiclesRepository.data.map( elem => elem['placa'] == vehicle.placa ? vehicle : elem );
  }
}

VehiclesRepository.deleteVehicles = (vehicles) => {
  var newList = VehiclesRepository.data
  for (var key in vehicles) {
    if (vehicles[key]) {
      newList = newList.filter( ( elem, index, arr ) => elem['placa'] != key );
    }
  }
  VehiclesRepository.data = newList
  return VehiclesRepository.data
}

export default VehiclesRepository
