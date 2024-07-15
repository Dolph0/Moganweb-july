// import Blog from "@/components/Blog/Blog";
// import Suggestion from "@/components/Blog/Suggestion";

// export default function Home() {
//   return (
//     <>
//       <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//         <div className="pt-6 md:pt-12">
//           <Blog />
//           <Suggestion />
//         </div>
//       </div>
//     </>
//   );
// }

// import Image from "next/image";

// export default function PageCopy() {
//   return (
//     <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-6 md:pt-12">
//       <Image
//         src="/images/blog/blog-img-2.png"
//         alt="Blog Image 2"
//         className="w-full object-center object-cover"
//         height="500"
//         width="600"
//       />
//       <article className="prose max-w-full prose-p:text-sm md:prose-p:text-lg py-14 prose-h2:text-center prose-h2:text-xl prose-h2:font-extrabold md:prose-h2:text-[42px]">
//         <h2>Bienvenida al nuevo personal de las playas</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//       </article>
//     </div>
//   );
// }

import Caraousal from "@/components/HomePage/Caraousal.1";
import Image from "next/image";

export default function PageCopy() {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-6 md:pt-12">
      <Caraousal />

      <article className="prose max-w-full prose-p:text-sm md:prose-p:text-lg py-14 prose-h2:text-center prose-h2:text-xl prose-h2:font-extrabold md:prose-h2:text-[42px]">
        <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
          Onalia Bueno da la bienvenida al nuevo personal de las playas
        </h2>
        <Image
          src="/onalia bienvenida.jpeg"
          alt="Blog Image 1"
          className="rounded-3xl mx-auto"
          height="500"
          width="600"
        />

        <p>
          La alcaldesa de Mogán, Onalia Bueno, ha dado la bienvenida a la nueva
          plantilla de profesionales que realizarán las funciones de salvamento,
          alquiler de sombrillas y hamacas y mantenimiento en las playas que el
          Ayuntamiento tiene concesionadas por la Demarcación de Costas de
          Canarias. Un total de 33 personas que se terminaron de incorporar el
          pasado viernes 27 de enero, fecha en la que el Ayuntamiento inició la
          gestión directa de los servicios de temporada en las playas.
          <br />
          <br /> Junto a Bueno, participaron de este encuentro el concejal de
          Pesca, Víctor Gutiérrez, así como Eduardo Álamo, gerente de Mogán
          Gestión Municipal, entidad de titularidad pública local que gestiona
          la prestación de los servicios de temporada –salvamento, alquiler de
          hamacas y sombrillas– en las playas de Mogán, Las Marañuelas, Costa
          Alegre, Taurito, El Cura, Aquamarina, Patalavaca, Puerto Rico y El
          Perchel.
          <br />
          <br /> La alcaldesa deseó suerte al nuevo personal, solicitándoles
          igualmente entrega y profesionalidad. Se trata de 11 socorristas y un
          coordinador de Salvamento, 18 hamaqueros y un inspector de este
          servicio así como 2 trabajadores de mantenimiento.
          <br />
          <br />
          “Desempeñan una labor esencial velando por la seguridad de los
          bañistas”, dijo refiriéndose a los socorristas, que han participado en
          un proceso de selección en el que, además de aportar la documentación
          que acredita su cualificación profesional, han superado una prueba
          teórica, física y de primeros auxilios. <br />
          <br />
          Todos ellos son vecinos del municipio que han participado, bien en el
          Programa de Formación con el Empleo-Garantía Juvenil (PFAE-GJ)
          Vigilancia Acuática, financiado por el Servicio Canario de Empleo,
          Fondo Social Europeo y Ayuntamiento de Mogán, bien en el curso de
          socorrismo sufragado en su totalidad por el Consistorio moganero.
          <br />
          <br /> “Dentro de dos semanas se volverán a celebrar pruebas de
          selección por Mogán Gestión Municipal, porque necesitamos más
          socorristas”, ha señalado Bueno, informando que el alumnado que acaba
          de finalizar el PFAE-GJ Costa Segura optará a esta nueva convocatoria,
          que consta de otras 12 plazas. “Posiblemente sean futuros contratados
          por la entidad pública”, ha apuntado.
          <br />
          <br /> La primera edil asegura que es prioridad “dar a los vecinos y
          vecinas, sobre todo a los jóvenes, la oportunidad después de formarse
          a trabajar en el municipio”, y con ello “prestar un servicio de
          calidad en las playas, como se está empezando a hacer desde que
          estamos al frente de los servicios”. En definitiva “dar lo mejor para
          alegrar a residentes y turistas”, ha dicho.
          <br />
          <br /> Un ejemplo de esto quedó manifiesto a las pocas horas de
          comenzar la prestación de los servicios de salvamento en las playas el
          sábado 28 de enero, cuando un joven socorrista procedente del PFAE
          salvó la vida de un un usuario en la playa de Mogán. También ayer
          mismo. Un socorrista, con ayuda del hamaquero, lograron socorrer a una
          mujer que cayó del espigón de la playa de Puerto Rico al barranco. La
          señora, que no presentaba gravedad, fue trasladada la centro de salud.
          <br />
          <br /> Bueno también se dirigió a los hamaqueros y al personal de
          mantenimiento. “Su trabajo es fundamental para que las personas
          usuarias de nuestras playas disfruten de una experiencia agradable.
          Son también parte de nuestra imagen como destino, y deben ser
          conscientes de ello”, ha afirmado.
          <br />
          <br /> El Consistorio explota los servicios de temporada, pero no los
          acuáticos, cuya gestión la seguirá llevando a cabo una entidad privada
          adjudicada mediante concurso público. Se estima que con el actual
          modelo de gestión directa se generen ingresos a las arcas municipales
          de más de cuatro millones de euros en los próximos cuatro años.
        </p>
      </article>
    </div>
  );
}
