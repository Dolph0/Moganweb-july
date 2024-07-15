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
import Caraousal from "@/components/HomePage/Caraousal.1";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-6 md:pt-12">
      <Caraousal />

      <article className="prose max-w-full prose-p:text-sm md:prose-p:text-lg py-14 prose-h2:text-center prose-h2:text-xl prose-h2:font-extrabold md:prose-h2:text-[42px]">
        <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
          MOGÁN YA GESTIONA DE FORMA DIRECTA LAS PLAYAS QUE TIENE CONCESIONADAS
        </h2>
        <Image
          src="/playas concesionadas.jpg"
          alt="Blog Image 1"
          className="rounded-3xl mx-auto"
          height="500"
          width="600"
        />

        <p>
          El Ayuntamiento de Mogán ha instalado este viernes nuevas hamacas y
          sombrillas en la playa de Mogán, dando comienzo con ello a la gestión
          directa de los servicios de temporada de esta y las otras seis playas
          para las que ostenta la autorización correspondiente: Las Marañuelas,
          Costa Alegre, Taurito, El Cura, Aquamarina y Patalavaca. Estas se
          suman a la explotación directa que desde verano también realiza en las
          playas de Puerto Rico y El Perchel.
          <br /> <br />
          La Demarcación de Costas de Canarias otorgó al Consistorio la
          concesión de la explotación hasta 2026, aprobando el pasado mes de
          mayo en sesión plenaria prestar los servicios mediante la entidad de
          titularidad pública local Mogán Gestión Municipal y no por una entidad
          privada, como se había venido haciendo hasta el momento.
          <br />
          <br /> La prestación de los servicios de temporada – hamacas,
          sombrillas y salvamento– por la empresa privada se ha prorrogado hasta
          hoy, fecha en la que el Ayuntamiento está completamente preparado para
          asumirlos. Desde primera hora operarios municipales y de Mogán Gestión
          Municipal trabajan en la puesta a punto de la playa de Mogán colocando
          nuevas hamacas, sombrillas y pasarelas en el arenal. La actuación
          marca el comienzo de la gestión por parte del Consistorio en esta y el
          resto de playas que tiene concesionadas.
          <br /> <br />
          Este sábado, 28 de enero, también estará a pleno rendimiento el
          servicio de salvamento en cada una, y el pago por el alquiler de
          sombrillas y hamacas solo se podrá realizar por TPV. <br />
          <br />
          Este modelo de gestión directa e más eficiente y sostenible, y se
          estima genere ingresos a las arcas municipales de más de cuatro
          millones de euros en los próximos cuatro años. La Administración local
          excluye de la prestación los servicios deportivos, cuya gestión la
          seguirá llevando a cabo una entidad privada adjudicada mediante
          concurso público.
        </p>
      </article>
    </div>
  );
}
