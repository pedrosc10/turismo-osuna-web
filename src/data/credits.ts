/**
 * Créditos de las fotografías. Una entrada por archivo de src/assets/photos.
 * Al añadir una foto: descárgala a src/assets/photos/, añade aquí su entrada y su texto
 * alternativo en los tres archivos de src/i18n (clave `alt`).
 *
 * `changes`: 'grade' = recorte y ajuste de color; 'duotone' = conversión a duotono.
 * 'none' = sin cambios. Se muestra traducido en la página de créditos.
 */
export interface Credit {
  file: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
  changes: 'none' | 'grade' | 'duotone';
}

export const credits: Credit[] = [
  { file: 'colegiata-exterior.jpg', title: "Collegiate church, Osuna (5133637526).jpg", author: "Aapo Haapanen (Tampere, Finlandia)", license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0', source: "https://commons.wikimedia.org/wiki/File:Collegiate_church,_Osuna_(5133637526).jpg", changes: 'grade' },
  { file: 'colegiata-portada.jpg', title: "Colegiata de Osuna. Portada.jpg", author: "José Luis Filpo Cabana", license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', source: "https://commons.wikimedia.org/wiki/File:Colegiata_de_Osuna._Portada.jpg", changes: 'grade' },
  { file: 'colegiata-panteon.jpg', title: "Colegiata de Osuna. Panteón Ducal.jpg", author: "José Luis Filpo Cabana", license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', source: "https://commons.wikimedia.org/wiki/File:Colegiata_de_Osuna._Pante%C3%B3n_Ducal.jpg", changes: 'grade' },
  { file: 'colegiata-iglesia.jpg', title: "Colegiata de Osuna. Iglesia.jpg", author: "José Luis Filpo Cabana", license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', source: "https://commons.wikimedia.org/wiki/File:Colegiata_de_Osuna._Iglesia.jpg", changes: 'grade' },
  { file: 'colegiata-techumbre.jpg', title: "Techumbre de la sala capitular de la Colegiata de Osuna.jpg", author: "Jl FilpoC", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Techumbre_de_la_sala_capitular_de_la_Colegiata_de_Osuna.jpg", changes: 'grade' },
  { file: 'universidad-fachada.jpg', title: "Universidad de Osuna 01.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Universidad_de_Osuna_01.jpg", changes: 'grade' },
  { file: 'universidad-patio.jpg', title: "Universidad de Osuna, patio.jpg", author: "José Luis Filpo Cabana", license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', source: "https://commons.wikimedia.org/wiki/File:Universidad_de_Osuna,_patio.jpg", changes: 'grade' },
  { file: 'encarnacion-claustro.jpg', title: "Claustro del convento de la encarnación 2016001.jpg", author: "Anual", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Claustro_del_convento_de_la_encarnaci%C3%B3n_2016001.jpg", changes: 'grade' },
  { file: 'encarnacion-azulejo.jpg', title: "Azulejo sevillano del siglo XVIII del monasterio de la Encarnación de Osuna.jpg", author: "Marbregal", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Azulejo_sevillano_del_siglo_XVIII_del_monasterio_de_la_Encarnaci%C3%B3n_de_Osuna.jpg", changes: 'grade' },
  { file: 'san-pedro-gomera.jpg', title: "Palacio de los Condes de la Gomera 01.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Palacio_de_los_Condes_de_la_Gomera_01.jpg", changes: 'grade' },
  { file: 'san-pedro-calle.jpg', title: "Calle San Pedro Osuna.JPG", author: "Grez", license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: "https://commons.wikimedia.org/wiki/File:Calle_San_Pedro_Osuna.JPG", changes: 'grade' },
  { file: 'casa-de-los-torres.jpg', title: "Casa de los Torres.jpg", author: "Graeme Churchard (Bristol, Reino Unido)", license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0', source: "https://commons.wikimedia.org/wiki/File:Casa_de_los_Torres.jpg", changes: 'grade' },
  { file: 'canteras-relieves.jpg', title: "Coto de las Canteras 09.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Coto_de_las_Canteras_09.jpg", changes: 'grade' },
  { file: 'canteras-interior.jpg', title: "Coto de las Canteras 07.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Coto_de_las_Canteras_07.jpg", changes: 'grade' },
  { file: 'tumbas-romanas.jpg', title: "Tumbas romanas Osuna.jpg", author: "Cayetano", license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0', source: "https://commons.wikimedia.org/wiki/File:Tumbas_romanas_Osuna.jpg", changes: 'grade' },
  { file: 'plaza-toros-gradas.jpg', title: "Plaza de toros de Osuna 01.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Plaza_de_toros_de_Osuna_01.jpg", changes: 'grade' },
  { file: 'plaza-toros-panoramica.jpg', title: "Plaza de toros de Osuna 02.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Plaza_de_toros_de_Osuna_02.jpg", changes: 'grade' },
  { file: 'tejados.jpg', title: "Toits de Osuna Espagne.JPG", author: "Grez", license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: "https://commons.wikimedia.org/wiki/File:Toits_de_Osuna_Espagne.JPG", changes: 'grade' },
  { file: 'aldaba.jpg', title: "Aldaba. Una puerta en Osuna.jpg", author: "Consuelo Fernandez", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Aldaba._Una_puerta_en_Osuna.jpg", changes: 'grade' },
  { file: 'plaza-mayor.jpg', title: "Osuna. Plaza Mayor.jpg", author: "Gonzius de madrid", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Osuna._Plaza_Mayor.jpg", changes: 'grade' },
  { file: 'vista-panoramica.jpg', title: "Vista de Osuna.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Vista_de_Osuna.jpg", changes: 'grade' },
  { file: 'nocturna-duotono.jpg', title: "Osuna.jpg", author: "CarlosVdeHabsburgo", license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: "https://commons.wikimedia.org/wiki/File:Osuna.jpg", changes: 'duotone' },
];
