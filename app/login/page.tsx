'use client';
import { Label, Select,FileInput } from 'flowbite-react';
import { ChangeEvent, useState } from 'react';

export function Login(){
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
const [campoAdicional, setCampoAdicional] = useState('');

const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  setOpcionSeleccionada(event.target.value);
};

const handleCampoAdicionalChange = (event: ChangeEvent<HTMLInputElement>) => {
  setCampoAdicional(event.target.value);
};

const [formData, setFormData] = useState({
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  cedula:'',
  comprobante:'',
  empresa:'',
  cargo:'',
  tiempo: '',
  ingreso: '',
  banco:'',
  edad: '',
  direccion: '',
  tipo_credito: '',
  monto: '',
  plazo: '',
  otrosingresos: '',
  gastosmensu: '',
  histocredi: '',
  descripcion: '',
  ref1: '',
  tel1: '',
  // Agrega aquí los demás campos del formulario
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:8000/api/insertar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
    } else {
      console.error('Error en la respuesta del servidor:', response.statusText);
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  









  

return(
    <div>
    

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="pexels-karolina-grabowska-4968551.jpg"
        className="absolute inset-0 h-full w-full object-cover rounded-xl"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="/">
          <span className="sr-only">Home</span>
        
        </a>

        <h1
          className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Formulario de Verificacion 
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
         llene todos los campos requeridos con sus datos para gestionarle la solicitud del prestamo
        </p>

        <form  onSubmit={handleSubmit} action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>

            <input
              type="text"
              id="FirstName"
              name="nombre"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>

            <input
              type="text"
              id="LastName"
              name="apellido"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />



          </div>

          <div className='col-span-6 sm:col-span-3'>
            
          <label htmlFor="Celular" className="block text-sm font-medium text-gray-700">
              Telefono
            </label>

            <input
              type="number"
              id="number"
              name="telefono"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />


          </div>
         

         <div className='col-span-6 sm:col-span-3'>
         <label htmlFor="Celular" className="block text-sm font-medium text-gray-700">
              cedula
            </label>

            <input
              type="file"
              id="number"
              name="cedula"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />

         </div>


         <div className='col-span-6 sm:col-span-3'>
           
           <div
        className="max-w-md"
        id="comprobante"
      >
        <div className=" block">
          <Label
            htmlFor="file"
            value="Comprobantes de pagos"
          />
        </div>
        <FileInput
          helperText=""
          id="comprobante"
          onChange={handleChanges}
        />
      </div>
  
  
           </div>


          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Empresa 
              
            </label>

            <input
              type="text"
              id="empresa"
              name="empresa"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>



          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Cargo 
              
            </label>

            <input
              type="text"
              id="cargo"
              name="cargo"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Tiempo trabajando 
              
            </label>

            <input
              type="number"
              id="time"
              name="tiempo"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Ingreso mensual
              
            </label>

            <input
              type="number"
              id="ingreso"
              name="ingreso"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>





          <div className="col-span-6 sm:col-span-3" id='select'>
            <label
              htmlFor="banco"
              
              className="block text-sm font-medium text-gray-700"
            >
              Banco a solicitar
            </label>
            <Select
        id="banco"
        
        required
        
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        
      >
        
        <option>
          Banco General
        </option>
        <option>
          Bac Credomatic
        </option>
        <option>
          Banistmo
        </option>
        <option>
          Banco Nacional
        </option>
      </Select>
          
          </div>



          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="edad"
              className="block text-sm font-medium text-gray-700"
            >
              Edad
              
            </label>

            <input
              type="date"
              id="edad"
              name="edad"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-700"
            >
              Direccion
              
            </label>

            <input
              type="text"
              id="direccion"
              name="direccion"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo de credito
              
            </label>

            <input
              type="text"
              id="tipo"
              name="tipo_credito"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="monto"
              className="block text-sm font-medium text-gray-700"
            >
              Monto del prestamo 
              
            </label>

            <input
              type="number"
              id="monto"
              name="monto"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Plazo
              
            </label>

            <input
              type="number"
              id="meses"
              name="plazo"
              onChange={handleChanges}
              placeholder='escriba los meses a pagar'
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

             
             
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="otros"
              className="block text-sm font-medium text-gray-700"
            >
              Otros Ingresos
              
            </label>

            <input
              type="number"
              id="otros"
              name="otrosingresos"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Gastos Mensuales
              
            </label>

            <input
              type="number"
              id="gastos"
              name="gastosmensu"
              onChange={handleChanges}
              placeholder='ingrese cuanto gasta al mes en numeros'
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


           
          <div className="col-span-6 sm:col-span-3" id='select'>
            <label
              htmlFor="histori"

              className="block text-sm font-medium text-gray-700"
            >
              Historial Crediticio?
            </label>
            <Select
        id="historcredi"
        value={opcionSeleccionada} 
        onChange={handleChange}
        required
        
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      >
        <option>
          SI
        </option>
        <option>
          NO
        </option>
       
      </Select>
          
          </div>

          {opcionSeleccionada === 'SI' && (

            <div className="col-span-6 sm:col-span-3">
              
            <label
              htmlFor="descripcion"
              className="block text-sm font-medium text-gray-700"
            >
              Descripcion del credito anterior 
              
            </label>

            <input
              type="text"
              id="descripcion"
              name="descripcion"
              onChange={handleChanges}
              placeholder='indique un credito que haya tenido anteriormente'
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />

                
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Referencia:
              
            </label>

            <input
              type="text"
              id="refe"
              name="ref1"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />




         <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Telefono
              
            </label>

            <input
              type="number"
              id="tel"
              name="tel1"
              onChange={handleChanges}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
      
          </div>
        

          

        
      )}


            





          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                Yo permito que verifiquen con mis datos para verificacion de un prestamo
              </span>
            </label>
          </div>

          <div className="col-span-6 space-x-2">
            <p className="text-sm text-gray-500">
             
              <a href="#" className="text-gray-700 underline space-x-2">
                terms and conditions
              </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6   text-center">
            <button
              className="inline-block shrink-0 rounded-md border bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
    </div>
)
}

export default Login