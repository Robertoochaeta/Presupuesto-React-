import React from 'react'
import NuevoPresupuestos from './NuevoPresupuesto'
const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <>
    <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuestos 
        presupuesto = {presupuesto}
        setPresupuesto={setPresupuesto}/>
    </header>
    </>
  )
}

export default Header