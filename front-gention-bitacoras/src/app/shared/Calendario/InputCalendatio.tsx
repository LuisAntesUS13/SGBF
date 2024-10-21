import React, { useEffect, useState } from "react";
import './Calendario.css';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

interface CalendarioProps {
    label?: string; // Etiqueta del input
    name: string; // Nombre del input
    value: string; // Valor del input
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Evento para manejar cambios
    disabled?: boolean;
}
  
export const InputCalendario: React.FC<CalendarioProps> = ({
    label,
    name,
    value,
    onChange,
    disabled = false, // Valor por defecto es "false"
  }) => {
    const [error, setError] = useState('');
    const [showCalendario, setShowCalendario] = useState(false);

    const [anios, setAnios] = useState<number[]>([]); 
    const [meses, setMeses] = useState<any[]>([]); 
    const [semanas, setSemanas] = useState<string[]>([]); 
    const [dias, setDias] = useState<any[]>([]); 


    const today = new Date(); 
    const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
    // const [dia, setDia] = useState<number>(today.getDate()); 
    const [mes, setMes] = useState<number>(today.getMonth() + 1); 
    const [anio, setAnio] = useState<number>(today.getFullYear()); 



    const clickCalendario = () => {
        setShowCalendario(showCalendario ? false : true);
    };

    const generaAnios = () => {
        const year = new Date().getFullYear();
        const inicio = year - 100;
        const final = year + 100;
        let contador = inicio;
        let nuevosAnios: number[] = [];
        do {
          contador++;
          nuevosAnios.push(contador);
        } while (contador != final);
        setAnios(nuevosAnios);
    };

    const generaMeses = () => {
        const meses: any[] = [
            { id: '1', mes: 'Enero' },
            { id: '2', mes: 'Febrero' },
            { id: '3', mes: 'Marzo' },
            { id: '4', mes: 'Abril' },
            { id: '5', mes: 'Mayo' },
            { id: '6', mes: 'Junio' },
            { id: '7', mes: 'Julio' },
            { id: '8', mes: 'Agosto' },
            { id: '9', mes: 'Septiembre' },
            { id: '10', mes: 'Octubre' },
            { id: '11', mes: 'Noviembre' },
            { id: '12', mes: 'Diciembre' },
          ];

          setMeses(meses);
    };

    const generaSemana = () => {
        const semana: string[] = [
            'Lun',
            'Mar',
            'Mie',
            'Jue',
            'Vie',
            'Sab',
            'Dom',
        ];

        setSemanas(semana);
    };

    const generaDias = (month: number, year: number) => {
        const numberDays =  new Date(Date.UTC(year, (month - 1), 1)).getDate();

        const arrayDays = Array.from({ length: numberDays }, (_, index) => {
        const day = index + 1; // Días comienzan en 1
        const dayObject = new Date(Date.UTC(year, month - 1, day));

        // Formatear el nombre del día usando Intl.DateTimeFormat
        const dayNameFormatter = new Intl.DateTimeFormat('es-ES', { weekday: 'long' });
        const name = dayNameFormatter.format(dayObject);

        // Obtener el día de la semana (1 = lunes, 7 = domingo)
        const indexWeek = dayObject.getUTCDay() === 0 ? 7 : dayObject.getUTCDay();

            return {
                name,
                value: day,
                indexWeek,
            };
        });
        setDias(arrayDays);
    };


    useEffect(() => {
        generaAnios();
        generaMeses();
        generaSemana();
        generaDias(today.getMonth(),today.getFullYear());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

 
    const  diaSeleccionado = (day: any) => {
        const dia = day > 9 ? day : '0' + day;
        setSelectedDay(day);
        // console.log(`${dia}/${mes}/${anio}`);
        const fecha = `${dia}/${mes > 9? mes : '0' + mes }/${anio}`;

        const event = {
            target: {
              value: fecha,
              name: name,
            },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(event);
        setShowCalendario(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'anio'){
            setAnio(value);
            generaDias(mes,value);
        } else if (name === 'mes')  {
            setMes(value);
            generaDias(value,anio);
        }
    };

    const handleBlur = () => {
        setShowCalendario(false);
    };

    const handleChangeInput = (e) => {
        const inputValue = e.target.value;
    
        // Expresión regular para validar el formato dd/mm/yyyy
        const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;

        const partesFecha = inputValue.split("/");

        // Validar el formato de la fecha
        if (inputValue && !datePattern.test(inputValue)) {
          setError('  El formato debe ser dd/mm/yyyy');
        } else {
          setError(''); // Limpiar el error si la fecha es válida
          setSelectedDay(parseInt(partesFecha[0]));
          setMes(parseInt(partesFecha[1]));
          setAnio(partesFecha[2]);
        }
    
        // Llamar al onChange del componente padre para actualizar el valor
        onChange(e);
    };

    const cambioMesFlechas = (cambio: boolean) => {
        const mesInterno = mes;
        if(cambio){ 
            if(mesInterno === 12){
                setMes(1);
                setAnio(anio + 1);
            } else {
                setMes(mes + 1);
            }
            generaDias(mes,anio);
        } else {

            if(mesInterno === 1){
                setMes(12);
                setAnio(anio -1);
            } else {
                setMes(mes - 1);
            }

            generaDias(mes,anio);
        }
    };



    return (
      <div style={{ width: "100%" }}  className="contenedor-calendario">
        {label && (
          <label className="form-label" htmlFor={name}>
            {label}
          </label>  
        )}
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <div className="input-group">
            <input  type='text' name={name}  id={name} value={value} onChange={handleChangeInput} 
             placeholder='dd/mm/yyyy'className='form-control'disabled={disabled}/>
            <span className="input-group-text calendario" onClick={clickCalendario}> <CalendarMonthOutlinedIcon /> </span>
        </div>
        {showCalendario && (
            <div className="border" onBlur={handleBlur} tabIndex={0} style={{ marginTop: '0px' }}>
                <div className="contenido-botones">
                   <div className="col-sm-1 izquierda-cal" onClick={() => {cambioMesFlechas(false)}} >
                         <ChevronLeftOutlinedIcon/>
                    </div>
                    <div className="col-sm-4 anios">
                        <select  name='anio' id='anio' className='form-select' value={anio} onChange={handleChange} >
                            {anios.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-sm-6 meses">
                        <select  name='mes' id='mes' className='form-select'  value={mes} onChange={handleChange}>
                            {meses.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.mes}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-1 derecha-cal" onClick={() => {cambioMesFlechas(true)}}  >
                          <ChevronRightOutlinedIcon/>
                    </div>
                </div>
                <ol className="class-ol">
                    {semanas.map((option) => (
                        <li className="class-li day-name"  key={option} >{option}</li>
                     ))}

                    {dias.map((day, index) => {
                            const isFirst = index === 0;
                            const isActive = day.value === selectedDay;
                            return (
                            <li
                                key={day.value}
                                style={{gridColumnStart: isFirst ? day.indexWeek : 'auto',}}
                                className={`day ${isActive ? 'activo' : ''}`}
                                onClick={() => diaSeleccionado(day.value)} // Set selected day on click
                            >
                                <span>{day.value}</span>
                            </li>
                            );
                        })}

                </ol>
            </div>
        )}
        
      </div>
    );
  };
  