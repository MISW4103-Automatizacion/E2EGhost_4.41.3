describe("Escenario  21, Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member y validar que aparezca en la lista de members, sale de la aplicacion.", () => {
  const loginUser = require("../funcionalidades/ingresarLogin");
  const registerUser = require("../funcionalidades/registrarUsuario");
  const salirAplicacion = require("../funcionalidades/salirAplicacion");

  const memberAplicacion = require("../funcionalidades/memberAplication");


  require("cypress-plugin-tab");

  let membersJson = require("../../dataPoolMemberFull.json");

  const { faker } = require("@faker-js/faker");
  let mail;
  let note;
  let name;
  let versionGhost;
  let label;
  let contador = 0;
  let isSubscribe;
  let email;
  let e_mail;

  let new_mail;
  let new_note;
  let new_name;

  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/");

    cy.get("main").then(($main) => {
      if ($main.find("form").length > 0) {
        if ($main.find("form")[0].id == "setup") {
          registerUser.registerUser(
            cy,
            Cypress.env("NAMEBLOG"),
            Cypress.env("FULLNAME"),
            Cypress.env("USER"),
            Cypress.env("PASSWORD")
          );
          cy.screenshot("Escenario1_registrarUsuario_");
          salirAplicacion.salirAplicacion(cy);
        }
      }
    });
    loginUser.loginUser(cy, Cypress.env("USER"), Cypress.env("PASSWORD"));
    cy.screenshot("Escenario1_ingresoLogin_");
   
  });


  contador+=1;
  it(`Escenario ${contador} - Crear un member`, () => {
    if (Cypress.env("isRegresionVisual") != true) {
      mail = faker.internet.email();
      name = faker.name.findName();
      label = faker.company.bs();
      note = faker.company.bs();
      versionGhost = Cypress.env("VersionEnPrueba");
    } else {
      mail = "pruebaRegresion_member@regresion.com.co";
      name = "PruebaMemberUser";
      label = "Label";
      note = "Prueba notas usuario";
    }

    memberAplicacion.memberAplicacion(cy);
    memberAplicacion.memberAplicacionCrear(cy, name, mail, note, label, true);
    cy.screenshot(`Escenario ${contador} Prueba Positiva crear member`);
    memberAplicacion.memberAplicacion(cy);
    memberAplicacion.memberAplicacionBuscar(cy, mail, true);
    memberAplicacion.memberAplicacion(cy);
    memberAplicacion.memberAplicacionEliminar(cy);
    salirAplicacion.salirAplicacion(cy);
  });


  contador+=1;
  it(`Escenario ${contador} Crear un member con campos vacios`, () => {

    memberAplicacion.memberAplicacion(cy);
    memberAplicacion.memberAplicacionCrear(cy, membersJson[0].name, membersJson[0].email, membersJson[0].note,membersJson[0].label,membersJson[0].isSubscribe)
    cy.screenshot(`Escenario ${contador} Prueba Negativa Crear un member con campos vacios`);
    salirAplicacion.salirAplicacion(cy);
  });


  contador+=1;
  it(`Escenario ${contador} Crear un member con subscribe inactivo sin datos (nombre, email.label y note)`, () => {

    memberAplicacion.memberAplicacion(cy);
    memberAplicacion.memberAplicacionCrear(cy, membersJson[1].name, membersJson[1].email, membersJson[1].note,membersJson[1].label,membersJson[1].isSubscribe)
    cy.screenshot(`Escenario ${contador} Prueba Negativa Crear un member con subscribe inactivo sin datos (nombre, email.label y note)`);
    salirAplicacion.salirAplicacion(cy);
  });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo name, Subscribe inactivo, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[2].name, membersJson[2].email, membersJson[2].note,membersJson[2].label,membersJson[2].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo label y Subscribe inactivo, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[3].name, membersJson[3].email, membersJson[3].note,membersJson[3].label,membersJson[3].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo note y Subscribe inactivo, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[4].name, membersJson[4].email, membersJson[4].note,membersJson[4].label,membersJson[4].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo name, label y Subscribe inactivo, note vacio, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[5].name, membersJson[5].email, membersJson[5].note,membersJson[5].label,membersJson[5].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo label,note y Subscribe inactivo, name vacio, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[6].name, membersJson[6].email, membersJson[6].note,membersJson[6].label,membersJson[6].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo name,note y Subscribe inactivo, label vacio, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[7].name, membersJson[7].email, membersJson[7].note,membersJson[7].label,membersJson[7].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campo name(incorrecto),label, note y Subscribe inactivo, email vacío`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[8].name, membersJson[8].email, membersJson[8].note,membersJson[8].label,membersJson[8].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro solamente en campo name y Subscribe inactivo`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[9].name, membersJson[9].email, membersJson[9].note,membersJson[9].label,membersJson[9].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro solamente en campo label y Subscribe inactivo`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[10].name, membersJson[10].email, membersJson[10].note,membersJson[10].label,membersJson[10].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro solamente en campo note y Subscribe inactivo`, () => {

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[11].name, membersJson[11].email, membersJson[11].note,membersJson[11].label,membersJson[11].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campos name, label y Subscribe inactivo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[12].name, membersJson[12].email, membersJson[12].note,membersJson[12].label,membersJson[12].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campos label,note y Subscribe inactivo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[13].name, membersJson[13].email, membersJson[13].note,membersJson[13].label,membersJson[13].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campos name,note y Subscribe inactivo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[14].name, membersJson[14].email, membersJson[14].note,membersJson[14].label,membersJson[14].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en campos name,note,label y Subscribe inactivo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[15].name, membersJson[15].email, membersJson[15].note,membersJson[15].label,membersJson[15].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en mail (datos incorrectos) y Subscribe activo demás datos vacíos`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[16].name, membersJson[16].email, membersJson[16].note,membersJson[16].label,membersJson[16].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[17].name, membersJson[17].email, membersJson[17].note,membersJson[17].label,membersJson[17].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en label, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[18].name, membersJson[18].email, membersJson[18].note,membersJson[18].label,membersJson[18].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en note, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[19].name, membersJson[19].email, membersJson[19].note,membersJson[19].label,membersJson[19].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1}  Crear un member con registro en name, label, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[20].name, membersJson[20].email, membersJson[20].note,membersJson[20].label,membersJson[20].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en label, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[21].name, membersJson[21].email, membersJson[21].note,membersJson[21].label,membersJson[21].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1}  Crear un member con registro en name, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[22].name, membersJson[22].email, membersJson[22].note,membersJson[22].label,membersJson[22].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // // ISSUE
  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name,label, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[23].name, membersJson[23].email, membersJson[23].note,membersJson[23].label,membersJson[23].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1}  Crear un member con registro en mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[24].name, membersJson[24].email, membersJson[24].note,membersJson[24].label,membersJson[24].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // // ISSUE
  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[25].name, membersJson[25].email, membersJson[25].note,membersJson[25].label,membersJson[25].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1}  Crear un member con registro en label, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[26].name, membersJson[26].email, membersJson[26].note,membersJson[26].label,membersJson[26].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // // ISSUE
  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en note, mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[27].name, membersJson[27].email, membersJson[27].note,membersJson[27].label,membersJson[27].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name,label mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[28].name, membersJson[28].email, membersJson[28].note,membersJson[28].label,membersJson[28].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en label,note mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[29].name, membersJson[29].email, membersJson[29].note,membersJson[29].label,membersJson[29].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name,note mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[30].name, membersJson[30].email, membersJson[30].note,membersJson[30].label,membersJson[30].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // //ISSUE
  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name,label, note mail (datos incorrectos) y Subscribe activo`, () => {
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, membersJson[31].name, membersJson[31].email, membersJson[31].note,membersJson[31].label,membersJson[31].isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con registro en name mayor a 191 caracteres`, () => {

  //   name = faker.lorem.paragraphs();
  //   mail = faker.internet.email();
  //   label = faker.company.bs();
  //   note = faker.company.bs();
  //   isSubscribe= faker.random.boolean();
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, name, mail, note,label,isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con un registro en note mayor a 500 caracteres`, () => {

  //   name = faker.name.findName();
  //   mail = faker.internet.email();
  //   label = faker.company.bs();
  //   note = faker.lorem.paragraphs();
  //   isSubscribe= faker.random.boolean();
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, name, mail, note,label,isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con un registro en note mayor a 500 caracteres y name mayor a 191 caracteres`, () => {

  //   name = faker.lorem.paragraphs();
  //   mail = faker.internet.email();
  //   label = faker.company.bs();
  //   note = faker.lorem.paragraphs();
  //   isSubscribe= faker.random.boolean();
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, name, mail, note,label,isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });

  
  // contador+=1;
  // it(`Escenario ${contador+1} Crear un member con un registro en mail mayor a 64 caracteres o números con dominio válido`, () => {

  //   name = faker.lorem.paragraphs();
  //   mail = faker.lorem.sentences();
  //   e_mail = mail.split(" ").join("");
  //   email = e_mail.split(".").join("");
  //   label = faker.company.bs();
  //   note = note = faker.company.bs();
  //   isSubscribe= faker.random.boolean();
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, name, email.concat('@dominio.com'), note,label,isSubscribe)
  //   salirAplicacion.salirAplicacion(cy);
  // });





  // it("Eliminar un member ", () => {
  //   if (Cypress.env("isRegresionVisual") != true) {
  //     mail = faker.internet.email();
  //     name = faker.name.findName();
  //     note = faker.company.bs();
  //   } else {
  //     mail = "pruebaRegresion_member@regresion.com.co";
  //     name = "PruebaMemberUser";
  //     note = "Prueba notas usuario";
  //   }

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, name, mail, note);
  //   memberAplicacion.memberAplicacion(cy);
  //   // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)

  //   memberAplicacion.memberAplicacionEliminar(cy);

  //   // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, false)
  //   salirAplicacion.salirAplicacion(cy);
  // });



  // it("Modificar  un member", () => {
  //   if (Cypress.env("isRegresionVisual") != true) {
  //     mail = faker.internet.email();
  //     name = faker.name.findName();
  //     note = faker.company.bs();

  //     new_mail = faker.internet.email();
  //     new_name = faker.name.findName();
  //     new_note = faker.company.bs();
  //   } else {
  //     mail = "pruebaRegresion_member@regresion.com.co";
  //     name = "PruebaMemberUser";
  //     note = "Prueba notas usuario";

  //     new_mail = "changed_pruebaRegresion_member@regresion.com.co";
  //     new_name = "ChangedPruebaMemberUser";
  //     new_note = "Prueba notas usuario cambiado";
  //   }

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(cy, name, mail, note);
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionModificar(
  //     cy,
  //     new_name,
  //     new_mail,
  //     new_note
  //   );

  //   // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
  //   memberAplicacion.memberAplicacionEliminar(cy);
  //   salirAplicacion.salirAplicacion(cy);
  // });



  // it("crear un member unsubscribe", () => {
  //   if (Cypress.env("isRegresionVisual") != true) {
  //     mail = faker.internet.email();
  //     name = faker.name.findName();
  //     note = faker.company.bs();
  //   } else {
  //     mail = "pruebaRegresion_member@regresion.com.co";
  //     name = "PruebaMemberUser";
  //     note = "Prueba notas usuario";
  //   }

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrearUnsubscribe(cy, name, mail, note);
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionBuscar(cy, mail, true);
  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionEliminar(cy);
  //   salirAplicacion.salirAplicacion(cy);
  // });




  // it("crear un member", () => {
  //   if (Cypress.env("isRegresionVisual") != true) {
  //     mail = faker.internet.email();
  //     name = faker.name.findName();
  //     note = faker.company.bs();
  //     versionGhost = Cypress.env("VersionEnPrueba");
  //   } else {
  //     mail = "pruebaRegresion_member@regresion.com.co";
  //     name = "PruebaMemberUser";
  //     note = "Prueba notas usuario";
  //   }

  //   cy.screenshot(
  //     "01-Ghost_" +
  //       Cypress.env("VersionEnPrueba") +
  //       "_Escenario21_crear_member_ingreso"
  //   );

  //   memberAplicacion.memberAplicacion(cy);
  //   memberAplicacion.memberAplicacionCrear(
  //     cy,
  //     membersJson[i].name,
  //     membersJson[i].email,
  //     membersJson[i].note,
  //     membersJson[i].label,
  //     membersJson[i].isSubscribe
  //   );
  //   salirAplicacion.salirAplicacion(cy);
  // });


});