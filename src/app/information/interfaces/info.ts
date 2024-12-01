export interface Info {
  nombre: string;
  fecha_creacion: string;
  direccion: Direccion;
  direccion_completa: DireccionCompleta;
  contacto: Contacto;
  redes_sociales: RedesSociales;
  telefonos: Telefonos;
  sitio_web: string;
}

export interface Direccion {
  principal: Correspondencia;
  correspondencia: Correspondencia;
}

export interface DireccionCompleta {
  calle: string;
  ciudad: string;
}

export interface Contacto {
  correo: string;
  sitio_web: string;
  telefonos: Telefonos;
}

export interface Telefonos {
  fijo: string;
  celular: string;
  fax?: string;
}

export interface RedesSociales {
  instagram: string;
  linkedin: string;
}

export interface Correspondencia {
  calle: string;
  ciudad: string;
}
