import React, {useState} from "react";
import { useForm } from "react-hook-form";

const preguntas = [
  {
    nombre: "personalidad",
    label: "¿Te consideras una persona…?",
    opciones: [
      { value: "tranquilo", label: "Tranquilo/a" },
      { value: "activo", label: "Activo/a" },
      { value: "sociable", label: "Sociable" },
      { value: "reservado", label: "Reservado/a" },
    ],
  },
  {
    nombre: "tiempoLibre",
    label: "¿Cómo prefieres pasar tu tiempo libre?",
    opciones: [
      { value: "casa", label: "En casa, viendo series o leyendo" },
      { value: "aireLibre", label: "Haciendo ejercicio o saliendo" },
      { value: "amistades", label: "Con amigos o familia" },
      { value: "mixto", label: "Un poco de todo" },
    ],
  },
  {
    nombre: "tiempoMascota",
    label: "¿Cuánto tiempo puedes dedicar a tu mascota al día?",
    opciones: [
      { value: "menos1h", label: "Menos de 1 hora" },
      { value: "1a3h", label: "1 a 3 horas" },
      { value: "mas3h", label: "Más de 3 horas" },
    ],
  },
  {
    nombre: "compromisoVeterinario",
    label: "¿Qué harías si tu mascota enferma y requiere atención costosa?",
    opciones: [
      {
        value: "sinDudarlo",
        label: "Buscaría atención veterinaria sin dudarlo",
      },
      { value: "enCasa", label: "Intentaría ayudarla en casa" },
      { value: "evaluariaCosto", label: "Evaluaría si puedo permitírmelo" },
      {
        value: "buscariaAyuda",
        label: "Buscaría ayuda, pero no me comprometería",
      },
    ],
  },
  {
    nombre: "relacionDeseada",
    label: "¿Qué tipo de relación buscas con tu mascota?",
    opciones: [
      { value: "companeraConstante", label: "Compañía constante" },
      { value: "activa", label: "Un compañero para jugar y salir" },
      { value: "tranquila", label: "Alguien tranquilo" },
      { value: "indeciso", label: "No estoy seguro/a aún" },
    ],
  },
  {
    nombre: "manejoConducta",
    label: "Si tu mascota tiene problemas de comportamiento, ¿cómo actuarías?",
    opciones: [
      { value: "profesional", label: "Buscaría ayuda profesional" },
      { value: "paciencia", label: "Intentaría educarla con paciencia" },
      { value: "dudas", label: "Pediría consejos, pero no me comprometo" },
      { value: "noTolero", label: "No lo toleraría" },
    ],
  },
  {
    nombre: "toleranciaRuido",
    label: "¿Qué tanto te molestan los ruidos o actividad constante?",
    opciones: [
      { value: "nada", label: "Me encanta el movimiento" },
      { value: "bien", label: "Lo tolero bien" },
      { value: "prefieroTranquilo", label: "Prefiero tranquilidad" },
      { value: "molesta", label: "Me incomoda mucho" },
    ],
  },
  {
    nombre: "toleranciaDesorden",
    label: "¿Qué tan dispuesto estás a convivir con desorden o pelos en casa?",
    opciones: [
      { value: "sinProblema", label: "No tengo problema" },
      { value: "tolero", label: "Me incomoda un poco" },
      { value: "prefieroLimpio", label: "Prefiero mantener todo limpio" },
      { value: "noGusta", label: "No me gusta nada" },
    ],
  },
  {
    nombre: "paseosDiarios",
    label: "¿Estás dispuesto/a a sacar a tu mascota a pasear todos los días?",
    opciones: [
      { value: "siGusto", label: "Sí, con gusto" },
      { value: "siNecesario", label: "Sí, si es necesario" },
      { value: "algunosDias", label: "Solo algunos días" },
      { value: "noPreferencia", label: "Preferiría que no fuera necesario" },
    ],
  },
  {
    nombre: "nivelIndependencia",
    label: "¿Qué nivel de independencia prefieres en una mascota?",
    opciones: [
      { value: "pegajosa", label: "Que me siga a todos lados" },
      { value: "equilibrado", label: "Que tenga ratos conmigo y ratos sola" },
      { value: "tranquila", label: "Tranquila y autosuficiente" },
      { value: "independiente", label: "Totalmente independiente" },
    ],
  },
];

const TestPersonalidad = ({ onSubmitTest }) => {
  //   const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSubmitTest(data);
  };

  const { register, handleSubmit, getValues } = useForm();
  const [pasoActual, setPasoActual] = useState(0);

  const avanzar = () => setPasoActual((prev) => prev + 1);
  const retroceder = () => setPasoActual((prev) => prev - 1);

  const enviarFormulario = () => {
    const data = getValues();
    onSubmitTest(data);
  };

  const pregunta = preguntas[pasoActual];

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(enviarFormulario)}>
        <label className="block font-medium mb-2">{pregunta.label}</label>
        <select
          {...register(pregunta.nombre)}
          className="w-full p-2 border rounded"
        >
          {pregunta.opciones.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>

        <div className="flex justify-between mt-4">
          {pasoActual > 0 && (
            <button
              type="button"
              onClick={retroceder}
              className="px-4 py-2 bg-gray-300 text-black rounded"
            >
              Atrás
            </button>
          )}

          {pasoActual < preguntas.length - 1 ? (
            <button
              type="button"
              onClick={avanzar}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Finalizar Test
            </button>
          )}
        </div>
      </form>

      {/* Opcional: indicador de progreso */}
      <div className="text-center text-sm text-gray-500 mt-2">
        Pregunta {pasoActual + 1} de {preguntas.length}
      </div>
    </div>
  );
};

export default TestPersonalidad;

// <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// <div>
//   <label>¿Te consideras una persona…?</label>
//   <select {...register("personalidad")}>
//     <option value="tranquilo">Tranquilo/a</option>
//     <option value="activo">Activo/a</option>
//     <option value="sociable">Sociable</option>
//     <option value="reservado">Reservado/a</option>
//   </select>
// </div>

// <div>
//   <label>¿Cómo prefieres pasar tu tiempo libre?</label>
//   <select {...register("tiempoLibre")}>
//     <option value="casa">En casa, viendo series o leyendo</option>
//     <option value="aireLibre">Haciendo ejercicio o saliendo</option>
//     <option value="amistades">Con amigos o familia</option>
//     <option value="mixto">Un poco de todo</option>
//   </select>
// </div>

// <div>
//   <label>¿Qué tanto tiempo podrías dedicar a una mascota al día?</label>
//   <select {...register("tiempoMascota")}>
//     <option value="menos1h">Menos de 1 hora</option>
//     <option value="1a3h">1 a 3 horas</option>
//     <option value="mas3h">Más de 3 horas</option>
//   </select>
// </div>
// {/* NUEVAS PREGUNTAS */}
// <div>
//   <label>
//     ¿Qué harías si tu mascota enferma y requiere atención médica costosa?
//   </label>
//   <select {...register("compromisoVeterinario")}>
//     <option value="sinDudarlo">
//       Buscaría atención veterinaria sin dudarlo
//     </option>
//     <option value="enCasa">Intentaría ayudarla en casa</option>
//     <option value="evaluariaCosto">
//       Evaluaría si puedo permitírmelo
//     </option>
//     <option value="buscariaAyuda">
//       Buscaría ayuda, pero no me comprometería
//     </option>
//   </select>
// </div>

// <div>
//   <label>¿Qué tipo de relación buscas con tu mascota?</label>
//   <select {...register("relacionDeseada")}>
//     <option value="companeraConstante">Compañía constante</option>
//     <option value="activa">Compañero de juegos</option>
//     <option value="tranquila">Alguien tranquilo</option>
//     <option value="indeciso">No estoy seguro/a aún</option>
//   </select>
// </div>

// <div>
//   <label>
//     Si tu mascota tiene problemas de comportamiento, ¿cómo actuarías?
//   </label>
//   <select {...register("manejoConducta")}>
//     <option value="profesional">Buscaría ayuda profesional</option>
//     <option value="paciencia">Intentaría educarla con paciencia</option>
//     <option value="dudas">Pediría consejos, pero no me comprometo</option>
//     <option value="noTolero">No lo toleraría</option>
//   </select>
// </div>

// <div>
//   <label>¿Qué tanto te molestan los ruidos o actividad constante?</label>
//   <select {...register("toleranciaRuido")}>
//     <option value="nada">Me encanta el movimiento</option>
//     <option value="bien">Lo tolero bien</option>
//     <option value="prefieroTranquilo">Prefiero tranquilidad</option>
//     <option value="molesta">Me incomoda mucho</option>
//   </select>
// </div>

// <div>
//   <label>
//     ¿Qué tan dispuesto estás a convivir con desorden o pelos por parte de
//     una mascota?
//   </label>
//   <select {...register("toleranciaDesorden")}>
//     <option value="sinProblema">No tengo problema</option>
//     <option value="tolero">Me incomoda un poco</option>
//     <option value="prefieroLimpio">Prefiero mantener todo limpio</option>
//     <option value="noGusta">No me gusta nada</option>
//   </select>
// </div>

// <div>
//   <label>¿Cómo describirías tu carácter?</label>
//   <select {...register("caracter")}>
//     <option value="empatico">Paciente y empático/a</option>
//     <option value="entusiasta">Energético y entusiasta</option>
//     <option value="estructurado">Práctico y estructurado</option>
//     <option value="sensible">Sensible e intuitivo</option>
//   </select>
// </div>

// <div>
//   <label>
//     ¿Estás dispuesto/a a sacar a tu mascota a pasear todos los días?
//   </label>
//   <select {...register("paseosDiarios")}>
//     <option value="siGusto">Sí, con gusto</option>
//     <option value="siNecesario">Sí, si es necesario</option>
//     <option value="algunosDias">Solo algunos días</option>
//     <option value="noPreferencia">
//       Preferiría que no fuera necesario
//     </option>
//   </select>
// </div>

// <div>
//   <label>¿Qué nivel de independencia prefieres en una mascota?</label>
//   <select {...register("nivelIndependencia")}>
//     <option value="pegajosa">Que me siga a todos lados</option>
//     <option value="equilibrado">
//       Que tenga ratos conmigo y ratos sola
//     </option>
//     <option value="tranquila">Tranquila y autosuficiente</option>
//     <option value="totalmenteIndependiente">
//       Totalmente independiente
//     </option>
//   </select>
// </div>

// <button
//   type="submit"
//   className="bg-blue-600 text-white px-4 py-2 rounded"
// >
//   Guardar Test
// </button>
// </form>
