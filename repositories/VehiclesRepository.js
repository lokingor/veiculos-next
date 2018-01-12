import Data from '../data/Vehicles'

const VehiclesRepository = {
  data: Data
}

VehiclesRepository.getVehicles = () => (
  VehiclesRepository.data
)

VehiclesRepository.getVehicleByPlate = (plate) => {
  return VehiclesRepository.data.filter( ( elem, index, arr ) => elem['placa'] == plate )[0]
}

VehiclesRepository.searchVehicles = (srch) => {
  return VehiclesRepository.data.filter( ( elem, index, arr ) => (elem['marca'].indexOf(srch) !== -1) || (elem['combustivel'].indexOf(srch) !== -1) )
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
