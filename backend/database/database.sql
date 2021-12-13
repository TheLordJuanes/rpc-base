Create table pais
(
    codigo_pais VARCHAR(20),
    nombre_pais VARCHAR(20) NOT NULL,
    PRIMARY KEY (codigo_pais)
);

Create table ciudad
(
    codigo_ciudad VARCHAR(20),
    nombre_ciudad VARCHAR(20) NOT NULL,
    codigo_pais   VARCHAR(20),
    PRIMARY KEY (codigo_ciudad),
    FOREIGN KEY (codigo_pais) REFERENCES pais (codigo_pais)
);

Create table direccion
(
    codigo_direccion VARCHAR(20),
    direccion        VARCHAR(100),
    codigo_ciudad    VARCHAR(20),
    PRIMARY KEY (codigo_direccion),
    FOREIGN KEY (codigo_ciudad) REFERENCES ciudad (codigo_ciudad)
);

Create table tipo_institucion
(
    codigo_tipo_institucion VARCHAR(20),
    tipo_institucion        VARCHAR(50),
    PRIMARY KEY (codigo_tipo_institucion)
);

Create table institucion
(
    codigo_institucion      VARCHAR(50) NOT NULL,
    nombre_institucion      VARCHAR(100),
    codigo_tipo_institucion VARCHAR(20),
    codigo_direccion        VARCHAR(20),
    PRIMARY KEY (codigo_institucion),
    FOREIGN KEY (codigo_direccion) REFERENCES direccion (codigo_direccion),
    FOREIGN KEY (codigo_tipo_institucion) REFERENCES tipo_institucion (codigo_tipo_institucion)
);

Create table rol
(
    codigo_rol  VARCHAR(20),
    nombre      VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100),
    PRIMARY KEY (codigo_rol)
);

Create table usuario
(
    username           VARCHAR(20) UNIQUE,
    nombre             VARCHAR(50) NOT NULL,
    apellido           VARCHAR(50) NOT NULL,
    descripcion        VARCHAR(300),
    codigo_institucion VARCHAR(50),
    codigo_rol         VARCHAR(20),
    contraseña         VARCHAR(20) NOT NULL,
    codigo_pais        VARCHAR(100),
    correoUser         VARCHAR(100),
    PRIMARY KEY (correoUser),
    FOREIGN KEY (codigo_institucion) REFERENCES institucion (codigo_institucion),
    FOREIGN KEY (codigo_rol) REFERENCES rol (codigo_rol),
    FOREIGN KEY (codigo_pais) REFERENCES pais (codigo_pais)
);

Create table competencia
(
    codigo_competencia   VARCHAR(20),
    fecha_finalizacion   TIMESTAMP   NOT NULL,
    fecha_inicio         TIMESTAMP   NOT NULL,
    fecha_fin_ins        TIMESTAMP   NOT NULL,
    fecha_inicio_ins     TIMESTAMP   NOT NULL,
    nombre               VARCHAR(50) NOT NULL,
    CantidadMaxPorEquipo Integer,
    CantidadMinPorEquipo Integer,
    PRIMARY KEY (codigo_competencia)
);

Create table equipo(
codigo_equipo SERIAL,
nombre VARCHAR(50) NOT NULL,
ownerEmail VARCHAR(100),
PRIMARY KEY(codigo_equipo),
FOREIGN KEY (correoUser) REFERENCES usuario(correoUser)
);

Create table credencial
(
    codigo_credencial VARCHAR(20),
    correo            VARCHAR(100) NOT NULL,
    token             VARCHAR(200) NOT NULL,
    username          VARCHAR(20),
    PRIMARY KEY (codigo_credencial, username),
    FOREIGN KEY (username) REFERENCES usuario (username)
);

Create table permiso
(
    codigo_permiso VARCHAR(20),
    entidad        VARCHAR(20)   NOT NULL,
    c              NUMERIC(1, 0) NOT NULL,
    r              NUMERIC(1, 0) NOT NULL,
    u              NUMERIC(1, 0) NOT NULL,
    d              NUMERIC(1, 0) NOT NULL,
    PRIMARY KEY (codigo_permiso)
);


Create table usuario_equipo
(
    codigo_equipo VARCHAR(20),
    correoUser    VARCHAR(100),
    PRIMARY KEY (codigo_equipo, correoUser),
    FOREIGN KEY (correoUser) REFERENCES usuario (correoUser),
    FOREIGN KEY (codigo_equipo) REFERENCES equipo (codigo_equipo)
);

Create table equipo_competencia
(
    codigo_equipo      VARCHAR(20),
    codigo_competencia VARCHAR(20),
    puntaje            INTEGER DEFAULT 0,
    PRIMARY KEY (codigo_equipo, codigo_competencia),
    FOREIGN KEY (codigo_equipo) REFERENCES equipo (codigo_equipo),
    FOREIGN KEY (codigo_competencia) REFERENCES competencia (codigo_competencia)
);

Create table rol_permiso
(
    codigo_permiso VARCHAR(20),
    codigo_rol     VARCHAR(20),
    PRIMARY KEY (codigo_permiso, codigo_rol),
    FOREIGN KEY (codigo_permiso) REFERENCES permiso (codigo_permiso),
    FOREIGN KEY (codigo_rol) REFERENCES rol (codigo_rol)
);

Create table es_sede
(
    codigo_institucion VARCHAR(50),
    codigo_competencia VARCHAR(20),
    PRIMARY KEY (codigo_institucion, codigo_competencia),
    FOREIGN KEY (codigo_institucion) REFERENCES institucion (codigo_institucion),
    FOREIGN KEY (codigo_competencia) REFERENCES competencia (codigo_competencia)
);